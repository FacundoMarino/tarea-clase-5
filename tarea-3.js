//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector('#calcular').onclick = function(){

    let horaVideo1 = Number(document.querySelector('#hora').value)
    let horaVideo2 = Number(document.querySelector('#hora2').value)
    let horaVideo3 = Number(document.querySelector('#hora3').value)
    let horaVideo4 = Number(document.querySelector('#hora4').value)
    let horaVideo5 = Number(document.querySelector('#hora5').value)

let horasTotal = horaVideo1 + horaVideo2 + horaVideo3 + horaVideo4 + horaVideo5
    
    let minutosVideo1 = Number(document.querySelector('#minutos').value)
    let minutosVideo2 = Number(document.querySelector('#minutos2').value)
    let minutosVideo3 = Number(document.querySelector('#minutos3').value)
    let minutosVideo4 = Number(document.querySelector('#minutos4').value)
    let minutosVideo5= Number(document.querySelector('#minutos5').value)

let minutosTotal = minutosVideo1 + minutosVideo2 + minutosVideo3 + minutosVideo4 + minutosVideo5

    let segundosVideo1 = Number(document.querySelector('#segundos').value)
    let segundosVideo2 = Number(document.querySelector('#segundos2').value)
    let segundosVideo3 = Number(document.querySelector('#segundos3').value)
    let segundosVideo4 = Number(document.querySelector('#segundos4').value)
    let segundosVideo5 = Number(document.querySelector('#segundos5').value)

let segundosTotal = segundosVideo1 + segundosVideo2 + segundosVideo3 + segundosVideo4 + segundosVideo5


while(segundosTotal > 60){
        minutosTotal++
        segundosTotal  -= 60 
        
    }

    while(minutosTotal > 60){
        horasTotal++
        minutosTotal  -= 60 
        
    }

let resultado = `${horasTotal}:${minutosTotal}:${segundosTotal}`;

let mostrarResultado = document.querySelector('#resultado')

mostrarResultado.textContent = resultado;


console.log(horasTotal)
console.log(minutosTotal)
console.log(segundosTotal)
}