let baseDePreguntas = [
    {
        pregunta: "¿Qué es un sujeto en una oración y cuál es su función principal?",
        ayuda: "Pista: El sujeto de una oración es quien realiza o recibe la acción del verbo.",
        respuesta: "El sujeto es la parte de la oración que realiza o recibe la acción del verbo",
        distractores: ["El sujeto es el verbo de la oración", "El sujeto es la descripción del objeto", "El sujeto es la parte de la oración que describe el lugar"],
    },
    {
        pregunta: "¿Cómo se clasifica un adjetivo según el tipo de cualidad que expresa?",
        ayuda: "Pista: Los adjetivos pueden clasificarse en diferentes tipos según lo que describen.",
        respuesta: "Los adjetivos se clasifican en calificativos, determinativos, y comparativos",
        distractores: ["Los adjetivos se clasifican en sustantivos y verbos", "Los adjetivos se dividen en preposiciones y conjunciones", "Los adjetivos se dividen en artículos y pronombres"],
    },
    {
        pregunta: "¿Qué es una oración compuesta?",
        ayuda: "Pista: Una oración compuesta está formada por dos o más oraciones simples unidas por una conjunción.",
        respuesta: "Es una oración formada por dos o más oraciones simples unidas por una conjunción",
        distractores: ["Es una oración con solo un verbo", "Es una oración que expresa una sola idea", "Es una oración con un solo sujeto"],
    },
    {
        pregunta: "¿Qué es una oración simple y cómo se estructura?",
        ayuda: "Pista: Una oración simple tiene un solo sujeto y un solo predicado.",
        respuesta: "Una oración simple tiene un solo sujeto y un solo predicado",
        distractores: ["Una oración simple tiene múltiples sujetos y predicados", "Una oración simple está formada por varias proposiciones", "Una oración simple tiene un sujeto y múltiples verbos"],
    },
    {
        pregunta: "¿Cuál es la función de las preposiciones en una oración?",
        ayuda: "Pista: Las preposiciones relacionan palabras dentro de una oración.",
        respuesta: "Las preposiciones relacionan sustantivos, pronombres y otras palabras en una oración",
        distractores: ["Las preposiciones indican el tiempo de la acción", "Las preposiciones describen los adjetivos", "Las preposiciones reemplazan los sustantivos"],
    },
    {
        pregunta: "¿Qué es un pronombre y qué función cumple en una oración?",
        ayuda: "Pista: Los pronombres sustituyen a los sustantivos en una oración.",
        respuesta: "Un pronombre es una palabra que sustituye a un sustantivo y cumple la función de representar a personas, animales o cosas",
        distractores: ["Un pronombre es un tipo de adjetivo", "Un pronombre es una palabra que conecta oraciones", "Un pronombre es una palabra que indica la acción"],
    },
    {
        pregunta: "Elige el adjetivo en la oración: 'El gato negro duerme en el sofá.'",
        ayuda: "Pista: El adjetivo describe al sustantivo.",
        respuesta: "Negro",
        distractores: ["Gato", "Duerme", "Sofá"],
    },
    {
        pregunta: "¿Qué es un verbo transitivo y cómo se diferencia de un verbo intransitivo?",
        ayuda: "Pista: Los verbos transitivos requieren un complemento directo, mientras que los intransitivos no.",
        respuesta: "Un verbo transitivo requiere un complemento directo, mientras que un verbo intransitivo no lo necesita",
        distractores: ["Un verbo transitivo nunca lleva complemento", "Un verbo intransitivo siempre lleva complemento", "Un verbo transitivo no tiene sujeto"],
    },
    {
        pregunta: "¿Qué son los signos de puntuación y por qué son importantes?",
        ayuda: "Pista: Los signos de puntuación ayudan a organizar y dar sentido a las oraciones.",
        respuesta: "Son símbolos que ayudan a organizar el texto y clarificar el significado de las oraciones",
        distractores: ["Son palabras que indican acción", "Son términos que describen lugares", "Son elementos que forman frases y oraciones"],
    },
    {
        pregunta: "¿Cómo se forma el plural de la palabra 'lápiz'?",
        ayuda: "Pista: El plural de 'lápiz' cambia la terminación para indicar que hay más de uno.",
        respuesta: "Lápices",
        distractores: ["Lápizs", "Lápizas", "Lápiceses"],
    },
    {
        pregunta: "¿Qué es una oración interrogativa y cómo se diferencia de una oración afirmativa?",
        ayuda: "Pista: Las oraciones interrogativas hacen preguntas, mientras que las oraciones afirmativas hacen declaraciones.",
        respuesta: "Una oración interrogativa hace una pregunta, mientras que una oración afirmativa hace una declaración",
        distractores: ["Las oraciones interrogativas usan signos de exclamación y las afirmativas signos de interrogación", "Las oraciones afirmativas expresan dudas y las interrogativas certezas", "Las oraciones interrogativas son cortas y las afirmativas largas"],
    },
    {
        pregunta: "¿Qué es la concordancia verbal y por qué es importante?",
        ayuda: "Pista: La concordancia verbal asegura que el verbo concuerde en número y persona con el sujeto.",
        respuesta: "La concordancia verbal asegura que el verbo coincida en número y persona con el sujeto de la oración",
        distractores: ["La concordancia verbal es la relación entre sujeto y adjetivo", "La concordancia verbal se refiere a la posición del verbo en la oración", "La concordancia verbal trata de la concordancia entre sustantivo y adjetivo"],
    },
    {
        pregunta: "Elige el adverbio en la oración: 'Él estudia diligentemente para el examen.'",
        ayuda: "Pista: El adverbio describe cómo se realiza la acción del verbo.",
        respuesta: "Diligentemente",
        distractores: ["Él", "Estudia", "Examen"],
    },
    {
        pregunta: "¿Qué es una proposición subordinada y cómo se diferencia de una proposición principal?",
        ayuda: "Pista: Una proposición subordinada depende de una proposición principal para tener sentido completo.",
        respuesta: "Una proposición subordinada depende de una proposición principal para completar el significado de la oración",
        distractores: ["Una proposición subordinada es independiente y no necesita de la principal", "Una proposición subordinada es siempre una pregunta", "Una proposición principal es la que sigue a la subordinada"],
    },
    {
        pregunta: "¿Cómo se usa correctamente el punto y coma en una oración?",
        ayuda: "Pista: El punto y coma se utiliza para separar ideas relacionadas dentro de una oración compleja.",
        respuesta: "El punto y coma se usa para separar ideas o cláusulas relacionadas dentro de una oración compleja",
        distractores: ["El punto y coma se usa para separar frases cortas y simples", "El punto y coma reemplaza al punto al final de una oración", "El punto y coma se usa solo en preguntas"],
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
