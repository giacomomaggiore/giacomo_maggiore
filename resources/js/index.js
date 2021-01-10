const sottotitolo = document.querySelector(".sottotitolo")
const sottotitolo_values = ["programmer", "runner", "student", "design addicted", "coglione", "architetto", "biondo"]
const current_moodboard_img = document.querySelector(".current-moodboard-img")
console.log(current_moodboard_img)


const moodboard_array = ["1","2","3","4","5","6","montagna"]

//CAMBIO DI SOTTOTITOLO OGNI SECONDO
function update_sottotitolo(){
    sottotitolo.innerHTML = sottotitolo_values[Math.floor(Math.random() * sottotitolo_values.length)]   
}

function update_moodboard(){
    let nome_provvisorio = moodboard_array[Math.floor(Math.random() * moodboard_array.length)]
    console.log(nome_provvisorio)
    current_moodboard_img.src = `resources/images/moodboard/${nome_provvisorio}.JPG`
}


function update(){
    let timerId = setInterval(() => {
        update_sottotitolo()
        update_moodboard()


    }, 800);
}


update()

