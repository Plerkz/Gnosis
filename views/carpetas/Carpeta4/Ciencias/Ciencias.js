let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el órgano principal del sistema circulatorio?",
        ayuda: "Pista: Es el órgano que bombea la sangre a todo el cuerpo.",
        respuesta: "Corazón",
        distractores: ["Pulmones", "Estómago", "Hígado"]
    },
    {
        pregunta: "¿Qué planeta del sistema solar es conocido como el 'planeta rojo'?",
        ayuda: "Pista: Este planeta se llama así por su color característico.",
        respuesta: "Marte",
        distractores: ["Júpiter", "Venus", "Saturno"]
    },
    {
        pregunta: "¿Qué parte de la planta absorbe agua y nutrientes del suelo?",
        ayuda: "Pista: Es la parte que está bajo tierra.",
        respuesta: "Raíz",
        distractores: ["Tallo", "Hoja", "Flor"]
    },
    {
        pregunta: "¿Cuál es el estado de la materia que tiene una forma fija y un volumen fijo?",
        ayuda: "Pista: Los sólidos tienen una forma definida y no cambian de volumen fácilmente.",
        respuesta: "Sólido",
        distractores: ["Líquido", "Gas", "Plasma"]
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual las plantas producen su propio alimento?",
        ayuda: "Pista: Este proceso ocurre en las hojas de las plantas y utiliza la luz del sol.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración", "Digestión", "Fermentación"]
    },
    {
        pregunta: "¿Qué tipo de energía proviene del sol?",
        ayuda: "Pista: Es la energía que utilizamos para calentar y para la fotosíntesis.",
        respuesta: "Energía solar",
        distractores: ["Energía térmica", "Energía eléctrica", "Energía nuclear"]
    },
    {
        pregunta: "¿Cuál es el líquido que compone la mayor parte del cuerpo humano?",
        ayuda: "Pista: Es esencial para la vida y se encuentra en abundancia en todos los organismos vivos.",
        respuesta: "Agua",
        distractores: ["Sangre", "Líquido sinovial", "Líquido amniótico"]
    },
    {
        pregunta: "¿Qué tipo de animal pone huevos?",
        ayuda: "Pista: Estos animales incluyen aves y reptiles.",
        respuesta: "Ovíparo",
        distractores: ["Vivíparo", "Necrófago", "Carnívoro"]
    },
    {
        pregunta: "¿Cómo se llama el ciclo que describe el movimiento del agua en la Tierra?",
        ayuda: "Pista: Este ciclo incluye evaporación, condensación y precipitación.",
        respuesta: "Ciclo del agua",
        distractores: ["Ciclo de nutrientes", "Ciclo del carbono", "Ciclo de vida"]
    },
    {
        pregunta: "¿Cuál es la capa más externa de la Tierra?",
        ayuda: "Pista: Es la capa sobre la cual vivimos y es sólida.",
        respuesta: "Corteza terrestre",
        distractores: ["Manto", "Núcleo externo", "Núcleo interno"]
    },
    {
        pregunta: "¿Qué tipo de cambio ocurre cuando el agua se convierte en vapor?",
        ayuda: "Pista: Este cambio ocurre cuando el agua se calienta.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Solidificación", "Fusión"]
    }
];
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