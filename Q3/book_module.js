var bookModule = (function () {
    return {
        createBook : function (title, author, genre, bookNum) {
            return bookModule[bookNum] = {
                  "title" : title,
                  "author" : author,
                  "genre" : genre,
                  "bookNum" : bookNum  
            },
            console.log("A book called " + title + " has been created!")
        }
    }
}) ();

module.export = bookModule;

// test:
bookModule.createBook("The Alchemist", "Paulo Coelho", "fiction", "001");