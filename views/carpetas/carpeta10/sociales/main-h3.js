let baseDePreguntas = [
    {
        pregunta: "¿En qué año se produjo la caída del Imperio Romano de Occidente?",
        respuesta: "476 d.C.",
        distractores: ["1453 d.C.", "64 a.C.", "800 d.C."],
        ayuda: "Pista: Esta fecha marca el fin del Imperio Romano de Occidente y el inicio de la Edad Media en Europa.",
        imgAyuda: "https://images.app.goo.gl/76xTSc6ormjhWLtf8",
    },
    {
        pregunta: "¿Quién fue el líder militar y político romano que se convirtió en el primer emperador del Imperio Romano?",
        respuesta: "César Augusto",
        distractores: ["Julio César", "Nerón", "Trajano"],
        ayuda: "Pista: También es conocido como Octavio y gobernó desde el año 27 a.C. hasta su muerte en el año 14 d.C.",
        imgAyuda: "https://images.app.goo.gl/kwwXhQ5JEBULJSvK6",
    },
    {
        pregunta: "¿Cuál fue el evento que marcó el inicio de la Revolución Francesa en 1789?",
        respuesta: "La Toma de la Bastilla",
        distractores: ["La ejecución de Luis XVI", "El asalto a las Tulierías", "La Convención Nacional"],
        ayuda: "Pista: Este evento ocurrió el 14 de julio de 1789 y simboliza la lucha contra la monarquía absoluta en Francia.",
        imgAyuda: "https://images.app.goo.gl/C1VffL21eUpunKPKA",
    },
    {
        pregunta: "¿Qué líder militar francés conquistó gran parte de Europa en la primera década del siglo XIX?",
        respuesta: "Napoleón Bonaparte",
        distractores: ["Adolf Hitler", "Alexander the Great", "Genghis Khan"],
        ayuda: "Pista: Este líder se convirtió en el emperador de los franceses y creó un vasto imperio.",
        imgAyuda: "https://images.app.goo.gl/hHufFfxhzWdLpMr48",
    },
    {
        pregunta: "¿Cuál fue el líder de la Revolución Bolchevique que se convirtió en el primer gobernante de la Unión Soviética?",
        respuesta: "Vladimir Lenin",
        distractores: ["Joseph Stalin", "León Trotsky", "Nikita Khrushchev"],
        ayuda: "Pista: Este líder lideró el derrocamiento del gobierno provisional ruso en 1917.",
        imgAyuda: "https://images.app.goo.gl/XMq2XKv3e7kQRqrw9",
    },
    {
        pregunta: "¿Quién fue el líder político y militar alemán que encabezó el Partido Nazi durante la Segunda Guerra Mundial?",
        respuesta: "Adolf Hitler",
        distractores: ["Benito Mussolini", "Winston Churchill", "Franklin D. Roosevelt"],
        ayuda: "Pista: Este líder es conocido por sus políticas totalitarias y su responsabilidad en el Holocausto.",
        imgAyuda: "https://images.app.goo.gl/E8j9Twz3a8Qf96oG7",
    },
    {
        pregunta: "¿Cuál fue la primera civilización conocida que se desarrolló en Mesopotamia?",
        respuesta: "Sumeria",
        distractores: ["Egipto", "Asiria", "Babilonia"],
        ayuda: "Pista: Esta antigua civilización surgió en el sur de Mesopotamia y es conocida por su sistema de escritura cuneiforme.",
        imgAyuda: "https://images.app.goo.gl/EEsZACJTH2NGFD8L7",
    },
    {
        pregunta: "¿Cuál fue la dinastía china que construyó la Gran Muralla?",
        respuesta: "La dinastía Qin",
        distractores: ["La dinastía Han", "La dinastía Ming", "La dinastía Tang"],
        ayuda: "Pista: La construcción de la Gran Muralla comenzó durante esta dinastía.",
        imgAyuda: "https://images.app.goo.gl/SiAYDUnPm3d6cbCu5",
    },
    {
        pregunta: "¿Cuál fue la famosa ruta comercial que conectó Europa y Asia en la Edad Media?",
        respuesta: "La Ruta de la Seda",
        distractores: ["El Camino de Santiago", "La Ruta del Oro", "El Corredor Transahariano"],
        ayuda: "Pista: Esta ruta facilitó el intercambio cultural y comercial entre el Este y el Oeste.",
        imgAyuda: "https://images.app.goo.gl/4RTyVdAwv8ucwioaA",
    },
    {
        pregunta: "¿Qué importante batalla ocurrió durante la Guerra de Independencia de Estados Unidos y fue un punto de inflexión para el ejército estadounidense?",
        respuesta: "La batalla de Saratoga",
        distractores: ["La batalla de Gettysburg", "La batalla de Yorktown", "La batalla de Lexington y Concord"],
        ayuda: "Pista: Esta batalla llevó a Francia a aliarse con Estados Unidos durante la guerra.",
        imgAyuda: "https://images.app.goo.gl/1CgU4qypG8dFm7s16",
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