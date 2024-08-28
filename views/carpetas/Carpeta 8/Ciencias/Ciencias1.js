let baseDePreguntas = [
    {
        pregunta: "¿Qué órgano en el cuerpo humano es responsable de bombear sangre a todo el sistema circulatorio?",
        ayuda: "Pista: Este órgano es esencial para el sistema cardiovascular y está situado en el centro del pecho.",
        respuesta: "Corazón",
        distractores: ["Pulmones", "Riñones", "Hígado"],
    },
    {
        pregunta: "¿Cuál es la principal función de los cloroplastos en las células vegetales?",
        ayuda: "Pista: Los cloroplastos son responsables de un proceso que convierte la luz solar en energía química.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración celular", "Transpiración", "Digestión"],
    },
    {
        pregunta: "¿Qué tipo de energía se produce en una planta fotovoltaica?",
        ayuda: "Pista: Esta energía se obtiene a partir de la luz solar.",
        respuesta: "Energía solar",
        distractores: ["Energía eólica", "Energía hidráulica", "Energía geotérmica"],
    },
    {
        pregunta: "¿Cuál es la unidad básica de la materia en la química?",
        ayuda: "Pista: Esta unidad es la que forma todos los elementos químicos y compuestos.",
        respuesta: "Átomo",
        distractores: ["Molécula", "Ion", "Isótopo"],
    },
    {
        pregunta: "¿Qué tipo de enlace químico se forma cuando dos átomos comparten electrones?",
        ayuda: "Pista: Este tipo de enlace es común en las moléculas orgánicas.",
        respuesta: "Enlace covalente",
        distractores: ["Enlace iónico", "Enlace metálico", "Enlace de hidrógeno"],
    },
    {
        pregunta: "¿Qué sistema del cuerpo humano es responsable de la producción de hormonas?",
        ayuda: "Pista: Este sistema incluye glándulas como la tiroides y las glándulas suprarrenales.",
        respuesta: "Sistema endocrino",
        distractores: ["Sistema circulatorio", "Sistema digestivo", "Sistema nervioso"],
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual las células producen energía a partir de glucosa y oxígeno?",
        ayuda: "Pista: Este proceso ocurre en las mitocondrias de las células.",
        respuesta: "Respiración celular",
        distractores: ["Fotosíntesis", "Fermentación", "Transpiración"],
    },
    {
        pregunta: "¿Qué tipo de roca se forma por la acumulación de sedimentos?",
        ayuda: "Pista: Estas rocas suelen tener una estructura estratificada.",
        respuesta: "Roca sedimentaria",
        distractores: ["Roca ígnea", "Roca metamórfica", "Roca volcánica"],
    },
    {
        pregunta: "¿Qué célula del sistema inmunológico es responsable de reconocer y eliminar patógenos específicos?",
        ayuda: "Pista: Estas células son cruciales para la respuesta inmune adaptativa.",
        respuesta: "Linfocitos",
        distractores: ["Glóbulos rojos", "Plaquetas", "Macrófagos"],
    },
    {
        pregunta: "¿Qué fenómeno físico se describe como la transferencia de calor a través de un líquido o gas?",
        ayuda: "Pista: Este fenómeno es responsable de la circulación de aire caliente en una habitación.",
        respuesta: "Convección",
        distractores: ["Conducción", "Radiación", "Reflexión"],
    },
    {
        pregunta: "¿Cuál es el proceso que convierte el agua líquida en vapor de agua?",
        ayuda: "Pista: Este proceso ocurre cuando el agua se calienta y se convierte en gas.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Solidificación", "Fusión"],
    },
    {
        pregunta: "¿Cómo se llama la capa de gases que rodea la Tierra y protege a los seres vivos de la radiación solar dañina?",
        ayuda: "Pista: Esta capa es esencial para mantener la vida en la Tierra.",
        respuesta: "Atmósfera",
        distractores: ["Estratosfera", "Troposfera", "Ionosfera"],
    },
    {
        pregunta: "¿Qué tipo de energía es almacenada en un resorte comprimido o estirado?",
        ayuda: "Pista: Esta energía se libera cuando el resorte vuelve a su posición original.",
        respuesta: "Energía potencial elástica",
        distractores: ["Energía cinética", "Energía térmica", "Energía química"],
    },
    {
        pregunta: "¿Qué proceso geológico se produce cuando dos placas tectónicas se deslizan una sobre otra?",
        ayuda: "Pista: Este tipo de límite tectónico es responsable de muchos terremotos.",
        respuesta: "Límite transformante",
        distractores: ["Límite divergente", "Límite convergente", "Límite subducente"],
    },
    {
        pregunta: "¿Qué parte del sistema nervioso central controla las funciones automáticas del cuerpo, como la respiración y la frecuencia cardíaca?",
        ayuda: "Pista: Esta parte del cerebro está situada en la base del cráneo.",
        respuesta: "Bulbo raquídeo",
        distractores: ["Cerebelo", "Cerebro", "Mesencéfalo"],
    },
    {
        pregunta: "¿Qué tipo de reacción química ocurre cuando una sustancia se descompone en sustancias más simples?",
        ayuda: "Pista: Este tipo de reacción puede ser causado por calor o electricidad.",
        respuesta: "Reacción de descomposición",
        distractores: ["Reacción de síntesis", "Reacción de desplazamiento", "Reacción de doble sustitución"],
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
