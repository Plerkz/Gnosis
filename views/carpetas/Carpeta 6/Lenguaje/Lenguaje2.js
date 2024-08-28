let baseDePreguntas = [
    {
        pregunta: "¿Qué es un texto argumentativo?",
        ayuda: "Pista: Este tipo de texto presenta una posición o punto de vista sobre un tema con el objetivo de convencer.",
        respuesta: "Un texto que presenta argumentos para defender una opinión o postura",
        distractores: ["Un texto que narra hechos reales o ficticios", "Un texto que describe personas, lugares o cosas", "Un texto que informa sobre un tema sin opinión"],
    },
    {
        pregunta: "¿Qué es una oración subordinada?",
        ayuda: "Pista: Esta oración depende de otra para completar su significado y suele introducirse con conjunciones como 'que', 'aunque' o 'cuando'.",
        respuesta: "Una oración que depende de otra para tener sentido completo",
        distractores: ["Una oración que expresa una acción principal", "Una oración que tiene solo un verbo", "Una oración que se puede entender por sí sola"],
    },
    {
        pregunta: "¿Qué es un texto expositivo?",
        ayuda: "Pista: Este tipo de texto explica de manera objetiva un tema o concepto con el fin de informar.",
        respuesta: "Un texto que presenta información clara y objetiva sobre un tema",
        distractores: ["Un texto que narra historias reales o ficticias", "Un texto que busca convencer al lector de una opinión", "Un texto que describe detalladamente personas, lugares o eventos"],
    },
    {
        pregunta: "¿Qué es la connotación de una palabra?",
        ayuda: "Pista: Es el significado subjetivo o emocional que puede tener una palabra, más allá de su definición literal.",
        respuesta: "El significado emocional o simbólico de una palabra",
        distractores: ["El significado literal de una palabra", "La estructura gramatical de una palabra", "El origen etimológico de una palabra"],
    },
    {
        pregunta: "¿Cuál es la diferencia entre un poema de verso libre y un poema de verso regular?",
        ayuda: "Pista: El verso libre no sigue un esquema de rima o métrica fija.",
        respuesta: "El poema de verso libre no sigue una métrica ni rima fija, mientras que el de verso regular sí",
        distractores: ["El poema de verso libre sigue reglas estrictas de métrica", "El poema de verso regular no tiene rima", "El poema de verso libre solo usa versos cortos"],
    },
    {
        pregunta: "¿Qué es una hipérbole?",
        ayuda: "Pista: Es una figura literaria que exagera la realidad para causar un mayor impacto.",
        respuesta: "Una exageración intencionada para enfatizar una idea",
        distractores: ["Una comparación directa entre dos cosas", "Una descripción exacta de la realidad", "Una repetición innecesaria de palabras"],
    },
    {
        pregunta: "¿Qué es un texto narrativo en primera persona?",
        ayuda: "Pista: En este tipo de texto, el narrador es también el personaje principal que cuenta la historia desde su perspectiva.",
        respuesta: "Un texto donde el narrador cuenta la historia desde su propia perspectiva",
        distractores: ["Un texto donde el narrador es omnisciente", "Un texto donde el narrador no participa en la historia", "Un texto donde el narrador describe solo los diálogos"],
    },
    {
        pregunta: "¿Qué es un texto descriptivo?",
        ayuda: "Pista: Este tipo de texto se centra en detallar las características de personas, lugares, objetos o situaciones.",
        respuesta: "Un texto que describe detalladamente las características de algo o alguien",
        distractores: ["Un texto que relata acciones o eventos", "Un texto que defiende una opinión o postura", "Un texto que cuenta una historia o anécdota"],
    },
    {
        pregunta: "¿Qué tipo de conjunciones son 'aunque', 'sin embargo' y 'pero'?",
        ayuda: "Pista: Estas conjunciones introducen contrastes o contradicciones entre ideas.",
        respuesta: "Conjunciones adversativas",
        distractores: ["Conjunciones coordinadas", "Conjunciones copulativas", "Conjunciones subordinantes"],
    },
    {
        pregunta: "¿Qué es un campo semántico?",
        ayuda: "Pista: Es un grupo de palabras que comparten un área de significado relacionada.",
        respuesta: "Un conjunto de palabras relacionadas por su significado",
        distractores: ["Un conjunto de palabras que tienen el mismo sonido", "Un conjunto de palabras con raíces comunes", "Un conjunto de palabras que expresan acciones similares"],
    },
    {
        pregunta: "¿Qué tipo de recurso literario es la aliteración?",
        ayuda: "Pista: Este recurso consiste en la repetición de sonidos consonantes para crear un efecto sonoro en un texto.",
        respuesta: "La repetición de sonidos consonantes en una oración o verso",
        distractores: ["La comparación de dos ideas opuestas", "La exageración de una característica", "El uso de palabras con significados similares"],
    },
    {
        pregunta: "¿Cuál es la diferencia entre narrador omnisciente y narrador testigo?",
        ayuda: "Pista: El narrador omnisciente conoce todo sobre los personajes y eventos, mientras que el testigo solo narra lo que ve.",
        respuesta: "El narrador omnisciente conoce todo sobre la historia, mientras que el testigo solo narra lo que presencia",
        distractores: ["El narrador testigo cuenta la historia desde fuera de los eventos", "El narrador omnisciente solo conoce lo que piensa un personaje", "El narrador testigo narra en primera persona"],
    },
    {
        pregunta: "¿Qué es una oración compuesta subordinada?",
        ayuda: "Pista: En este tipo de oración, una parte depende de otra para completar su significado.",
        respuesta: "Una oración en la que una proposición depende de otra para tener sentido completo",
        distractores: ["Una oración con dos ideas independientes", "Una oración con un solo verbo", "Una oración simple con un solo sujeto"],
    },
    {
        pregunta: "¿Qué es una antítesis?",
        ayuda: "Pista: Es una figura literaria que presenta ideas opuestas para enfatizar un contraste.",
        respuesta: "Una figura literaria que enfrenta dos ideas opuestas",
        distractores: ["Una exageración de una idea", "Una comparación entre dos elementos similares", "Una repetición intencionada de palabras o sonidos"],
    },
    {
        pregunta: "¿Qué es un pronombre relativo?",
        ayuda: "Pista: Este tipo de pronombre introduce una oración subordinada y se refiere a un sustantivo previamente mencionado.",
        respuesta: "Un pronombre que introduce una oración subordinada refiriéndose a un sustantivo previo",
        distractores: ["Un pronombre que reemplaza a un sustantivo", "Un pronombre que se usa para indicar posesión", "Un pronombre que señala la ubicación de algo"],
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
