/* index.js 








*/





/* DEFINIZIONE VARIABILI */

var larghezza_pagina = window.innerWidth
var altezza_pagina = window.innerHeight

console.log(larghezza_pagina)


const larghezza_limite = 1000
/*la variabile larghezza limite definisce il limite minimo della larghezza 
della pagina per cui viene mostrata la side bar  */

var body = document.querySelector("body")
var side_bar = document.querySelector(".side-bar")
var container = document.querySelector(".container")


var sottotitolo = document.querySelector(".sottotitolo")
var sottotitolo_values = ["programmer", "runner", "student", "design passionate", "architecture enthusiastic", "tech guy", ]

var current_moodboard_img = document.querySelector(".current-moodboard-img")
var current_moodboard = document.querySelector(".current-moodboard")

var music_background = document.querySelector(".music-background")
var music_playlist = document.querySelector(".music-playlist")

const moodboard_array = ["1","2","3","4","5","6","montagna"]


//******************************************************************************************************************************************
//CAMBIO DI SOTTOTITOLO OGNI SECONDO
function update_sottotitolo(){
    //cambiare funzione in modo tale che assengi i nomi in un ordine specifico e senza ripetere/pause
    let index = sottotitolo_values.indexOf(sottotitolo.innerHTML)
    if (index < sottotitolo_values.length - 1){
        sottotitolo.innerHTML = sottotitolo_values[index + 1]
    }
    else{
        sottotitolo.innerHTML = sottotitolo_values[0]
    }
}

function update_moodboard(){
    let nome_provvisorio = moodboard_array[Math.floor(Math.random() * moodboard_array.length)]
    console.log(nome_provvisorio)
    current_moodboard_img.src = `resources/images/moodboard/${nome_provvisorio}.JPG`
}


function update(){
    let timerId = setInterval(() => {
        update_sottotitolo()

    }, 500);
}


/*  ***************************************************************************************************************************************
WEB PAGE RESPONSIVE

se la {larghezza_pagina} è minore di un certo valore {larghezza_limite} la barra laterale del menù
viene rimossa

il resto della parte responsive è gestita in responsive.css con 
@media screen and (max-width: 1400px) e le varie impostazioni sulla 
dimensione dell'h1
dai */


function make_mobile_friendly(){
    /*funzione che rende mobile friendly la pagina eliminando la side-bar
    e ridimensionando tutti i div*/

    body.removeChild(side_bar)

    container.style.width = "100%"

    current_moodboard.style.width = "95%"
    music_background.style.width = "95%"

    /* styling della playlist di spotify nell'iframe */
    music_playlist.style.paddingTop = "5px"
    music_playlist.style.paddingLeft = "5px"
    music_playlist.style.paddingBottom = "5px"
    music_playlist.style.width = "90%"
}




function controllo_larghezza_pagina(){

    /*funzione che controlla le dimensioni della pagina per eventulamente
    chiamare la funzione make_mobile_friendly */
    
    if (larghezza_pagina < larghezza_limite){
        make_mobile_friendly()
    }
}


function cambio_foto(immagine){
    let nuova = immagine.children[0]
    let vecchia = document.querySelector(".current-moodboard-img")

    let nuova_src = nuova.src
    let vecchia_src = vecchia.src

    nuova.src = vecchia_src
    vecchia.src = nuova_src

    

    
}


//******************************************************************************************************************************************
//SPAZIO DEDICATO ALLA CALL DELLE FUNZIONI

controllo_larghezza_pagina()
update()



