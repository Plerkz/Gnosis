let baseDePreguntas = [
    
    {
        pregunta: "¿Cuál es la estrella más cercana al sistema solar después del Sol?",
        respuesta: "Próxima Centauri",
        distractores: ["Alfa Centauri", "Betelgeuse", "Sirio"],
        ayuda: "Pista: Esta estrella es parte del sistema estelar Alfa Centauri, el más cercano a nosotros.",
        imgAyuda: "https://images.app.goo.gl/y6RSXN5jcQijQ8ue9",
    },
    {
        pregunta: "¿Cuál es el nombre de la constelación que se encuentra cerca del Polo Norte celeste y es conocida como el 'Oso Menor'?",
        respuesta: "La constelación de la Osa Menor",
        distractores: ["La constelación de Orión", "La constelación de Andrómeda", "La constelación de Cassiopeia"],
        ayuda: "Pista: Esta constelación contiene la Estrella Polar, utilizada para la navegación.",
        imgAyuda: "https://images.app.goo.gl/aXcGzYxWzNoy1DsB7",
    },
    {
        pregunta: "¿Cuál es la distancia promedio entre la Tierra y la Luna?",
        respuesta: "Aproximadamente 384,400 kilómetros",
        distractores: ["Aproximadamente 149.6 millones de kilómetros", "Aproximadamente 12,742 kilómetros", "Aproximadamente 1.496 millones de kilómetros"],
        ayuda: "Pista: Esta distancia puede variar debido a las órbitas elípticas de la Tierra y la Luna.",
        imgAyuda: "https://images.app.goo.gl/ua3G33Ukr7ZXi8H99",
    },
    {
        pregunta: "¿Cuál es el nombre del fenómeno en el que la Luna pasa entre la Tierra y el Sol, bloqueando parcialmente la luz solar?",
        respuesta: "Un eclipse solar parcial",
        distractores: ["Un eclipse lunar", "Un tránsito de Venus", "Un eclipse solar total"],
        ayuda: "Pista: En este tipo de eclipse, solo una parte del Sol queda cubierta por la Luna.",
        imgAyuda: "https://images.app.goo.gl/61VYkixt44a8fQa36",
    },
    {
        pregunta: "¿Cuál es el nombre de la nebulosa que se encuentra en la constelación de Orión y es visible a simple vista?",
        respuesta: "La nebulosa de Orión",
        distractores: ["La nebulosa del Cangrejo", "La nebulosa del Águila", "La nebulosa de la Roseta"],
        ayuda: "Pista: Esta nebulosa es conocida por su apariencia de 'nube' en la espada de Orión.",
        imgAyuda: "https://images.app.goo.gl/hWEiLncu9mptWJ9a6",
    },
    {
        pregunta: "¿Cuál es el nombre del telescopio espacial lanzado por la ESA (Agencia Espacial Europea) en 2009 para estudiar el universo en rayos X?",
        respuesta: "El Observatorio de Rayos X de la ESA (XMM-Newton)",
        distractores: ["El Telescopio Espacial Hubble", "El Telescopio Espacial Kepler", "El Telescopio Espacial Chandra"],
        ayuda: "Pista: Este telescopio está diseñado para observar fuentes de rayos X en el cosmos.",
        imgAyuda: "https://images.app.goo.gl/dAsayPYBhvWSgkDe7",
    },
    {
        pregunta: "¿Cuál es el nombre de la estrella más cercana a la Tierra después del Sol?",
        respuesta: "Próxima Centauri",
        distractores: ["Alfa Centauri", "Betelgeuse", "Sirio"],
        ayuda: "Pista: Esta estrella es parte del sistema estelar Alfa Centauri, el más cercano a nosotros.",
        imgAyuda: "https://images.app.goo.gl/rdZRLdh6XxWS3qVAA",
    },
    {
        pregunta: "¿Cuál es el nombre de la constelación que se encuentra cerca del Polo Norte celeste y es conocida como el 'Oso Menor'?",
        respuesta: "La constelación de la Osa Menor",
        distractores: ["La constelación de Orión", "La constelación de Andrómeda", "La constelación de Cassiopeia"],
        ayuda: "Pista: Esta constelación contiene la Estrella Polar, utilizada para la navegación.",
        imgAyuda: "https://images.app.goo.gl/iyNf5yTmPnTncNrYA",

    },
    {
        pregunta: "¿Cuál es la distancia promedio entre la Tierra y la Luna?",
        respuesta: "Aproximadamente 384,400 kilómetros",
        distractores: ["Aproximadamente 149.6 millones de kilómetros", "Aproximadamente 12,742 kilómetros", "Aproximadamente 1.496 millones de kilómetros"],
        ayuda: "Pista: Esta distancia puede variar debido a las órbitas elípticas de la Tierra y la Luna.",
        imgAyuda: "https://images.app.goo.gl/oNiRZJdEFHvca3Bu9",
    }, 
    {
        pregunta: "¿Cuál es el nombre del fenómeno en el que la Luna pasa entre la Tierra y el Sol, bloqueando parcialmente la luz solar?",
        respuesta: "Un eclipse solar parcial",
        distractores: ["Un eclipse lunar", "Un tránsito de Venus", "Un eclipse solar total"],
        ayuda: "Pista: En este tipo de eclipse, solo una parte del Sol queda cubierta por la Luna.",
        imgAyuda: "https://images.app.goo.gl/AoyyHLpF32mpAbAc8",
    },
    {
        pregunta: "¿Cuál es el nombre de la nebulosa que se encuentra en la constelación de Orión y es visible a simple vista?",
        respuesta: "La nebulosa de Orión",
        distractores: ["La nebulosa del Cangrejo", "La nebulosa del Águila", "La nebulosa de la Roseta"],
        ayuda: "Pista: Esta nebulosa es conocida por su apariencia de 'nube' en la espada de Orión.",
        imgAyuda: "https://images.app.goo.gl/9qmNnwfD4YZJcJbT6",
    },
    {
        pregunta: "¿Cuál es el nombre del telescopio espacial lanzado por la ESA (Agencia Espacial Europea) en 2009 para estudiar el universo en rayos X?",
        respuesta: "El Observatorio de Rayos X de la ESA (XMM-Newton)",
        distractores: ["El Telescopio Espacial Hubble", "El Telescopio Espacial Kepler", "El Telescopio Espacial Chandra"],
        ayuda: "Pista: Este telescopio está diseñado para observar fuentes de rayos X en el cosmos.",
        imgAyuda: "https://images.app.goo.gl/XNVmdkTckc2sKnJW9",
    },
    {
        pregunta: "¿Cuál es el nombre de la luna más grande de Saturno?",
        respuesta: "Titán",
        distractores: ["Mimas", "Encélado", "Rea"],
        ayuda: "Pista: Esta luna es conocida por su atmósfera densa y su parecido a la Tierra en algunos aspectos.",
        imgAyuda: "https://images.app.goo.gl/gVeV6ZH8SHrTQQwbA",
    },
    {
        pregunta: "¿Cuál es el nombre del telescopio espacial lanzado por la ESA en 2009 para estudiar el Sol?",
        respuesta: "El Observatorio Solar y Heliosférico (SOHO)",
        distractores: ["El Telescopio Solar Daniel K. Inouye", "El Telescopio Espacial Solar Dynamics Observatory (SDO)", "El Telescopio Espacial Hubble"],
        ayuda: "Pista: Este telescopio está diseñado para estudiar la actividad solar y su influencia en el espacio cercano a la Tierra.",
        imgAyuda: "https://images.app.goo.gl/5nwz5kLd4HAeHHkx9",
    },
    {
        pregunta: "¿Cuál es la estrella más caliente en el universo conocido?",
        respuesta: "WR 102ka",
        distractores: ["El Sol", "Sirio", "Rigel"],
        ayuda: "Pista: Esta estrella es una de las estrellas Wolf-Rayet más calientes conocidas.",
        imgAyuda: "https://images.app.goo.gl/XVQWq2EWq72h3HR27",
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