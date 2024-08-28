let baseDePreguntas = [
    {
        pregunta: "¿Qué es un sustantivo?",
        ayuda: "Pista: Esta palabra nombra a personas, animales, cosas o lugares.",
        respuesta: "Una palabra que nombra personas, animales, cosas o lugares",
        distractores: ["Una palabra que describe una acción", "Una palabra que modifica al verbo", "Una palabra que indica tiempo"],
    },
    {
        pregunta: "¿Qué es un verbo?",
        ayuda: "Pista: Este tipo de palabra describe una acción o estado.",
        respuesta: "Una palabra que describe una acción o estado",
        distractores: ["Una palabra que describe un objeto", "Una palabra que une ideas", "Una palabra que nombra cosas"],
    },
    {
        pregunta: "¿Qué es una metáfora?",
        ayuda: "Pista: Es una figura literaria que compara dos cosas diferentes sin usar 'como'.",
        respuesta: "Una comparación implícita entre dos cosas diferentes",
        distractores: ["Una exageración intencional", "Una comparación usando 'como'", "Una descripción literal"],
    },
    {
        pregunta: "¿Cuál es el sujeto de la oración?",
        ayuda: "Pista: Es la persona, animal o cosa que realiza la acción del verbo.",
        respuesta: "El que realiza la acción del verbo",
        distractores: ["El que recibe la acción", "El que describe el verbo", "El que une las ideas"],
    },
    {
        pregunta: "¿Qué es un adjetivo?",
        ayuda: "Pista: Esta palabra describe características o cualidades de un sustantivo.",
        respuesta: "Una palabra que describe las características de un sustantivo",
        distractores: ["Una palabra que modifica un verbo", "Una palabra que enlaza ideas", "Una palabra que nombra lugares"],
    },
    {
        pregunta: "¿Qué tipo de oración es '¿Dónde vive tu familia?'?",
        ayuda: "Pista: Este tipo de oración busca obtener información.",
        respuesta: "Oración interrogativa",
        distractores: ["Oración exclamativa", "Oración afirmativa", "Oración imperativa"],
    },
    {
        pregunta: "¿Qué es una oración compuesta?",
        ayuda: "Pista: Este tipo de oración tiene más de un verbo y expresa dos o más ideas.",
        respuesta: "Una oración que tiene más de un verbo",
        distractores: ["Una oración que expresa una idea", "Una oración que describe un solo sujeto", "Una oración que tiene una sola palabra"],
    },
    {
        pregunta: "¿Qué es una fábula?",
        ayuda: "Pista: Es un relato breve que incluye una enseñanza moral.",
        respuesta: "Un relato breve que deja una enseñanza o moraleja",
        distractores: ["Un cuento largo con personajes reales", "Una leyenda sobre hechos históricos", "Una descripción detallada de eventos"],
    },
    {
        pregunta: "¿Qué es una onomatopeya?",
        ayuda: "Pista: Es una palabra que imita el sonido de lo que describe.",
        respuesta: "Una palabra que imita sonidos",
        distractores: ["Una palabra que describe acciones", "Una exageración poética", "Una comparación entre dos ideas"],
    },
    {
        pregunta: "¿Qué tipo de texto explica el procedimiento para realizar una actividad paso a paso?",
        ayuda: "Pista: Este tipo de texto suele tener instrucciones detalladas y secuenciales.",
        respuesta: "Texto instructivo",
        distractores: ["Texto narrativo", "Texto descriptivo", "Texto argumentativo"],
    },
    {
        pregunta: "¿Qué función tiene el uso de signos de exclamación en una oración?",
        ayuda: "Pista: Los signos de exclamación expresan emociones fuertes o sorpresa.",
        respuesta: "Expresar emociones o énfasis",
        distractores: ["Hacer una pregunta", "Describir acciones", "Unir dos ideas"],
    },
    {
        pregunta: "¿Qué tipo de palabra es 'rápidamente'?",
        ayuda: "Pista: Esta palabra describe cómo se realiza una acción.",
        respuesta: "Adverbio",
        distractores: ["Adjetivo", "Verbo", "Sustantivo"],
    },
    {
        pregunta: "¿Qué es un sinónimo?",
        ayuda: "Pista: Es una palabra que tiene un significado similar a otra.",
        respuesta: "Una palabra que tiene un significado similar a otra",
        distractores: ["Una palabra que tiene el significado opuesto", "Una palabra que se usa para unir oraciones", "Una palabra que describe un objeto"],
    },
    {
        pregunta: "¿Qué tipo de narrador cuenta una historia en tercera persona?",
        ayuda: "Pista: Este narrador no participa en la historia y relata los eventos desde fuera.",
        respuesta: "Narrador omnisciente",
        distractores: ["Narrador en primera persona", "Narrador limitado", "Narrador protagonista"],
    },
    {
        pregunta: "¿Qué función cumple el párrafo introductorio en un texto expositivo?",
        ayuda: "Pista: Este párrafo presenta la idea principal y prepara al lector para el contenido.",
        respuesta: "Introducir el tema y presentar la idea principal",
        distractores: ["Concluir el texto", "Desarrollar los argumentos", "Mostrar ejemplos y detalles"],
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

// Mezclar el orden de las preguntas para que no estén agrupadas por nivel de dificultad
baseDePreguntas = shuffle(baseDePreguntas);
