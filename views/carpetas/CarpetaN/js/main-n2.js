let Transporte =  ["camion-bomberos.jpg", "helicoptero.jpg", "bus.jpg", "ambulancia.jpg", "carro-policia.jpg", "submarino.jpg", "barco.jpg", "4x4.jpg", "avion.jpg", "camion-basura.jpg", "moto.jpg", "tren.jpg", "camioneta.jpg", "carrito-carga.jpg", "bicicleta.jpg"];
let correcta = [0, 1, 0, 1, 2, 0, 2, 0, 1, 0, 2, 1, 0, 1, 0];
let opciones = [];
opciones.push(['CAMIÓN DE BOMBEROS', 'BUS', 'AMBULANCIA']);
opciones.push(['AVIÓN', 'HELICOPTERO', 'TAXÍ']);
opciones.push(['BUS', 'AMBULANCIA', 'TREN']);
opciones.push(['BUS', 'AMBULANCIA', 'TAXÍ']);
opciones.push(['CAMIÓN DE BOMBEROS', 'MOTO', 'CARRO DE POLICIA']);
opciones.push(['SUBMARINO', 'TAXÍ', 'BARCO']);
opciones.push(['SUBMARINO', 'BUS', 'BARCO']);
opciones.push(['CAMIONETA 4x4', 'CAMIÓN DE COMBEROS', 'BUS']);
opciones.push(['TREN', 'AVIÓN', 'HELICOPTERO']);
opciones.push(['CAMIÓN DE BASURA', 'CAMIÓN DE CARGA', 'FURGON'])
opciones.push(['BICICLETA', 'AVIÓN', 'MOTO']);
opciones.push(['CAMIONETA', 'TREN', 'TAXI']);
opciones.push(['MOT', 'CAMIONETA 4x4', 'AVIÓN']);
opciones.push(['CAMIÓN DE BASURA', 'CARRITO DE CARGA', 'MOTO']);
opciones.push(['BICICLETA', 'MOTO', 'TREN']);

let posActual = 0;
let cantidadAcertada = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertada = 0;
    document.getElementById("pantalla-inicial").style.display = 'none';
    document.getElementById("pantalla-juego").style.display = 'block';
    cargartransporte();
}

function cargartransporte(){Transporte
    if(posActual < Transporte.length){
        limpiarOpciones();

        document.getElementById("imgtransporte").src = "img/" + Transporte[posActual];
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
    setTimeout(cargartransporte, 1000);
}

function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = 'none';
    document.getElementById("pantalla-final").style.display = 'block';
    document.getElementById("numCorrectas").innerHTML = cantidadAcertada;
    document.getElementById("numIncorrectas").innerHTML = Transporte.length - cantidadAcertada;
}

function volverAlInicio(){
    document.getElementById("pantalla-juego").style.display = 'none';
    document.getElementById("pantalla-final").style.display = 'none';
    document.getElementById("pantalla-inicial").style.display = 'block';
}
