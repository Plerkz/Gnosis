let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuesta: "Júpiter",
        distractores: ["Marte", "Saturno", "Urano"],
        ayuda: "Pista: Este planeta es conocido por su gran tamaño y sus bandas de nubes.",
        imgAyuda: "https://images.app.goo.gl/GBAgx6qATgYU6RdB6",
    },
    {
        pregunta: "¿Cuál es la estrella más cercana a la Tierra?",
        respuesta: "El Sol",
        distractores: ["Alfa Centauri", "Betelgeuse", "Sirio"],
        ayuda: "Pista: Esta estrella es fundamental para la vida en la Tierra.",
        imgAyuda: "https://images.app.goo.gl/oX5qVEpUUfdz9wzj6",
    },
    {
        pregunta: "¿Qué es un agujero negro?",
        respuesta: "Una región del espacio con una gravedad extremadamente fuerte",
        distractores: ["Una supernova", "Un cometa", "Un planeta enano"],
        ayuda: "Pista: La gravedad en esta región es tan intensa que nada puede escapar de ella, ni siquiera la luz.",
        imgAyuda: "https://images.app.goo.gl/rAuQMmmUoQHUk4hC7",
    },
    {
        pregunta: "¿Cuál es la galaxia más cercana a la Vía Láctea?",
        respuesta: "La galaxia de Andrómeda",
        distractores: ["La galaxia del Sombrero", "La galaxia del Triángulo", "La galaxia del Remolino"],
        ayuda: "Pista: Esta galaxia es espiral y se acerca gradualmente a la Vía Láctea.",
        imgAyuda: "https://images.app.goo.gl/tixLZB6B6ehDmGsP8",
    },
    {
        pregunta: "¿Qué es un quásar?",
        respuesta: "Un núcleo galáctico activo y luminoso",
        distractores: ["Un asteroide", "Un satélite artificial", "Una nebulosa"],
        ayuda: "Pista: Los quásares emiten enormes cantidades de energía y son objetos muy distantes en el universo.",
        imgAyuda: "https://images.app.goo.gl/XFS3j7ceK9cY8poa9",
    },
    {
        pregunta: "¿Cuál es el nombre del telescopio espacial lanzado por la NASA en 1990?",
        respuesta: "El Telescopio Espacial Hubble",
        distractores: ["El Telescopio Espacial Kepler", "El Telescopio Espacial Chandra", "El Telescopio Espacial James Webb"],
        ayuda: "Pista: Este telescopio ha proporcionado imágenes impresionantes del universo profundo.",
        imgAyuda: "https://images.app.goo.gl/cGyGuH31n2VgPJNp8",
    },
    {
        pregunta: "¿Cuál es la teoría que explica el origen del universo?",
        respuesta: "La teoría del Big Bang",
        distractores: ["La teoría del universo estacionario", "La teoría del universo oscilante", "La teoría de la creación divina"],
        ayuda: "Pista: Según esta teoría, el universo comenzó como una singularidad hace miles de millones de años.",
        imgAyuda: "https://images.app.goo.gl/71whmsLCSFLsUZEb9",
    },
    {
        pregunta: "¿Qué es un cometa?",
        respuesta: "Un objeto compuesto por hielo y polvo que orbita el Sol",
        distractores: ["Un planeta", "Un satélite natural", "Una supernova"],
        ayuda: "Pista: Los cometas a menudo desarrollan una cola brillante cuando se acercan al Sol.",
        imgAyuda: "https://images.app.goo.gl/ZCNpVRVCguvFpSZY6",
    },
    {
        pregunta: "¿Qué es un exoplaneta?",
        respuesta: "Un planeta que orbita una estrella fuera de nuestro sistema solar",
        distractores: ["Un asteroide", "Un agujero negro", "Una galaxia enana"],
        ayuda: "Pista: La búsqueda de exoplanetas es importante en la investigación de vida fuera de la Tierra.",
        imgAyuda: "https://images.app.goo.gl/2u68S2j4DRRTsBSd7",
    },
    {
        pregunta: "¿Cuál es el nombre de la misión de la NASA que aterrizó en Marte en 2021 para buscar signos de vida pasada?",
        respuesta: "El rover Perseverance",
        distractores: ["El rover Curiosity", "El rover Spirit", "El rover Opportunity"],
        ayuda: "Pista: Esta misión también tiene un helicóptero llamado Ingenuity.",
        imgAyuda: "https://images.app.goo.gl/UmxVb225NnR8euob8",
    },
    {
        pregunta: "¿Cuál es la luna más grande de Júpiter?",
        respuesta: "Ganímedes",
        distractores: ["Ío", "Calisto", "Europa"],
        ayuda: "Pista: Ganímedes es la luna más grande del sistema solar.",
        imgAyuda: "https://images.app.goo.gl/q3mZGnyUfqDV5P5e9",
    },
    {
        pregunta: "¿Cuál es la teoría que sugiere que el universo se está expandiendo?",
        respuesta: "La teoría de la expansión del universo",
        distractores: ["La teoría del universo estacionario", "La teoría del universo oscilante", "La teoría de la creación divina"],
        ayuda: "Pista: Esta teoría se basa en la observación de que las galaxias se alejan unas de otras.",
        imgAyuda: "https://images.app.goo.gl/AAPFKNvPhfKYb1RS9",
    },
    {
    
        pregunta: "¿Cuál es el nombre de la galaxia que contiene nuestro sistema solar?",
        respuesta: "La Vía Láctea",
        distractores: ["Andrómeda", "La galaxia del Triángulo", "La galaxia del Sombrero"],
        ayuda: "Pista: Es una galaxia espiral en la que se encuentra nuestro sistema solar.",
        imgAyuda: "https://images.app.goo.gl/LCfhtfowoifLooD47",
    },
    {
        pregunta: "¿Qué es una estrella enana blanca?",
        respuesta: "El núcleo colapsado de una estrella que ya no produce fusión nuclear",
        distractores: ["Una estrella muy caliente y brillante", "Una estrella joven en proceso de formación", "Una estrella gigante roja"],
        ayuda: "Pista: Las enanas blancas son el destino final de estrellas como el Sol.",
        imgAyuda: "https://images.app.goo.gl/AYMhw9vJABThhR6g7",
    },
    {
        pregunta: "¿Cuál es el evento astronómico que ocurre cuando la Luna bloquea completamente al Sol?",
        respuesta: "Un eclipse solar total",
        distractores: ["Un eclipse lunar", "Un tránsito de Venus", "Una lluvia de estrellas"],
        ayuda: "Pista: Durante este evento, el día se convierte momentáneamente en noche.",
        imgAyuda: "https://images.app.goo.gl/5gTRAP2GQCh3ZkkT6",
    },
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