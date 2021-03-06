/* index.js 
TO DO
- doppio current moodboard sequence su due livelli per mobile

- pubblicare su HOSTINGER ENTRO IL WEEKEND

ROYALTY FREE IMAGES
https://www.pexels.com/royalty-free-images
https://pixabay.com
https://unsplash.com

MOBILE CHANGES
- sfondo spotify cambio
- dimensioni spotify
- titoli più grandi
-


*/

/* DEFINIZIONE VARIABILI */

var larghezza_pagina = window.innerWidth
var altezza_pagina = window.innerHeight

const larghezza_limite = 1000
/*la variabile larghezza limite definisce il limite minimo della larghezza 
della pagina per cui viene mostrata la side bar  */


var h3 = document.querySelectorAll("h3")
var paragrafo_about = document.querySelector(".paragrafo-about")
var paragrafo_portfolio = document.querySelector(".paragrafo-portfolio")
var paragrafo_music = document.querySelector(".paragrafo-music")

var body = document.querySelector("body")
var side_bar = document.querySelector(".side-bar")
var container = document.querySelector(".container")
var content = document.querySelector(".content")
var social_bar = document.querySelector(".social-bar")

var giacomo_maggiore = document.querySelector(".giacomo-maggiore")

var sottotitolo = document.querySelector(".sottotitolo")
var sottotitolo_values = ["programmer", "runner", "student", "design passionate", "architecture enthusiastic", "tech guy", "book eater" ]

var sub_container_sottotitolo = document.querySelectorAll(".sub-container-sottotitolo")

var current_moodboard_img = document.querySelector(".current-moodboard-img")
var current_moodboard = document.querySelector(".current-moodboard")

var seconda_riga = document.querySelector("#seconda-riga")

var img_4 = document.querySelector("#img-4")
var img_5 = document.querySelector("#img-5")
var img_6 = document.querySelector("#img-6")


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
    console.log("MOBILE FRIENDLY DONE!")
    /*funzione che rende mobile friendly la pagina eliminando la side-bar
    e ridimensionando tutti i div*/

    body.removeChild(side_bar)
    
    console.log(paragrafo_about)
    console.log(paragrafo_portfolio)
    console.log(paragrafo_music)
    paragrafo_about.style.fontSize = "200%"
    paragrafo_portfolio.style.fontSize = "200%"
    paragrafo_music.style.fontSize = "200%"

    //cambio di dimensione di tutti i sottotitoli tramite iterazione nella lista h3
    for (i = 0; i < h3.length; i++){
        h3[i].style.fontSize = "350%"
    }
    
    giacomo_maggiore.style.fontSize = "400%"

    container.style.width = "100%"

    content.style.width = "95%"

    social_bar.style.height = "60px"

    current_moodboard.style.width = "95%"
    music_background.style.width = "95%"
    music_background.style.backgroundImage = "none"
    music_background.style.backgroundColor = "trasparent"

    /* aggiunta della seconda sequence nel current moodboard */


    seconda_riga.appendChild(img_4)
    seconda_riga.appendChild(img_5)
    seconda_riga.appendChild(img_6)

    


    /* styling della playlist di spotify nell'iframe */
    music_playlist.style.paddingTop = "0px"
    music_playlist.style.paddingLeft = "0px"
    music_playlist.style.paddingBottom = "0px"
    music_playlist.style.width = "100%"



}

function controllo_larghezza_pagina(){

    /*funzione che controlla le dimensioni della pagina per eventulamente
    chiamare la funzione make_mobile_friendly */
    
    if (larghezza_pagina < larghezza_limite || larghezza_pagina / altezza_pagina < 1){
        make_mobile_friendly()
    }
}

/* ***********************************************************************************************************************************************
cambio di foto centrale del current moodboard quando ne viene cliccata un'altra */
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



