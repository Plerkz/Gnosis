let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la función de un adjetivo en una oración?",
        ayuda: "Pista: Este tipo de palabra describe o califica a un sustantivo.",
        respuesta: "Describir o calificar un sustantivo",
        distractores: ["Sustituir un sustantivo", "Conjugar un verbo", "Conectar oraciones"],
    },
    {
        pregunta: "¿Qué es una oración compuesta?",
        ayuda: "Pista: Este tipo de oración contiene más de una proposición o idea completa.",
        respuesta: "Una oración que contiene dos o más proposiciones",
        distractores: ["Una oración con un solo sujeto", "Una oración sin verbo", "Una oración con un solo predicado"],
    },
    {
        pregunta: "¿Cuál es el propósito principal de un texto narrativo?",
        ayuda: "Pista: Este tipo de texto se centra en contar una historia o relato.",
        respuesta: "Contar una historia o relato",
        distractores: ["Informar sobre hechos", "Persuadir al lector", "Describir un objeto"],
    },
    {
        pregunta: "¿Qué tipo de palabras son los pronombres?",
        ayuda: "Pista: Estas palabras se utilizan para sustituir nombres o sustantivos.",
        respuesta: "Palabras que sustituyen nombres",
        distractores: ["Palabras que describen acciones", "Palabras que unen oraciones", "Palabras que indican lugar"],
    },
    {
        pregunta: "¿Cuál es la diferencia principal entre un sustantivo concreto y un sustantivo abstracto?",
        ayuda: "Pista: Los sustantivos concretos pueden percibirse con los sentidos, mientras que los abstractos no.",
        respuesta: "Los sustantivos concretos son perceptibles con los sentidos; los abstractos no",
        distractores: ["Los concretos se usan en singular; los abstractos en plural", "Los concretos son nombres propios; los abstractos son comunes", "Los concretos se refieren a ideas; los abstractos a cosas"],
    },
    {
        pregunta: "¿Qué es una metáfora?",
        ayuda: "Pista: Este recurso literario compara dos cosas sin usar 'como' o 'parece'.",
        respuesta: "Comparación implícita entre dos cosas",
        distractores: ["Comparación explícita usando 'como'", "Exageración de características", "Descripción detallada"],
    },
    {
        pregunta: "¿Cómo se llama el tiempo verbal que se usa para describir acciones que están ocurriendo en el presente?",
        ayuda: "Pista: Este tiempo verbal indica acciones que suceden en el momento en que se habla.",
        respuesta: "Presente",
        distractores: ["Pasado", "Futuro", "Condicional"],
    },
    {
        pregunta: "¿Qué es un texto expositivo?",
        ayuda: "Pista: Este tipo de texto tiene como objetivo informar o explicar un tema.",
        respuesta: "Texto que informa o explica un tema",
        distractores: ["Texto que narra una historia", "Texto que persuade al lector", "Texto que describe un lugar"],
    },
    {
        pregunta: "¿Qué tipo de oración es la siguiente: 'Aunque llovía, fuimos al parque'?",
        ayuda: "Pista: Esta oración contiene una proposición principal y una subordinada.",
        respuesta: "Oración compuesta",
        distractores: ["Oración simple", "Oración exclamativa", "Oración imperativa"],
    },
    {
        pregunta: "¿Cuál es la función de los conectores en un texto?",
        ayuda: "Pista: Estos elementos ayudan a unir ideas y partes del texto de manera coherente.",
        respuesta: "Unir ideas y partes del texto",
        distractores: ["Describir objetos", "Modificar sustantivos", "Expresar emociones"],
    },
    {
        pregunta: "¿Qué es una oración subordinada?",
        ayuda: "Pista: Esta oración depende de otra para tener sentido completo.",
        respuesta: "Oración que depende de otra para tener sentido",
        distractores: ["Oración que tiene un solo sujeto", "Oración que no contiene verbo", "Oración que termina en punto"],
    },
    {
        pregunta: "¿Qué es la sintaxis en gramática?",
        ayuda: "Pista: Este aspecto de la gramática estudia cómo se organizan y relacionan las palabras en una oración.",
        respuesta: "El estudio de la organización y relación de las palabras en una oración",
        distractores: ["El estudio de los sonidos del habla", "El estudio del significado de las palabras", "El estudio de los tiempos verbales"],
    },
    {
        pregunta: "¿Qué recurso literario se utiliza cuando se da una exageración evidente para enfatizar una idea?",
        ayuda: "Pista: Este recurso puede hacer que una afirmación parezca más grande de lo que realmente es.",
        respuesta: "Hipérbole",
        distractores: ["Metáfora", "Símil", "Ironía"],
    },
    {
        pregunta: "¿Cuál es la función de una introducción en un texto?",
        ayuda: "Pista: Esta parte del texto presenta el tema y capta la atención del lector.",
        respuesta: "Presentar el tema y captar la atención del lector",
        distractores: ["Desarrollar el argumento principal", "Concluir el texto", "Detallar ejemplos específicos"],
    },
    {
    pregunta: "¿Qué tipo de oración se utiliza para hacer una pregunta?",
    ayuda: "Pista: Estas oraciones generalmente terminan con un signo de interrogación.",
    respuesta: "Oración interrogativa",
    distractores: ["Oración afirmativa", "Oración exclamativa", "Oración imperativa"],
    },
    {
    pregunta: "¿Qué es una parábola en literatura?",
    ayuda: "Pista: Este recurso literario cuenta una historia simple que tiene una enseñanza moral o ética.",
    respuesta: "Una historia con enseñanza moral o ética",
    distractores: ["Una descripción detallada", "Una exageración de características", "Una comparación implícita"],
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
