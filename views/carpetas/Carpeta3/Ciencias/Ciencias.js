let baseDePreguntas = [
    {
        pregunta: "¿Qué es un mamífero?",
        ayuda: "Pista: Son animales que tienen pelo y dan leche a sus crías.",
        respuesta: "Un animal que tiene pelo y da leche a sus crías",
        distractores: ["Un animal que vive en el agua", "Un animal que pone huevos", "Un insecto"]
    },
    {
        pregunta: "¿Cuál es el estado del agua cuando se encuentra a 100 grados Celsius?",
        ayuda: "Pista: Es cuando el agua hierve.",
        respuesta: "Vapor",
        distractores: ["Líquido", "Hielo", "Niebla"]
    },
    {
        pregunta: "¿Qué parte de la planta absorbe agua y nutrientes del suelo?",
        ayuda: "Pista: Es la parte que está enterrada en la tierra.",
        respuesta: "Raíz",
        distractores: ["Hojas", "Tallo", "Flor"]
    },
    {
        pregunta: "¿Qué órgano del cuerpo humano es responsable de bombear la sangre?",
        ayuda: "Pista: Está ubicado en el pecho y se llama el 'motor' del cuerpo.",
        respuesta: "Corazón",
        distractores: ["Pulmón", "Estómago", "Hígado"]
    },
    {
        pregunta: "¿Cuál es el planeta más cercano al Sol?",
        ayuda: "Pista: Es el primer planeta en el sistema solar.",
        respuesta: "Mercurio",
        distractores: ["Venus", "Marte", "Tierra"]
    },
    {
        pregunta: "¿Qué fenómeno causa las estaciones del año?",
        ayuda: "Pista: Es el resultado de la inclinación de la Tierra.",
        respuesta: "La inclinación de la Tierra",
        distractores: ["La distancia de la Tierra al Sol", "Las lluvias", "Los vientos"]
    },
    {
        pregunta: "¿Cuál es la principal fuente de energía para la vida en la Tierra?",
        ayuda: "Pista: Es una estrella que está en el centro del sistema solar.",
        respuesta: "El Sol",
        distractores: ["La Luna", "Las estrellas", "Los cometas"]
    },
    {
        pregunta: "¿Qué tipo de roca se forma a partir de la lava que enfría y solidifica?",
        ayuda: "Pista: Es una roca ígnea.",
        respuesta: "Roca volcánica",
        distractores: ["Roca sedimentaria", "Roca metamórfica", "Roca orgánica"]
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual las plantas convierten la luz solar en alimento?",
        ayuda: "Pista: Es fundamental para la vida en la Tierra.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración", "Transpiración", "Digestión"]
    },
    {
        pregunta: "¿Cuál es el líquido que se encuentra en las células de los seres vivos y ayuda a mantenerlos vivos?",
        ayuda: "Pista: Es esencial para la vida y cubre una gran parte de la superficie terrestre.",
        respuesta: "Agua",
        distractores: ["Aceite", "Líquido amniótico", "Sangre"]
    }
];

// Función para mezclar el orden de las preguntas (shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para mostrar el cuestionario
function mostrarCuestionario() {
    cuestionarioCiencias.forEach((item, index) => {
        console.log(`Pregunta ${index + 1}: ${item.pregunta}`);
        console.log(`Ayuda: ${item.ayuda}`);
        console.log("Opciones:");
        const opciones = [...item.distractores, item.respuesta];
        shuffle(opciones).forEach((opcion, i) => {
            console.log(`  ${i + 1}. ${opcion}`);
        });
    });
}

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