//setTimeout -> ejecuta una funcion pasado x tiempo en ms.
let contador =1;
function mensaje (){
    document.write(`<p>Esta es una prueba de SetInterval, N=${contador}</p>`);
    if(contador === 6){
        //logica para detener el setInterval
        clearInterval(idInterval);
    }
    contador++;
}

// window.setTimeout(mensaje, 3000);

// setTimeout(mensaje,4000);

// setTimeout(() => {
//     document.write(`<p>Esta es una nueva prueba</p>`)
// }, 1000);


//setInterval -> ejecutar una funcion cada x tiempo en ms

const idInterval = setInterval(mensaje,2000);
