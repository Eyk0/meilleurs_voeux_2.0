/* insert image dans le modifieur */

let source_lien = location.search;
let split = source_lien.split("=");
let source = split[1];

let img = document.querySelector('.carte>img');
img.src = source;

/* insert texte sur la carte */

let input_nom = document.querySelector(".nom");
let insert_nom = document.querySelector(".insert_nom");

let input_mess = document.querySelector(".message");
let insert_mess = document.querySelector(".insert_comment");


input_nom.addEventListener('keyup', function(e){ 
    insert_nom.innerHTML = input_nom.value;
})

input_mess.addEventListener('keyup', function(e){
    insert_mess.innerHTML = input_mess.value;
})











