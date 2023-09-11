function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if ( elemento  && elemento.localName === 'audio') {
            elemento.play();        
}
    else{
    console.log('elemento não encontrado')
}
}
const listaDeTeclas = document.querySelectorAll('.tecla');


//enquanto
for (contador = 0;  contador < listaDeTeclas.length; contador++ ) {

    const tecla =  listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    //onkeydwon --> quando a tecla for presionada
    tecla.onkeydown = function (evento){

        if( evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    //onkeyup --> quando a tecla for solta
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}