// alert('hola');

const fila = document.querySelector('.carousel');
const peliculas = document.querySelector('.pelicula');

const btnflechaDerecha = document.querySelector('#flecha-derecha');


btnflechaDerecha.addEventListener('click',()=>{
    // fila.scrollLeft=1000;
    // let off = fila.offsetWidth;

    fila.scrollLeft +=fila.offsetWidth/2
    console.log(fila.offsetWidth);
})



