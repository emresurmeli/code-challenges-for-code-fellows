var shelf = require("./shelf_module.js");

var libraryModule = (function () {
    return {
        insertShelf : function (shelfName) {
            return libraryModule[shelfName.name] = shelfName,
            console.log("Shelf " + shelfName + " has been inserted into your library")
        },
        removeShelf : function (shelfName) {
            delete libraryModule[shelfName.name],
            console.log("Shelf " + shelfName + " has been removed from your library")
            }
        }
}) ();

module.export = libraryModule;