let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la capital de Estados Unidos?",
        ayuda: "Pista: Es una ciudad famosa por sus monumentos y es el centro del gobierno federal.",
        respuesta: "Washington D.C.",
        distractores: ["Nueva York", "Los Ángeles", "Chicago"],
    },
    {
        pregunta: "¿Qué evento marcó el inicio de la Segunda Guerra Mundial?",
        ayuda: "Pista: Este evento ocurrió cuando un país invadió otro en 1939.",
        respuesta: "La invasión de Polonia por parte de Alemania",
        distractores: ["El ataque a Pearl Harbor", "La invasión de Francia por parte de Alemania", "La firma del Tratado de Versalles"],
    },
    {
        pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
        ayuda: "Pista: Este líder es conocido por su papel en la Revolución Americana y es a menudo llamado el 'Padre de la Patria'.",
        respuesta: "George Washington",
        distractores: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"],
    },
    {
        pregunta: "¿Qué continente está al sur de Europa?",
        ayuda: "Pista: Este continente es conocido por su diversidad de culturas y climas.",
        respuesta: "África",
        distractores: ["Asia", "América del Sur", "Oceanía"],
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        ayuda: "Pista: Este río atraviesa varios países en África y es conocido por su longitud.",
        respuesta: "El Nilo",
        distractores: ["El Amazonas", "El Yangtsé", "El Mississippi"],
    },
    {
        pregunta: "¿Qué imperio antiguo construyó las pirámides de Giza?",
        ayuda: "Pista: Este imperio estaba ubicado en el noreste de África.",
        respuesta: "El Imperio Egipcio",
        distractores: ["El Imperio Romano", "El Imperio Griego", "El Imperio Persa"],
    },
    {
        pregunta: "¿Qué documento establece las leyes fundamentales de los Estados Unidos?",
        ayuda: "Pista: Este documento se adoptó en 1787 y es la base del sistema de gobierno estadounidense.",
        respuesta: "La Constitución de los Estados Unidos",
        distractores: ["La Declaración de Independencia", "El Federalista", "El Tratado de París"],
    },
    {
        pregunta: "¿Cuál es la lengua oficial de Brasil?",
        ayuda: "Pista: Este idioma es el más hablado en América del Sur y tiene raíces en la península ibérica.",
        respuesta: "Portugués",
        distractores: ["Español", "Inglés", "Francés"],
    },
    {
        pregunta: "¿Qué guerra tuvo lugar entre 1861 y 1865 en los Estados Unidos?",
        ayuda: "Pista: Esta guerra fue entre los estados del Norte y del Sur.",
        respuesta: "La Guerra Civil Americana",
        distractores: ["La Guerra de Independencia", "La Guerra de 1812", "La Guerra de Secesión"],
    },
    {
        pregunta: "¿En qué año se descubrió América por Cristóbal Colón?",
        ayuda: "Pista: Este evento histórico ocurrió a finales del siglo XV.",
        respuesta: "1492",
        distractores: ["1500", "1485", "1498"],
    },
    {
        pregunta: "¿Cuál es la montaña más alta del mundo?",
        ayuda: "Pista: Esta montaña se encuentra en la cadena del Himalaya.",
        respuesta: "El Everest",
        distractores: ["El K2", "El Kilimanjaro", "El McKinley"],
    },
    {
        pregunta: "¿Qué país es conocido como la tierra de los vikingos?",
        ayuda: "Pista: Este país está ubicado en el norte de Europa y es conocido por sus paisajes escandinavos.",
        respuesta: "Noruega",
        distractores: ["Suecia", "Dinamarca", "Islandia"],
    },
    {
        pregunta: "¿Quién fue el líder de la Revolución Francesa que se convirtió en emperador de Francia?",
        ayuda: "Pista: Este líder es famoso por sus campañas militares y por sus reformas en Francia.",
        respuesta: "Napoleón Bonaparte",
        distractores: ["Luis XVI", "Robespierre", "Napoleón III"],
    },
    {
        pregunta: "¿Cuál es el nombre del mar que está al oeste de Italia?",
        ayuda: "Pista: Este mar se encuentra entre Italia y España.",
        respuesta: "El Mar Mediterráneo",
        distractores: ["El Mar Adriático", "El Mar Egeo", "El Mar Báltico"],
    },
    {
        pregunta: "¿Qué civilización antigua construyó Machu Picchu?",
        ayuda: "Pista: Esta civilización vivió en lo que hoy es Perú.",
        respuesta: "Los Incas",
        distractores: ["Los Aztecas", "Los Mayas", "Los Moche"],
    }
]
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
