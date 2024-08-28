let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la capital de El Salvador?",
        ayuda: "Pista: Es la ciudad más grande y poblada del país.",
        respuesta: "San Salvador",
        distractores: ["Santa Ana", "San Miguel", "La Libertad"],
    },
    {
        pregunta: "¿Qué océano limita al oeste de El Salvador?",
        ayuda: "Pista: Este océano se encuentra al lado del continente americano.",
        respuesta: "Océano Pacífico",
        distractores: ["Océano Atlántico", "Mar Caribe", "Océano Índico"],
    },
    {
        pregunta: "¿Cuál es el país vecino al norte de El Salvador?",
        ayuda: "Pista: Este país está situado entre El Salvador y México.",
        respuesta: "Honduras",
        distractores: ["Guatemala", "Nicaragua", "Costa Rica"],
    },
    {
        pregunta: "¿En qué año se independizó El Salvador de España?",
        ayuda: "Pista: La independencia de El Salvador ocurrió a principios del siglo XIX.",
        respuesta: "1821",
        distractores: ["1800", "1830", "1850"],
    },
    {
        pregunta: "¿Cuál es el río más largo de El Salvador?",
        ayuda: "Pista: Este río recorre varias regiones del país antes de desembocar en el océano.",
        respuesta: "Río Lempa",
        distractores: ["Río San Miguel", "Río Grande", "Río Jiboa"],
    },
    {
        pregunta: "¿Qué es el sistema de gobiernos de El Salvador?",
        ayuda: "Pista: El país tiene una estructura que incluye tres ramas principales del gobierno.",
        respuesta: "República democrática",
        distractores: ["Monarquía constitucional", "Dictadura", "República parlamentaria"],
    },
    {
        pregunta: "¿Qué grupo indígena habitaba El Salvador antes de la llegada de los europeos?",
        ayuda: "Pista: Este grupo indígena tiene una rica historia en la región de Mesoamérica.",
        respuesta: "Pipiles",
        distractores: ["Maya", "Azteca", "Inca"],
    },
    {
        pregunta: "¿Cuál es el principal cultivo agrícola de El Salvador?",
        ayuda: "Pista: Este cultivo es conocido por ser la base de la dieta en muchos países latinoamericanos.",
        respuesta: "Café",
        distractores: ["Maíz", "Arroz", "Trigo"],
    },
    {
        pregunta: "¿Qué importante conflicto armado tuvo lugar en El Salvador durante la década de 1980?",
        ayuda: "Pista: Este conflicto fue entre el gobierno y grupos guerrilleros.",
        respuesta: "Guerra Civil",
        distractores: ["Guerra de Independencia", "Guerra de las Malvinas", "Guerra del Pacífico"],
    },
    {
        pregunta: "¿Qué significa el lema nacional de El Salvador: 'Dios, Unión y Libertad'?",
        ayuda: "Pista: Este lema refleja los valores y principios fundamentales del país.",
        respuesta: "Es el lema nacional que refleja valores importantes para la nación.",
        distractores: ["Un lema sobre la economía", "Un lema sobre la educación", "Un lema sobre el comercio"],
    },
    {
        pregunta: "¿Qué festival tradicional se celebra en el mes de agosto en San Salvador?",
        ayuda: "Pista: Este festival es conocido por sus desfiles, música y eventos culturales.",
        respuesta: "Fiestas Agostinas",
        distractores: ["Fiestas de la Primavera", "Fiestas Patrias", "Fiestas de la Candelaria"],
    },
    {
        pregunta: "¿Cuál es el nombre del volcán más conocido de El Salvador?",
        ayuda: "Pista: Este volcán es famoso por su forma cónica y su actividad histórica.",
        respuesta: "Volcán San Miguel",
        distractores: ["Volcán Izalco", "Volcán Tecapa", "Volcán San Salvador"],
    },
    {
        pregunta: "¿Cuál es el grupo étnico que representa a una gran parte de la población de El Salvador?",
        ayuda: "Pista: Este grupo étnico tiene una influencia significativa en la cultura del país.",
        respuesta: "Mestizo",
        distractores: ["Europeo", "Indígena", "Africano"],
    },
    {
        pregunta: "¿Cuál es el principal puerto de El Salvador en el Océano Pacífico?",
        ayuda: "Pista: Este puerto es importante para el comercio internacional del país.",
        respuesta: "Puerto de Acajutla",
        distractores: ["Puerto de La Libertad", "Puerto de San Miguel", "Puerto de El Triunfo"],
    },
    {
        pregunta: "¿Qué es la \"Ruta de Las Flores\" en El Salvador?",
        ayuda: "Pista: Esta ruta turística es famosa por sus pueblos pintorescos y paisajes naturales.",
        respuesta: "Una ruta turística conocida por sus paisajes y pueblos",
        distractores: ["Una ruta comercial", "Una ruta de migración", "Una ruta agrícola"],
    },
    {
        pregunta: "¿En qué región de El Salvador se encuentra la mayor parte de la producción de azúcar?",
        ayuda: "Pista: Esta región es conocida por su actividad agrícola intensiva.",
        respuesta: "Región de Usulután",
        distractores: ["Región de San Salvador", "Región de Santa Ana", "Región de La Paz"],
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