let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el sujeto en la oración 'El perro corre rápido por el parque'?",
        ayuda: "Pista: El sujeto es quien realiza la acción en la oración.",
        respuesta: "El perro",
        distractores: ["corre rápido", "por el parque", "rápido"]
    },
    {
        pregunta: "¿Qué tipo de oración es '¡Qué hermoso día!'?",
        ayuda: "Pista: Este tipo de oración expresa emociones o exclamaciones.",
        respuesta: "Oración exclamativa",
        distractores: ["Oración afirmativa", "Oración interrogativa", "Oración imperativa"]
    },
    {
        pregunta: "¿Cómo se llama el tipo de palabra que describe a un sustantivo?",
        ayuda: "Pista: Estos palabras pueden ser adjetivos como 'bonito', 'grande', 'rojo'.",
        respuesta: "Adjetivo",
        distractores: ["Verbo", "Sustantivo", "Adverbio"]
    },
    {
        pregunta: "¿Cuál es la forma correcta de escribir el plural de 'lápiz'?",
        ayuda: "Pista: Para formar el plural, debes cambiar la palabra para indicar que hay más de uno.",
        respuesta: "Lápices",
        distractores: ["Lápizs", "Lápizes", "Lápizs"]
    },
    {
        pregunta: "¿En qué tipo de texto encuentras normalmente diálogos entre personajes?",
        ayuda: "Pista: Estos textos cuentan historias con conversaciones.",
        respuesta: "Cuento",
        distractores: ["Poema", "Noticia", "Ensayo"]
    },
    {
        pregunta: "¿Qué es una preposición?",
        ayuda: "Pista: Es una palabra que muestra la relación entre un sustantivo y otra parte de la oración.",
        respuesta: "Una palabra que indica relación entre sustantivos y otros elementos",
        distractores: ["Un tipo de verbo", "Un sustantivo", "Un adjetivo"]
    },
    {
        pregunta: "¿Cuál es el antónimo de 'alto'?",
        ayuda: "Pista: Busca una palabra que sea lo opuesto a 'alto'.",
        respuesta: "Bajo",
        distractores: ["Grande", "Largo", "Alto"]
    },
    {
        pregunta: "¿Cómo se llama el signo de puntuación que se usa al final de una oración interrogativa?",
        ayuda: "Pista: Este signo se coloca al final de una pregunta.",
        respuesta: "Signo de interrogación",
        distractores: ["Punto", "Coma", "Signo de exclamación"]
    },
    {
        pregunta: "¿Qué palabra está escrita incorrectamente en la oración: 'El niño estaba muy cansado y se fue a la cama temprano.'?",
        ayuda: "Pista: Busca errores ortográficos en palabras comunes.",
        respuesta: "Cansado",
        distractores: ["Niño", "se", "temprano"]
    },
    {
        pregunta: "¿Cuál es el adverbio en la oración: 'Ella corre rápidamente para llegar a tiempo'?",
        ayuda: "Pista: Este adverbio describe cómo se realiza la acción de correr.",
        respuesta: "Rápidamente",
        distractores: ["Ella", "corre", "tiempo"]
    },
    {
        pregunta: "¿Cómo se llama la persona que escribe un cuento?",
        ayuda: "Pista: Esta persona es responsable de crear historias escritas.",
        respuesta: "Escritor",
        distractores: ["Editor", "Ilustrador", "Lector"]
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
    cuestionarioLenguaje.forEach((item, index) => {
        console.log(`Pregunta ${index + 1}: ${item.pregunta}`);
        console.log(`Ayuda: ${item.ayuda}`);
        console.log("Opciones:");
        const opciones = [...item.distractores, item.respuesta];
        shuffle(opciones).forEach((opcion, i) => {
            console.log(`  ${i + 1}. ${opcion}`);
        });
    });
}
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
    cuestionarioLenguaje.forEach((item, index) => {
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
    if (indice >= 0 && indice < cuestionarioLenguaje.length) {
        cuestionarioLenguaje[indice].pregunta = nuevaPregunta;
        cuestionarioLenguaje[indice].ayuda = nuevaAyuda;
        cuestionarioLenguaje[indice].respuesta = respuestaCorrecta;
        cuestionarioLenguaje[indice].distractores = nuevasRespuestas.filter(respuesta => respuesta !== respuestaCorrecta);
    } else {
        console.log("Índice fuera de rango");
    }
}

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