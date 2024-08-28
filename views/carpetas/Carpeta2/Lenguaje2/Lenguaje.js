let baseDePreguntas = [
    {
        pregunta: "¿Qué es un sustantivo?",
        ayuda: "Pista: Es una palabra que nombra personas, lugares o cosas.",
        respuesta: "Una palabra que nombra personas, lugares o cosas",
        distractores: ["Una acción", "Un sentimiento", "Una pregunta"]
    },
    {
        pregunta: "¿Cuál de las siguientes es una vocal?",
        ayuda: "Pista: Son las letras A, E, I, O, U.",
        respuesta: "E",
        distractores: ["M", "R", "L"]
    },
    {
        pregunta: "¿Cómo se llama la palabra que describe una acción?",
        ayuda: "Pista: Son palabras que dicen qué hace alguien o algo.",
        respuesta: "Verbo",
        distractores: ["Sustantivo", "Adjetivo", "Artículo"]
    },
    {
        pregunta: "¿Cuál de las siguientes es una oración?",
        ayuda: "Pista: Debe tener sentido completo y un verbo.",
        respuesta: "El gato juega en el jardín.",
        distractores: ["Juega gato jardín.", "El en jardín juega.", "Gato jardín."]
    },
    {
        pregunta: "¿Qué parte de la oración indica quién o qué realiza la acción?",
        ayuda: "Pista: Es el sujeto de la oración.",
        respuesta: "Sujeto",
        distractores: ["Predicado", "Complemento", "Conjunción"]
    },
    {
        pregunta: "¿Cómo se llama el signo que usamos al final de una pregunta?",
        ayuda: "Pista: Es un signo curvo que se usa para hacer preguntas.",
        respuesta: "Signo de interrogación",
        distractores: ["Signo de exclamación", "Punto", "Coma"]
    },
    {
        pregunta: "¿Qué tipo de palabra es 'feliz'?",
        ayuda: "Pista: Describe cómo es algo o alguien.",
        respuesta: "Adjetivo",
        distractores: ["Verbo", "Sustantivo", "Adverbio"]
    },
    {
        pregunta: "¿Cuál es la primera letra del alfabeto?",
        ayuda: "Pista: Es la letra con la que empieza la mayoría de los alfabetos.",
        respuesta: "A",
        distractores: ["B", "C", "D"]
    },
    {
        pregunta: "¿Qué signo se usa para indicar una pausa corta en una oración?",
        ayuda: "Pista: Es un pequeño signo que se usa entre palabras.",
        respuesta: "Coma",
        distractores: ["Punto", "Signo de interrogación", "Signo de exclamación"]
    },
    {
        pregunta: "¿Qué tipo de texto nos cuenta una historia o cuento?",
        ayuda: "Pista: Son libros o relatos que tienen personajes y eventos.",
        respuesta: "Narrativo",
        distractores: ["Descriptivo", "Instructivo", "Expositivo"]
    },
    {
        pregunta: "¿Cómo se llama el conjunto de palabras que forman un mensaje completo?",
        ayuda: "Pista: Es una unidad gramatical que tiene sentido.",
        respuesta: "Oración",
        distractores: ["Frase", "Palabra", "Párrafo"]
    },
    {
        pregunta: "¿Qué tipo de palabras son 'rápidamente' y 'suavemente'?",
        ayuda: "Pista: Describen cómo se realiza una acción.",
        respuesta: "Adverbios",
        distractores: ["Sustantivos", "Adjetivos", "Verbos"]
    },
    {
        pregunta: "¿Cuál es la función del artículo en una oración?",
        ayuda: "Pista: Se usa para definir o especificar sustantivos.",
        respuesta: "Definir sustantivos",
        distractores: ["Describir acciones", "Hacer preguntas", "Conectar oraciones"]
    },
    {
        pregunta: "¿Qué palabra completa la oración: 'El perro ____ en el parque.'?",
        ayuda: "Pista: La acción que hace el perro.",
        respuesta: "Corre",
        distractores: ["Casa", "Rápido", "Gato"]
    },
    {
        pregunta: "¿Qué tipo de texto te dice cómo hacer algo paso a paso?",
        ayuda: "Pista: Este texto da instrucciones claras y detalladas.",
        respuesta: "Instructivo",
        distractores: ["Narrativo", "Descriptivo", "Expositivo"]
    },
    {
        pregunta: "¿Qué es una sílaba?",
        ayuda: "Pista: Es una parte de una palabra que se pronuncia en un solo golpe de voz.",
        respuesta: "Una parte de una palabra",
        distractores: ["Un tipo de oración", "Un signo de puntuación", "Un grupo de palabras"]
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