var bookModule = (function () {
    return {
        createBook : function (title, author, genre, iD) {
            return bookModule[iD] = {
                  "title" : title,
                  "author" : author,
                  "genre" : genre,
                  "iD" : iD   
            };
        }
    }
}) ();

module.export = bookModule;

// test:
bookModule.createBook("The Alchemist", "Paulo Coelho", "fiction", "001");