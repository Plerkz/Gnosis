let baseDePreguntas = [
    {
        pregunta: "¿Cuál de las siguientes oraciones está escrita en voz activa?",
        ayuda: "Pista: En la voz activa, el sujeto realiza la acción del verbo.",
        respuesta: "El perro persigue al gato.",
        distractores: ["El gato es perseguido por el perro.", "El libro fue leído por María.", "La tarea fue hecha por los estudiantes."],
    },
    {
        pregunta: "¿Qué es un adjetivo en una oración?",
        ayuda: "Pista: Un adjetivo describe o califica a un sustantivo.",
        respuesta: "Una palabra que describe un sustantivo",
        distractores: ["Una palabra que reemplaza a un sustantivo", "Una palabra que indica acción", "Una palabra que une oraciones"],
    },
    {
        pregunta: "¿Qué tipo de oración expresa una pregunta?",
        ayuda: "Pista: Estas oraciones suelen terminar en un signo de interrogación.",
        respuesta: "Oración interrogativa",
        distractores: ["Oración enunciativa", "Oración exclamativa", "Oración imperativa"],
    },
    {
        pregunta: "¿Qué es una preposición?",
        ayuda: "Pista: Una preposición es una palabra que relaciona un sustantivo con otras palabras en la oración.",
        respuesta: "Una palabra que indica relación entre palabras",
        distractores: ["Una palabra que expresa acción", "Una palabra que describe un sustantivo", "Una palabra que reemplaza a un sustantivo"],
    },
    {
        pregunta: "¿Cuál es la función de un pronombre en una oración?",
        ayuda: "Pista: Los pronombres se utilizan para sustituir a los sustantivos.",
        respuesta: "Sustituir a un sustantivo",
        distractores: ["Describir un sustantivo", "Indicar tiempo", "Unir oraciones"],
    },
    {
        pregunta: "¿Qué es un sujeto en una oración?",
        ayuda: "Pista: El sujeto es quien realiza o recibe la acción del verbo.",
        respuesta: "La parte de la oración que realiza o recibe la acción",
        distractores: ["La acción que se realiza", "La palabra que describe el objeto", "La parte de la oración que indica el lugar"],
    },
    {
        pregunta: "¿Cuál es la función principal de los signos de puntuación?",
        ayuda: "Pista: Los signos de puntuación ayudan a estructurar y clarificar el significado de las oraciones.",
        respuesta: "Clarificar el significado y la estructura de las oraciones",
        distractores: ["Indicar el tiempo de los verbos", "Sustituir sustantivos", "Describir adjetivos"],
    },
    {
        pregunta: "¿Qué es un adverbio?",
        ayuda: "Pista: Los adverbios modifican el significado de un verbo, adjetivo u otro adverbio.",
        respuesta: "Una palabra que modifica a un verbo, adjetivo u otro adverbio",
        distractores: ["Una palabra que describe un sustantivo", "Una palabra que indica una acción", "Una palabra que une oraciones"],
    },
    {
        pregunta: "¿Cómo se llama el tipo de oración que da una orden o instrucción?",
        ayuda: "Pista: Estas oraciones suelen comenzar con un verbo en imperativo.",
        respuesta: "Oración imperativa",
        distractores: ["Oración enunciativa", "Oración exclamativa", "Oración interrogativa"],
    },
    {
        pregunta: "¿Qué es una oración compuesta?",
        ayuda: "Pista: Una oración compuesta tiene dos o más oraciones simples unidas por una conjunción.",
        respuesta: "Una oración que contiene dos o más oraciones simples",
        distractores: ["Una oración que contiene un solo verbo", "Una oración que tiene un solo sujeto", "Una oración que no tiene verbo"],
    },
    {
        pregunta: "¿Qué función cumplen las conjunciones en una oración?",
        ayuda: "Pista: Las conjunciones se utilizan para unir palabras, frases u oraciones.",
        respuesta: "Unir palabras, frases u oraciones",
        distractores: ["Describir sustantivos", "Indicar tiempo", "Modificar verbos"],
    },
    {
        pregunta: "¿Qué tipo de oración expresa una emoción o sentimiento?",
        ayuda: "Pista: Estas oraciones terminan con signos de exclamación.",
        respuesta: "Oración exclamativa",
        distractores: ["Oración interrogativa", "Oración enunciativa", "Oración imperativa"],
    },
    {
        pregunta: "¿Qué es una oración enunciativa?",
        ayuda: "Pista: Estas oraciones proporcionan información y terminan con un punto.",
        respuesta: "Una oración que proporciona información",
        distractores: ["Una oración que hace una pregunta", "Una oración que expresa una emoción", "Una oración que da una orden"],
    },
    {
        pregunta: "¿Cuál es el papel de un sustantivo en una oración?",
        ayuda: "Pista: Un sustantivo nombra a una persona, lugar, cosa o idea.",
        respuesta: "Nombrar a una persona, lugar, cosa o idea",
        distractores: ["Describir una acción", "Unir oraciones", "Modificar un verbo"],
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
