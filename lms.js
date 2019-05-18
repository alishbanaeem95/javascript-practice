$(document).ready(function() {
    $('#book_form').submit(function(e) {
        e.preventDefault();
        submitBook();
     });
});

$(document).ready(function() {
    $('#search_form').submit(function(e) {
        e.preventDefault();
        search_text = document.getElementById("search").value;
        searchBook(search_text);
     });
});

$(document).ready(function() {
    $('#note_form').submit(function(e) {
        e.preventDefault();
        submitNote();
     });
});


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

function submitBook(){
    var obj = {};
    obj.author = document.getElementById("author").value;
    document.getElementById("author").value = '';

    obj.title = document.getElementById("book_form").elements["title"].value;
    document.getElementById("book_form").elements["title"].value = '';

    obj.readingStatus = document.getElementById("book_form").elements["reading_status"].value;
    document.getElementById("reading_status").checked = '';
    
    obj.rating = document.getElementById("book_form").elements["rating"].value;
    document.getElementById("book_form").elements["rating"].value = '';
    
    note = document.getElementById("book_form").elements["note"].value;
    document.getElementById("book_form").elements["note"].value = '';

    if (note){
        obj.notes = [note];
    }
    addBook(obj);
}

function addBook(obj){
    library.push(obj)
    document.getElementById("success_msg").innerHTML = "Book successfully added !";
}

function getCurrentlyReadingBooks(){
    count = library.filter(function(obj){
        return obj.readingStatus;
    }).length;
    document.getElementById("books_count").innerHTML = 'Number of books currently read are ' + count;
}

function searchBook(title){
    var filteredBooks = library.filter(function(obj){
        return obj.title.toLowerCase().includes(title.toLowerCase());
    });

    if (filteredBooks.length > 0){
        txt = '';
        for (var book of filteredBooks) {
            txt += "<table>"; 
            for (var bookKey in book){
                txt += "<tr><td>" + bookKey + " : " + book[bookKey] + "</td></tr>";
            }
            txt += "</table><br>";
        }    
        document.getElementById("searched_book").innerHTML = txt;
    } else {
        document.getElementById("searched_book").innerHTML = "No such book found !";
    }
    document.getElementById("search").value = '';
}

function submitNote(){
    title = document.getElementById("note_form").elements["book_title"].value;
    document.getElementById("note_form").elements["book_title"].value = '';

    note = document.getElementById("note_form").elements["book_note"].value;
    document.getElementById("note_form").elements["book_note"].value = '';
    addNote(title, note);
}

function addNote(title, note){
    library.map(function(obj){
        if (obj.title.toLowerCase() == title.toLowerCase()){
            if (!obj.hasOwnProperty("notes")){
                obj.notes = [];
            }
            obj.notes.push(note);
            document.getElementById("note_success").innerHTML = "Note added for book: " + title;
        } else {
            document.getElementById("note_success").innerHTML = "Book not found !";
        }
    });
}

function showAllNotes(){
    document.getElementById("all_notes").innerHTML = '';
    library.forEach(function(obj){
        if (!obj.hasOwnProperty("notes")){
            document.getElementById("all_notes").innerHTML += "Note not found for " + obj.title + "<br><br>";
        } else {
            document.getElementById("all_notes").innerHTML += "Title : " + obj.title + "<br>";
            document.getElementById("all_notes").innerHTML += "Notes : " + obj.notes + "<br><br>";
        }
    });
}
