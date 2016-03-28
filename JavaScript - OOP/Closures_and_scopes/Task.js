// Create a module for working with books
// 		*	The module must provide the following functionalities:
// 			*	Add a new book to category
// 				*	Each book has unique title, author and ISBN
// 				*	It must return the newly created book with assigned ID
// 				*	If the category is missing, it must be automatically created
// 			*	List all books
// 				*	Books are sorted by ID
// 				*	This can be done by author, by category or all
// 			*	List all categories
// 				*	Categories are sorted by ID
// 		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
// 			*	When adding a book/category, the ID is generated automatically
// 		*	Add validation everywhere, where possible
// 			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
// 			*	Author is any non-empty string
// 			*	Unique params are Book title and Book ISBN
// 			*	Book ISBN is an unique code that contains either 10 or 13 digits
// 			*	If something is not valid - throw Error
            
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];
        
		function listBooks(criteria) {
            if(arguments.length===1){
                if(criteria.author!==undefined){
                    return books.filter(function(item){
                        return item.author===criteria.author;
                    });
                }
                else if(criteria.category!==undefined){
                    return books.filter(function(item){
                        return item.category===criteria.category;
                    });
                }
            }
            return books;
        }

		function addBook(book) {
            validateBook(book);
			book.ID = books.length + 1;
			books.push(book);
            addCategory(book.category);
			return book;
		}
        
        function addCategory(category) {
            if (category === undefined) {
                throw new Error ('Invalid properties of category');
            }else if(validateIfCategoryIsUnique(category)) {
                category.ID = categories.length + 1;
                categories.push(category);
            }
        }
        
        function validateIfCategoryIsUnique(category){
            return !categories.some(function(item){
                    return item===category;
                });
        }
        
        function validateBook(book) {
            if (book.title === undefined || book.isbn === undefined || book.author === undefined) {
                throw new Error ('Invalid properties of book');
            }
            validateTitleOfBook(book.title);
            validateAuthorOfBook(book.author);
            validateISBN(book.isbn);
        }
        
        function validateTitleOfBook(value) {
            if (value.length < 2 || value.length > 150) {
                throw new Error ('invalid length behalf of the symbols of the book');
            } else if (books.some(function(item){
                    return item.title === value;})) {
                throw new Error ('Already have this title of book');
            }
        }
        
        function validateISBN(value) {
            if (value < 10 && value > 13) {
                throw new Error ('Invalid ISBN');
            } else if (books.some(function(item){
                     return item.isbn === value; })) {
                 throw new Error ('Already have this ISBN');        
            }
        }
        
        function validateAuthorOfBook(value) {
            if (value.length < 2 || value.length > 150) {
                throw new Error ('Invalid length of symbols of the author');
            } 
        }

		function listCategories() {
			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;       