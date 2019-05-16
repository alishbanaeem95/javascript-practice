
var library = [
    {
        author: 'Stephene Mayor',
        title: 'Twilight',
        readingStatus: true,
        rating: 4.0,
        notes: ['Read page 24 again']
    },
    {
        author: 'J.S.Andrews',
        title: 'Perks of being a wallflower',
        readingStatus: false,
        rating: undefined
    }
]

function addBook(obj){
    library.push(obj)
    console.log('Book successfully added in library! \n')
}

function getCurrentlyReadingBooks(){
    console.log('Number of books currently being read are ' + library.filter(function(obj){
        return obj.readingStatus;
    }).length + '\n');
}

function searchBook(title){
    var filteredBooks = library.filter(function(obj){
        return obj.title.toLowerCase().includes(title.toLowerCase());
    });

    if (filteredBooks.length > 0){
        for (var book of filteredBooks){
            console.log('Title: ' + book.title);
            console.log('Author: ' + book.author);
            console.log('Rating: ' + book.rating);
            console.log();
        }
    } else {
        console.log('No such book found ! \n');
    }
}

function changeRating(title, rating){
    //Assuming we have books with unique titles
    library.forEach(function(obj){
        if (obj.title.toLowerCase() == title.toLowerCase()){
            obj.rating = rating;
            console.log('Rating has been updated for book:' + title + '\n');
        }
    });
}

function addNote(title, note){
    library.map(function(obj){
        if (obj.title.toLowerCase() == title.toLowerCase()){
            if (!obj.hasOwnProperty("notes")){
                obj.notes = [];
            }
            obj.notes.push(note);
            console.log('Note added for book:' + title + '\n');
        }
    });
}

function showAllNotes(){
    library.forEach(function(obj){
        if (!obj.hasOwnProperty("notes")){
            console.log('Notes not found for book: ' + obj.title + '\n');
        } else {
            console.log('Title: ' + obj.title);
            console.log('Notes: ' + obj.notes);
            console.log();
        }
    });
}

var book = {
    author: 'Khalid Hussaini',
    title: 'The Kite Runner',
    readingStatus: true,
    rating: 5.0
}

//adding a book to library
addBook(book);

//number of books being currently read
getCurrentlyReadingBooks();

//search book
searchBook('kite');

//change rating
changeRating('the kite Runner', 4.5);

//search book
searchBook('kite');

//adding a note
addNote('the kite Runner', 'This is the best book ever read!')

//show notes for all books
showAllNotes();
