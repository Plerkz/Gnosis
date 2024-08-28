let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el nombre del proceso por el cual las plantas convierten el dióxido de carbono en glucosa y oxígeno utilizando la luz solar?",
        ayuda: "Pista: Este proceso ocurre en los cloroplastos.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración celular", "Fermentación", "Transpiración"],
    },
    {
        pregunta: "¿Qué tipo de enlace químico se forma cuando dos átomos comparten electrones?",
        ayuda: "Pista: Este enlace es común en las moléculas orgánicas.",
        respuesta: "Enlace covalente",
        distractores: ["Enlace iónico", "Enlace metálico", "Enlace de hidrógeno"],
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual los líquidos se transforman en sólidos?",
        ayuda: "Pista: Este proceso es el opuesto de la fusión.",
        respuesta: "Solidificación",
        distractores: ["Fusión", "Evaporación", "Condensación"],
    },
    {
        pregunta: "¿Qué estructura en las células vegetales permite la entrada de agua y nutrientes y la salida de productos de desecho?",
        ayuda: "Pista: Esta estructura actúa como una barrera semipermeable.",
        respuesta: "Membrana celular",
        distractores: ["Núcleo", "Pared celular", "Cloroplasto"],
    },
    {
        pregunta: "¿Qué tipo de energía se transforma en energía térmica cuando una sustancia se quema?",
        ayuda: "Pista: Esta energía proviene de los enlaces químicos en las sustancias.",
        respuesta: "Energía química",
        distractores: ["Energía solar", "Energía mecánica", "Energía eléctrica"],
    },
    {
        pregunta: "¿Qué tipo de célula se encarga de enviar señales eléctricas en el sistema nervioso?",
        ayuda: "Pista: Estas células permiten la comunicación entre diferentes partes del cuerpo.",
        respuesta: "Neuronas",
        distractores: ["Células musculares", "Glóbulos rojos", "Células epiteliales"],
    },
    {
        pregunta: "¿Cómo se llama el ciclo que describe la circulación del agua en la Tierra, desde la evaporación hasta la precipitación?",
        ayuda: "Pista: Este ciclo incluye procesos como la condensación y la evaporación.",
        respuesta: "Ciclo del agua",
        distractores: ["Ciclo del carbono", "Ciclo del nitrógeno", "Ciclo de Krebs"],
    },
    {
        pregunta: "¿Qué tipo de energía es utilizada por los seres vivos durante la respiración celular para producir ATP?",
        ayuda: "Pista: Esta energía proviene de la descomposición de los alimentos.",
        respuesta: "Energía química",
        distractores: ["Energía térmica", "Energía solar", "Energía cinética"],
    },
    {
        pregunta: "¿Cuál es la principal función de los ribosomas en una célula?",
        ayuda: "Pista: Estos organelos están involucrados en la síntesis de proteínas.",
        respuesta: "Síntesis de proteínas",
        distractores: ["Producción de energía", "Transporte de nutrientes", "Replicación del ADN"],
    },
    {
        pregunta: "¿Qué tipo de vínculo se forma entre átomos en una molécula de agua?",
        ayuda: "Pista: En esta molécula, el oxígeno está unido a los hidrógenos por este tipo de enlace.",
        respuesta: "Enlace covalente polar",
        distractores: ["Enlace iónico", "Enlace metálico", "Enlace de hidrógeno"],
    },
    {
        pregunta: "¿Qué proceso es responsable de la transferencia de calor en la atmósfera debido al movimiento del aire?",
        ayuda: "Pista: Este proceso se produce cuando el aire caliente asciende y el aire frío desciende.",
        respuesta: "Convección",
        distractores: ["Conducción", "Radiación", "Difusión"],
    },
    {
        pregunta: "¿Qué tipo de reproducción requiere la unión de dos células sexuales y resulta en una descendencia genéticamente diversa?",
        ayuda: "Pista: Este tipo de reproducción ocurre en organismos multicelulares.",
        respuesta: "Reproducción sexual",
        distractores: ["Reproducción asexual", "Gemación", "Fragmentación"],
    },
    {
        pregunta: "¿Cómo se llama el proceso en el que las plantas absorben agua a través de sus raíces y la liberan al ambiente?",
        ayuda: "Pista: Este proceso es parte del ciclo del agua y ocurre principalmente en las hojas.",
        respuesta: "Transpiración",
        distractores: ["Condensación", "Evaporación", "Filtración"],
    },
    {
        pregunta: "¿Qué tipo de reacción química ocurre cuando una sustancia reacciona con oxígeno para liberar energía en forma de luz y calor?",
        ayuda: "Pista: Este tipo de reacción es común en la combustión de materiales.",
        respuesta: "Reacción de combustión",
        distractores: ["Reacción de síntesis", "Reacción de descomposición", "Reacción de neutralización"],
    },
    {
        pregunta: "¿Qué elemento químico es el principal componente de los ácidos nucleicos como el ADN y el ARN?",
        ayuda: "Pista: Este elemento es esencial para la vida y se encuentra en todos los organismos.",
        respuesta: "Carbono",
        distractores: ["Hidrógeno", "Oxígeno", "Nitrógeno"],
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
