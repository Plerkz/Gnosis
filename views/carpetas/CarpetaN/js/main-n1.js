let AparatosElectronicos =  ["auriculares.jpg", "tv.jpg", "reloj.jpg", "tablet.jpg", "laptop.jpg", "radio.jpg", "camara.jpg", "cocina.jpg", "refrigerador.jpg", "microondas.jpg", "tostadora.jpg", "licuadora.jpg", "secadora.jpg", "parlante.jpg", "gameboy.jpg"];
let correcta = [0, 1, 0, 1, 2, 0, 2, 0, 1, 0, 2, 1, 0, 1, 0];
let opciones = [];
opciones.push(['AURICULARES', 'GRABADORA', 'RELOJ']);
opciones.push(['MICROONDAS', 'TELEVISOR', 'GRABADORA']);
opciones.push(['RELOJ INTELIGENTE', 'AURICULARES', 'RADIO']);
opciones.push(['RELOJ INTELIGENTE', 'TABLET', 'AURICULARES']);
opciones.push(['PC', 'CELULAR', 'LAPTOP']);
opciones.push(['RADIO', 'MICROONDAS', 'COCINA']);
opciones.push(['PARLANTE', 'PC', 'CÁMARA']);
opciones.push(['COCINA', 'AURICULARES', 'CÁMARA']);
opciones.push(['TELEVISOR', 'REFRIGERADOR', 'GRABADORA']);
opciones.push(['MICROONDAS', 'PC', 'PARLANTE']);
opciones.push(['SECADORA', 'PC', 'TOSTADOR']);
opciones.push(['MICROONDAS', 'LICUADORA', 'PC']);
opciones.push(['SECADORA', 'CÁMARA', 'TOSTADOR']);
opciones.push(['LICUADORA', 'PARLANTE', 'LAPTOP']);
opciones.push(['GAME BOY', 'TOSTADOR', 'PC']);

let posActual = 0;
let cantidadAcertada = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertada = 0;
    document.getElementById("pantalla-inicial").style.display = 'none';
    document.getElementById("pantalla-juego").style.display = 'block';
    cargarAparatosElectronicos();
}

function cargarAparatosElectronicos(){AparatosElectronicos
    if(posActual < AparatosElectronicos.length){
        limpiarOpciones();

        document.getElementById("imgAparatosElectronicos").src = "img/" + AparatosElectronicos[posActual];
        document.getElementById('n0').innerHTML = opciones[posActual][0];
        document.getElementById('n1').innerHTML = opciones[posActual][1];
        document.getElementById('n2').innerHTML = opciones[posActual][2];
    } else {
        terminarJuego();
    }
}

function limpiarOpciones(){
    document.getElementById('n0').className = 'nombre';
    document.getElementById('n1').className = 'nombre';
    document.getElementById('n2').className = 'nombre';

    document.getElementById('l0').className = 'letra';
    document.getElementById('l1').className = 'letra';
    document.getElementById('l2').className = 'letra';
}

function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) {
        document.getElementById('n' + opElegida).className = 'nombre nombreAcertada';
        document.getElementById('l' + opElegida).className = 'letra letraAcertada';
        cantidadAcertada++;
    } else {
        document.getElementById('n' + opElegida).className = 'nombre nombreNoAcertada';
        document.getElementById('l' + opElegida).className = 'letra letraNoAcertada';

        document.getElementById('n' + correcta[posActual]).className = 'nombre nombreAcertada';
        document.getElementById('l' + correcta[posActual]).className = 'letra letraAcertada';
    }
    posActual++;
    setTimeout(cargarAparatosElectronicos, 1000);
}

function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = 'none';
    document.getElementById("pantalla-final").style.display = 'block';
    document.getElementById("numCorrectas").innerHTML = cantidadAcertada;
    document.getElementById("numIncorrectas").innerHTML = AparatosElectronicos.length - cantidadAcertada;
}

function volverAlInicio(){
    document.getElementById("pantalla-juego").style.display = 'none';
    document.getElementById("pantalla-final").style.display = 'none';
    document.getElementById("pantalla-inicial").style.display = 'block';
}
