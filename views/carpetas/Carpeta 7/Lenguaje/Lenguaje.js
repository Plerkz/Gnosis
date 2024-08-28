let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la función del sujeto en una oración?",
        ayuda: "Pista: El sujeto de una oración es quien realiza o recibe la acción del verbo.",
        respuesta: "Realiza o recibe la acción del verbo",
        distractores: ["Describe el verbo", "Indica el lugar de la acción", "Conjuga el verbo"],
    },
    {
        pregunta: "¿Qué es un adjetivo?",
        ayuda: "Pista: Es una palabra que describe o califica al sustantivo.",
        respuesta: "Una palabra que describe o califica al sustantivo",
        distractores: ["Una palabra que reemplaza al sustantivo", "Una palabra que une oraciones", "Una palabra que indica acción"],
    },
    {
        pregunta: "¿Cómo se forma el plural de la palabra 'ratón'?",
        ayuda: "Pista: Para formar el plural, debes cambiar la palabra para indicar que hay más de uno.",
        respuesta: "Ratones",
        distractores: ["Ratons", "Ratonas", "Ratóns"],
    },
    {
        pregunta: "¿Qué es una oración compuesta?",
        ayuda: "Pista: Una oración compuesta está formada por dos o más proposiciones unidas por una conjunción.",
        respuesta: "Una oración formada por dos o más proposiciones unidas por una conjunción",
        distractores: ["Una oración con solo un verbo", "Una oración que expresa una sola idea", "Una oración con un solo sujeto"],
    },
    {
        pregunta: "Elige el adverbio en la oración: 'Ella corre rápidamente al colegio.'",
        ayuda: "Pista: El adverbio describe cómo se realiza la acción del verbo.",
        respuesta: "Rápidamente",
        distractores: ["Ella", "Corre", "Colegio"],
    },
    {
        pregunta: "¿Cuál es el pronombre correcto para completar la oración: '____ está en la clase de matemáticas.'",
        ayuda: "Pista: Este pronombre se usa para referirse a una tercera persona singular.",
        respuesta: "Él",
        distractores: ["Yo", "Nosotros", "Ustedes"],
    },
    {
        pregunta: "¿Qué tipo de oración es: '¡Qué bonito es este lugar!'?",
        ayuda: "Pista: Este tipo de oración expresa admiración o sorpresa.",
        respuesta: "Oración exclamativa",
        distractores: ["Oración imperativa", "Oración interrogativa", "Oración afirmativa"],
    },
    {
        pregunta: "¿Cuál es la diferencia entre una oración afirmativa y una oración interrogativa?",
        ayuda: "Pista: Las oraciones afirmativas hacen una declaración, mientras que las oraciones interrogativas hacen una pregunta.",
        respuesta: "Las oraciones afirmativas declaran algo y las interrogativas preguntan algo",
        distractores: ["Las oraciones afirmativas son preguntas y las interrogativas son declaraciones", "Las oraciones afirmativas usan signos de exclamación y las interrogativas signos de interrogación", "Las oraciones afirmativas son cortas y las interrogativas largas"],
    },
    {
        pregunta: "¿Qué es una preposición?",
        ayuda: "Pista: Es una palabra que se utiliza para relacionar un sustantivo o pronombre con otras palabras en la oración.",
        respuesta: "Una palabra que relaciona sustantivos, pronombres u otras palabras en una oración",
        distractores: ["Una palabra que describe un verbo", "Una palabra que indica el tiempo", "Una palabra que conecta dos oraciones"],
    },
    {
        pregunta: "¿Cuál es el adjetivo en la oración: 'El libro interesante está en la mesa.'?",
        ayuda: "Pista: El adjetivo describe la calidad del sustantivo.",
        respuesta: "Interesante",
        distractores: ["Libro", "Está", "Mesa"],
    },
    {
        pregunta: "¿Cómo se escribe el plural de la palabra 'ciudad'?",
        ayuda: "Pista: Para formar el plural, debes añadir la terminación adecuada a la palabra.",
        respuesta: "Ciudades",
        distractores: ["Ciudads", "Ciudads", "Ciudad"],
    },
    {
        pregunta: "¿Qué es una oración simple?",
        ayuda: "Pista: Una oración simple contiene un solo sujeto y un solo predicado.",
        respuesta: "Una oración con un solo sujeto y un solo predicado",
        distractores: ["Una oración con varias proposiciones", "Una oración que expresa una sola idea", "Una oración con varios sujetos"],
    },
    {
        pregunta: "¿Qué son los signos de puntuación y para qué sirven?",
        ayuda: "Pista: Los signos de puntuación se utilizan para organizar y clarificar el significado de las oraciones.",
        respuesta: "Son símbolos que ayudan a organizar y clarificar el texto",
        distractores: ["Son palabras que indican acción", "Son palabras que describen objetos", "Son oraciones que expresan emociones"],
    },
    {
        pregunta: "Elige el pronombre adecuado para completar la oración: 'Mis amigos y yo vamos al parque. ____ queremos mucho.'",
        ayuda: "Pista: Este pronombre se refiere a un grupo que incluye al hablante.",
        respuesta: "Nosotros",
        distractores: ["Ellos", "Tú", "Él"],
    },
    {
        pregunta: "¿Qué tipo de oración es: 'Por favor, apaga la luz?'",
        ayuda: "Pista: Este tipo de oración hace una solicitud o comando.",
        respuesta: "Oración imperativa",
        distractores: ["Oración exclamativa", "Oración interrogativa", "Oración afirmativa"],
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

// Mezclar el orden de las preguntas para que no estén agrupadas por tema
baseDePreguntas = shuffle(baseDePreguntas);
