let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el planeta más cercano al sol?",
        ayuda: "Pista: Este planeta es el primero en el sistema solar y es muy caliente.",
        respuesta: "Mercurio",
        distractores: ["Venus", "Marte", "Tierra"],
    },
    {
        pregunta: "¿Qué tipo de roca se forma a partir de lava que se enfría rápidamente?",
        ayuda: "Pista: Este tipo de roca es conocida por su textura porosa y se forma en la superficie.",
        respuesta: "Roca ígnea",
        distractores: ["Roca sedimentaria", "Roca metamórfica", "Roca orgánica"],
    },
    {
        pregunta: "¿Qué parte de la planta absorbe el agua del suelo?",
        ayuda: "Pista: Esta parte generalmente está debajo del suelo.",
        respuesta: "Raíces",
        distractores: ["Hojas", "Tallos", "Flores"],
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual las plantas producen su alimento?",
        ayuda: "Pista: Este proceso utiliza luz solar para convertir dióxido de carbono y agua en alimentos.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración", "Digestión", "Transpiración"],
    },
    {
        pregunta: "¿Qué es un ecosistema?",
        ayuda: "Pista: Un ecosistema es una comunidad de seres vivos y su entorno físico.",
        respuesta: "Un sistema que incluye organismos y su ambiente",
        distractores: ["Un tipo de planta", "Un órgano del cuerpo", "Un tipo de suelo"],
    },
    {
        pregunta: "¿Qué tipo de animal es un pez?",
        ayuda: "Pista: Los peces viven en el agua y tienen branquias para respirar.",
        respuesta: "Vertebrado",
        distractores: ["Invertebrado", "Reptil", "Mamífero"],
    },
    {
        pregunta: "¿Qué gas es esencial para la respiración de los seres humanos?",
        ayuda: "Pista: Este gas está en la atmósfera y es necesario para vivir.",
        respuesta: "Oxígeno",
        distractores: ["Dióxido de carbono", "Nitrógeno", "Helio"],
    },
    {
        pregunta: "¿Qué es un ciclo biogeoquímico?",
        ayuda: "Pista: Es el proceso mediante el cual los nutrientes circulan en un ecosistema.",
        respuesta: "El ciclo de nutrientes en un ecosistema",
        distractores: ["Un tipo de planta", "Un tipo de animal", "Un tipo de suelo"],
    },
    {
        pregunta: "¿Qué tipo de energía proviene del sol?",
        ayuda: "Pista: Esta energía es fundamental para la vida en la Tierra y se puede convertir en electricidad.",
        respuesta: "Energía solar",
        distractores: ["Energía eólica", "Energía nuclear", "Energía geotérmica"],
    },
    {
        pregunta: "¿Cuál es el órgano que bombea sangre a través del cuerpo en los seres humanos?",
        ayuda: "Pista: Este órgano es esencial para la circulación sanguínea.",
        respuesta: "Corazón",
        distractores: ["Pulmones", "Hígado", "Riñones"],
    },
    {
        pregunta: "¿Qué tipo de célula se encarga de defender al cuerpo de infecciones?",
        ayuda: "Pista: Estas células forman parte del sistema inmunológico.",
        respuesta: "Glóbulos blancos",
        distractores: ["Glóbulos rojos", "Plaquetas", "Células nerviosas"],
    },
    {
        pregunta: "¿Qué proceso describe el cambio de estado de un líquido a gas?",
        ayuda: "Pista: Este proceso ocurre cuando el agua hierve.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Solidificación", "Fusión"],
    },
    {
        pregunta: "¿Qué elemento químico es el principal componente del aire?",
        ayuda: "Pista: Este gas constituye aproximadamente el 78% del aire.",
        respuesta: "Nitrógeno",
        distractores: ["Oxígeno", "Dióxido de carbono", "Helio"],
    },
    {
        pregunta: "¿Qué es la biodiversidad?",
        ayuda: "Pista: Se refiere a la variedad de organismos en un ecosistema o en la Tierra.",
        respuesta: "La variedad de seres vivos en un ecosistema",
        distractores: ["El tipo de suelo", "El tipo de clima", "El tipo de planta"],
    },
    {
        pregunta: "¿Qué tipo de energía es producida por el viento?",
        ayuda: "Pista: Esta energía se utiliza para generar electricidad mediante aerogeneradores.",
        respuesta: "Energía eólica",
        distractores: ["Energía solar", "Energía térmica", "Energía hidráulica"],
    },
    {
        pregunta: "¿Cuál es la función de las hojas en las plantas?",
        ayuda: "Pista: Las hojas están involucradas en la fotosíntesis y en la transpiración.",
        respuesta: "Realizan la fotosíntesis",
        distractores: ["Absorben agua", "Transportan nutrientes", "Protegen el tallo"],
    }
]
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