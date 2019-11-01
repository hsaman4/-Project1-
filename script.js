
let modal = document.getElementById("modal");
let link = document.getElementById("book");
let span = document.getElementById("close");

link.onclick= function(){
    modal.style.display = "block";
}
span.onclick= function(){
    modal.style.display = "none";
}

window.onclick= function(event){
    if (event.target === modal){
        modal.style.display = "none";
    }

}