let Animales =  ["tigre.jpg", "camello.jpg", "mono.jpg", "pez.jpg", "loro.jpg", "murcielago.jpg", "zebra.jpg", "perro.jpg", "elefante.jpg", "caballo.jpg", "conejo.jpg", "panda.jpg", "pollo.jpg", "tortuga.jpg", "pulpo.jpg"];

// ARREGLO QUE GUARDARÁ LA OPCIÓN CORRECTA
let correcta = [0, 2, 0, 0, 1, 2, 2, 1, 1, 0, 2, 0, 2, 0, 1];

// ARREGLO QUE GUARDARÁ LOS NOMBRES DE ANIMALES A MOSTRAR EN CADA JUGADA
let opciones = [];
// OPCIONES A MOSTRAR EN CADA JUGADA
opciones.push(['TIGRE', 'LEÓN', 'SERPIENTE']);
opciones.push(['COCODRILO', 'GORILA', 'CAMELLO']);
opciones.push(['MONO', 'PANTERA', 'BURRO']);
opciones.push(['PEZ', 'INSECTO', 'CAMALEON']);
opciones.push(['MURCIELAGO', 'LORO', 'AGUILA']);
opciones.push(['ZEBRA', 'HIPOPOTAMO', 'MURCIELAGO']);
opciones.push(['DELFIN', 'BALLENA', 'ZEBRA']);
opciones.push(['VENADO', 'PERRO', 'GATO']);
opciones.push(['PERICO', 'ELEFANTE', 'OSO']);
opciones.push(['CABALLO', 'VACA', 'CERDO']);
opciones.push(['OSO', 'RATA', 'CONEJO']);
opciones.push(['OSO PANDA', 'KOALA', 'ARDILLA']);
opciones.push(['OVEJA', 'ARDILLA', 'POLLO']);
opciones.push(['TORTUGA MARINA', 'SAPO', 'ARAÑA']);
opciones.push(['CANGREJO', 'PULPO', 'MEDUSA']);

// VARIABLE QUE GUARDA LA POSICIÓN ACTUAL
let posActual = 0;
// VARIABLE QUE GUARDA LA CANTIDAD DE RESPUESTAS CORRECTAS HASTA EL MOMENTO
let cantidadAcertada = 0;

function comenzarJuego(){
    // RESETEAMOS LAS VARIABLES
    posActual = 0;
    cantidadAcertada = 0;
    // ACTIVANDO LAS PANTALLAS NECESARIAS
    document.getElementById("pantalla-inicial").style.display = 'none';
    document.getElementById("pantalla-juego").style.display = 'block';
    cargarAnimales();
}

// FUNCIÓN QUE CARGA LA SIGUIENTE IMAGEN DE ANIMAL Y SUS OPCIONES
function cargarAnimales(){
    // CONTROLO SI SE ACABARON LOS ANIMALES
    if(Animales.length <= posActual){
        terminarJuego();
    }
    else{
        // LIMPIAMOS LAS CLASES QUE SE ASIGNARON
        limpiarOpciones();

        document.getElementById("imgAnimales").src = "img/" + Animales[posActual];
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
        // AGREGAMOS LAS CLASES PARA COLOCAR EL COLOR VERDE A LA OPCIÓN ELEGIDA
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
    // ESPERAMOS 1 SEGUNDO Y PASAMOS A LA SIGUIENTE IMAGEN DE ANIMAL Y SUS OPCIONES
    setTimeout(cargarAnimales, 1000);
}

function terminarJuego(){
    // OCULTAMOS LA PANTALLA DE JUEGO Y MOSTRAMOS LA PANTALLA FINAL
    document.getElementById("pantalla-juego").style.display ='none';
    document.getElementById("pantalla-final").style.display ='block';
    // AGREGAMOS LOS RESULTADOS
    document.getElementById("numCorrectas").innerHTML = cantidadAcertada; 
    document.getElementById("numIncorrectas").innerHTML = Animales.length - cantidadAcertada;
}

function volverAlInicio(){
    // OCULTAMOS LAS PANTALLAS DE JUEGO Y PANTALLA FINAL, Y ACTIVAMOS LA PANTALLA INICIAL
    document.getElementById("pantalla-juego").style.display = 'none';
    document.getElementById("pantalla-final").style.display = 'none';
    document.getElementById("pantalla-inicial").style.display = 'block';
}
