let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el nombre del dios del sol en la mitología egipcia?",
        respuesta: "Ra",
        distractores: ["Osiris", "Anubis", "Horus"],
        ayuda: "Pista: Es representado con un disco solar en la cabeza.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/el-dios-ra.jpeg",
    },
    {
        pregunta: "¿Quién es el dios del inframundo en la mitología griega?",
        respuesta: "Hades",
        distractores: ["Zeus", "Poseidón", "Apolo"],
        ayuda: "Pista: Gobierna sobre el reino de los muertos y las riquezas del subsuelo.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Hades.webp",
    },
    {
        pregunta: "¿Cuál es el nombre de la diosa de la sabiduría, estrategia y artes en la mitología griega?",
        respuesta: "Atenea",
        distractores: ["Afrodita", "Artemisa", "Hera"],
        ayuda: "Pista: Nació completamente armada de la cabeza de Zeus.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Atenea.jpeg",
    },
    {
        pregunta: "¿Qué dios egipcio es representado con cabeza de chacal?",
        respuesta: "Anubis",
        distractores: ["Horus", "Ra", "Osiris"],
        ayuda: "Pista: Es el dios de la momificación y el más importante en la ceremonia funeraria.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Anubis.png",
    },
    {
        pregunta: "¿Cuál es el nombre de la diosa del amor y la belleza en la mitología griega?",
        respuesta: "Afrodita",
        distractores: ["Atenea", "Artemisa", "Hera"],
        ayuda: "Pista: Nació de la espuma del mar cerca de la isla de Chipre.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Afrodita.webp",
    },
    {
        pregunta: "¿Qué dios griego es conocido como el padre de los dioses y gobernante del monte Olimpo?",
        respuesta: "Zeus",
        distractores: ["Hades", "Poseidón", "Apolo"],
        ayuda: "Pista: Su símbolo es el rayo.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Zeus.webp",
    },
    {
        pregunta: "¿Cuál es el nombre del dios del mar en la mitología griega?",
        respuesta: "Poseidón",
        distractores: ["Hades", "Zeus", "Apolo"],
        ayuda: "Pista: Es el hermano de Zeus y Hades.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Poseidon.webp",
    },
    {
        pregunta: "¿Cuál es el nombre del dios del sol y la música en la mitología griega?",
        respuesta: "Apolo",
        distractores: ["Hades", "Poseidón", "Zeus"],
        ayuda: "Pista: Es también el dios de la profecía y las artes.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Apolo.jpeg",
    },
    {
        pregunta: "¿Cuál es el nombre del dios del cielo en la mitología egipcia?",
        respuesta: "Horus",
        distractores: ["Osiris", "Anubis", "Ra"],
        ayuda: "Pista: Es representado como un halcón o como un hombre con cabeza de halcón.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Horus.webp",
    },
    {
        pregunta: "¿Qué dios griego es el protector de los viajeros y mensajero de los dioses?",
        respuesta: "Hermes",
        distractores: ["Dionisio", "Ares", "Hefesto"],
        ayuda: "Pista: Es conocido por llevar sandalias aladas y un caduceo.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Hermes.jpeg",
    },
    {
        pregunta: "¿Cuál es el nombre de la diosa de la caza y la naturaleza en la mitología griega?",
        respuesta: "Artemisa",
        distractores: ["Afrodita", "Atenea", "Hera"],
        ayuda: "Pista: Es la hermana gemela de Apolo.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Artemisa.jpeg",
    },
    {
        pregunta: "¿Qué dios egipcio es conocido como el dios de la muerte y la vida después de la muerte?",
        respuesta: "Osiris",
        distractores: ["Anubis", "Ra", "Horus"],
        ayuda: "Pista: Es representado como un hombre con corona atef y cetro.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Osiris.jpeg",
    },
    {
        pregunta: "¿Cuál es el nombre del dios del vino y la fertilidad en la mitología griega?",
        respuesta: "Dionisio",
        distractores: ["Hermes", "Ares", "Hefesto"],
        ayuda: "Pista: Es conocido como Baco en la mitología romana.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Dionisio.jpeg",
    },
    {
        pregunta: "¿Qué diosa egipcia es conocida como la madre de todos los dioses?",
        respuesta: "Isis",
        distractores: ["Bastet", "Neftis", "Maat"],
        ayuda: "Pista: Es considerada la diosa del amor y la maternidad.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Isis.jpeg",
    },
    {
        pregunta: "¿Cuál es el nombre del dios del fuego y la metalurgia en la mitología griega?",
        respuesta: "Hefesto",
        distractores: ["Hermes", "Ares", "Dionisio"],
        ayuda: "Pista: Es conocido por ser el herrero de los dioses.",
        imgAyuda: "https://tinypic.host/images/2023/08/12/Hefesto.jpeg",
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