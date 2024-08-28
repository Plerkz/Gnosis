let baseDePreguntas = [
    {
        pregunta: "¿Qué órgano del cuerpo humano es responsable de filtrar la sangre?",
        ayuda: "Pista: Este órgano se encuentra en la parte baja de la espalda.",
        respuesta: "Riñones",
        distractores: ["Hígado", "Corazón", "Pulmones"],
    },
    {
        pregunta: "¿Qué planeta es conocido como el planeta rojo?",
        ayuda: "Pista: Este planeta tiene una gran cantidad de óxido de hierro en su superficie.",
        respuesta: "Marte",
        distractores: ["Júpiter", "Venus", "Saturno"],
    },
    {
        pregunta: "¿Qué tipo de células producen energía en las plantas?",
        ayuda: "Pista: Estas células contienen clorofila y realizan la fotosíntesis.",
        respuesta: "Células vegetales",
        distractores: ["Células animales", "Células bacterianas", "Células fúngicas"],
    },
    {
        pregunta: "¿Qué fuerza mantiene a los planetas en órbita alrededor del sol?",
        ayuda: "Pista: Esta es la misma fuerza que hace que los objetos caigan al suelo.",
        respuesta: "Gravedad",
        distractores: ["Magnetismo", "Fricción", "Energía cinética"],
    },
    {
        pregunta: "¿Cuál es el ciclo del agua que describe la precipitación, evaporación y condensación?",
        ayuda: "Pista: Este ciclo involucra el movimiento del agua entre la Tierra y la atmósfera.",
        respuesta: "Ciclo del agua",
        distractores: ["Ciclo del carbono", "Ciclo del nitrógeno", "Ciclo del oxígeno"],
    },
    {
        pregunta: "¿Cómo se llaman los animales que sólo comen plantas?",
        ayuda: "Pista: Estos animales son llamados herbívoros.",
        respuesta: "Herbívoros",
        distractores: ["Carnívoros", "Omnívoros", "Insectívoros"],
    },
    {
        pregunta: "¿Qué fenómeno natural ocurre cuando las placas tectónicas se deslizan una sobre otra?",
        ayuda: "Pista: Este fenómeno puede causar temblores en la Tierra.",
        respuesta: "Terremoto",
        distractores: ["Volcán", "Tsunami", "Huracán"],
    },
    {
        pregunta: "¿Cuál es la parte más caliente del sol?",
        ayuda: "Pista: Se encuentra en el centro del sol donde se produce la fusión nuclear.",
        respuesta: "Núcleo",
        distractores: ["Corona", "Fotosfera", "Cromosfera"],
    },
    {
        pregunta: "¿Qué tipo de célula transporta oxígeno en la sangre?",
        ayuda: "Pista: Estas células son rojas debido a la hemoglobina.",
        respuesta: "Glóbulos rojos",
        distractores: ["Glóbulos blancos", "Plaquetas", "Células nerviosas"],
    },
    {
        pregunta: "¿Qué es una cadena alimentaria?",
        ayuda: "Pista: Es una secuencia que muestra cómo la energía pasa de un organismo a otro.",
        respuesta: "Una serie de organismos en los que cada uno se alimenta del anterior",
        distractores: ["Un tipo de ecosistema", "Una clase de depredador", "Un ciclo del agua"],
    },
    {
        pregunta: "¿Qué planeta tiene los anillos más visibles en el sistema solar?",
        ayuda: "Pista: Este planeta es el sexto desde el sol.",
        respuesta: "Saturno",
        distractores: ["Júpiter", "Neptuno", "Urano"],
    },
    {
        pregunta: "¿Qué gas liberan las plantas durante la fotosíntesis?",
        ayuda: "Pista: Este gas es esencial para la respiración de los animales.",
        respuesta: "Oxígeno",
        distractores: ["Dióxido de carbono", "Nitrógeno", "Metano"],
    },
    {
        pregunta: "¿Cuál es el tipo de célula que cubre la superficie del cuerpo y órganos internos?",
        ayuda: "Pista: Estas células forman parte de la piel y el revestimiento de los órganos.",
        respuesta: "Células epiteliales",
        distractores: ["Células musculares", "Células nerviosas", "Células sanguíneas"],
    },
    {
        pregunta: "¿Qué cambio de estado ocurre cuando el agua se convierte en hielo?",
        ayuda: "Pista: Este proceso ocurre cuando el agua se enfría a temperaturas bajo cero.",
        respuesta: "Congelación",
        distractores: ["Evaporación", "Condensación", "Fusión"],
    },
    {
        pregunta: "¿Cuál es el tipo de energía almacenada en los alimentos?",
        ayuda: "Pista: Esta energía es liberada durante la digestión.",
        respuesta: "Energía química",
        distractores: ["Energía térmica", "Energía mecánica", "Energía eléctrica"],
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
