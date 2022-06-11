var estadoLicuadora = "apagada";
var licuadora = document.getElementById('blender');
var sonidoLicuadora = document.getElementById('sound_l');
var sonidoBoton = document.getElementById('sound_b');

function controlarLicuadora(){
    if(estadoLicuadora === "apagada") {
        estadoLicuadora = "encendido";
        ruido();
        licuadora.classList.add('active');
    }
    else{
        estadoLicuadora = "apagada";
        ruido();
        licuadora.classList.remove('active');
    }
}

function ruido(){
    if(sonidoLicuadora.paused) {
        sonidoBoton.play();
        sonidoLicuadora.play();
    } else{
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}