// alert('hola');

const fila = document.querySelector('.carousel');
const peliculas = document.querySelectorAll('.pelicula');

const btnflechaDerecha = document.querySelector('#flecha-derecha');
const btnflechaIzquierda = document.querySelector('#flecha-izquierda');

//Variables de paginacion

const numeroPaginas = Math.ceil(peliculas.length / 5);
const divIndicadores = document.querySelector('.indicadores');


// Evento flecha derecha carousel
btnflechaDerecha.addEventListener('click', () => {
    //scrollLeft para indicar la posicion del scroll del elemento
    // fila.scrollLeft=1000;

    // offsetWidth returna el ancho del elemento
    // let off = fila.offsetWidth;

    // fila.scrollLeft +=fila.offsetWidth/2
    // console.log(fila.offsetWidth);

    console.log(fila.scrollLeft);
    console.log(`ancho del carousel ${fila.offsetWidth}`);
    fila.scrollLeft = 1000;

    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }

})
// Evento flecha izquierda carousel
btnflechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }

});
//Eventos de paginacion
console.log(numeroPaginas);

for (let i = 0; i < numeroPaginas; i++) {

    const btnIndicador = document.createElement('button');

    if (i == 0) {
        btnIndicador.classList.add('activo');
    }

    divIndicadores.appendChild(btnIndicador);

    divIndicadores.children[i].addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        // if(e.target.classList.contains('activo')){
        //     console.log('hola');
        // }
        document.querySelector('.indicadores .activo').classList.remove('activo');
        e.target.classList.add('activo');

    });

}
//Efecto hover de las peliculas

// const peliculasGroup = document.querySelector('.peliculas-group');


for (let x = 0; x < peliculas.length; x++) {


    peliculas[x].addEventListener('mouseenter', (e) => {
        let peli = e.currentTarget;
        console.log(peli);

        setTimeout(() => {

            peliculas.forEach(p => {
                p.classList.remove('hover');
            })

            peli.classList.add('hover');
        },300)
    })
}

fila.addEventListener('mouseleave',()=>{
    peliculas.forEach(p => {
        p.classList.remove('hover');
    })
})

// peliculas.addEventListener('click',()=>{

//Hacer el carousel mas responsivo
// if(fila.offsetWidth<=800){
    

//     for(let i =0; i<peliculas.length;i++){

//         peliculas[i].style.minWidth='33.3%';

//     }
// }else{
//     for(let i =0; i<peliculas.length;i++){

//         peliculas[i].style.minWidth='20%';

//     }
// }
acomodarPeliculasRecomendadas();

window.addEventListener('resize',()=>{

    // if(fila.offsetWidth<=800){
    //     console.log('hola');
    //     console.log(fila.offsetWidth);

    //     for(let i =0; i<peliculas.length;i++){

    //         peliculas[i].style.minWidth='33.3%';

    //     }
    // }else{
    //     for(let i =0; i<peliculas.length;i++){

    //         peliculas[i].style.minWidth='20%';

    //     }
    // }

    acomodarPeliculasRecomendadas();


});

function acomodarPeliculasRecomendadas(){
    if(fila.offsetWidth<=800){
        console.log('hola');
        console.log(fila.offsetWidth);

        for(let i =0; i<peliculas.length;i++){

            peliculas[i].style.minWidth='33.3%';

        }
    }else{
        for(let i =0; i<peliculas.length;i++){

            peliculas[i].style.minWidth='20%';

        }
    }
}




