let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el órgano principal del sistema circulatorio en el cuerpo humano?",
        ayuda: "Pista: Este órgano bombea sangre a través del cuerpo.",
        respuesta: "Corazón",
        distractores: ["Pulmones", "Riñones", "Hígado"],
    },
    {
        pregunta: "¿Qué parte de la planta es responsable de la fotosíntesis?",
        ayuda: "Pista: Esta parte es generalmente verde y se encuentra en la parte superior de la planta.",
        respuesta: "Hojas",
        distractores: ["Raíces", "Tallos", "Flores"],
    },
    {
        pregunta: "¿Cuál es el estado de la materia en el que las partículas están muy separadas y se mueven libremente?",
        ayuda: "Pista: Este estado incluye el agua en su forma de vapor.",
        respuesta: "Gas",
        distractores: ["Sólido", "Líquido", "Plasma"],
    },
    {
        pregunta: "¿Qué tipo de célula se encarga de transportar oxígeno en el cuerpo humano?",
        ayuda: "Pista: Estas células son de color rojo y tienen una forma redonda.",
        respuesta: "Glóbulos rojos",
        distractores: ["Glóbulos blancos", "Plaquetas", "Células musculares"],
    },
    {
        pregunta: "¿Cuál es el nombre del proceso por el cual el agua pasa de líquido a vapor?",
        ayuda: "Pista: Este proceso ocurre cuando el agua hierve.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Solidificación", "Fusión"],
    },
    {
        pregunta: "¿Qué órgano en el cuerpo humano se encarga de filtrar la sangre y producir orina?",
        ayuda: "Pista: Este órgano está ubicado en la parte baja de la espalda.",
        respuesta: "Riñón",
        distractores: ["Hígado", "Pulmones", "Corazón"],
    },
    {
        pregunta: "¿Cómo se llama el sistema del cuerpo que nos permite mover los músculos?",
        ayuda: "Pista: Este sistema incluye huesos y músculos.",
        respuesta: "Sistema musculoesquelético",
        distractores: ["Sistema digestivo", "Sistema circulatorio", "Sistema nervioso"],
    },
    {
        pregunta: "¿Qué tipo de energía se produce por la combinación de alimentos en el cuerpo?",
        ayuda: "Pista: Este tipo de energía se obtiene de los nutrientes.",
        respuesta: "Energía química",
        distractores: ["Energía térmica", "Energía eléctrica", "Energía mecánica"],
    },
    {
        pregunta: "¿Cuál es la función principal de los cloroplastos en las células vegetales?",
        ayuda: "Pista: Estos organelos están involucrados en la producción de alimentos en las plantas.",
        respuesta: "Realizan la fotosíntesis",
        distractores: ["Transportan agua", "Defienden contra bacterias", "Almacenan nutrientes"],
    },
    {
        pregunta: "¿Qué tipo de animal tiene exoesqueleto y antenas?",
        ayuda: "Pista: Estos animales incluyen insectos y arañas.",
        respuesta: "Artrópodos",
        distractores: ["Moluscos", "Anélidos", "Equinodermos"],
    },
    {
        pregunta: "¿Qué es la célula?",
        ayuda: "Pista: Es la unidad básica de vida en los organismos.",
        respuesta: "La unidad básica de los seres vivos",
        distractores: ["Un tipo de tejido", "Un órgano del cuerpo", "Un tipo de molécula"],
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual las plantas liberan oxígeno al ambiente?",
        ayuda: "Pista: Este proceso es parte de la fotosíntesis.",
        respuesta: "Transpiración",
        distractores: ["Respiración", "Digestión", "Excreción"],
    },
    {
        pregunta: "¿Qué tipo de roca se forma a partir de la acumulación de sedimentos?",
        ayuda: "Pista: Este tipo de roca se encuentra comúnmente en el fondo de los ríos y lagos.",
        respuesta: "Roca sedimentaria",
        distractores: ["Roca ígnea", "Roca metamórfica", "Roca volcánica"],
    },
    {
        pregunta: "¿Qué componente del aire es esencial para la respiración de los animales?",
        ayuda: "Pista: Este gas es necesario para la vida y se encuentra en la atmósfera.",
        respuesta: "Oxígeno",
        distractores: ["Nitrógeno", "Dióxido de carbono", "Helio"],
    },
    {
        pregunta: "¿Cuál es la principal fuente de energía para los organismos vivos en la Tierra?",
        ayuda: "Pista: Esta fuente de energía proviene del Sol.",
        respuesta: "Luz solar",
        distractores: ["Energía química", "Energía térmica", "Energía nuclear"],
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
