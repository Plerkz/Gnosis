let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la capital de Estados Unidos?",
        ayuda: "Pista: Esta ciudad es también el centro político del país.",
        respuesta: "Washington D.C.",
        distractores: ["Nueva York", "Los Ángeles", "Chicago"],
    },
    {
        pregunta: "¿En qué continente se encuentra Egipto?",
        ayuda: "Pista: Este continente es conocido por sus desiertos y por el río Nilo.",
        respuesta: "África",
        distractores: ["Asia", "Europa", "América del Sur"],
    },
    {
        pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
        ayuda: "Pista: Este presidente es famoso por ser el primer líder del país y por su papel en la independencia.",
        respuesta: "George Washington",
        distractores: ["Abraham Lincoln", "Thomas Jefferson", "John Adams"],
    },
    {
        pregunta: "¿Qué océano está al este de los Estados Unidos?",
        ayuda: "Pista: Este océano es el más grande del mundo.",
        respuesta: "Océano Atlántico",
        distractores: ["Océano Pacífico", "Océano Índico", "Océano Ártico"],
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        ayuda: "Pista: Este río fluye principalmente a través de Egipto y es crucial para la agricultura en el país.",
        respuesta: "Río Nilo",
        distractores: ["Río Amazonas", "Río Yangtsé", "Río Misisipi"],
    },
    {
        pregunta: "¿Qué país es conocido por sus pirámides y la esfinge?",
        ayuda: "Pista: Este país se encuentra en el noreste de África.",
        respuesta: "Egipto",
        distractores: ["México", "India", "Grecia"],
    },
    {
        pregunta: "¿Qué guerra fue la que enfrentó a los Aliados contra las Potencias del Eje durante los años 1939-1945?",
        ayuda: "Pista: Esta guerra involucró a muchos países y resultó en grandes cambios políticos y territoriales.",
        respuesta: "Segunda Guerra Mundial",
        distractores: ["Primera Guerra Mundial", "Guerra de Corea", "Guerra de Vietnam"],
    },
    {
        pregunta: "¿Qué documento fundacional establece las leyes básicas y los principios del gobierno en Estados Unidos?",
        ayuda: "Pista: Este documento fue adoptado en 1787 y es la ley suprema del país.",
        respuesta: "Constitución de los Estados Unidos",
        distractores: ["Declaración de Independencia", "Artículos de la Confederación", "Carta Magna"],
    },
    {
        pregunta: "¿Cuál es el nombre del continente que se encuentra al sur de Europa y es conocido por su diversidad cultural y lingüística?",
        ayuda: "Pista: Este continente es conocido por sus numerosos países con diferentes idiomas y culturas.",
        respuesta: "Europa",
        distractores: ["Asia", "África", "América del Norte"],
    },
    {
        pregunta: "¿Qué sistema de gobierno permite que el poder sea ejercido por el pueblo a través de elecciones?",
        ayuda: "Pista: En este sistema, los ciudadanos eligen a sus representantes.",
        respuesta: "Democracia",
        distractores: ["Monarquía", "Dictadura", "Oligarquía"],
    },
    {
        pregunta: "¿Cuál es el nombre del proceso mediante el cual las personas se mudan de un país a otro?",
        ayuda: "Pista: Este proceso puede ser voluntario o forzado por diversas razones.",
        respuesta: "Migración",
        distractores: ["Inmigración", "Emigración", "Refugiado"],
    },
    {
        pregunta: "¿Qué país está situado en la península Ibérica junto a España?",
        ayuda: "Pista: Este país es conocido por su famoso puerto y su idioma, que es el portugués.",
        respuesta: "Portugal",
        distractores: ["Francia", "Italia", "Andorra"],
    },
    {
        pregunta: "¿Qué es una monarquía constitucional?",
        ayuda: "Pista: En este tipo de gobierno, un monarca comparte el poder con una asamblea legislativa o parlamento.",
        respuesta: "Un sistema de gobierno donde el monarca comparte el poder con un parlamento",
        distractores: ["Un gobierno donde el monarca tiene el control absoluto", "Un sistema de gobierno basado en la dictadura", "Un gobierno en el que no hay rey ni reina"],
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

// Mezclar el orden de las preguntas para que no estén agrupadas por nivel de dificultad
baseDePreguntas = shuffle(baseDePreguntas);
