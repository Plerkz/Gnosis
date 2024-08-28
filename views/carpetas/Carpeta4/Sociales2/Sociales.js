let baseDePreguntas = [
    {
        pregunta: "¿Qué órgano del cuerpo humano es responsable de bombear la sangre?",
        ayuda: "Pista: Este órgano es crucial para la circulación sanguínea.",
        respuesta: "Corazón",
        distractores: ["Pulmones", "Riñones", "Hígado"]
    },
    {
        pregunta: "¿Qué parte de una planta realiza la fotosíntesis?",
        ayuda: "Pista: Es la parte verde que captura la luz solar.",
        respuesta: "Hojas",
        distractores: ["Raíces", "Tallos", "Flores"]
    },
    {
        pregunta: "¿Cuál es el proceso por el cual las plantas producen su alimento usando luz solar?",
        ayuda: "Pista: Este proceso es esencial para el crecimiento de las plantas.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración", "Transpiración", "Digestión"]
    },
    {
        pregunta: "¿Qué tipo de animal tiene sangre fría y suele vivir en el agua?",
        ayuda: "Pista: Estos animales tienen piel escamosa y pueden ser peces o reptiles.",
        respuesta: "Animal de sangre fría",
        distractores: ["Animal de sangre caliente", "Mamífero", "Ave"]
    },
    {
        pregunta: "¿Qué es una metamorfosis en el ciclo de vida de un insecto?",
        ayuda: "Pista: Es el proceso de cambio que ocurre de huevo a adulto.",
        respuesta: "Cambio de forma durante el desarrollo",
        distractores: ["Cambio de color", "Cambio de tamaño", "Cambio de hábitat"]
    },
    {
        pregunta: "¿Cuál es la función principal de las raíces de una planta?",
        ayuda: "Pista: Estas estructuras absorben agua y nutrientes del suelo.",
        respuesta: "Absorber agua y nutrientes",
        distractores: ["Realizar fotosíntesis", "Producir flores", "Proporcionar soporte"]
    },
    {
        pregunta: "¿Qué tipo de roca se forma por la acumulación de sedimentos?",
        ayuda: "Pista: Estas rocas se forman en capas y pueden tener fósiles.",
        respuesta: "Roca sedimentaria",
        distractores: ["Roca ígnea", "Roca metamórfica", "Roca volcánica"]
    },
    {
        pregunta: "¿Qué fenómeno meteorológico puede causar lluvias intensas y vientos fuertes?",
        ayuda: "Pista: Estos fenómenos suelen asociarse con tormentas grandes.",
        respuesta: "Huracán",
        distractores: ["Tornado", "Relámpago", "Tormenta de nieve"]
    },
    {
        pregunta: "¿Cómo se llama el líquido que las plantas liberan a través de sus hojas?",
        ayuda: "Pista: Este proceso ayuda a enfriar la planta.",
        respuesta: "Transpiración",
        distractores: ["Evaporación", "Condensación", "Filtración"]
    },
    {
        pregunta: "¿Qué es un ecosistema?",
        ayuda: "Pista: Es una comunidad de organismos que interactúan con su entorno.",
        respuesta: "Un sistema de organismos y su ambiente",
        distractores: ["Un tipo de planta", "Un órgano del cuerpo", "Una forma de energía"]
    },
    {
        pregunta: "¿Qué función cumple el sistema respiratorio en el cuerpo humano?",
        ayuda: "Pista: Este sistema permite el intercambio de oxígeno y dióxido de carbono.",
        respuesta: "Permitir la respiración",
        distractores: ["Bombear sangre", "Digestionar alimentos", "Coordinar los movimientos"]
    },
    {
        pregunta: "¿Qué tipo de energía es producida por el viento?",
        ayuda: "Pista: Esta energía se utiliza en turbinas eólicas.",
        respuesta: "Energía eólica",
        distractores: ["Energía solar", "Energía térmica", "Energía hidráulica"]
    },
    {
        pregunta: "¿Cuál es el principal gas que las plantas absorben durante la fotosíntesis?",
        ayuda: "Pista: Este gas es esencial para el proceso de producción de alimento.",
        respuesta: "Dióxido de carbono",
        distractores: ["Oxígeno", "Nitrógeno", "Helio"]
    },
    {
        pregunta: "¿Qué es una cadena alimentaria?",
        ayuda: "Pista: Es una secuencia que muestra cómo la energía fluye de un organismo a otro.",
        respuesta: "Una secuencia de organismos que se alimentan unos a otros",
        distractores: ["Una lista de alimentos", "Un tipo de planta", "Un ciclo de agua"]
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual el agua se convierte en vapor?",
        ayuda: "Pista: Ocurre cuando el agua se calienta.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Precipitación", "Filtración"]
    },
    {
        pregunta: "¿Qué tipo de animal tiene su cuerpo cubierto de plumas y pone huevos?",
        ayuda: "Pista: Estos animales son comunes en granjas y tienen pico.",
        respuesta: "Ave",
        distractores: ["Mamífero", "Reptil", "Anfibio"]
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