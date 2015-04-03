var book = require('./book_module.js');

var shelfModule = (function () {
    
    return {
        createShelf : function (shelfName) {
            return shelfModule[shelfName] = {
                "Name" : shelfName,
                "Storage" : [];
            };
        },
        deleteShelf : function (shelfName) {
            delete shelfModule[shelfName];
        },
        insertBook : function (bookNum, shelfName) {
            return shelfName[book.bookId] = bookNum;
        },
        removeBook : function (bookNum, shelfName) {
            delete shelfName[book.bookId];
        }
    }
}) ();

module.export = shelfModule;

// tests:

shelfModule.createShelf("shelfOne");
shelfModule.insertBook("001", "shelfOne");
shelfModule.removeBook("001", "shelfOne");
shelfModule.deleteShelf("shelfOne");