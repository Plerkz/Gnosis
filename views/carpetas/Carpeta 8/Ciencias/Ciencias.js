let baseDePreguntas = [
    {
        pregunta: "¿Qué es la célula y cuál es su función principal?",
        ayuda: "Pista: La célula es la unidad básica de vida y tiene múltiples funciones, incluyendo la producción de energía.",
        respuesta: "Es la unidad básica de vida y realiza funciones como la producción de energía, crecimiento y reproducción",
        distractores: ["Un órgano del cuerpo humano", "Una sustancia química en los seres vivos", "Una estructura en los tejidos vegetales"],
    },
    {
        pregunta: "¿Cuál es la diferencia principal entre células animales y células vegetales?",
        ayuda: "Pista: Las células vegetales tienen una estructura adicional que no se encuentra en las células animales.",
        respuesta: "Las células vegetales tienen una pared celular y cloroplastos, mientras que las células animales no",
        distractores: ["Las células animales tienen mitocondrias y las vegetales no", "Las células vegetales tienen núcleo y las animales no", "Las células animales tienen pared celular y las vegetales no"],
    },
    {
        pregunta: "¿Qué es un ecosistema?",
        ayuda: "Pista: Un ecosistema incluye organismos vivos y su entorno físico interactuando como un sistema.",
        respuesta: "Un sistema formado por organismos vivos y su entorno físico que interactúan",
        distractores: ["Un grupo de organismos de la misma especie", "Un tipo de hábitat específico", "Una estructura celular en los organismos"],
    },
    {
        pregunta: "¿Cómo se produce la fotosíntesis en las plantas?",
        ayuda: "Pista: La fotosíntesis es el proceso mediante el cual las plantas convierten la luz solar en energía.",
        respuesta: "Las plantas convierten la luz solar, dióxido de carbono y agua en glucosa y oxígeno",
        distractores: ["Las plantas absorben nutrientes del suelo y los transforman en energía", "Las plantas utilizan oxígeno para producir glucosa", "Las plantas liberan dióxido de carbono y agua en el aire"],
    },
    {
        pregunta: "¿Qué es la ley de la conservación de la materia?",
        ayuda: "Pista: Esta ley establece que la materia no se crea ni se destruye en una reacción química.",
        respuesta: "La materia no se crea ni se destruye, solo se transforma de una forma a otra",
        distractores: ["La materia se convierte en energía durante una reacción química", "La materia se puede crear a partir de la energía", "La materia se destruye en una reacción química"],
    },
    {
        pregunta: "¿Qué es un átomos y cuáles son sus componentes principales?",
        ayuda: "Pista: Los átomos son las unidades básicas de la materia y tienen una estructura interna compuesta por varias partículas.",
        respuesta: "Es la unidad básica de la materia, compuesto por protones, neutrones y electrones",
        distractores: ["Un grupo de moléculas unidas entre sí", "Una mezcla de diferentes sustancias químicas", "Una sustancia que solo contiene protones"],
    },
    {
        pregunta: "¿Qué son los estados de la materia y cuáles son los tres principales?",
        ayuda: "Pista: Los estados de la materia se refieren a las formas en que se presenta la materia, dependiendo de su temperatura y presión.",
        respuesta: "Sólido, líquido y gaseoso",
        distractores: ["Sólido, líquido y plasma", "Líquido, gaseoso y plasma", "Sólido, plasma y energía"],
    },
    {
        pregunta: "¿Qué es el ciclo del agua y cuáles son sus etapas principales?",
        ayuda: "Pista: El ciclo del agua describe cómo el agua se mueve a través del ambiente en diferentes formas.",
        respuesta: "Es el proceso mediante el cual el agua circula a través de la evaporación, condensación, precipitación y acumulación",
        distractores: ["La transformación del agua en oxígeno y dióxido de carbono", "El proceso de absorción de agua por las raíces de las plantas", "La conversión del agua en nutrientes para los organismos"],
    },
    {
        pregunta: "¿Qué es una reacción química y cómo se representa?",
        ayuda: "Pista: Una reacción química implica la transformación de sustancias y se representa con una ecuación química.",
        respuesta: "Es el proceso en el que sustancias se transforman en otras y se representa con una ecuación química",
        distractores: ["Un cambio físico en la materia sin transformación de sustancias", "Una mezcla de sustancias que no cambia su composición", "Una combinación de moléculas sin formación de nuevos productos"],
    },
    {
        pregunta: "¿Qué es la biodiversidad y por qué es importante?",
        ayuda: "Pista: La biodiversidad se refiere a la variedad de vida en la Tierra y su importancia radica en el equilibrio de los ecosistemas.",
        respuesta: "La variedad de especies y ecosistemas en la Tierra, importante para el equilibrio ecológico",
        distractores: ["La cantidad de agua en los ecosistemas", "La cantidad de minerales en el suelo", "La variedad de condiciones climáticas en un área"],
    },
    {
        pregunta: "¿Qué es la energía cinética y cómo se calcula?",
        ayuda: "Pista: La energía cinética está asociada con el movimiento de un objeto y se calcula usando su masa y velocidad.",
        respuesta: "Es la energía que tiene un objeto en movimiento, calculada como 1/2 de la masa por la velocidad al cuadrado",
        distractores: ["Es la energía almacenada en un objeto debido a su posición", "Es la energía transferida durante una reacción química", "Es la energía absorbida por un objeto sin movimiento"],
    },
    {
        pregunta: "¿Qué es la tectónica de placas y cómo afecta la superficie terrestre?",
        ayuda: "Pista: La tectónica de placas se refiere al movimiento de las placas que forman la litosfera terrestre, causando fenómenos como terremotos y formación de montañas.",
        respuesta: "Es el movimiento de las placas tectónicas que forma montañas, terremotos y volcanes",
        distractores: ["El proceso de formación de estrellas y galaxias", "El cambio de estaciones en el clima terrestre", "La acumulación de sedimentos en los océanos"],
    },
    {
        pregunta: "¿Cómo afecta la contaminación del aire a la salud humana?",
        ayuda: "Pista: La contaminación del aire puede tener efectos negativos sobre el sistema respiratorio y otras partes del cuerpo.",
        respuesta: "Puede causar problemas respiratorios, enfermedades cardiovasculares y otros problemas de salud",
        distractores: ["Mejora la calidad del aire y reduce enfermedades", "No tiene efectos significativos en la salud humana", "Solo afecta a la flora y fauna, no a los seres humanos"],
    },
    {
        pregunta: "¿Qué es la energía potencial y cómo se relaciona con la energía cinética?",
        ayuda: "Pista: La energía potencial está relacionada con la posición de un objeto, mientras que la energía cinética está relacionada con su movimiento.",
        respuesta: "Es la energía almacenada en un objeto debido a su posición, que puede convertirse en energía cinética cuando el objeto se mueve",
        distractores: ["Es la energía producida por reacciones químicas", "Es la energía de los átomos en reposo", "Es la energía liberada durante el proceso de fotosíntesis"],
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

// Mezclar el orden de las preguntas para que no estén agrupadas por tema
baseDePreguntas = shuffle(baseDePreguntas);
