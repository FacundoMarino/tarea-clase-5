//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.



document.querySelector('#enviar1').onclick = function(){
    const horaVideoUno = Number(document.querySelector('#hora1').value);
    const minutosVideoUno = Number(document.querySelector('#minutos1').value);
    const segundosVideoUno = Number(document.querySelector('#segundos1').value);
    
    return horaVideoUno, minutosVideoUno, segundosVideoUno;
    return false;

}

document.querySelector('#enviar2').onclick = function(){
    const horaVideoDos = Number(document.querySelector('#hora2').value);
    const minutosVideoDos = Number(document.querySelector('#minutos2').value);
    const segundosVideoDos = Number(document.querySelector('#segundos2').value);
    
    return false;

}

document.querySelector('#enviar3').onclick = function(){
    const horaVideoTres = Number(document.querySelector('#hora3').value);
    const minutosVideoTres = Number(document.querySelector('#minutos3').value);
    const segundosVideoTres = Number(document.querySelector('#segundos3').value);
    
    return false;

}

let totalHoras = horaVideoUno + horaVideoDos + horaVideoTres;
let totalMinutos = minutosVideoUno + minutosVideoDos + minutosVideoTres;
let totalSegundos = segundosVideoUno + segundosVideoDos + segundosVideoTres;

console.log(totalHoras);

console.log(totalMinutos);

console.log(totalSegundos);