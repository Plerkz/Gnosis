let FrutasVerduras =  ["papa.jpg", "aguacate.jpg", "tomate.jpg", "naranja.jpg", "piña.jpg", "zanahoria.jpg", "limon.jpg", "lechuga.jpg", "brocoli.jpg", "uva.jpg", "mango.jpg", "rabano.jpg", "cebolla.jpg", "elote.jpg", "manzana.jpg"];
let correcta = [0, 1, 0, 1, 2, 0, 2, 0, 1, 0, 2, 1, 0, 1, 0];
let opciones = [];
opciones.push(['PAPA', 'RABANO', 'CEBOLLA']);
opciones.push(['AJO', 'AGUACATE', 'MANGO']);
opciones.push(['TOMATE', 'SANDIA', 'MELOCOTON']);
opciones.push(['MELON', 'NARANJA', 'LIMON']);
opciones.push(['MANZANA', 'PAPA', 'PIÑA']);
opciones.push(['ZANAHORIA', 'CHILE', 'TOMATE']);
opciones.push(['AJO', 'ELOTE', 'LIMON']);
opciones.push(['LECHUGA', 'ESPINACA', 'AJO']);
opciones.push(['CILANTRO', 'BROCÓLI', 'APIO']);
opciones.push(['UVAS', 'MANZANA', 'PIÑA']);
opciones.push(['CEBOLLA', 'AGUACATE', 'MANGO']);
opciones.push(['LIMON', 'RABANO', 'NARANJA']);
opciones.push(['CEBOLLA', 'PIÑA', 'PERA']);
opciones.push(['LECHUGA', 'ELOTE', 'CEBOLLA']);
opciones.push(['MANZANA', 'AGUACATE', 'RABANO']);

let posActual = 0;
let cantidadAcertada = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertada = 0;
    document.getElementById("pantalla-inicial").style.display = 'none';
    document.getElementById("pantalla-juego").style.display = 'block';
    cargarFrutasVerduras();
}

function cargarFrutasVerduras(){FrutasVerduras
    if(posActual < FrutasVerduras.length){
        limpiarOpciones();

        document.getElementById("imgfrutas-verduras").src = "img/" + FrutasVerduras[posActual];
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
    setTimeout(cargarFrutasVerduras, 1000);
}

function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = 'none';
    document.getElementById("pantalla-final").style.display = 'block';
    document.getElementById("numCorrectas").innerHTML = cantidadAcertada;
    document.getElementById("numIncorrectas").innerHTML = FrutasVerduras.length - cantidadAcertada;
}

function volverAlInicio(){
    document.getElementById("pantalla-juego").style.display = 'none';
    document.getElementById("pantalla-final").style.display = 'none';
    document.getElementById("pantalla-inicial").style.display = 'block';
}
