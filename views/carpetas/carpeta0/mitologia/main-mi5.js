let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el nombre del dios principal de la mitología nórdica, considerado el padre de todos los dioses?",
        ayuda: "Pista: Es conocido como el dios de la sabiduría, la guerra y la muerte.",
        imgAyuda: "img-mi/Odín.jpg",
        respuesta: "Odín",
        distractores: ["Thor", "Loki", "Freyr"],
    },
    {
        pregunta: "¿Qué dios nórdico es famoso por empuñar el martillo Mjölnir y controlar los truenos?",
        respuesta: "Thor",
        distractores: ["Odín", "Loki", "Freyr"],
        ayuda: "Pista: Es hijo de Odín y es conocido como el dios del trueno y la protección.",
        imgAyuda: "https://tinypic.host/image/Thor.VMTDR",
    },
    {
        pregunta: "¿Cuál es el nombre de la diosa nórdica de la belleza y el amor, asociada con la primavera?",
        respuesta: "Freya",
        distractores: ["Sif", "Idun", "Skadi"],
        ayuda: "Pista: Es la diosa de la fertilidad, la guerra y la muerte.",
        imgAyuda: "img-mi/Freya.jpg",
    },
    {
        pregunta: "¿Qué dios nórdico es conocido por ser un astuto y travieso dios del engaño?",
        respuesta: "Loki",
        distractores: ["Odín", "Thor", "Balder"],
        ayuda: "Pista: Es el padre de Hel, el lobo Fenrir y la serpiente Jörmungandr.",
        imgAyuda: "img-mi/Loki.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del lobo monstruoso que está destinado a liberarse y desencadenar el Ragnarok?",
        respuesta: "Fenrir",
        distractores: ["Sleipnir", "Hati", "Geri"],
        ayuda: "Pista: Es hijo de Loki y es encadenado hasta el inicio del Ragnarok.",
        imgAyuda: "img-mi/",
    },
    {
        pregunta: "¿Qué dios nórdico es conocido por montar un caballo de ocho patas y ser mensajero de Odín?",
        respuesta: "Sleipnir",
        distractores: ["Fenrir", "Hati", "Geri"],
        ayuda: "Pista: Fue engendrado por Loki y es considerado el mejor de todos los caballos.",
        imgAyuda: "img-mi/",
    },
    {
        pregunta: "¿Cuál es el nombre de la diosa nórdica que custodia las manzanas de la juventud?",
        respuesta: "Idun",
        distractores: ["Freya", "Sif", "Skadi"],
        ayuda: "Pista: Es la esposa de Bragi y es conocida por su belleza y su papel en mantener la juventud eterna de los dioses.",
        imgAyuda: "img-mi/",
    },
    {
        pregunta: "¿Qué dios nórdico es conocido como el dios de la caza y es identificado con el invierno?",
        respuesta: "Ullr",
        distractores: ["Freyr", "Tyr", "Forseti"],
        ayuda: "Pista: Es considerado un dios de la justicia y es experto en esquí y tiro con arco.",
        imgAyuda: "img-mi/",
    },
    {
        pregunta: "¿Cuál es el nombre del dios nórdico asociado con la justicia, el juicio y la guerra?",
        respuesta: "Tyr",
        distractores: ["Thor", "Baldur", "Heimdall"],
        ayuda: "Pista: Es conocido por sacrificar su mano para atar al lobo Fenrir.",
        imgAyuda: "img-mi/",
    },
    {
        pregunta: "¿Qué dios nórdico es conocido como el dios de la luz, la pureza y la belleza?",
        respuesta: "Baldur",
        distractores: ["Odín", "Thor", "Freyr"],
        ayuda: "Pista: Es hijo de Odín y Frigg, y su muerte desencadena el Ragnarok.",
        imgAyuda: "img-mi/",
    },
    {
        pregunta: "¿Cuál es el nombre de la diosa nórdica de la caza, la naturaleza y la soledad?",
        respuesta: "Skadi",
        distractores: ["Freya", "Idun", "Sif"],
        ayuda: "Pista: Es conocida por ser una excelente cazadora y por su deseo de venganza contra los dioses por la muerte de su padre.",
        imgAyuda: "img-mi/",
    },
    {
        pregunta: "¿Qué dios nórdico es conocido como el dios de la agricultura, la fertilidad y el buen tiempo?",
        respuesta: "Freyr",
        distractores: ["Odín", "Thor", "Loki"],
        ayuda: "Pista: Es el hermano de Freya y es considerado el dios de la prosperidad.",
        imgAyuda: "img-mi/",
    },
    {
        pregunta: "¿Cuál es el nombre del dios nórdico que protege el Bifröst, el puente que conecta Asgard con Midgard?",
        respuesta: "Heimdall",
        distractores: ["Tyr", "Frigg", "Forseti"],
        ayuda: "Pista: Es conocido por su aguda vista y oído.",
        imgAyuda: "img-mi/",
    },
    {
        pregunta: "¿Qué dios nórdico es conocido como el dios de la sabiduría, la poesía y la magia?",
        respuesta: "Bragi",
        distractores: ["Odín", "Loki", "Thor"],
        ayuda: "Pista: Es el esposo de Idun y es famoso por su habilidad para contar historias y componer poesía.",
        imgAyuda: "img-mi/",
    },
    {
        pregunta: "¿Cuál es el nombre de la diosa nórdica del invierno, la nieve y la caza?",
        respuesta: "Skadi",
        distractores: ["Freya", "Idun", "Sif"],
        ayuda: "Pista: Es conocida por ser una excelente cazadora y por su deseo de venganza contra los dioses por la muerte de su padre.",
        imgAyuda: "img-mi/",
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