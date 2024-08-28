let baseDePreguntas = [
    {
        pregunta: "¿Qué parte de la planta ayuda a absorber agua del suelo?",
        ayuda: "Pista: Esta parte de la planta está enterrada bajo tierra.",
        respuesta: "Raíces",
        distractores: ["Hojas", "Tallos", "Flores"]
    },
    {
        pregunta: "¿Cuál es el proceso mediante el cual las plantas convierten la luz solar en alimento?",
        ayuda: "Pista: Este proceso también produce oxígeno como subproducto.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración", "Transpiración", "Digestión"]
    },
    {
        pregunta: "¿Qué órgano del cuerpo humano es responsable de filtrar la sangre y producir orina?",
        ayuda: "Pista: Hay dos de estos órganos en el abdomen.",
        respuesta: "Riñones",
        distractores: ["Corazón", "Hígado", "Estómago"]
    },
    {
        pregunta: "¿Qué tipo de animal pone huevos y tiene plumas?",
        ayuda: "Pista: Estos animales vuelan y suelen ser de diferentes colores.",
        respuesta: "Ave",
        distractores: ["Mamífero", "Reptil", "Peces"]
    },
    {
        pregunta: "¿Qué estado de la materia tiene forma fija y volumen fijo?",
        ayuda: "Pista: Este estado es el más sólido y menos fluido.",
        respuesta: "Sólido",
        distractores: ["Líquido", "Gaseoso", "Plasma"]
    },
    {
        pregunta: "¿Qué tipo de energía es generada por el movimiento del agua en una represa?",
        ayuda: "Pista: Esta energía se convierte en electricidad mediante turbinas.",
        respuesta: "Energía hidroeléctrica",
        distractores: ["Energía solar", "Energía eólica", "Energía térmica"]
    },
    {
        pregunta: "¿Cuál es el órgano principal del sistema digestivo donde empieza la digestión de los alimentos?",
        ayuda: "Pista: Es la primera parte del sistema digestivo y está en la boca.",
        respuesta: "Boca",
        distractores: ["Estómago", "Hígado", "Intestino delgado"]
    },
    {
        pregunta: "¿Cómo se llama el ciclo que describe el movimiento del agua en la Tierra?",
        ayuda: "Pista: Incluye la evaporación, condensación y precipitación.",
        respuesta: "Ciclo del agua",
        distractores: ["Ciclo de vida", "Ciclo de nutrientes", "Ciclo de carbono"]
    },
    {
        pregunta: "¿Qué parte del cuerpo humano es responsable de detectar estímulos externos?",
        ayuda: "Pista: Estos órganos están en la cabeza y permiten ver, oír, oler, gustar y tocar.",
        respuesta: "Sentidos",
        distractores: ["Órganos internos", "Músculos", "Huesos"]
    },
    {
        pregunta: "¿Qué función tiene el sistema óseo en el cuerpo humano?",
        ayuda: "Pista: Este sistema proporciona soporte estructural y protección a los órganos internos.",
        respuesta: "Soporte y protección de los órganos",
        distractores: ["Producción de hormonas", "Digestión de alimentos", "Transmisión de señales nerviosas"]
    },
    {
        pregunta: "¿Qué tipo de célula es responsable de transportar oxígeno en la sangre?",
        ayuda: "Pista: Estas células son de color rojo y tienen forma de disco.",
        respuesta: "Glóbulos rojos",
        distractores: ["Glóbulos blancos", "Plaquetas", "Células musculares"]
    },
    {
        pregunta: "¿Cuál es la principal fuente de energía para la vida en la Tierra?",
        ayuda: "Pista: Esta fuente de energía proviene del sol.",
        respuesta: "Luz solar",
        distractores: ["Energía nuclear", "Energía geotérmica", "Energía química"]
    },
    {
        pregunta: "¿Qué tipo de animal es un pez?",
        ayuda: "Pista: Los peces viven en el agua y tienen branquias para respirar.",
        respuesta: "Vertebrado",
        distractores: ["Invertebrado", "Reptil", "Mamífero"]
    },
    {
        pregunta: "¿Cómo se llama el proceso en el que el agua se convierte en vapor?",
        ayuda: "Pista: Este proceso ocurre cuando el agua se calienta.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Precipitación", "Solidificación"]
    },
    {
        pregunta: "¿Qué es un hábitat?",
        ayuda: "Pista: Es el lugar natural donde vive una especie.",
        respuesta: "El lugar natural donde vive una especie",
        distractores: ["Un tipo de animal", "Un lugar de entretenimiento", "Un tipo de alimento"]
    },
    {
        pregunta: "¿Qué función cumple la piel en el cuerpo humano?",
        ayuda: "Pista: La piel protege el cuerpo y ayuda a regular la temperatura.",
        respuesta: "Protege el cuerpo y regula la temperatura",
        distractores: ["Ayuda a la digestión", "Produce hormonas", "Filtra la sangre"]
    },
    {
        pregunta: "¿Cuál es el nombre del proceso en el que las plantas pierden agua a través de las hojas?",
        ayuda: "Pista: Este proceso es importante para regular la temperatura de la planta.",
        respuesta: "Transpiración",
        distractores: ["Fotosíntesis", "Respiración", "Digestión"]
    }
];
// Función para mostrar el cuestionario
function mostrarCuestionario() {
    cuestionarioCiencias.forEach((item, index) => {
        console.log(`Pregunta ${index + 1}: ${item.pregunta}`);
        console.log(`Ayuda: ${item.ayuda}`);
        console.log("Opciones:");
        const opciones = [...item.distractores, item.respuesta];
        shuffle(opciones).forEach((opcion, i) => {
            console.log(`  ${i + 1}. ${opcion}`);
        });
    });
}

// Función para cambiar una pregunta
function cambiarPregunta(indice, nuevaPregunta, nuevaAyuda, nuevasRespuestas, respuestaCorrecta) {
    if (indice >= 0 && indice < cuestionarioCiencias.length) {
        cuestionarioCiencias[indice].pregunta = nuevaPregunta;
        cuestionarioCiencias[indice].ayuda = nuevaAyuda;
        cuestionarioCiencias[indice].respuesta = respuestaCorrecta;
        cuestionarioCiencias[indice].distractores = nuevasRespuestas.filter(respuesta => respuesta !== respuestaCorrecta);
    } else {
        console.log("Índice fuera de rango");
    }
}

// Mostrar cuestionario original
console.log("Cuestionario de Ciencias original:");
mostrarCuestionario();

// Cambiar la primera pregunta
cambiarPregunta(
    0,
    "¿Cuál es la función principal de la raíz de una planta?",
    "Pista: La raíz ancla la planta y absorbe agua.",
    ["Sostener la planta", "Hacer fotosíntesis", "Transportar nutrientes"],
    "Sostener la planta"
);
// Función para mezclar el orden de las preguntas (shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
;

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