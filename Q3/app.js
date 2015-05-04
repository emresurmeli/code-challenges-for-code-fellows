var library = require("./library_module.js");
var shelf = require("./shelf_module.js");
var book = require("./book_module.js");


// Tests:

book.bookModule.createBook("The Alchemist", "Paulo Coelho", "fiction", "001");

shelf.shelfModule.createShelf("shelfOne");
shelf.shelfModule.insertBook("001", "shelfOne");
shelf.shelfModule.removeBook("001", "shelfOne");
shelf.shelfModule.deleteShelf("shelfOne");

library.libraryModule.insertShelf("001");
library.libraryModul.e.removeShelf("001");