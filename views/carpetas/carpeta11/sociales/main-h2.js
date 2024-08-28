let baseDePreguntas = [
    {
        pregunta: "¿Qué emperador romano se autoproclamó como un dios viviente y desencadenó la Gran Persecución de los cristianos?",
        respuesta: "Nerón",
        distractores: ["Calígula", "Augusto", "Trajano"],
        ayuda: "Pista: Este emperador es conocido por su tiranía y su papel en el Gran Incendio de Roma.",
        imgAyuda: "https://images.app.goo.gl/8Pa4VtpMFrJCEbWk9",
    },
    {
        pregunta: "¿Qué líder mongol fundó el Imperio Mongol y se convirtió en el conquistador más famoso de la historia?",
        respuesta: "Genghis Khan",
        distractores: ["Kublai Khan", "Attila el Huno", "Tamerlán"],
        ayuda: "Pista: Este líder unificó a las tribus mongolas y comenzó una serie de campañas de conquista.",
        imgAyuda: "https://images.app.goo.gl/g6cnxjD9Rrkk9MbcA",
    },
    {
        pregunta: "¿Cuál fue el resultado de la Batalla de Salamina en el año 480 a.C.?",
        respuesta: "La victoria griega contra el Imperio Persa",
        distractores: ["La conquista de Egipto por Alejandro Magno", "La derrota de Esparta por Atenas", "La expansión de Cartago en el Mediterráneo"],
        ayuda: "Pista: Esta batalla fue un punto de inflexión en las Guerras Médicas y salvó a Grecia de la invasión persa.",
        imgAyuda: "https://images.app.goo.gl/hHmn7JVZHezfyKQ67",
    },
    {
        pregunta: "¿Qué importante reforma religiosa inició Martín Lutero en el siglo XVI?",
        respuesta: "La Reforma Protestante",
        distractores: ["La Contrarreforma Católica", "El Cisma de Oriente", "El Concilio de Trento"],
        ayuda: "Pista: Esta reforma cuestionó la autoridad de la Iglesia Católica y dio lugar a la creación de nuevas denominaciones cristianas.",
        imgAyuda: "https://images.app.goo.gl/2MR1JKjWZAZRcekdA",
    },
    {
        pregunta: "¿Cuál fue el resultado de la Batalla de Agincourt en 1415 durante la Guerra de los Cien Años?",
        respuesta: "La victoria inglesa sobre Francia",
        distractores: ["La victoria de Francia sobre Inglaterra", "La firma del Tratado de Troyes", "El fin de la Guerra de los Cien Años"],
        ayuda: "Pista: Esta batalla fue parte de la campaña de Enrique V de Inglaterra en Francia.",
        imgAyuda: "https://images.app.goo.gl/CREvBtcHXVAyecyc8",
    },
    {
        pregunta: "¿Cuál fue el resultado de la Batalla de Actium en el año 31 a.C.?",
        respuesta: "La victoria de Octavio (Augusto) sobre Marco Antonio y Cleopatra",
        distractores: ["La victoria de Marco Antonio sobre Octavio", "La firma del Segundo Triunvirato", "La muerte de Julio César"],
        ayuda: "Pista: Esta batalla marcó el fin de la República Romana y el inicio del Principado de Augusto.",
        imgAyuda: "https://images.app.goo.gl/Ape8dRA1b2BGH3VR6",
    },
    {
        pregunta: "¿Qué acontecimiento histórico conocido como 'La Noche de los Cristales Rotos' ocurrió en Alemania en 1938?",
        respuesta: "El pogromo nazi contra los judíos",
        distractores: ["El inicio de la Segunda Guerra Mundial", "El asesinato de Reinhard Heydrich", "El golpe de Estado de Hitler"],
        ayuda: "Pista: Este evento fue una serie de ataques violentos contra la comunidad judía en Alemania y Austria.",
        imgAyuda: "https://images.app.goo.gl/CtYaqkaiQbVF6xRN6",
    },
    {
        pregunta: "¿Qué importante evento político y social inició con la toma de la Bastilla el 14 de julio de 1789?",
        respuesta: "La Revolución Francesa",
        distractores: ["La Revolución Rusa", "La Revolución Industrial", "La Revolución Gloriosa"],
        ayuda: "Pista: Este evento marcó el fin del Antiguo Régimen y el inicio de una nueva era en Francia.",
        imgAyuda: "https://images.app.goo.gl/m5WCC9p9cjyW2xfc6",
    },
    {
        pregunta: "¿Cuál fue el resultado de la Batalla de Stalingrado durante la Segunda Guerra Mundial?",
        respuesta: "La victoria soviética sobre Alemania",
        distractores: ["La victoria alemana sobre la Unión Soviética", "La rendición incondicional de la Unión Soviética", "El inicio de la Guerra Fría"],
        ayuda: "Pista: Esta batalla fue un punto de inflexión y una derrota significativa para las fuerzas alemanas.",
        imgAyuda: "https://images.app.goo.gl/QNEUuHB14HYudYCN8",
    },
    {
        pregunta: "¿Cuál fue la dinastía china que construyó la Gran Muralla y unificó gran parte del país?",
        respuesta: "La dinastía Qin",
        distractores: ["La dinastía Han", "La dinastía Tang", "La dinastía Ming"],
        ayuda: "Pista: Esta dinastía fue fundada por Qin Shi Huang, el primer emperador de China.",
        imgAyuda: "https://images.app.goo.gl/qX7hmjuRuCQufP6W9",
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