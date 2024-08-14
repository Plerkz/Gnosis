let baseDePreguntas = [
    {
        pregunta: "¿Qué tratado puso fin a la Primera Guerra Mundial?",
        respuesta: "El Tratado de Versalles",
        distractores: ["El Tratado de Tordesillas", "El Tratado de Westfalia", "El Tratado de París"],
        ayuda: "Pista: Este tratado fue firmado en 1919 y tuvo importantes consecuencias para Alemania.",
        imgAyuda: "https://images.app.goo.gl/UVzUZkz7xT7Gu1TV7",
    },
    {
        pregunta: "¿Quién fue el líder de la Revolución Rusa y primer gobernante de la Unión Soviética?",
        respuesta: "Vladimir Lenin",
        distractores: ["Joseph Stalin", "Nikita Khrushchev", "Mikhail Gorbachev"],
        ayuda: "Pista: Este líder comunista fue el principal ideólogo de la Revolución de Octubre.",
        imgAyuda: "https://images.app.goo.gl/xybCfKus7n3dhG4g9",
    },
    {
        pregunta: "¿Cuál fue la causa principal de la Revolución Francesa?",
        respuesta: "La crisis económica y fiscal",
        distractores: ["La influencia de las ideas ilustradas", "La insatisfacción popular con el rey Luis XVI", "La participación en la Guerra de Independencia de Estados Unidos"],
        ayuda: "Pista: Los problemas financieros del Estado francés contribuyeron al descontento social.",
        imgAyuda: "https://images.app.goo.gl/c2oZN6zeAT5MeVwQA",
    },
    {
        pregunta: "¿Cuál fue el evento que marcó el inicio de la Segunda Guerra Mundial?",
        respuesta: "La invasión de Polonia por Alemania",
        distractores: ["El ataque a Pearl Harbor", "La ocupación de Sudetenland", "La firma del Pacto Ribbentrop-Mólotov"],
        ayuda: "Pista: Este evento ocurrió el 1 de septiembre de 1939 y llevó al estallido de la guerra.",
        imgAyuda: "https://images.app.goo.gl/r8neTiimQZ75EKP77",
    },
    {
        pregunta: "¿Cuál fue la causa principal de la Guerra Fría?",
        respuesta: "La rivalidad ideológica y política entre Estados Unidos y la Unión Soviética",
        distractores: ["La carrera armamentista nuclear", "La división de Alemania", "El bloqueo de Berlín"],
        ayuda: "Pista: Esta guerra fue un enfrentamiento entre dos superpotencias después de la Segunda Guerra Mundial.",
        imgAyuda: "https://images.app.goo.gl/mp88FFLpANqkWaxNA",
    },
    {
        pregunta: "¿Qué importante evento histórico ocurrió el 12 de octubre de 1492?",
        respuesta: "El descubrimiento de América",
        distractores: ["La llegada de Cristóbal Colón a las Indias Orientales", "La firma del Tratado de Tordesillas", "La fundación de la ciudad de Tenochtitlan"],
        ayuda: "Pista: Este evento marcó el encuentro entre Europa y América.",
        imgAyuda: "https://images.app.goo.gl/JpSn3X6h5vWSv5AP8",
    },
    {
        pregunta: "¿Cuál fue la causa principal de la Revolución Industrial?",
        respuesta: "El desarrollo de la maquinaria y la industria",
        distractores: ["El aumento de la población", "La revolución agrícola", "La expansión colonial"],
        ayuda: "Pista: Este proceso de cambio económico y social se inició en Gran Bretaña en el siglo XVIII.",
        imgAyuda: "https://images.app.goo.gl/BcVqA8JRhq5CA8gu6",
    },
    {
        pregunta: "¿Qué famoso líder militar y emperador francés conquistó gran parte de Europa en el siglo XIX?",
        respuesta: "Napoleón Bonaparte",
        distractores: ["Adolf Hitler", "Winston Churchill", "Benito Mussolini"],
        ayuda: "Pista: Este líder es conocido por sus habilidades estratégicas y sus reformas políticas.",
        imgAyuda: "https://images.app.goo.gl/Em1GH9Qr6pLngDTH8",
    },
    {
        pregunta: "¿Cuál fue el tratado que puso fin a la Segunda Guerra Mundial?",
        respuesta: "El Tratado de Paz de París",
        distractores: ["El Tratado de Versalles", "El Tratado de Yalta", "El Tratado de San Francisco"],
        ayuda: "Pista: Este tratado fue firmado en 1947 y estableció los términos de paz con Alemania, Italia y Japón.",
        imgAyuda: "https://images.app.goo.gl/xaBxBGnRKYPyCg46A",
    },
    {
        pregunta: "¿Cuál fue el evento que marcó el inicio de la Primera Guerra Mundial?",
        respuesta: "El asesinato del archiduque Francisco Fernando de Austria",
        distractores: ["El bombardeo de Pearl Harbor", "La invasión de Polonia", "El hundimiento del RMS Lusitania"],
        ayuda: "Pista: Este evento ocurrió el 28 de junio de 1914 en Sarajevo.",
        imgAyuda: "https://images.app.goo.gl/RryvD3McLwdqKc7Z7",
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