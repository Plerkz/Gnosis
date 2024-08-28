let baseDePreguntas = [
    {
        pregunta: "¿Qué diferencia hay entre una oración simple y una oración compuesta?",
        ayuda: "Pista: Una oración simple tiene un solo sujeto y predicado, mientras que una oración compuesta tiene más de uno.",
        respuesta: "Una oración simple tiene un solo sujeto y predicado, mientras que una oración compuesta tiene dos o más.",
        distractores: ["Una oración simple tiene dos sujetos, mientras que una oración compuesta tiene uno.", "Una oración simple no tiene verbo, mientras que una oración compuesta sí.", "Una oración simple tiene múltiples cláusulas, mientras que una oración compuesta tiene una sola."],
    },
    {
        pregunta: "¿Qué son los conectores subordinantes y cómo se utilizan en una oración compuesta?",
        ayuda: "Pista: Los conectores subordinantes introducen una oración subordinada dentro de una oración principal.",
        respuesta: "Son palabras que introducen oraciones subordinadas y establecen una relación de dependencia con la oración principal.",
        distractores: ["Son palabras que unen oraciones independientes", "Son palabras que describen sustantivos", "Son palabras que modifican adjetivos"],
    },
    {
        pregunta: "¿Cuál es la diferencia entre el uso de 'por qué', 'porque', 'porqué' y 'por que' en la escritura?",
        ayuda: "Pista: Cada forma tiene una función específica en una oración, como preguntar, responder, o expresar causa o motivo.",
        respuesta: "'Por qué' se usa en preguntas, 'porque' en respuestas y explicaciones, 'porqué' en sustantivos, y 'por que' en estructuras complejas.",
        distractores: ["Son intercambiables y se usan sin distinción", "'Por qué' es para respuestas, 'porque' para preguntas", "'Por qué' se usa en respuestas, 'porque' en preguntas", "'Porqué' se usa para preguntar, 'por que' para responder"],
    },
    {
        pregunta: "¿Cómo se identifican las oraciones subordinadas adjetivas en un texto?",
        ayuda: "Pista: Estas oraciones funcionan como adjetivos dentro de la oración principal, describiendo un sustantivo.",
        respuesta: "Se identifican porque describen o califican a un sustantivo en la oración principal y están introducidas por pronombres relativos.",
        distractores: ["Describen la acción del verbo principal", "Indican el tiempo en la oración principal", "Son independientes y no tienen relación con la oración principal"],
    },
    {
        pregunta: "¿Qué es una oración compleja y cuáles son sus componentes principales?",
        ayuda: "Pista: Una oración compleja incluye una oración principal y al menos una oración subordinada.",
        respuesta: "Es una oración que tiene una oración principal y al menos una oración subordinada que depende de la principal.",
        distractores: ["Es una oración que tiene solo un sujeto y un predicado", "Es una oración que contiene más de un verbo", "Es una oración sin sujeto explícito"],
    },
    {
        pregunta: "¿Cuál es el propósito de usar signos de puntuación como los dos puntos y el punto y coma en una oración?",
        ayuda: "Pista: Estos signos ayudan a organizar y clarificar el significado de las oraciones más complejas.",
        respuesta: "Los dos puntos se usan para introducir listas, explicaciones o citas, y el punto y coma se usa para separar partes de una oración compleja o listas que ya contienen comas.",
        distractores: ["Los dos puntos se usan para separar oraciones completas, y el punto y coma para unir frases simples.", "Los dos puntos se usan para indicar preguntas, y el punto y coma para exclamaciones.", "Los dos puntos se usan en preguntas, y el punto y coma para respuestas."],
    },
    {
        pregunta: "¿Cómo se distingue una oración subordinada adverbial de una oración subordinada adjetiva?",
        ayuda: "Pista: Las oraciones subordinadas adverbiales modifican el verbo y responden a preguntas como cuándo, cómo, dónde, mientras que las adjetivas describen a un sustantivo.",
        respuesta: "Las adverbiales modifican el verbo principal y responden a preguntas como cuándo o por qué, mientras que las adjetivas califican un sustantivo.",
        distractores: ["Las adverbiales responden a preguntas de lugar, y las adjetivas responden a preguntas de tiempo.", "Las adverbiales describen el sujeto, y las adjetivas describen el objeto.", "Las adverbiales modifican el sustantivo, y las adjetivas modifican el verbo."],
    },
    {
        pregunta: "¿Qué es un análisis sintáctico y cómo se realiza en una oración compleja?",
        ayuda: "Pista: El análisis sintáctico descompone una oración en sus componentes para entender su estructura gramatical.",
        respuesta: "Es el proceso de identificar y descomponer los roles gramaticales de cada parte de la oración, como sujeto, predicado, y complementos.",
        distractores: ["Es el proceso de identificar el significado de cada palabra en una oración.", "Es la técnica de escribir oraciones complejas sin errores.", "Es el método de traducir oraciones a otro idioma."],
    },
    {
        pregunta: "¿Qué diferencia hay entre un adjetivo calificativo y un adjetivo determinativo?",
        ayuda: "Pista: Los adjetivos calificativos describen características del sustantivo, mientras que los determinativos especifican el sustantivo en términos de cantidad, posesión, etc.",
        respuesta: "Los adjetivos calificativos describen cualidades del sustantivo, mientras que los determinativos indican cantidad, posesión u otra relación.",
        distractores: ["Los adjetivos calificativos indican cantidad, y los determinativos describen cualidades.", "Los adjetivos calificativos modifican verbos, y los determinativos modifican sustantivos.", "Los adjetivos calificativos describen lugares, y los determinativos indican el tiempo."],
    },
    {
        pregunta: "¿Cuál es la función de una oración subordinada sustantiva dentro de una oración compleja?",
        ayuda: "Pista: Las oraciones subordinadas sustantivas actúan como un sustantivo dentro de la oración principal.",
        respuesta: "Funciona como un sujeto, objeto directo o complemento dentro de la oración principal.",
        distractores: ["Actúa como un adjetivo calificativo", "Modifica el verbo principal", "Introduce una lista de ejemplos"],
    },
    {
        pregunta: "¿Qué es la concordancia verbal y por qué es importante en la escritura?",
        ayuda: "Pista: La concordancia verbal asegura que el verbo concuerde en número y persona con el sujeto de la oración.",
        respuesta: "Es la correcta coincidencia entre el sujeto y el verbo en cuanto a número y persona, y es importante para mantener la coherencia gramatical.",
        distractores: ["Es la coincidencia entre adjetivos y sustantivos", "Es la coincidencia entre pronombres y sustantivos", "Es la coincidencia entre oraciones independientes"],
    },
    {
        pregunta: "¿Cómo se utiliza el estilo indirecto para reportar un discurso en la escritura?",
        ayuda: "Pista: El estilo indirecto parafrasea lo que alguien dijo sin usar las palabras exactas del discurso.",
        respuesta: "Se utiliza parafraseando el contenido del discurso, cambiando los tiempos verbales y evitando el uso de comillas.",
        distractores: ["Se usa citando las palabras exactas con comillas", "Se usa para describir emociones en lugar de palabras", "Se usa como una forma de escribir poesía"],
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
