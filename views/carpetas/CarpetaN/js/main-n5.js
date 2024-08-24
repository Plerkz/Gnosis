let Profesiones =  ["bombero.jpg", "soldado.jpg", "abogado.jpg", "policia.jpg", "constructor.jpg", "astronauta.jpg", "profesor.jpg", "reportero.jpg", "enfermera.jpg", "chef.jpg", "entrenador.jpg", "doctor.jpg", "granjero.jpg", "cientifico.jpg", "salva-vida.jpg"];
let correcta = [0, 1, 2, 1, 0, 2, 0, 2, 0, 1, 0, 2, 0, 1, 1];
let opciones = [];
opciones.push(['BOMBERO', 'ASTRONAUTA', 'MEDICO']);
opciones.push(['POLICIA', 'SOLDADO', 'PROFESOR']);
opciones.push(['ENFERMERA', 'SOLDADO', 'ABOGADO']);
opciones.push(['DOCTOR', 'POLICIA', 'BOMBERO']);
opciones.push(['CONSTRUCTOR', 'SALVA VIDA', 'ENFERMERA']);
opciones.push(['SOLDADO', 'DOCTOR', 'ASTRONAUTA']);
opciones.push(['PROFESOR', 'POLICIA', 'REPORTERO']);
opciones.push(['ASTRONAUTA', 'MEDICO', 'REPORTERO']);
opciones.push(['ENFERMERA', 'REPORTERA', 'CHEF']);
opciones.push(['ASTRONAUTA', 'CHEF', 'DOCTOR']);
opciones.push(['ENTRENADOR', 'SOLDADO', 'ENFERMERA']);
opciones.push(['ASTRONAUTA', 'SOLDADO', 'DOCTOR']);
opciones.push(['GRANJERO', 'POLICIA', 'CHEF']);
opciones.push(['CHEF', 'CIENTIFICO', 'REPORTERO']);
opciones.push(['ASTRONAUTA', 'SALVA VIDA', 'CHEF']);

let posActual = 0;
let cantidadAcertada = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertada = 0;
    document.getElementById("pantalla-inicial").style.display = 'none';
    document.getElementById("pantalla-juego").style.display = 'block';
    cargarProfesiones();
}

function cargarProfesiones(){
    if(posActual < Profesiones.length){
        limpiarOpciones();

        document.getElementById("imgProfesiones").src = "img/" + Profesiones[posActual];
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
    setTimeout(cargarProfesiones, 1000);
}

function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = 'none';
    document.getElementById("pantalla-final").style.display = 'block';
    document.getElementById("numCorrectas").innerHTML = cantidadAcertada;
    document.getElementById("numIncorrectas").innerHTML = Profesiones.length - cantidadAcertada;
}

function volverAlInicio(){
    document.getElementById("pantalla-juego").style.display = 'none';
    document.getElementById("pantalla-final").style.display = 'none';
    document.getElementById("pantalla-inicial").style.display = 'block';
}
