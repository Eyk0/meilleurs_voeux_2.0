document.addEventListener('DOMContentLoaded', function(){
    let cartes = document.querySelectorAll('.design');
    let active = undefined;

    cartes.forEach(function(carte){
    
        carte.addEventListener('click', function(){
            cartes.forEach(function(carte){
                if(carte.classList.contains('clique_design')){
                    carte.classList.remove('clique_design');
                }
            })
            carte.classList.add('clique_design');
            active = carte.src;
        })
    })

    valid_design = document.querySelector('.valid_design');
    error = document.querySelector('.error');
    valid_design.addEventListener('click', function(){
        if(active == undefined){
            error.innerHTML = "Vous devez selectionner un des designs";
        }else{
            window.location.href = "crea_na.html?src=" + active + "";
        }
    })
})