let baseDePreguntas = [
    {
        pregunta: "¿Cuál fue el primer presidente democrático de España tras la dictadura franquista?",
        respuesta: " Adolfo Suárez",
        distractores: ["Julio César", "Nerón", "Trajano"],
        ayuda: "Pista: También es conocido como Octavio y gobernó desde el año 27 a.C. hasta su muerte en el año 19 d.C.",
        imgAyuda: "https://images.app.goo.gl/1EreNnC6naVEyRQS9",
    },
    {
        pregunta: "¿Qué presidente de Estados Unidos fue asesinado en Dallas?",
        respuesta: " John F. Kennedy",
        distractores: [" Mike Pence ", "Joe Biden", " Hillary Clinton"],
        ayuda: "Pista: Este presidente Kennedy fue asesinado el 22 de noviembre de 1963 en Dallas .",
        imgAyuda: "https://images.app.goo.gl/Vx4FTqk6Xq9LKsyh8",
    },
    {
        pregunta: "¿Qué famoso líder de Cuba estuvo 49 años en el poder?",
        respuesta: "Fidel Castro",
        distractores: ["Alejandro", "Martín", "Manuel"],
        ayuda: "Pista: Este Fidel Castro fue nombrado  primer ministro el 16 de febrero de 1959",
        imgAyuda: "https://images.app.goo.gl/77d8VfVuBivw29vC7",
    },
    {
        pregunta: "¿Qué países fueron los miembros de los Aliados en la Segunda Guerra Mundial?",
        respuesta: " Francia y Rusia,",
        distractores: ["España", "Brazil", "Chile"],
        ayuda: "Pista: Estos fueron fueron los mienbros de la Unión Soviética, China y Estados Unidos.",
        imgAyuda: "https://images.app.goo.gl/o4yFqwe26GwztYa28",
    },
    {
        pregunta: "¿Qué evento histórico ocurrió en Estados Unidos el 7 de diciembre de 1941?",
        respuesta: "El ataque a Pearl Harbor",
        distractores: ["La firma de la Declaración de Independencia", "La batalla de Gettysburg", "El asesinato de JFK"],
        ayuda: "Pista: Este ataque japonés llevó a Estados Unidos a entrar en la Segunda Guerra Mundial.",
        imgAyuda: "https://images.app.goo.gl/vR8ogffa5HJ6A2CE7",
    },
    {
        pregunta: "¿Después de Lenin, ¿quién fue oficialmente el líder de la Unión Soviética?",
        respuesta: " Iósif Stalin",
        distractores: ["Adolf Hitler", "Winston Churchill", "Steve Jobs"],
        ayuda: "Pista: Este líder fue el mas conocido por la unión soviética el 1927  .",
        imgAyuda: "https://images.app.goo.gl/3SX87gRTSCn9QNLcA",
    },
    {
        pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
        respuesta: "1914",
        distractores: ["1918", "1939", "1945"],
        ayuda: "Pista: Este conflicto comenzó tras el asesinato del archiduque Francisco Fernando de Austria en Sarajevo.",
        imgAyuda: "https://images.app.goo.gl/bjBXGaNmvKVZwfyq8",
    },
    {
        pregunta: "¿Qué evento histórico ocurrió en Estados Unidos el 6 de agosto de 1945?",
        respuesta: "El bombardeo de Hiroshima",
        distractores: ["La firma de la Declaración de Independencia", "La batalla de Gettysburg", "El asesinato de JFK"],
        ayuda: "Pista: Este evento fue parte del uso de armas nucleares durante la Segunda Guerra Mundial.",
        imgAyuda: "https://images.app.goo.gl/wiBGH1zKqdBHqU4U6",
    },
    {
        pregunta: "¿Qué importante evento histórico ocurrió el 4 de julio de 1776 en Estados Unidos?",
        respuesta: "La firma de la Declaración de Independencia",
        distractores: ["La Revolución Francesa", "La batalla de Gettysburg", "El asesinato de JFK"],
        ayuda: "Pista: Este evento marcó la independencia de las Trece Colonias británicas.",
        imgAyuda: "https://images.app.goo.gl/CQHJC7yYVe8KwrNH6",
    },
    {
        pregunta: "¿En qué país se usó la primera bomba atómica?",
        respuesta: " En Japón",
        distractores: ["Nicaragua", "Costa Rica", "Rusia"],
        ayuda: "Pista: Esta  historia del mundo es el día 6 de agosto de 1945. .",
        imgAyuda: "https://images.app.goo.gl/ivWYFxh4c5wEvLq29",
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