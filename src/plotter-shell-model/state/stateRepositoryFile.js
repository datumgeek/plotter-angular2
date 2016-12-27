define(["require", "exports", "../pak/pakDirectory", "./stateSession", "../electronHelper", "../phoneGapHelper"], function (require, exports, pakDirectory_1, stateSession_1, electronHelper_1, phoneGapHelper_1) {
    "use strict";
    var StateRepositoryFile = (function () {
        function StateRepositoryFile(fileManager, electronHelper, phoneGapHelper) {
            var _this = this;
            this.fileManager = fileManager;
            this.electronHelper = electronHelper;
            this.phoneGapHelper = phoneGapHelper;
            this.locked = false;
            this.uniqueId = 'state-repository';
            this.stateRepositoryType = 'File';
            this.stateSessionPromiseMap = new Map();
            this.stateSessionMap = new Map();
            this.getPakDirectory = function () {
                if (_this.pakDirectoryPromise) {
                    return _this.pakDirectoryPromise;
                }
                var that = _this;
                return _this.pakDirectoryPromise = new Promise(function (resolve, reject) {
                    if (that.electronHelper.isElectron) {
                        var fs = that.electronHelper.fs;
                        var resourcePath = that.electronHelper.userDataPath;
                        fs.readFile(resourcePath + "/" + that.path + "/" + that.uniqueId + "/pak-directory.json", function (reason, stringData) {
                            if (reason) {
                                reject(new Error("fetch pak-directory failed: reason: \r\n\r\n" + reason));
                                return;
                            }
                            var data = JSON.parse(stringData);
                            var pakDirectory = pakDirectory_1.PakDirectory.fromJSON(that.fileManager, data);
                            pakDirectory.stateRepository = that;
                            resolve(pakDirectory);
                            return;
                        });
                    }
                    else if (that.phoneGapHelper.isPhoneGap) {
                        var pakDirectoryFile = that.path + "/" + that.uniqueId + "/pak-directory.json";
                        that.phoneGapHelper.readFromFile("" + pakDirectoryFile)
                            .then(function (o) {
                            var pakDirectory = pakDirectory_1.PakDirectory.fromJSON(that.fileManager, o);
                            pakDirectory.stateRepository = that;
                            resolve(pakDirectory);
                        })
                            .catch(function (r) { return reject(r.toString()); });
                    }
                    else {
                        that.fileManager.get([that.path, that.uniqueId, 'pak-directory.json'])
                            .then(function (data) {
                            var pakDirectory = pakDirectory_1.PakDirectory.fromJSON(that.fileManager, data);
                            pakDirectory.stateRepository = that;
                            resolve(pakDirectory);
                        })
                            .catch(function (reason) {
                            reject(new Error("fetch pak-directory failed: reason: \r\n\r\n" + reason));
                        });
                    }
                });
            };
        }
        StateRepositoryFile.fromJSON = function (fileManager, json) {
            var stateRepository = new StateRepositoryFile(fileManager, new electronHelper_1.ElectronHelper(), new phoneGapHelper_1.PhoneGapHelper());
            // assign properties...
            stateRepository.locked = json.locked;
            stateRepository.uniqueId = json.uniqueId;
            stateRepository.stateRepositoryType = json.stateRepositoryType;
            stateRepository.path = json.path;
            return stateRepository;
        };
        StateRepositoryFile.prototype.getStateSession = function (sessionId) {
            if (this.stateSessionPromiseMap.has(sessionId)) {
                return this.stateSessionPromiseMap.get(sessionId);
            }
            var that = this;
            var stateSessionPromise = new Promise(function (resolve, reject) {
                if (that.electronHelper.isElectron) {
                    var fs = that.electronHelper.fs;
                    var resourcePath = that.electronHelper.userDataPath;
                    fs.readFile(resourcePath + "/" + that.path + "/" + that.uniqueId + "/" + sessionId + ".json", function (reason, stringData) {
                        if (reason) {
                            reject(new Error("fetch session list: reason: \r\n\r\n" + reason));
                            return;
                        }
                        var data = JSON.parse(stringData);
                        var stateSession = stateSession_1.StateSession.fromJSON(data);
                        stateSession.stateRepository = that;
                        that.stateSessionMap.set(sessionId, stateSession);
                        resolve(stateSession);
                        return;
                    });
                }
                else if (that.phoneGapHelper.isPhoneGap) {
                    var stateSessionFile = that.path + "/" + that.uniqueId + "/" + sessionId + ".json";
                    that.phoneGapHelper.readFromFile("" + stateSessionFile)
                        .then(function (o) {
                        var stateSession = stateSession_1.StateSession.fromJSON(o);
                        stateSession.stateRepository = that;
                        that.stateSessionMap.set(sessionId, stateSession);
                        resolve(stateSession);
                    })
                        .catch(function (r) { return reject(r); });
                }
                else {
                    that.fileManager.get([that.path, that.uniqueId, sessionId + ".json"])
                        .then(function (data) {
                        var stateSession = stateSession_1.StateSession.fromJSON(data);
                        stateSession.stateRepository = that;
                        that.stateSessionMap.set(sessionId, stateSession);
                        resolve(stateSession);
                    })
                        .catch(function (reason) {
                        reject(new Error("fetch session list: reason: \r\n\r\n" + reason));
                    });
                }
            });
            this.stateSessionPromiseMap.set(sessionId, stateSessionPromise);
            return stateSessionPromise;
        };
        StateRepositoryFile.prototype.getSessionList = function () {
            var that = this;
            return new Promise(function (resolve, reject) {
                if (that.electronHelper.isElectron) {
                    var fs = that.electronHelper.fs;
                    var resourcePath = that.electronHelper.userDataPath;
                    fs.readFile(resourcePath + "/" + that.path + "/" + that.uniqueId + "/session-list.json", function (reason, stringData) {
                        if (reason) {
                            reject(new Error("fetch session list: reason: \r\n\r\n" + reason));
                            return;
                        }
                        var data = JSON.parse(stringData);
                        resolve(data.sessionList);
                        return;
                    });
                }
                else if (that.phoneGapHelper.isPhoneGap) {
                    var sessionListFile = that.path + "/" + that.uniqueId + "/session-list.json";
                    that.phoneGapHelper.readFromFile("" + sessionListFile)
                        .then(function (data) {
                        resolve(data.sessionList);
                    })
                        .catch(function (r) { return reject(r); });
                }
                else {
                    that.fileManager.get([that.path, that.uniqueId, 'session-list.json'])
                        .then(function (data) {
                        resolve(data.sessionList);
                    })
                        .catch(function (reason) {
                        reject(new Error("fetch session list: reason: \r\n\r\n" + reason));
                    });
                }
            });
        };
        StateRepositoryFile.prototype.toJSON = function () {
            return {
                locked: this.locked,
                stateRepositoryType: this.stateRepositoryType,
                uniqueId: this.uniqueId,
                path: this.path,
            };
        };
        return StateRepositoryFile;
    }());
    exports.StateRepositoryFile = StateRepositoryFile;
});
// 
//# sourceMappingURL=stateRepositoryFile.js.map