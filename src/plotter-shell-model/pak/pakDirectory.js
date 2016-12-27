define(["require", "exports", "./pakRepositoryFile", "../electronHelper", "../phoneGapHelper"], function (require, exports, pakRepositoryFile_1, electronHelper_1, phoneGapHelper_1) {
    "use strict";
    var PakDirectory = (function () {
        function PakDirectory() {
        }
        PakDirectory.fromJSON = function (fileManager, json) {
            var pakDirectory = new PakDirectory();
            // assign properties...
            pakDirectory.locked = json.locked;
            pakDirectory.uniqueId = json.uniqueId;
            pakDirectory.pakRepositories = json.pakRepositories.map(function (pakRepositoryJSON) {
                switch (pakRepositoryJSON.pakRepositoryType) {
                    case 'File':
                        var pakRepository = new pakRepositoryFile_1.PakRepositoryFile(fileManager, new electronHelper_1.ElectronHelper(), new phoneGapHelper_1.PhoneGapHelper());
                        pakRepository.locked = pakRepositoryJSON.locked;
                        pakRepository.uniqueId = pakRepositoryJSON.uniqueId;
                        pakRepository.pakRepositoryType = pakRepositoryJSON.pakRepositoryType;
                        pakRepository.path = pakRepositoryJSON.path;
                        pakRepository.pakDirectory = pakDirectory;
                        return pakRepository;
                    default:
                        throw new Error("repository " + pakRepositoryJSON.pakRepositoryType + " not supported.");
                }
            });
            return pakDirectory;
        };
        PakDirectory.prototype.toJSON = function () {
            return JSON.parse(JSON.stringify(this));
        };
        return PakDirectory;
    }());
    exports.PakDirectory = PakDirectory;
});
//# sourceMappingURL=pakDirectory.js.map