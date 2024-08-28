let baseDePreguntas = [   
    {
        pregunta: "¿Cuál es el sujeto en la oración 'El perro corre rápidamente por el parque'?",
        ayuda: "Pista: El sujeto es quien realiza la acción.",
        respuesta: "El perro",
        distractores: ["Corre rápidamente", "Por el parque", "Rápidamente"]
    },
    {
        pregunta: "¿Qué es un adjetivo?",
        ayuda: "Pista: Este tipo de palabra describe o califica a un sustantivo.",
        respuesta: "Una palabra que describe o califica a un sustantivo",
        distractores: ["Una palabra que indica acción", "Una palabra que une frases", "Una palabra que muestra una relación temporal"]
    },
    {
        pregunta: "¿Cómo se llama el tipo de texto que cuenta una historia o relato ficticio?",
        ayuda: "Pista: Este tipo de texto suele tener personajes, trama y lugar.",
        respuesta: "Narrativo",
        distractores: ["Descriptivo", "Expositivo", "Argumentativo"]
    },
    {
        pregunta: "¿Qué es una metáfora?",
        ayuda: "Pista: Es una figura retórica que compara dos cosas sin usar 'como'.",
        respuesta: "Una comparación implícita entre dos cosas",
        distractores: ["Una comparación explícita usando 'como'", "Una exageración", "Una descripción detallada"]
    },
    {
        pregunta: "¿Cuál es el propósito de un texto expositivo?",
        ayuda: "Pista: Este tipo de texto tiene como objetivo informar o explicar algo.",
        respuesta: "Informar o explicar información",
        distractores: ["Contar una historia", "Persuadir al lector", "Describir un lugar"]
    },
    {
        pregunta: "¿Qué es un sinónimo?",
        ayuda: "Pista: Son palabras que tienen un significado similar.",
        respuesta: "Palabras con significado similar",
        distractores: ["Palabras con significado opuesto", "Palabras que se pronuncian igual", "Palabras que se escriben igual"]
    },
    {
        pregunta: "¿Cómo se llama el tipo de oración que expresa una pregunta?",
        ayuda: "Pista: Estas oraciones terminan con un signo de interrogación.",
        respuesta: "Oración interrogativa",
        distractores: ["Oración exclamativa", "Oración declarativa", "Oración imperativa"]
    },
    {
        pregunta: "¿Qué es un sustantivo?",
        ayuda: "Pista: Esta palabra se usa para nombrar personas, lugares, cosas o ideas.",
        respuesta: "Una palabra que nombra personas, lugares, cosas o ideas",
        distractores: ["Una palabra que describe acciones", "Una palabra que conecta frases", "Una palabra que muestra emociones"]
    },
    {
        pregunta: "¿Cuál es el propósito de un texto argumentativo?",
        ayuda: "Pista: Este tipo de texto busca convencer al lector sobre una idea.",
        respuesta: "Persuadir o convencer al lector",
        distractores: ["Contar una historia", "Describir algo", "Informar sobre un tema"]
    },
    {
        pregunta: "¿Qué es una onomatopeya?",
        ayuda: "Pista: Es una palabra que imita el sonido de lo que describe.",
        respuesta: "Una palabra que imita un sonido",
        distractores: ["Una palabra que describe emociones", "Una palabra que tiene doble significado", "Una palabra que se escribe igual"]
    },
    {
        pregunta: "¿Cuál es el complemento directo en la oración 'Juan lee un libro en la biblioteca'?",
        ayuda: "Pista: El complemento directo es el objeto sobre el cual recae la acción del verbo.",
        respuesta: "Un libro",
        distractores: ["Juan", "Lee", "En la biblioteca"]
    },
    {
        pregunta: "¿Qué es una oración compuesta?",
        ayuda: "Pista: Es una oración que tiene más de una proposición o cláusula.",
        respuesta: "Una oración con más de una proposición",
        distractores: ["Una oración con un solo sujeto", "Una oración que no tiene verbo", "Una oración que describe un lugar"]
    },
    {
        pregunta: "¿Qué es una cláusula subordinada?",
        ayuda: "Pista: Es una parte de una oración que no puede estar sola y depende de una cláusula principal.",
        respuesta: "Una parte de una oración que depende de una cláusula principal",
        distractores: ["Una oración que expresa una pregunta", "Una oración que tiene solo un verbo", "Una oración que puede estar sola"]
    },
    {
        pregunta: "¿Qué es un adverbio?",
        ayuda: "Pista: Este tipo de palabra modifica a un verbo, adjetivo o otro adverbio.",
        respuesta: "Una palabra que modifica a un verbo, adjetivo o adverbio",
        distractores: ["Una palabra que nombra una cosa", "Una palabra que une oraciones", "Una palabra que describe un lugar"]
    },
    {
        pregunta: "¿Cuál es el propósito de un texto descriptivo?",
        ayuda: "Pista: Este tipo de texto se enfoca en detallar cómo es algo o alguien.",
        respuesta: "Describir cómo es algo o alguien",
        distractores: ["Contar una historia", "Explicar un proceso", "Argumentar una idea"]
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