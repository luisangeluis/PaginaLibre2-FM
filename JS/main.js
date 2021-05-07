// alert('hola');

const fila = document.querySelector('.carousel');
const peliculas = document.querySelectorAll('.pelicula');

const btnflechaDerecha = document.querySelector('#flecha-derecha');
const btnflechaIzquierda = document.querySelector('#flecha-izquierda');

//Variables de paginacion

const numeroPaginas = Math.ceil(peliculas.length/5);
const divIndicadores = document.querySelector('.indicadores');


// Evento flecha derecha carousel
btnflechaDerecha.addEventListener('click',()=>{
    //scrollLeft para indicar la posicion del scroll del elemento
    // fila.scrollLeft=1000;

    // offsetWidth returna el ancho del elemento
    // let off = fila.offsetWidth;

    // fila.scrollLeft +=fila.offsetWidth/2
    // console.log(fila.offsetWidth);

    console.log(fila.scrollLeft);
    console.log(`ancho del carousel ${fila.offsetWidth}`);
    fila.scrollLeft=1000;

    fila.scrollLeft +=fila.offsetWidth/2;

})
// Evento flecha izquierda carousel
btnflechaIzquierda.addEventListener('click',()=>{
    fila.scrollLeft-=fila.offsetWidth/2;
    
});

console.log(numeroPaginas);

for(let i=0; i<numeroPaginas;i++){

    const btnIndicador = document.createElement('button');
    
    if(i==0){
        btnIndicador.classList.add('activo');
    }

    divIndicadores.appendChild(btnIndicador);

    btnIndicador.addEventListener('click',(e)=>{
        fila.scrollLeft = i*fila.offsetWidth;

        // if(e.target.classList.contains('activo')){
        //     console.log('hola');
        // }
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');        
        
    });


}






