let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el sujeto en la oración 'El perro corre en el parque'?",
        ayuda: "Pista: El sujeto es quien realiza la acción en la oración.",
        respuesta: "El perro",
        distractores: ["Corre", "En el parque", "El"]
    },
    {
        pregunta: "¿Cuál es el verbo en la oración 'María lee un libro'?",
        ayuda: "Pista: El verbo indica la acción que realiza el sujeto.",
        respuesta: "Lee",
        distractores: ["María", "Un", "Libro"]
    },
    {
        pregunta: "¿Qué tipo de oración es '¡Qué bonito es el día!'?",
        ayuda: "Pista: Este tipo de oración expresa una emoción o exclamación.",
        respuesta: "Oración exclamativa",
        distractores: ["Oración afirmativa", "Oración interrogativa", "Oración imperativa"]
    },
    {
        pregunta: "¿Cuál es el antónimo de 'grande'?",
        ayuda: "Pista: Es una palabra que describe algo de menor tamaño.",
        respuesta: "Pequeño",
        distractores: ["Enorme", "Alto", "Ancho"]
    },
    {
        pregunta: "Elige la opción que contiene un adjetivo en la oración 'La casa blanca es bonita'.",
        ayuda: "Pista: El adjetivo describe características del sustantivo.",
        respuesta: "Blanca",
        distractores: ["Casa", "Es", "Bonita"]
    },
    {
        pregunta: "¿Cuál es el pronombre en la oración 'Ella va al mercado'?",
        ayuda: "Pista: El pronombre reemplaza a un sustantivo.",
        respuesta: "Ella",
        distractores: ["Va", "Al", "Mercado"]
    },
    {
        pregunta: "Lee la oración y elige el sustantivo: 'El gato duerme en el sofá.'",
        ayuda: "Pista: El sustantivo es la palabra que se refiere a una persona, animal o cosa.",
        respuesta: "Sofá",
        distractores: ["Gato", "Duerme", "En"]
    },
    {
        pregunta: "¿Qué tipo de oración es '¿Qué hora es?'?",
        ayuda: "Pista: Este tipo de oración se utiliza para hacer preguntas.",
        respuesta: "Oración interrogativa",
        distractores: ["Oración exclamativa", "Oración afirmativa", "Oración imperativa"]
    },
    {
        pregunta: "¿Cuál es la forma correcta de pluralizar la palabra 'ratón'?",
        ayuda: "Pista: Para formar el plural, se cambia el final de la palabra.",
        respuesta: "Ratones",
        distractores: ["Ratons", "Ratonas", "Ratóns"]
    },
    {
        pregunta: "¿Cómo se llama el signo que se utiliza para separar elementos en una lista?",
        ayuda: "Pista: Este signo se usa en series de elementos para clarificar.",
        respuesta: "Coma",
        distractores: ["Punto", "Dos puntos", "Signo de interrogación"]
    },
    {
        pregunta: "¿Qué palabra es un sinónimo de 'rápido'?",
        ayuda: "Pista: Busca una palabra que tenga un significado similar.",
        respuesta: "Ágil",
        distractores: ["Lento", "Tímido", "Despacio"]
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