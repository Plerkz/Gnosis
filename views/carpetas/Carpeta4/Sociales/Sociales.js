let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el continente donde se encuentra Egipto?",
        ayuda: "Pista: Este continente es conocido por su historia antigua y pirámides.",
        respuesta: "África",
        distractores: ["Asia", "Europa", "América"]
    },
    {
        pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
        ayuda: "Pista: Este presidente es conocido por ser uno de los padres fundadores de EE.UU.",
        respuesta: "George Washington",
        distractores: ["Abraham Lincoln", "Thomas Jefferson", "John Adams"]
    },
    {
        pregunta: "¿Cuál es la capital de México?",
        ayuda: "Pista: Esta ciudad es una de las más grandes del mundo y se encuentra en el Valle de México.",
        respuesta: "Ciudad de México",
        distractores: ["Guadalajara", "Monterrey", "Cancún"]
    },
    {
        pregunta: "¿Qué tipo de gobierno tiene España?",
        ayuda: "Pista: España es una monarquía con un sistema parlamentario.",
        respuesta: "Monarquía parlamentaria",
        distractores: ["República presidencial", "Monarquía absoluta", "Dictadura"]
    },
    {
        pregunta: "¿Cuál es el océano que se encuentra al este de Asia?",
        ayuda: "Pista: Este océano es el más grande del mundo.",
        respuesta: "Océano Pacífico",
        distractores: ["Océano Atlántico", "Océano Índico", "Océano Ártico"]
    },
    {
        pregunta: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        ayuda: "Pista: Este documento se firmó durante la Revolución Americana.",
        respuesta: "1776",
        distractores: ["1783", "1775", "1789"]
    },
    {
        pregunta: "¿Cuál es la forma de gobierno en la que el poder está en manos de los ciudadanos?",
        ayuda: "Pista: En este tipo de gobierno, el poder se elige a través del voto.",
        respuesta: "Democracia",
        distractores: ["Monarquía", "Oligarquía", "Tiranía"]
    },
    {
        pregunta: "¿Qué país es conocido como el 'país de los canguros'?",
        ayuda: "Pista: Este país está en el hemisferio sur y es famoso por sus marsupiales.",
        respuesta: "Australia",
        distractores: ["Sudáfrica", "Nueva Zelanda", "Canadá"]
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        ayuda: "Pista: Este río recorre gran parte de África.",
        respuesta: "Nilo",
        distractores: ["Amazonas", "Misisipi", "Yangtsé"]
    },
    {
        pregunta: "¿En qué continente se encuentra el desierto del Sahara?",
        ayuda: "Pista: Este desierto es el más grande del mundo y está en África.",
        respuesta: "África",
        distractores: ["Asia", "Australia", "América del Sur"]
    },
    {
        pregunta: "¿Cuál es el nombre del famoso muro que separó Berlín en dos partes durante la Guerra Fría?",
        ayuda: "Pista: Este muro fue un símbolo de la división entre el este y el oeste.",
        respuesta: "Muro de Berlín",
        distractores: ["Muro de China", "Muro de Roma", "Muro de Viena"]
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