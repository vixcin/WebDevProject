// Import the object into the main file
import {Person} from './Person.js';
import {Book} from './Book.js';
import {Library} from './Library.js';

///////////////////////////////////////////////////////////////////////
// Add the User Interaction logic below this line /////////////////////
///////////////////////////////////////////////////////////////////////

// Create Library
const library = new Library("The Libray","123 Main St");

// Create some 10 books and add them to the Library
const book1 = new Book("The Hobbit","J.R.R. Tolkien","123456789",1937,310);
const book2 = new Book("Fellowship of the ring","J.R.R. Tolkien","123456789", 1954, 423);
const book3 = new Book("The Two Towers", "J.R.R. Tolkien" , "1234567890" , 1954, 352 );
const book4 = new Book("The Return of the king", "J.R.R. Tolkien" , "1234567890" , 1955, 416 );
const book5 = new Book("The Lion,the witch,and the wadrobe", "C.S. Lewis " , "1234567890" , 1950, 206 );
const book6 = new Book("Prince Caspian", "C.S.Lewis" ,"1234567l890" , 1951, 223 );
const book7 = new Book("The voyage of the dawn Treader", "C.S." ,"1234567890" , 1952, 256 );
const book8 = new Book("The Silver Chair", "C.S. Lewis" ,"1234567890" , 1953, 217 );
const book9 = new Book("Paradise Lost", "John Milton" ,"1234567890" , 1667, 442 );
const book10 = new Book("The Divine Comedy", "Dante Alighieri" ,"1234567890" , 1320, 432 );

// Add ten copies of each books using a for loop
for(let i=0; i<10; i++){
    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);
    library.addBook(book4);
    library.addBook(book5);
    library.addBook(book6);
    library.addBook(book7);
    library.addBook(book8);
    library.addBook(book9);
    library.addBook(book10);
}

// Create some 5 people and make them members
const person1 = new Person("John Doe", 23, "john@doe.mail");
const person2 = new Person("Jane Doe", 21, 'jane@doe.mail');
const person3 = new Person("John smith", 25, "john@smith.mail");
const person4 = new Person("Jane smith", 23, "jane@smith.mail");
const person5 = new Person("john jones",27,"jane@jones.mail");

// Add all 5 memebers to the library
library.addMember(person1);
library.addMember(person2);
library.addMember(person3);
library.addMember(person4);
library.addMember(person5)

// Some people should borrow the books 
person1.borrowBook(book8);
person1.borrowBook(book9);
person1.borrowBook(book10);


// TODO: 
// > ( all 5 people should borrow at least 3 books)