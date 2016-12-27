define(["require", "exports", "./stateRepositoryFile", "../electronHelper", "../phoneGapHelper"], function (require, exports, stateRepositoryFile_1, electronHelper_1, phoneGapHelper_1) {
    "use strict";
    var StateDirectory = (function () {
        function StateDirectory() {
        }
        StateDirectory.fromJSON = function (fileManager, json) {
            var stateDirectory = new StateDirectory();
            // assign properties...
            stateDirectory.locked = json.locked;
            stateDirectory.uniqueId = json.uniqueId;
            stateDirectory.stateRepositories = json.stateRepositories.map(function (stateRepositoryJSON) {
                switch (stateRepositoryJSON.stateRepositoryType) {
                    case 'File':
                        var stateRepository = new stateRepositoryFile_1.StateRepositoryFile(fileManager, new electronHelper_1.ElectronHelper(), new phoneGapHelper_1.PhoneGapHelper());
                        stateRepository.locked = stateRepositoryJSON.locked;
                        stateRepository.uniqueId = stateRepositoryJSON.uniqueId;
                        stateRepository.stateRepositoryType = stateRepositoryJSON.stateRepositoryType;
                        stateRepository.path = stateRepositoryJSON.path;
                        stateRepository.stateDirectory = stateDirectory;
                        return stateRepository;
                    default:
                        throw new Error("repository " + stateRepositoryJSON.stateRepositoryType + " not supported.");
                }
            });
            return stateDirectory;
        };
        StateDirectory.prototype.getStateRepository = function (uniqueId) {
            // let the default plotter host (aka state repository) be the first one in the list
            if (!uniqueId && this.stateRepositories.length > 0) {
                return this.stateRepositories[0];
            }
            var repoMatch = null;
            this.stateRepositories.some(function (repo) {
                if (repo.uniqueId === uniqueId) {
                    repoMatch = repo;
                    return true; // stops processing, so we choose the first repo having that unique id
                }
                return false;
            });
            return repoMatch;
        };
        StateDirectory.prototype.getStateSession = function (stateRepositoryId, stateSessionId) {
            var repo = this.getStateRepository(stateRepositoryId);
            if (!repo) {
                throw new Error("Could not retrieve repository: " + stateRepositoryId);
            }
            return repo.getStateSession(stateSessionId);
        };
        StateDirectory.prototype.toJSON = function () {
            return {
                locked: this.locked,
                stateRepositories: this.stateRepositories.map(function (stateRepository) { return stateRepository.toJSON(); }),
                uniqueId: this.uniqueId,
            };
        };
        return StateDirectory;
    }());
    exports.StateDirectory = StateDirectory;
});
//# sourceMappingURL=stateDirectory.js.map