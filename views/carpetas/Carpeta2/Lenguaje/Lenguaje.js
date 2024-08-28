let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el sinónimo de la palabra 'feliz'?",
        ayuda: "Pista: Es una palabra que usas para describir un estado de alegría o contento.",
        respuesta: "Alegre",
        distractores: ["Triste", "Enojado", "Cansado"]
    },
    {
        pregunta: "Elige la opción que contiene un verbo en pasado:",
        ayuda: "Pista: Este verbo describe una acción que ya ocurrió.",
        respuesta: "Caminó",
        distractores: ["Camina", "Caminando", "Caminaremos"]
    },
    {
        pregunta: "¿Qué tipo de oración es la siguiente: 'Por favor, cierra la puerta'?",
        ayuda: "Pista: Este tipo de oración da una orden o petición.",
        respuesta: "Oración imperativa",
        distractores: ["Oración exclamativa", "Oración afirmativa", "Oración interrogativa"]
    },
    {
        pregunta: "¿Cuál es el antónimo de 'rápido'?",
        ayuda: "Pista: Es una palabra que describe algo que no se mueve con velocidad.",
        respuesta: "Lento",
        distractores: ["Ágil", "Rápida", "Veloz"]
    },
    {
        pregunta: "Lee la siguiente oración y elige la opción correcta para completar el espacio en blanco: 'Mi hermana siempre ____ a la escuela en bicicleta.'",
        ayuda: "Pista: Este verbo indica una acción habitual en el presente.",
        respuesta: "Va",
        distractores: ["Iría", "Iba", "Fue"]
    },
    {
        pregunta: "¿Cómo se llama el signo de puntuación que se usa para indicar una pregunta?",
        ayuda: "Pista: Este signo se coloca al inicio y al final de una pregunta en español.",
        respuesta: "Signo de interrogación",
        distractores: ["Punto", "Coma", "Signo de exclamación"]
    },
    {
        pregunta: "¿Qué palabra está escrita incorrectamente en la siguiente oración? 'El niñio juega en el parque con sus amigos.'",
        ayuda: "Pista: Busca errores ortográficos en palabras comunes.",
        respuesta: "Niñio",
        distractores: ["Juega", "Parque", "Amigos"]
    },
    {
        pregunta: "Identifica el adjetivo en la oración: 'El perro grande corre rápidamente.'",
        ayuda: "Pista: Este es el adjetivo que describe cómo es el perro.",
        respuesta: "Grande",
        distractores: ["Perro", "Corre", "Rápidamente"]
    },
    {
        pregunta: "Elige la opción que es una oración compuesta:",
        ayuda: "Pista: Una oración compuesta tiene más de una proposición unida por una conjunción.",
        respuesta: "Pedro y Ana fueron al cine, y luego cenaron juntos.",
        distractores: ["María juega al fútbol.", "El sol brilla.", "Juan come pizza."]
    },
    {
        pregunta: "¿Cuál es el pronombre correcto para completar la oración: '____ vamos al parque todos los días.'",
        ayuda: "Pista: Este pronombre se usa cuando el grupo incluye al hablante.",
        respuesta: "Nosotros",
        distractores: ["Ellos", "Tú", "Ella"]
    },
    {
        pregunta: "¿Qué es una preposición?",
        ayuda: "Pista: Es una palabra que se usa para relacionar sustantivos, pronombres y otras palabras en una oración.",
        respuesta: "Una palabra que relaciona otras palabras en una oración",
        distractores: ["Una acción", "Un sustantivo", "Un adjetivo"]
    },
    {
        pregunta: "Lee la oración y elige el sustantivo: 'La casa de mi abuela es muy grande.'",
        ayuda: "Pista: Busca la palabra que se refiere a una cosa o a una persona en la oración.",
        respuesta: "Casa",
        distractores: ["Mi", "Grande", "Abuela"]
    },
    {
        pregunta: "¿Cuál es la forma correcta de escribir el plural de 'ratón'?",
        ayuda: "Pista: Para formar el plural, debes cambiar la palabra para indicar que hay más de uno.",
        respuesta: "Ratones",
        distractores: ["Ratons", "Ratóns", "Ratonas"]
    },
    {
        pregunta: "¿Cómo se llama el tipo de oración que expresa sorpresa o emoción?",
        ayuda: "Pista: Este tipo de oración usa signos de exclamación.",
        respuesta: "Oración exclamativa",
        distractores: ["Oración imperativa", "Oración interrogativa", "Oración afirmativa"]
    },
    {
        pregunta: "¿Cuál es el adverbio en la siguiente oración: 'El niño corrió rápidamente al colegio'?",
        ayuda: "Pista: Este adverbio describe cómo se realizó la acción de correr.",
        respuesta: "Rápidamente",
        distractores: ["Niño", "Corrió", "Colegio"]
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