let indice_pregunta = 0;
let puntaje = 0;
let opciones = [];

cargarPregunta(0);

function cargarPregunta(index) {
    objetoPregunta = baseDePreguntas[index];

    opciones = [...objetoPregunta.distractores];
    opciones.push(objetoPregunta.respuesta);
    opciones.sort(() => Math.random() - 0.5);

    document.getElementById("pregunta").innerHTML = objetoPregunta.pregunta;
    if (objetoPregunta.imagen) {
        document.getElementById("imagen").src = objetoPregunta.imagen;
        document.getElementById("imagen").style.display = "";
    } else {
        document.getElementById("imagen").style.display = "none";
    }

    document.getElementById("opcion1").innerHTML = opciones[0];
    document.getElementById("opcion2").innerHTML = opciones[1];
    document.getElementById("opcion3").innerHTML = opciones[2];
    document.getElementById("opcion4").innerHTML = opciones[3];
}

async function seleccionarOpcion(index) {
    let opcionSeleccionada = opciones[index];
    let validezRespuesta = opcionSeleccionada == objetoPregunta.respuesta;
    if (validezRespuesta) {
        await Swal.fire({
            title: "Respuesta correcta",
            text: "La respuesta ha sido correcta",
            icon: "success"
        });
        puntaje += 10; // Ahora cada respuesta correcta vale 10 puntos
    } else {
        await Swal.fire({
            title: "Respuesta incorrecta",
            text: `La respuesta correcta es ${objetoPregunta.respuesta}`,
            icon: "error"
        });
    }
    indice_pregunta++;
    if (indice_pregunta >= baseDePreguntas.length) {
        let notaFinal = (puntaje / (baseDePreguntas.length * 10)) * 10; // Calcula la nota final sobre 10
        await Swal.fire({
            title: "Juego terminado",
            text: `Tu nota final es: ${notaFinal.toFixed(2)}/10`, // Muestra la nota final con dos decimales
        });
        indice_pregunta = 0;
        puntaje = 0;
    }
    cargarPregunta(indice_pregunta);
}

function ayuda() {
    Swal.fire({
        title: "Ayuda",
        text: objetoPregunta.ayuda,
        imageUrl: objetoPregunta.ayudaImg,
        imageHeight: 250,
    });
}