let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        ayuda: "Pista: Es una ciudad conocida por la Torre Eiffel.",
        respuesta: "París",
        distractores: ["Londres", "Berlín", "Madrid"]
    },
    {
        pregunta: "¿Qué océano está al este de América del Norte?",
        ayuda: "Pista: Este océano es el más grande del mundo.",
        respuesta: "Océano Atlántico",
        distractores: ["Océano Pacífico", "Océano Índico", "Océano Ártico"]
    },
    {
        pregunta: "¿En qué continente se encuentra el desierto del Sahara?",
        ayuda: "Pista: Es el continente donde también está Egipto.",
        respuesta: "África",
        distractores: ["Asia", "América del Sur", "Europa"]
    },
    {
        pregunta: "¿Cuál es el país más grande del mundo por superficie?",
        ayuda: "Pista: Este país está en el continente asiático.",
        respuesta: "Rusia",
        distractores: ["Canadá", "China", "Estados Unidos"]
    },
    {
        pregunta: "¿Qué río es el más largo del mundo?",
        ayuda: "Pista: Este río fluye principalmente a través de Egipto.",
        respuesta: "Nilo",
        distractores: ["Amazonas", "Misisipi", "Yangtsé"]
    },
    {
        pregunta: "¿Qué país es conocido como la tierra de los canguros?",
        ayuda: "Pista: Es un país y continente en el hemisferio sur.",
        respuesta: "Australia",
        distractores: ["Nueva Zelanda", "Sudáfrica", "Brasil"]
    },
    {
        pregunta: "¿Qué es una república?",
        ayuda: "Pista: Es un tipo de gobierno en el que el poder es ejercido por representantes elegidos por el pueblo.",
        respuesta: "Un tipo de gobierno en el que el poder es ejercido por representantes elegidos",
        distractores: ["Una forma de gobierno monárquico", "Una forma de gobierno en la que el líder es autocrático", "Un sistema de gobierno basado en la aristocracia"]
    },
    {
        pregunta: "¿Cuál es el continente más pequeño del mundo?",
        ayuda: "Pista: Este continente está rodeado por el Océano Pacífico y el Océano Índico.",
        respuesta: "Oceanía",
        distractores: ["Antártida", "Asia", "África"]
    },
    {
        pregunta: "¿Qué línea imaginaria divide la Tierra en hemisferio norte y sur?",
        ayuda: "Pista: Esta línea es opuesta al ecuador.",
        respuesta: "Trópico de Cáncer",
        distractores: ["Ecuador", "Meridiano de Greenwich", "Trópico de Capricornio"]
    },
    {
        pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
        ayuda: "Pista: Este presidente es conocido por sus contribuciones a la independencia de EE.UU.",
        respuesta: "George Washington",
        distractores: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"]
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