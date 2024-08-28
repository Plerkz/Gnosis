let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la capital de tu país?",
        ayuda: "Pista: Es la ciudad principal donde se encuentran el gobierno y la administración.",
        respuesta: "La respuesta depende del país en cuestión",
        distractores: ["Una ciudad conocida en otro país", "Una ciudad pequeña", "Una ciudad de otro continente"]
    },
    {
        pregunta: "¿Qué es una comunidad?",
        ayuda: "Pista: Es un grupo de personas que viven en un mismo lugar y comparten servicios y recursos.",
        respuesta: "Un grupo de personas que viven en el mismo lugar",
        distractores: ["Un lugar sin habitantes", "Una empresa grande", "Un tipo de animal"]
    },
    {
        pregunta: "¿Qué se celebra el 12 de octubre en muchos países de América?",
        ayuda: "Pista: Es el aniversario del descubrimiento de América por Cristóbal Colón.",
        respuesta: "Día de la Raza",
        distractores: ["Navidad", "Año Nuevo", "Día de San Valentín"]
    },
    {
        pregunta: "¿Cuál es la función principal de un mapa?",
        ayuda: "Pista: Se usa para encontrar ubicaciones y conocer el terreno.",
        respuesta: "Mostrar ubicaciones y características de un área",
        distractores: ["Decoración", "Entretenimiento", "Comunicación"]
    },
    {
        pregunta: "¿Cómo se llama el continente donde se encuentra Egipto?",
        ayuda: "Pista: Este continente es el segundo más grande del mundo y está en el hemisferio oriental.",
        respuesta: "África",
        distractores: ["Asia", "Europa", "América"]
    },
    {
        pregunta: "¿Qué es un país?",
        ayuda: "Pista: Es una nación con su propio gobierno y fronteras.",
        respuesta: "Una nación con su propio gobierno",
        distractores: ["Una ciudad grande", "Un grupo de islas", "Un océano"]
    },
    {
        pregunta: "¿Qué importancia tiene el agua para las personas?",
        ayuda: "Pista: El agua es esencial para la vida y la salud de las personas.",
        respuesta: "Es esencial para la vida y la salud",
        distractores: ["Solo se usa para la diversión", "Es un recurso menos importante", "Solo se usa para la limpieza"]
    },
    {
        pregunta: "¿Qué hacen los bomberos?",
        ayuda: "Pista: Su trabajo principal es apagar incendios y ayudar en emergencias.",
        respuesta: "Apagan incendios y ayudan en emergencias",
        distractores: ["Cocinan en restaurantes", "Reparan automóviles", "Construyen casas"]
    },
    {
        pregunta: "¿Cuál es el papel de un alcalde?",
        ayuda: "Pista: Es la persona que dirige el gobierno local de una ciudad o municipio.",
        respuesta: "Dirige el gobierno local de una ciudad",
        distractores: ["Dirige una empresa nacional", "Es el jefe de la policía", "Representa a un país en el extranjero"]
    },
    {
        pregunta: "¿Qué tipo de viviendas se encuentran típicamente en una zona rural?",
        ayuda: "Pista: Las viviendas en zonas rurales suelen ser más grandes y están rodeadas de campo.",
        respuesta: "Casas de campo",
        distractores: ["Rascacielos", "Apartamentos", "Edificios de oficinas"]
    },
    {
        pregunta: "¿Qué es un festival?",
        ayuda: "Pista: Es una celebración que puede incluir música, comida y eventos especiales.",
        respuesta: "Una celebración con eventos especiales",
        distractores: ["Un tipo de comida", "Un lugar de estudio", "Un edificio"]
    },
    {
        pregunta: "¿Qué se encuentra en el centro de un escudo de armas?",
        ayuda: "Pista: El escudo de armas puede tener un símbolo que representa al país o la familia.",
        respuesta: "Símbolos representativos",
        distractores: ["Una foto", "Un mapa", "Un retrato"]
    },
    {
        pregunta: "¿Qué significa la palabra ‘cultura’?",
        ayuda: "Pista: Se refiere al conjunto de costumbres, tradiciones y formas de vida de un grupo de personas.",
        respuesta: "Conjunto de costumbres y tradiciones",
        distractores: ["Un tipo de comida", "Una región geográfica", "Un tipo de planta"]
    },
    {
        pregunta: "¿Cuál es el océano más grande del mundo?",
        ayuda: "Pista: Este océano cubre una gran parte del planeta y es el más extenso.",
        respuesta: "Océano Pacífico",
        distractores: ["Océano Atlántico", "Océano Índico", "Océano Ártico"]
    },
    {
        pregunta: "¿Qué hace un maestro?",
        ayuda: "Pista: Un maestro enseña a los estudiantes en la escuela.",
        respuesta: "Enseña a los estudiantes",
        distractores: ["Vende productos", "Repara edificios", "Conduce autobuses"]
    },
    {
        pregunta: "¿Cómo se llama el lugar donde se guarda la información en las escuelas?",
        ayuda: "Pista: Es un espacio con libros y recursos para el estudio.",
        respuesta: "Biblioteca",
        distractores: ["Gimnasio", "Cafetería", "Auditorio"]
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