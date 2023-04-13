function obtenerFechaHora(){
    let fechaActual = new Date();
    // console.log(fechaActual);
    // console.log(fechaActual.getDate());//1-31
    // console.log(fechaActual.getDay());// 0-6
    // console.log(fechaActual.getMonth()); //0-11
    // console.log(fechaActual.getFullYear()); //0-11
    
    let fecha= document.getElementById('fecha');
    let hora = document.getElementById('hora');
    
    // jueves x de Abril del x
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    fecha.innerHTML = `${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${monthsOfYear[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    
    let horaActual = fechaActual.getHours(),
     minutosActuales = fechaActual.getMinutes(),
     segundosActuales = fechaActual.getSeconds();
    
     if(segundosActuales<10){
        segundosActuales = '0'+segundosActuales;
     }
     if(minutosActuales<10){
        minutosActuales = '0'+minutosActuales;
     }
     if(horaActual<10){
        horaActual = '0'+horaActual;
     }
    
    hora.innerHTML = `${horaActual}:${minutosActuales}:${segundosActuales}`
    
} 

function cambiarEstilo(color){
    let section = document.getElementById('contenedorPrincipal');
    section.className = 'fs-1 '+color
}

let btnAzul = document.getElementById('btnAzul'),
btnGris = document.getElementById('btnGris'),
btnRojo = document.getElementById('btnRojo');

btnAzul.addEventListener('click', ()=> cambiarEstilo('text-Azul'));
btnGris.addEventListener('click', ()=> cambiarEstilo('text-Gris'));
btnRojo.addEventListener('click', ()=> cambiarEstilo('text-Rojo'));

setInterval(obtenerFechaHora,1000)