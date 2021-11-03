var myLibrary = [];
const formu = document.getElementById("addBook");
setListeners();
leeLocal();
//dummy();
//localStorage.setItem('arra', JSON.stringify(myLibrary))




function leeLocal() {
    const myArrayFromLocalStorage = localStorage.getItem('arra')
    myLibrary = JSON.parse(myArrayFromLocalStorage)
    if (myLibrary === null) { myLibrary = [] }
    makeTable(myLibrary)
}


function dummy() {
    var a = new book("1Dune", "Frank Herbert", "333", true);
    var b = new book("2Game of thrones", "George Martin", "983", true);
    var c = new book("3Mort", "Terry Pratchett", "350", true);
    var d = new book("4Dune", "Frank Herbert", "333", true);
    var e = new book("5Game of thrones", "George Martin", "983", true);
    var f = new book("6Mort", "Terry Pratchett", "350", false);
    myLibrary.push(a);
    myLibrary.push(b);
    myLibrary.push(c);
    myLibrary.push(d);
    myLibrary.push(e);
    myLibrary.push(f);
    makeTable(myLibrary);
}

function setListeners() {
    document.querySelector("#add").addEventListener("click", addBook);
    document.querySelector("#abreForm").addEventListener("click", openform);
    document.querySelector("#close").addEventListener("click", closeForm);
    //addBook()
}

function book(Title, Autor, Pages, Read) {
    this.Title = Title;
    this.Autor = Autor;
    this.Pages = Pages;
    this.Read = Read;
}
function addBook() {
    var Title = formu.elements[0].value;
    var Autor = formu.elements[1].value;
    var Pages = formu.elements[2].value;
    var Read = formu.elements[3].value;

    for (let i = 0; i < 4; i++) { if (formu.elements[i].value === "") { return } }

    if (Read.toUpperCase() === "Y" || Read.toUpperCase() === "YES") {
        Read = true;
    } else {
        Read = false;
    }

    var b = new book(Title, Autor, Pages, Read);
    myLibrary.push(b);

    localStorage.setItem('arra', JSON.stringify(myLibrary))

    makeTable(myLibrary);
    for (var i = 0; i < formu.length; i++) {
        formu.elements[i].value = "";
    }
}

function makeTable(array) {
    document
        .querySelector("#booklist")
        .removeChild(document.querySelector("#booklist").firstChild);
    var table = document.createElement("table");

    var Cabecero = ["Title", "Autor", "Pages", "Read"]
    //primera linea con los nombres
    var row = document.createElement("tr");
    for (var j = 0; j < Cabecero.length; j++) {
        var cell = document.createElement("td");
        cell.textContent = Cabecero[j];

        row.appendChild(cell);
    }
    row.classList.add("titulo")
    table.appendChild(row);
    //var keys = Object.keys(myLibrary[0]);

    for (var i = 0; i < array.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < Cabecero.length; j++) {
            // console.log(keys[j]+"="+myLibrary[i][keys[j]])
            var cell = document.createElement("td");
            console.log(myLibrary[i][Cabecero[j]])
            console.log(myLibrary[i][Cabecero[j]])
            cell.textContent = myLibrary[i][Cabecero[j]];
            row.appendChild(cell);
        }
        var but2 = document.createElement("button");
        but2.classList.add("read");
        but2.textContent = "Read?";
        but2.addEventListener("click", cambiaRead)

        var but = document.createElement("button");
        but.classList.add("delete");
        but.textContent = "Delete";
        but.addEventListener("click", deleteBook)

        document.querySelector("#add").addEventListener("click", addBook);
        row.appendChild(but2);
        row.appendChild(but);

        table.appendChild(row);
    }
    //console.log(table)
    document.querySelector("#booklist").appendChild(table);
}
function cambiaRead(e) {
    var index = (Array.from(e.target.parentElement.parentNode.children).indexOf(e.target.parentElement)) - 1

    if ((myLibrary[index]["Read"])) { myLibrary[index]["Read"] = false }
    else { myLibrary[index]["Read"] = true }
    makeTable(myLibrary)

}
function deleteBook(e) {
    var index = (Array.from(e.target.parentElement.parentNode.children).indexOf(e.target.parentElement)) - 1
    e.target.parentElement.style.backgroundColor = "red"
    e.target.parentElement.delete

    myLibrary.splice(index, 1);
    localStorage.setItem('arra', JSON.stringify(myLibrary))
    makeTable(myLibrary)
}
function closeForm() {
    formu.style.display = "none";

}
function openform() {
    formu.style.display = "flex";
}
function askForBook() {
    addBook();
}

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

