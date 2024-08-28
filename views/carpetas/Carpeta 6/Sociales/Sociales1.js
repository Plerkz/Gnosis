let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el continente más grande del mundo?",
        ayuda: "Pista: Este continente alberga a China e India.",
        respuesta: "Asia",
        distractores: ["África", "Europa", "América del Norte"],
    },
    {
        pregunta: "¿Quién fue Cristóbal Colón?",
        ayuda: "Pista: Este explorador llegó a América en 1492.",
        respuesta: "Un explorador que llegó a América en 1492",
        distractores: ["El primer presidente de Estados Unidos", "Un líder de la Revolución Francesa", "El fundador de Roma"],
    },
    {
        pregunta: "¿Cómo se llama el documento que establece las leyes de un país?",
        ayuda: "Pista: Este documento también puede llamarse 'Carta Magna'.",
        respuesta: "Constitución",
        distractores: ["Declaración de Independencia", "Tratado", "Ley de Derechos"],
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        ayuda: "Pista: Este río está en América del Sur y atraviesa Brasil.",
        respuesta: "Río Amazonas",
        distractores: ["Río Nilo", "Río Mississippi", "Río Yangtsé"],
    },
    {
        pregunta: "¿Qué es la democracia?",
        ayuda: "Pista: Es un sistema de gobierno donde las personas eligen a sus líderes.",
        respuesta: "Un sistema de gobierno donde los ciudadanos eligen a sus gobernantes",
        distractores: ["Un sistema de gobierno dirigido por un rey", "Un sistema donde gobiernan los militares", "Un sistema de leyes religiosas"],
    },
    {
        pregunta: "¿Quién fue Simón Bolívar?",
        ayuda: "Pista: Fue un líder clave en la independencia de varios países sudamericanos.",
        respuesta: "Un libertador de América del Sur",
        distractores: ["Un explorador europeo", "Un rey español", "Un general británico"],
    },
    {
        pregunta: "¿Qué país es conocido por tener la muralla más grande del mundo?",
        ayuda: "Pista: Este país está en Asia.",
        respuesta: "China",
        distractores: ["Japón", "India", "Rusia"],
    },
    {
        pregunta: "¿Qué es un mapa político?",
        ayuda: "Pista: Es un tipo de mapa que muestra las divisiones territoriales de países, ciudades, y estados.",
        respuesta: "Un mapa que muestra fronteras y divisiones territoriales",
        distractores: ["Un mapa que muestra el clima", "Un mapa que muestra ríos y montañas", "Un mapa que muestra actividades económicas"],
    },
    {
        pregunta: "¿Qué evento marcó el inicio de la Primera Guerra Mundial?",
        ayuda: "Pista: Este evento ocurrió en 1914 e involucró a un archiduque.",
        respuesta: "El asesinato del archiduque Francisco Fernando",
        distractores: ["La Revolución Rusa", "El hundimiento del Lusitania", "El Tratado de Versalles"],
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual una cultura se expande y adopta elementos de otra cultura?",
        ayuda: "Pista: Esto ocurre cuando diferentes culturas interactúan.",
        respuesta: "Culturalización",
        distractores: ["Globalización", "Inmigración", "Urbanización"],
    },
    {
        pregunta: "¿Qué país es conocido por la Revolución Industrial?",
        ayuda: "Pista: Este país está en Europa y su capital es Londres.",
        respuesta: "Reino Unido",
        distractores: ["Francia", "Alemania", "Estados Unidos"],
    },
    {
        pregunta: "¿Qué océano está al este de los Estados Unidos?",
        ayuda: "Pista: Este océano separa América del Norte de Europa y África.",
        respuesta: "Océano Atlántico",
        distractores: ["Océano Pacífico", "Océano Índico", "Mar Mediterráneo"],
    },
    {
        pregunta: "¿Qué son los derechos humanos?",
        ayuda: "Pista: Estos son derechos fundamentales que todas las personas tienen sin importar su raza, religión o género.",
        respuesta: "Derechos básicos que toda persona tiene por ser humana",
        distractores: ["Leyes del gobierno", "Privilegios concedidos por el Estado", "Obligaciones que los ciudadanos deben cumplir"],
    },
    {
        pregunta: "¿Qué país tiene la mayor población del mundo?",
        ayuda: "Pista: Este país está en Asia y tiene más de mil millones de habitantes.",
        respuesta: "China",
        distractores: ["India", "Estados Unidos", "Brasil"],
    },
    {
        pregunta: "¿Qué fue la Revolución Francesa?",
        ayuda: "Pista: Fue un conflicto en Francia que terminó con la monarquía en el siglo XVIII.",
        respuesta: "Un levantamiento que terminó con la monarquía en Francia",
        distractores: ["Una guerra entre Francia e Inglaterra", "Una rebelión indígena en América", "Una guerra civil en Francia en el siglo XIX"],
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
