
/*JAVA do plantel*/
function openEscalao(evt, liga) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(liga).style.display = "block";
      evt.currentTarget.className += " active";
}


/*Função para mostrar a lista escondida do menu*/
function myFunction() {
    document.getElementById("divdropdown").classList.toggle("show");
}

/*função para o Modal */

const open = document.getElementById('open');
const modal_container = document.getElementById('model_container');
const closeModal = document.getElementById('closeModal');

open.addEventListener('click', () => {
    modal_container.classList.add('show');

})

open.addEventListener('click', () => {
    modal_container.classList.remove('show');
    
})