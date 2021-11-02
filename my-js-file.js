var myLibrary;
if(myLibrary==undefined){
 myLibrary = [];}
const formu = document.getElementById("addBook")
setListeners()
dummy()



function dummy(){
    var a = new book("Dune", "Frank Herbert", "333", true);
    var b = new book("Game of thrones", "George Martin", "983", true);
    var c = new book("Mort", "Terry Pratchett", "350", true);
    var d = new book("Dune", "Frank Herbert", "333", true);
    var e = new book("Game of thrones", "George Martin", "983", true);
    var f = new book("Mort", "Terry Pratchett", "350", true);
    myLibrary.push(a)
    myLibrary.push(b)
    myLibrary.push(c)
    myLibrary.push(d)
    myLibrary.push(e)
    myLibrary.push(f)
   // makeTable(myLibrary)
}

function setListeners() {
    document.querySelector("#submit").addEventListener("click", askForBook)
    document.querySelector("#abreForm").addEventListener("click", openform)
    document.querySelector("#close").addEventListener("click", closeForm)
    //addBook()
    

}
function makeTable(array) {
    var table = document.createElement('table');
    var keys = Object.keys( myLibrary[0]);
    //primera linea con los nombres
    var row = document.createElement('tr');
    for (var j=0;j<keys.length;j++){
        var cell = document.createElement('td');
        cell.textContent = (keys[j]);
        
            row.appendChild(cell);
    }
    table.appendChild(row);

    for (var i = 0; i < array.length; i++) {
        
        var row = document.createElement('tr');
        for (var j=0;j<keys.length;j++)
         {
           
            
           // console.log(keys[j]+"="+myLibrary[i][keys[j]])
            var cell = document.createElement('td');
            cell.textContent = myLibrary[i][keys[j]];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    //console.log(table)
    document.querySelector("#booklist").appendChild(table)
   
    
}
function closeForm(){
   formu.style.display = 'none';
   makeTable(myLibrary);
}
function openform(){
       formu.style.display = 'flex';
}
function askForBook() {
    addBook()
    
    
}

function addBook() {

    
    var title = formu.elements["title"].value
    var autor = formu.elements[1].value
    var pages = formu.elements[2].value
    var read = formu.elements["read"].value


    if (read === "y") { read = true } else { read = false }

    var b = new book(title, autor, pages, read)

    myLibrary.push(b)
    console.table(myLibrary)
}












function book(title, autor, pages, read) {
    this.title = title
    this.autor = autor
    this.pages = pages
    this.read = read

    

}