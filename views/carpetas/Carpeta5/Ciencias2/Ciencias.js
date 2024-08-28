let baseDePreguntas = [
    {
        pregunta: "¿Qué órgano del cuerpo humano produce insulina?",
        ayuda: "Pista: Este órgano se encuentra en el abdomen y ayuda a regular el azúcar en la sangre.",
        respuesta: "Páncreas",
        distractores: ["Hígado", "Riñones", "Estómago"]
    },
    {
        pregunta: "¿Qué es el sistema circulatorio?",
        ayuda: "Pista: Es el sistema del cuerpo encargado de transportar sangre y nutrientes.",
        respuesta: "El sistema que transporta sangre y nutrientes por el cuerpo",
        distractores: ["El sistema digestivo", "El sistema respiratorio", "El sistema nervioso"]
    },
    {
        pregunta: "¿Cuál es la función principal del sistema digestivo?",
        ayuda: "Pista: Este sistema transforma los alimentos en sustancias que el cuerpo puede utilizar.",
        respuesta: "Descomponer alimentos para la absorción de nutrientes",
        distractores: ["Transportar oxígeno", "Producir hormonas", "Eliminar desechos"]
    },
    {
        pregunta: "¿Qué es la cadena alimentaria?",
        ayuda: "Pista: Es una serie de organismos que muestran cómo la energía fluye de uno a otro.",
        respuesta: "La secuencia de organismos que se alimentan unos de otros",
        distractores: ["Un tipo de planta", "Un ciclo del agua", "Una lista de alimentos"]
    },
    {
        pregunta: "¿Qué tipo de energía es producida por el sol?",
        ayuda: "Pista: Esta energía es vital para la vida en la Tierra y se usa en paneles solares.",
        respuesta: "Energía solar",
        distractores: ["Energía eólica", "Energía nuclear", "Energía geotérmica"]
    },
    {
        pregunta: "¿Qué es un ecosistema?",
        ayuda: "Pista: Es una comunidad de seres vivos interactuando con su entorno.",
        respuesta: "Un sistema de organismos y su ambiente",
        distractores: ["Una sola especie de planta", "Un órgano del cuerpo", "Una forma de energía"]
    },
    {
        pregunta: "¿Cómo se llama el proceso de cambio de un líquido a gas?",
        ayuda: "Pista: Este proceso ocurre cuando el líquido se calienta.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Solidificación", "Fusión"]
    },
    {
        pregunta: "¿Cuál es el proceso que permite a las plantas producir su propio alimento?",
        ayuda: "Pista: Utiliza luz solar para convertir dióxido de carbono y agua en glucosa.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración", "Digestión", "Transpiración"]
    },
    {
        pregunta: "¿Qué es la biodiversidad?",
        ayuda: "Pista: Es la variedad de diferentes tipos de vida en un ecosistema.",
        respuesta: "La variedad de organismos en un ecosistema",
        distractores: ["El tipo de suelo", "El tipo de clima", "El tipo de planta"]
    },
    {
        pregunta: "¿Qué tipo de roca se forma a partir del enfriamiento y solidificación del magma?",
        ayuda: "Pista: Estas rocas suelen ser duras y pueden tener burbujas.",
        respuesta: "Roca ígnea",
        distractores: ["Roca sedimentaria", "Roca metamórfica", "Roca orgánica"]
    },
    {
        pregunta: "¿Qué función cumplen las raíces de una planta?",
        ayuda: "Pista: Absorben agua y minerales del suelo.",
        respuesta: "Absorben agua y nutrientes del suelo",
        distractores: ["Realizan fotosíntesis", "Transportan nutrientes", "Producción de flores"]
    },
    {
        pregunta: "¿Qué fenómeno ocurre cuando el vapor de agua se enfría y se convierte en líquido?",
        ayuda: "Pista: Este proceso es esencial para formar nubes y precipitación.",
        respuesta: "Condensación",
        distractores: ["Evaporación", "Precipitación", "Filtración"]
    },
    {
        pregunta: "¿Qué órgano es responsable de la producción de hormonas en el cuerpo humano?",
        ayuda: "Pista: Estos órganos incluyen la glándula tiroides y las glándulas suprarrenales.",
        respuesta: "Glándulas endocrinas",
        distractores: ["Corazón", "Pulmones", "Riñones"]
    },
    {
        pregunta: "¿Cuál es la principal fuente de energía para los seres vivos?",
        ayuda: "Pista: Esta fuente de energía proviene del sol.",
        respuesta: "Luz solar",
        distractores: ["Energía eólica", "Energía térmica", "Energía eléctrica"]
    },
    {
        pregunta: "¿Qué tipo de energía se obtiene del calor interior de la Tierra?",
        ayuda: "Pista: Esta energía se usa en geotermia para calentar edificios y generar electricidad.",
        respuesta: "Energía geotérmica",
        distractores: ["Energía solar", "Energía eólica", "Energía nuclear"]
    }
];
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