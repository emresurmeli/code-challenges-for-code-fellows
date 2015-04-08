var library = require("./library_module.js");
var shelf = require("./shelf_module.js");
var book = require("./book_module.js");


// Tests:

bookModule.createBook("The Alchemist", "Paulo Coelho", "fiction", "001");

shelfModule.createShelf("shelfOne");
shelfModule.insertBook("001", "shelfOne");
shelfModule.removeBook("001", "shelfOne");
shelfModule.deleteShelf("shelfOne");

libraryModule.insertShelf("001");
libraryModule.removeShelf("001");