define(["require", "exports", "./state/stateDirectory", "./electronHelper", "./phoneGapHelper"], function (require, exports, stateDirectory_1, electronHelper_1, phoneGapHelper_1) {
    "use strict";
    var PlotterShellModel = (function () {
        function PlotterShellModel(fileManager) {
            this.fileManager = fileManager;
            this.electronHelper = new electronHelper_1.ElectronHelper();
            this.phoneGapHelper = new phoneGapHelper_1.PhoneGapHelper();
            this.stateDirectoryName = 'state-directory';
        }
        PlotterShellModel.prototype.start = function (baseUrl) {
            var that = this;
            this.started = new Promise(function (resolve, reject) {
                var sdn = that.stateDirectoryName;
                // check if sdn has prefix (service:, githubgist:myStateDir[.json], localstorage:)
                if (sdn.toLowerCase().startsWith('service:')) {
                    reject('service not supported yet.');
                }
                else if (sdn.toLowerCase().startsWith('githubgist:')) {
                    reject('githubgist not supported yet.');
                }
                else if (sdn.toLowerCase().startsWith('localstorage:')) {
                    reject('localstorage not supported yet.');
                }
                else {
                    // check if (and use) platform origin has state-directory
                    // this.httpClient.baseUrl = 'http://localhost:9000/';
                    if (that.electronHelper.isElectron) {
                        var fs = that.electronHelper.fs;
                        var resourcePath = that.electronHelper.userDataPath;
                        fs.readFile(resourcePath + "/" + sdn + ".json", function (err, stringData) {
                            if (err) {
                                reject(err);
                                return;
                            }
                            var data = JSON.parse(stringData);
                            var stateDirectory = stateDirectory_1.StateDirectory.fromJSON(that.fileManager, data);
                            that.stateDirectory = stateDirectory;
                            resolve(stateDirectory);
                            return;
                        });
                    }
                    else if (that.phoneGapHelper.isPhoneGap) {
                        that.phoneGapHelper.readFromFile(sdn + ".json")
                            .then(function (o) {
                            var stateDirectory = stateDirectory_1.StateDirectory.fromJSON(that.fileManager, o);
                            that.stateDirectory = stateDirectory;
                            resolve(stateDirectory);
                        })
                            .catch(function (r) { return reject(r); });
                    }
                    else {
                        var segments = [];
                        if (baseUrl) {
                            segments.push(baseUrl);
                        }
                        segments.push(sdn + ".json");
                        that.fileManager.get(segments)
                            .then(function (data) {
                            var stateDirectory = stateDirectory_1.StateDirectory.fromJSON(that.fileManager, data);
                            that.stateDirectory = stateDirectory;
                            resolve(stateDirectory);
                        })
                            .catch(function (reason) {
                            reject(new Error("fetch state-dictionary2: reason: \r\n\r\n" + reason));
                        });
                    }
                }
            });
            return this.started;
        };
        Object.defineProperty(PlotterShellModel.prototype, "stateDirectory", {
            get: function () {
                return this.myStateDirectory;
            },
            set: function (value) {
                this.myStateDirectory = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlotterShellModel.prototype, "stateRepository", {
            get: function () {
                return this.myStateRepository;
            },
            set: function (value) {
                this.myStateRepository = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PlotterShellModel.prototype, "stateSession", {
            get: function () {
                return this.myStateSession;
            },
            set: function (value) {
                this.myStateSession = value;
            },
            enumerable: true,
            configurable: true
        });
        return PlotterShellModel;
    }());
    exports.PlotterShellModel = PlotterShellModel;
});
//# sourceMappingURL=plotterShellModel.js.map