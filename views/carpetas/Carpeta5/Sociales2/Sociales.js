let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el continente en el que se encuentra Egipto?",
        ayuda: "Pista: Egipto está en la región del noreste de África.",
        respuesta: "África",
        distractores: ["Asia", "Europa", "América"]
    },
    {
        pregunta: "¿Qué es un ecosistema?",
        ayuda: "Pista: Es un sistema que incluye seres vivos y su entorno.",
        respuesta: "Un sistema que incluye organismos y su ambiente",
        distractores: ["Una región geográfica", "Un tipo de clima", "Una ciudad"]
    },
    {
        pregunta: "¿Cuál es la capital de Francia?",
        ayuda: "Pista: Esta ciudad es famosa por su Torre Eiffel.",
        respuesta: "París",
        distractores: ["Londres", "Berlín", "Madrid"]
    },
    {
        pregunta: "¿En qué continente se encuentra el Amazonas?",
        ayuda: "Pista: El Amazonas está en una gran selva en América del Sur.",
        respuesta: "América del Sur",
        distractores: ["África", "Asia", "Oceanía"]
    },
    {
        pregunta: "¿Qué es un mapa?",
        ayuda: "Pista: Es una representación gráfica de una área geográfica.",
        respuesta: "Una representación gráfica de una área geográfica",
        distractores: ["Una herramienta de navegación", "Un tipo de documento legal", "Un libro de historia"]
    },
    {
        pregunta: "¿Quién fue el primer presidente de los Estados Unidos?",
        ayuda: "Pista: Su nombre es conocido por estar en un billete de un dólar.",
        respuesta: "George Washington",
        distractores: ["Abraham Lincoln", "Thomas Jefferson", "John Adams"]
    },
    {
        pregunta: "¿Qué tipo de gobierno tiene una monarquía?",
        ayuda: "Pista: En este tipo de gobierno, el jefe de estado es un rey o una reina.",
        respuesta: "Monarquía",
        distractores: ["República", "Democracia", "Dictadura"]
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        ayuda: "Pista: Este río fluye a través de África y es conocido por su longitud.",
        respuesta: "Nilo",
        distractores: ["Amazonas", "Mississippi", "Yangtsé"]
    },
    {
        pregunta: "¿Qué es el clima?",
        ayuda: "Pista: Se refiere a las condiciones meteorológicas que predominan en una región durante un largo período.",
        respuesta: "Las condiciones meteorológicas a largo plazo en una región",
        distractores: ["El tiempo meteorológico de un día", "La temperatura de una ciudad", "El pronóstico de lluvia"]
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        ayuda: "Pista: Este océano cubre una gran parte de la Tierra y rodea a Asia y Australia.",
        respuesta: "Océano Pacífico",
        distractores: ["Océano Atlántico", "Océano Índico", "Océano Ártico"]
    },
    {
        pregunta: "¿Qué es la geografía?",
        ayuda: "Pista: Es el estudio de la Tierra y de sus características físicas y humanas.",
        respuesta: "El estudio de la Tierra y sus características",
        distractores: ["El estudio de los animales", "El estudio de los climas", "El estudio de la historia"]
    },
    {
        pregunta: "¿Cuál es el país más grande del mundo por área?",
        ayuda: "Pista: Este país se encuentra en Europa y Asia.",
        respuesta: "Rusia",
        distractores: ["Canadá", "China", "Estados Unidos"]
    },
    {
        pregunta: "¿Qué es una cultura?",
        ayuda: "Pista: Es el conjunto de costumbres, tradiciones y formas de vida de un grupo de personas.",
        respuesta: "El conjunto de costumbres y tradiciones de un grupo",
        distractores: ["Una región geográfica", "Un tipo de gobierno", "Un sistema económico"]
    },
    {
        pregunta: "¿Qué es un país?",
        ayuda: "Pista: Es una región con su propio gobierno y leyes.",
        respuesta: "Una región con su propio gobierno y leyes",
        distractores: ["Una ciudad", "Una región sin gobierno", "Un continente"]
    },
    {
        pregunta: "¿Cuál es el nombre del muro famoso en China?",
        ayuda: "Pista: Este muro fue construido para proteger el país de invasiones.",
        respuesta: "Gran Muralla China",
        distractores: ["Muro de Berlín", "Muralla de Adriano", "Muralla de Roma"]
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