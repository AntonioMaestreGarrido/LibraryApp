
const myLibrary = [];

for (let i = 0; i < 2; i++) { add() }

function add() {
    
    var title = prompt("title");
    var autor = prompt("autor");
    var pages = prompt("pages?");
    while (read != "y" && read != "n") {
        var read = prompt("Leido?")
        console.log(read)
    } 
    if(read="y"){read=true}else{read=false}
   
    var b = new book(title, autor, pages, read)

    myLibrary.push(b)

}
console.table(myLibrary)





var primero = new book("Dune", "Frank Herbet", "899", true)


console.log(primero.list())

function book(title, autor, pages, read) {
    this.title = title
    this.autor = autor
    this.pages = pages
    this.read = read

    this.list = function () { return `${title} by ${autor}, ${pages} long` }

}