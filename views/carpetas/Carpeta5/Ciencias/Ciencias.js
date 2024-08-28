let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la unidad básica de la vida?",
        ayuda: "Pista: Todos los organismos vivos están formados por estas estructuras.",
        respuesta: "Célula",
        distractores: ["Órgano", "Tissue", "Átomo"]
    },
    {
        pregunta: "¿Qué órgano en el cuerpo humano es responsable de bombear la sangre?",
        ayuda: "Pista: Este órgano está en el centro del pecho y es esencial para la circulación sanguínea.",
        respuesta: "Corazón",
        distractores: ["Pulmón", "Hígado", "Riñón"]
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual las plantas producen su propio alimento?",
        ayuda: "Pista: Este proceso utiliza la luz solar para convertir el dióxido de carbono en glucosa.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración", "Digestión", "Fermentación"]
    },
    {
        pregunta: "¿Cuál es el estado de la materia en el que las partículas están muy separadas y se mueven libremente?",
        ayuda: "Pista: Este estado incluye gases como el aire.",
        respuesta: "Gas",
        distractores: ["Sólido", "Líquido", "Plasma"]
    },
    {
        pregunta: "¿Qué planeta es conocido como el 'Planeta Rojo'?",
        ayuda: "Pista: Este planeta es el cuarto desde el Sol y su color es rojo debido al óxido de hierro.",
        respuesta: "Marte",
        distractores: ["Venus", "Júpiter", "Saturno"]
    },
    {
        pregunta: "¿Qué tipo de animal es un delfín?",
        ayuda: "Pista: Estos animales viven en el agua y son conocidos por su inteligencia.",
        respuesta: "Mamífero",
        distractores: ["Pez", "Reptil", "Aves"]
    },
    {
        pregunta: "¿Cuál es el proceso por el cual el agua se convierte en vapor?",
        ayuda: "Pista: Este proceso ocurre cuando el agua se calienta.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Precipitación", "Filtración"]
    },
    {
        pregunta: "¿Cuál es la fuerza que atrae los objetos hacia la Tierra?",
        ayuda: "Pista: Esta fuerza es responsable de que los objetos caigan al suelo.",
        respuesta: "Gravedad",
        distractores: ["Fricción", "Magnetismo", "Inercia"]
    },
    {
        pregunta: "¿Qué elemento químico tiene el símbolo 'O' en la tabla periódica?",
        ayuda: "Pista: Este elemento es esencial para la respiración de los seres vivos.",
        respuesta: "Oxígeno",
        distractores: ["Oro", "Osmio", "Odio"]
    },
    {
        pregunta: "¿Qué parte de la planta absorbe agua y nutrientes del suelo?",
        ayuda: "Pista: Esta parte generalmente está bajo tierra.",
        respuesta: "Raíz",
        distractores: ["Tallo", "Hoja", "Flor"]
    },
    {
        pregunta: "¿Qué es una cadena alimentaria?",
        ayuda: "Pista: Es un sistema que muestra cómo la energía fluye de un organismo a otro.",
        respuesta: "Secuencia de organismos que muestran cómo la energía fluye",
        distractores: ["Un ciclo de agua", "Una red de nutrientes", "Una lista de alimentos"]
    }
];
// Función para cambiar una pregunta
function cambiarPregunta(indice, nuevaPregunta, nuevaAyuda, nuevasRespuestas, respuestaCorrecta) {
    if (indice >= 0 && indice < cuestionarioCiencias.length) {
        cuestionarioCiencias[indice].pregunta = nuevaPregunta;
        cuestionarioCiencias[indice].ayuda = nuevaAyuda;
        cuestionarioCiencias[indice].respuesta = respuestaCorrecta;
        cuestionarioCiencias[indice].distractores = nuevasRespuestas.filter(respuesta => respuesta !== respuestaCorrecta);
    } else {
        console.log("Índice fuera de rango");
    }
}

// Mostrar cuestionario original
console.log("Cuestionario de Ciencias original:");
mostrarCuestionario();

// Cambiar la primera pregunta
cambiarPregunta(
    0,
    "¿Cuál es la función principal de la raíz de una planta?",
    "Pista: La raíz ancla la planta y absorbe agua.",
    ["Sostener la planta", "Hacer fotosíntesis", "Transportar nutrientes"],
    "Sostener la planta"
);
// Función para mezclar el orden de las preguntas (shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
;

// Función para mezclar el orden de las preguntas (shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mezclar el orden de las preguntas para que no estén agrupadas por nivel de dificultad
baseDePreguntas = shuffle(baseDePreguntas);