let banderas =  ["irlanda.jpg", "mexico.jpg", "belgica.jpg", "maldivas.jpg", "nauru.jpg", "liberia.jpg", "luxemburgo.jpg", "australia.jpg", "finlandia.jpg", "austria.jpg", "granada.jpg", "francia.jpg", "tailandia.jpg", "sudafrica.jpg", "republica-checa.jpg"];

//AREGLO QUE GUARDARA LA OPCION CORRECTA
let correcta = [0, 1, 0, 2, 0, 1, 1, 0, 2, 1, 0, 1, 1, 0, 1];

//AREGLO QUE GUARDARA LOS PAISES A MOSTRAR EN CADA JUGADA
let opciones = [];
//OPCIONES A MOSTRAR EN CADA JUGADA
opciones.push(['IRLANDA', 'COSTA DE MARFIL', 'INDIA']);
opciones.push(['ITALIA', 'MEXICO', 'SENEGAL']);
opciones.push(['BELGICA', 'ALEMANIA', 'UGANDA']);
opciones.push(['NÍGER', 'KUWAIT', 'MALDIVAS']);
opciones.push(['NAURU', 'ISLAS SALOMÓN', 'ISLAS MARSHALL']);
opciones.push(['ESTADOS UNIDOS', 'LIBERIA', 'SEYCHELLES']);
opciones.push(['PAISES BAJOS', 'LUXEMBURGO', 'FRANCIA']);
opciones.push(['AUSTRALIA', 'NUEVA ZELANDA', 'ESTADOS UNIDOS']);
opciones.push(['ISLANDIA', 'NORUEGA', 'FINLANDIA']);
opciones.push(['LETONIA', 'AUSTRIA', 'DINAMARCA']);
opciones.push(['GRANADA', 'BARBADOS', 'SUAZILANDIA']);
opciones.push(['PAISES BAJOS', 'FRANCIA', 'LUXEMBURGO']);
opciones.push(['COSTA RICA', 'TAILANDIA', 'COREA DEL NORTE']);
opciones.push(['SUDÁFRICA', 'ZIMBABWE', 'SUDÁN']);
opciones.push(['ESLOVAQUIA', 'REPUBLICA CHECA', 'CROACIA']);

//VARIABLE QUE GUARDA LA POSICION ACTUAL
let posActual = 0;
//VARIABLE QUE GUARDA LA CANTIDAD DE ACERTADAS HASTA EL MOMENTO
let cantidadAcertada = 0;

function comenzarJuego(){
    //RESETEAMOS LAS VARIABLES
    posActual = 0;
    cantidadAcertada = 0;
    //ACTIVANDO LAS PANTALLAS NECESARIAS
    document.getElementById("pantalla-inicial").style.display = 'none';
    document.getElementById("pantalla-juego").style.display = 'block';
    cargarBandera()

}

//FUNCIÓN QUE CARGA LA SIGUIENTE BANDERA Y SUS OPCIONES
function cargarBandera(){
    //CONTROLO SI SE ACABARON LAS BANDERAS
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//CARGO LAS OPCIONES
        //LIMPIAMOS LAS CLASES QUE SE ASIGNARON
        limpiarOpciones()

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById('n0').innerHTML = opciones[posActual][0];
        document.getElementById('n1').innerHTML = opciones[posActual][1];
        document.getElementById('n2').innerHTML = opciones[posActual][2];
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
    if (opElegida == correcta[posActual]) { // ACERTÓ
        // AGREGAMOS LAS CLASES PARA COLOCAR EL COLOR VERDE A LA OPCIÓN ELIGIDA
        document.getElementById('n' + opElegida).className = 'nombre nombreAcertada';
        document.getElementById('l' + opElegida).className = 'letra letraAcertada';
        cantidadAcertada++; // Incrementar la cantidad de respuestas correctas
    } else { // NO ACERTÓ
        // AGREGAMOS LAS CLASES PARA COLOCAR EL COLOR ROJO A LA OPCIÓN ELEGIDA
        document.getElementById('n' + opElegida).className = 'nombre nombreNoAcertada';
        document.getElementById('l' + opElegida).className = 'letra letraNoAcertada';

        // OPCIÓN CORRECTA
        document.getElementById('n' + correcta[posActual]).className = 'nombre nombreAcertada';
        document.getElementById('l' + correcta[posActual]).className = 'letra letraAcertada';
    }
    posActual++;
    // ESPERAMOS 1 SEG Y PASAMOS A LA SIGUIENTE BANDERA Y SUS OPCIONES
    setTimeout(cargarBandera, 1000);
}

function terminarJuego(){
    //OCULATMOS LA PANTALLA Y MOSTRAMO LA PANTALLA FINAL
    document.getElementById("pantalla-juego").style.display ='none';
    document.getElementById("pantalla-final").style.display ='block';
    //AGREGAMOS LOS RESULTADOS
    document.getElementById("numCorrectas").innerHTML = cantidadAcertada; 
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertada;
}

function volverAlInicio(){
    //OCULTAMOS LAS PANTALLLAS Y ACTIVAMOS LA INICIAL
    document.getElementById("pantalla-final").style.display = 'none';
    document.getElementById("pantalla-inicial").style.display = 'block';
    document.getElementById("pantalla-juego").style.display = 'none';
}