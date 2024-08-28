let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la novela de Franz Kafka que narra la historia de un agrimensor que lucha contra un sistema opresivo?",
        respuesta: "El proceso",
        distractores: ["La metamorfosis", "En el camino", "Ulises"],
        ayuda: "Pista: Esta novela inacabada de Kafka es una alegoría sobre el poder y la burocracia.",
        ayudaImg: "https://images.app.goo.gl/aCrv4b83so1H8xij9",
    },
    {
        pregunta: "¿Quién es el autor de la obra 'En busca del tiempo perdido', una monumental exploración de la memoria y la sociedad francesa?",
        respuesta: "Marcel Proust",
        distractores: ["James Joyce", "Virginia Woolf", "Thomas Mann"],
        ayuda: "Pista: Esta extensa novela de siete tomos es una de las obras maestras de la literatura moderna.",
        ayudaImg: "https://semanariouniversidad.com/wp-content/uploads/2021/07/marcel-proust-cordon-1024x656.jpg",
    },
    {
        pregunta: "¿Qué novela de Thomas Mann presenta la historia del comerciante alemán Hans Castorp en un sanatorio en los Alpes suizos?",
        respuesta: "La montaña mágica",
        distractores: ["La metamorfosis", "El extranjero", "El túnel"],
        ayuda: "Pista: Esta novela es considerada una exploración de la decadencia europea antes de la Primera Guerra Mundial.",
        ayudaImg: "https://images.app.goo.gl/4zYoKRMa2r44Eye76",
    },
    {
        pregunta: "¿Quién es el autor de la novela 'La sombra del viento', una historia de misterio ambientada en la Barcelona de posguerra?",
        respuesta: "Carlos Ruiz Zafón",
        distractores: ["Gabriel García Márquez", "Haruki Murakami", "Isabel Allende"],
        ayuda: "Pista: Esta novela es el primer libro de la serie 'El cementerio de los libros olvidados'.",
        ayudaImg: "https://images.app.goo.gl/Gem7JVDWTNH52KmR9",
    },
    {
        pregunta: "¿Quién es el autor de la novela 'Pedro Páramo', una novela que presenta la búsqueda de identidad en un pueblo mexicano?",
        respuesta: "Juan Rulfo",
        distractores: ["Octavio Paz", "Carlos Fuentes", "Miguel Ángel Asturias"],
        ayuda: "Pista: Este autor mexicano es considerado uno de los grandes escritores del siglo XX.",
        ayudaImg: "https://images.app.goo.gl/AKHNXsi7wpJRWmYh8",
    },
    {
        pregunta: "¿Cuál es la novela de Thomas Pynchon que sigue la vida del protagonista Larry 'Doc' Sportello en la California de los años 60?",
        respuesta: "Vicio propio",
        distractores: ["El arco iris de la gravedad", "Al límite", "El desayuno de los campeones"],
        ayuda: "Pista: Esta novela es una amalgama de géneros que mezcla el noir, la comedia y la sátira.",
        ayudaImg: "https://images.app.goo.gl/UEFxdPXfKbvUQMHr8",
    },
    {
        pregunta: "¿Qué novela de Salman Rushdie aborda temas de identidad y migración en un contexto histórico de India y Pakistán?",
        respuesta: "Hijos de la medianoche",
        distractores: ["Los versos satánicos", "El mar de las historias", "Los hijos del océano"],
        ayuda: "Pista: Esta novela le valió a Rushdie el premio Booker en 1981.",
        ayudaImg: "https://images.app.goo.gl/vpiLEwLKuTitXDfn6",
    },
    {
        pregunta: "¿Qué obra de Gabriel García Márquez presenta la vida del general Simón Bolívar desde la perspectiva de un narrador ficticio?",
        respuesta: "El general en su laberinto",
        distractores: ["Cien años de soledad", "El amor en los tiempos del cólera", "Crónica de una muerte anunciada"],
        ayuda: "Pista: Esta novela es una reinvención imaginaria de los últimos días del libertador.",
        ayudaImg: "https://images.app.goo.gl/SYArZawMiQdoLUKC7",
    },
    {
        pregunta: "¿Cuál es la obra de Toni Morrison que aborda temas de esclavitud y racismo en la América del siglo XIX?",
        respuesta: "Amada",
        distractores: ["Beloved", "Paraíso", "Jazz"],
        ayuda: "Pista: Esta novela le valió a Morrison el premio Pulitzer en 1988.",
        ayudaImg: "https://images.app.goo.gl/DjqTiSWGhdZEnWuk8",
    },
    {
        pregunta: "¿Qué novela de Don DeLillo presenta la historia de un hombre obsesionado con la película 'Zapruder' del asesinato de JFK?",
        respuesta: "Libra",
        distractores: ["Ruido de fondo", "Submundo", "Blanco"],
        ayuda: "Pista: Esta novela es una reflexión sobre el poder de los medios de comunicación.",
        ayudaImg: "https://images.app.goo.gl/jE17qv8FJviFefm79",
    },
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