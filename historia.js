

let video= document.querySelector("video");
let zonaTiempo=document.querySelector(".tiempo")
let tiempoActual;

const transformacion=(tiempo)=>{
    let minutos;
    let segundos;

    minutos = Math.floor(tiempo / 60);
    segundos = Math.floor(tiempo % 60);
    
    if (segundos < 10) {
        segundos = '0' + String(segundos);
    }
   
    return minutos+":"+segundos 
}   

window.addEventListener('load',()=>{
    zonaTiempo.textContent= transformacion(video.duration)
 })

const inicioVideo=()=>{
    video.play(); 
    tiempoActual=setInterval(()=>{
        let tActual=document.querySelector(".tActual");
        tActual.textContent=transformacion(video.currentTime);
    },1000);
}

const pausaVideo=()=>{
    video.pause();
    clearInterval(tiempoActual)
}

