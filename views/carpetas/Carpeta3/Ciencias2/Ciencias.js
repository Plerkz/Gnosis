let baseDePreguntas = [
    {
        pregunta: "¿Qué necesita una planta para crecer?",
        ayuda: "Pista: La planta necesita agua, luz y tierra.",
        respuesta: "Agua, luz y tierra",
        distractores: ["Solo agua", "Solo luz", "Solo tierra"]
    },
    {
        pregunta: "¿Qué es el ciclo del agua?",
        ayuda: "Pista: Es el proceso por el cual el agua se mueve de un lugar a otro.",
        respuesta: "El proceso por el cual el agua se mueve",
        distractores: ["La formación de las plantas", "La creación de animales", "El cambio de estaciones"]
    },
    {
        pregunta: "¿Qué hace el sol durante el día?",
        ayuda: "Pista: El sol ilumina y calienta la Tierra.",
        respuesta: "Ilumina y calienta la Tierra",
        distractores: ["Cubre la Tierra", "Hace llover", "Sopla viento"]
    },
    {
        pregunta: "¿Qué parte de la planta produce las flores?",
        ayuda: "Pista: Las flores están en la parte superior de la planta.",
        respuesta: "El tallo",
        distractores: ["Las hojas", "Las raíces", "El tallo"]
    },
    {
        pregunta: "¿Qué es un mamífero?",
        ayuda: "Pista: Son animales que tienen pelo y dan leche a sus crías.",
        respuesta: "Un animal que tiene pelo y da leche",
        distractores: ["Un animal sin pelo", "Un animal que pone huevos", "Un animal que vive en el agua"]
    },
    {
        pregunta: "¿Qué es la materia?",
        ayuda: "Pista: Es todo lo que tiene masa y ocupa espacio.",
        respuesta: "Todo lo que tiene masa y ocupa espacio",
        distractores: ["Solo los líquidos", "Solo los sólidos", "Solo los gases"]
    },
    {
        pregunta: "¿Qué función tienen los pulmones?",
        ayuda: "Pista: Los pulmones ayudan a respirar.",
        respuesta: "Ayudan a respirar",
        distractores: ["Ayudan a digerir", "Ayudan a mover los músculos", "Ayudan a ver"]
    },
    {
        pregunta: "¿Qué es un ecosistema?",
        ayuda: "Pista: Es un lugar donde viven diferentes seres vivos y interactúan entre sí.",
        respuesta: "Un lugar donde viven seres vivos y sus interacciones",
        distractores: ["Solo una especie de planta", "Un lugar solo con animales", "Una casa"]
    },
    {
        pregunta: "¿Qué se necesita para hacer fotosíntesis?",
        ayuda: "Pista: Las plantas usan la luz solar para hacer su comida.",
        respuesta: "Luz solar, agua y dióxido de carbono",
        distractores: ["Solo agua", "Solo luz", "Solo tierra"]
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual los líquidos se convierten en vapor?",
        ayuda: "Pista: Este proceso ocurre cuando el agua se calienta.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Fusión", "Solidificación"]
    },
    {
        pregunta: "¿Qué hace el sistema digestivo?",
        ayuda: "Pista: El sistema digestivo ayuda a procesar la comida.",
        respuesta: "Procesa la comida",
        distractores: ["Ayuda a respirar", "Ayuda a mover el cuerpo", "Ayuda a oír"]
    },
    {
        pregunta: "¿Cuál es el órgano principal para bombear la sangre en el cuerpo?",
        ayuda: "Pista: Este órgano está en el centro del pecho.",
        respuesta: "Corazón",
        distractores: ["Estómago", "Hígado", "Riñón"]
    },
    {
        pregunta: "¿Qué es una cadena alimentaria?",
        ayuda: "Pista: Es la forma en que los animales obtienen su comida en un ecosistema.",
        respuesta: "La forma en que los animales obtienen su comida",
        distractores: ["Un tipo de planta", "Una clase de animales", "Una forma de vida"]
    },
    {
        pregunta: "¿Qué parte del cuerpo usamos para ver?",
        ayuda: "Pista: Usamos nuestros ojos para ver.",
        respuesta: "Ojos",
        distractores: ["Oídos", "Brazos", "Piernas"]
    },
    {
        pregunta: "¿Qué es un insecto?",
        ayuda: "Pista: Es un pequeño animal con seis patas y, a menudo, alas.",
        respuesta: "Un animal con seis patas y a menudo alas",
        distractores: ["Un mamífero", "Un pájaro", "Un pez"]
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
;

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