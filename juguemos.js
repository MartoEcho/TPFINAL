
window.addEventListener('load', iniciar, false);

function iniciar(){
    var imagenes=document.querySelectorAll('#cajaimagenes img');

     destino1=document.getElementById('cajaDestino1');  
     destino2=document.getElementById('cajaDestino2'); 
     destino3=document.getElementById('cajaDestino3'); 

    for(var i=0; i<imagenes.length; i++){
        imagenes[i].addEventListener('dragstart', arrastrado, false);
    }

    destino1.addEventListener('dragenter', prevenirDefault, false);
    destino1.addEventListener('dragover',  prevenirDefault, false);
    destino1.addEventListener('drop', soltado, false);

    destino2.addEventListener('dragenter', prevenirDefault, false);
    destino2.addEventListener('dragover',  prevenirDefault, false);
    destino2.addEventListener('drop', soltado, false);

    destino3.addEventListener('dragenter', prevenirDefault, false);
    destino3.addEventListener('dragover',  prevenirDefault, false);
    destino3.addEventListener('drop', soltado, false);

}

function prevenirDefault(evento){
    evento.preventDefault();
}

function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

function soltado(e){
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
    e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px" draggable="false">';
}

function reinicio() {
    window.location.reload();
}
