





var primero =new book("Dune","Frank Herbet","899",true)


console.log(primero.list())

function book(title,autor,pages,read){
this.title=title
this.autor=autor
this.pages=pages
this.read=read

this.list=function(){return `${title} by ${autor}, ${pages} long`}

}