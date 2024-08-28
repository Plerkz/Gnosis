let baseDePreguntas = [
    {
        pregunta: "¿Qué parte de la planta ayuda a la planta a estar fija en el suelo y absorber agua?",
        ayuda: "Pista: Esta parte generalmente está debajo del suelo.",
        respuesta: "Raíces",
        distractores: ["Hojas", "Tallos", "Flores"],
    },
    {
        pregunta: "¿Cuál es el planeta más cercano al sol?",
        ayuda: "Pista: Este planeta es el primero en la secuencia de planetas desde el sol.",
        respuesta: "Mercurio",
        distractores: ["Venus", "Marte", "Júpiter"],
    },
    {
        pregunta: "¿Qué parte de la planta es responsable de realizar la fotosíntesis?",
        ayuda: "Pista: Esta parte suele ser verde y está expuesta a la luz solar.",
        respuesta: "Hojas",
        distractores: ["Raíces", "Tallos", "Flores"],
    },
    {
        pregunta: "¿Cómo se llama el proceso en el que las plantas usan luz solar para producir alimento?",
        ayuda: "Pista: Este proceso es esencial para que las plantas crezcan.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración", "Digestión", "Transpiración"],
    },
    {
        pregunta: "¿Qué recurso es esencial para que las plantas lleven a cabo la fotosíntesis?",
        ayuda: "Pista: Este recurso proviene del sol y es necesario para la vida de las plantas.",
        respuesta: "Luz solar",
        distractores: ["Agua", "Viento", "Roca"],
    },
    {
        pregunta: "¿Cuál es el estado del agua cuando se encuentra en forma de vapor?",
        ayuda: "Pista: Este estado ocurre cuando el agua se calienta y se convierte en gas.",
        respuesta: "Gas",
        distractores: ["Líquido", "Sólido", "Niebla"],
    },
    {
        pregunta: "¿Qué tipo de animal es una abeja?",
        ayuda: "Pista: Este insecto tiene alas y produce miel.",
        respuesta: "Insecto",
        distractores: ["Mamífero", "Reptil", "Ave"],
    },
    {
        pregunta: "¿Qué tipo de energía se obtiene del viento?",
        ayuda: "Pista: Esta energía se usa para generar electricidad con aerogeneradores.",
        respuesta: "Energía eólica",
        distractores: ["Energía solar", "Energía térmica", "Energía hidráulica"],
    },
    {
        pregunta: "¿Qué órgano del cuerpo humano se encarga de bombear la sangre?",
        ayuda: "Pista: Este órgano se encuentra en el pecho y es vital para la circulación.",
        respuesta: "Corazón",
        distractores: ["Pulmones", "Hígado", "Riñones"],
    },
    {
        pregunta: "¿Qué describe un ecosistema?",
        ayuda: "Pista: Un ecosistema incluye organismos vivos y su entorno natural.",
        respuesta: "Un conjunto de organismos y su entorno",
        distractores: ["Un tipo de planta", "Un órgano del cuerpo", "Un tipo de suelo"],
    },
    {
        pregunta: "¿Qué significa biodiversidad?",
        ayuda: "Pista: Se refiere a la variedad de vida en un ecosistema o en el planeta.",
        respuesta: "La variedad de seres vivos en un ecosistema",
        distractores: ["El tipo de suelo", "El tipo de clima", "El tipo de planta"],
    },
    {
        pregunta: "¿Qué parte de la planta transporta agua y nutrientes desde las raíces hasta las hojas?",
        ayuda: "Pista: Esta parte también ayuda a mantener la planta erguida.",
        respuesta: "Tallo",
        distractores: ["Raíces", "Hojas", "Flores"],
    },
    {
        pregunta: "¿Cómo se llama el proceso en el que el agua se convierte en vapor?",
        ayuda: "Pista: Este proceso ocurre cuando el agua se calienta y pasa a estado gaseoso.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Solidificación", "Fusión"],
    },
    {
        pregunta: "¿Qué animal tiene una concha dura y puede vivir en agua o en tierra?",
        ayuda: "Pista: Este animal es conocido por su caparazón y puede estar en el mar o en la tierra.",
        respuesta: "Tortuga",
        distractores: ["Rana", "Serpiente", "Pájaro"],
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