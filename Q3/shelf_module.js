var book = require('./book_module.js');

var shelfModule = (function () {
    
    return {
        createShelf : function (shelfName) {
            return shelfModule[shelfName] = {
                "Name" : shelfName,
                "Storage" : []
            };
        },
        deleteShelf : function (shelfName) {
            delete shelfModule[shelfName],
            console.log("Your " + shelfName + " shelf has been deleted")
        },
        insertBook : function (bookNum, shelfName) {
            return shelfName[book.bookId] = bookNum,
            console.log("Book with the Num " + bookNum + " has been inserted into " + shelfName)
        },
        removeBook : function (bookNum, shelfName) {
            delete shelfName[book.bookId],
            console.log("Book with the Num " + bookNum + " has been removed from " + shelfName)
        }
    }
}) (); 

module.export = shelfModule;

// tests:

shelfModule.createShelf("shelfOne");
shelfModule.insertBook("001", "shelfOne");
shelfModule.removeBook("001", "shelfOne");
shelfModule.deleteShelf("shelfOne");