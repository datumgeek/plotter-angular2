define(["require", "exports", "./pak"], function (require, exports, pak_1) {
    "use strict";
    var PakRepositoryFile = (function () {
        function PakRepositoryFile(fileManager, electronHelper, phoneGapHelper) {
            var _this = this;
            this.fileManager = fileManager;
            this.electronHelper = electronHelper;
            this.phoneGapHelper = phoneGapHelper;
            this.locked = false;
            this.uniqueId = 'state-provider';
            this.pakRepositoryType = 'File';
            this.pakMap = new Map();
            this.pakPromiseMap = new Map();
            this.getPak = function (pakId) {
                if (_this.pakPromiseMap.has(pakId)) {
                    return _this.pakPromiseMap.get(pakId);
                }
                var that = _this;
                var pakPromise = new Promise(function (resolve, reject) {
                    if (that.electronHelper.isElectron) {
                        var fs = that.electronHelper.fs;
                        var resourcePath = that.electronHelper.userDataPath;
                        fs.readFile(resourcePath + "/" + that.path + "/" + that.uniqueId + "/" + pakId + ".json", function (reason, stringData) {
                            if (reason) {
                                reject(new Error("fetch pak failed: reason: \r\n\r\n" + reason));
                                return;
                            }
                            var data = JSON.parse(stringData);
                            var pak = pak_1.Pak.fromJSON(data);
                            pak.pakRepository = that;
                            that.pakMap.set(pakId, pak);
                            resolve(pak);
                            return;
                        });
                    }
                    else if (that.phoneGapHelper.isPhoneGap) {
                        var pakFile = that.path + "/" + that.uniqueId + "/" + pakId + ".json";
                        that.phoneGapHelper.readFromFile("" + pakFile)
                            .then(function (o) {
                            var pak = pak_1.Pak.fromJSON(o);
                            pak.pakRepository = that;
                            that.pakMap.set(pakId, pak);
                            resolve(pak);
                        })
                            .catch(function (r) { return reject(r); });
                    }
                    else {
                        that.fileManager.get([that.path, that.uniqueId, pakId + ".json"])
                            .then(function (data) {
                            var pak = pak_1.Pak.fromJSON(data);
                            pak.pakRepository = that;
                            that.pakMap.set(pakId, pak);
                            resolve(pak);
                        })
                            .catch(function (reason) {
                            reject(new Error("fetch pak failed: reason: \r\n\r\n" + reason));
                        });
                    }
                });
                _this.pakPromiseMap.set(pakId, pakPromise);
                return pakPromise;
            };
            this.getPakList = function () {
                var that = _this;
                return new Promise(function (resolve, reject) {
                    if (that.electronHelper.isElectron) {
                        var fs = that.electronHelper.fs;
                        var resourcePath = that.electronHelper.userDataPath;
                        fs.readFile(resourcePath + "/" + that.path + "/" + that.uniqueId + "/pak-list.json", function (reason, stringData) {
                            if (reason) {
                                reject(new Error("fetch pak list failed: reason: \r\n\r\n" + reason));
                                return;
                            }
                            var data = JSON.parse(stringData);
                            that.pakList = data.pakList;
                            resolve(data.pakList);
                            return;
                        });
                    }
                    else if (that.phoneGapHelper.isPhoneGap) {
                        var pakListFile = that.path + "/" + that.uniqueId + "/pak-list.json";
                        that.phoneGapHelper.readFromFile("" + pakListFile)
                            .then(function (o) {
                            that.pakList = o.pakList;
                            resolve(o.pakList);
                        })
                            .catch(function (r) { return reject(r); });
                    }
                    else {
                        that.fileManager.get([that.path, that.uniqueId, 'pak-list.json'])
                            .then(function (data) {
                            that.pakList = data.pakList;
                            resolve(that.pakList);
                        })
                            .catch(function (reason) {
                            reject(new Error("fetch pak list failed: reason: \r\n\r\n" + reason));
                        });
                    }
                });
            };
        }
        return PakRepositoryFile;
    }());
    exports.PakRepositoryFile = PakRepositoryFile;
});
//# sourceMappingURL=pakRepositoryFile.js.map