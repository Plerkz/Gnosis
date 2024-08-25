let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el nombre del famoso cuadro que muestra un reloj de bolsillo derritiéndose y fue pintado por Salvador Dalí?",
        respuesta: "La persistencia de la memoria",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra surrealista que simboliza la relatividad del tiempo.",
        imgAyuda: "URL_DE_LA_IMAGEN",
    },
    {
        pregunta: "¿Quién pintó el cuadro 'La noche estrellada' que muestra un cielo lleno de remolinos y estrellas?",
        respuesta: "Vincent van Gogh",
        distractores: ["Leonardo da Vinci", "Pierre-Auguste Renoir", "Edvard Munch"],
        ayuda: "Pista: El artista era conocido por su estilo expresionista y su lucha contra la enfermedad mental.",
        imgAyuda: "URL_DE_LA_IMAGEN",
    },
    {
        pregunta: "¿Cuál es el nombre del cuadro que representa a una joven con un turbante y una perla en la oreja?",
        respuesta: "La joven de la perla",
        distractores: ["El almuerzo en la hierba", "El beso", "Campo de trigo con cuervos"],
        ayuda: "Pista: Es una obra del siglo XVII también conocida como 'la Mona Lisa del norte'.",
        imgAyuda: "URL_DE_LA_IMAGEN",
    },
    {
        pregunta: "¿Quién pintó el cuadro 'Los amantes' que muestra a una pareja besándose en un fondo surrealista?",
        respuesta: "René Magritte",
        distractores: ["Gustav Klimt", "Édouard Manet", "Hieronymus Bosch"],
        ayuda: "Pista: El artista es conocido por desafiar las convenciones y explorar la ilusión y la realidad.",
        imgAyuda: "URL_DE_LA_IMAGEN",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una mujer con un vestido azul y un abanico?",
        respuesta: "Mujer con abanico",
        distractores: ["El abrazo", "Noche en la ciudad", "Campo de trigo con cuervos"],
        ayuda: "Pista: Es una obra del siglo XIX pintada por un artista español.",
        imgAyuda: "URL_DE_LA_IMAGEN",
    },
    {
        pregunta: "¿Quién pintó el cuadro 'Los girasoles' que representa un jarrón con girasoles amarillos?",
        respuesta: "Vincent van Gogh",
        distractores: ["Gustav Klimt", "Édouard Manet", "Sandro Botticelli"],
        ayuda: "Pista: El artista holandés es conocido por su estilo posimpresionista.",
        imgAyuda: "URL_DE_LA_IMAGEN",
    },
    {
        pregunta: "¿Cuál es el nombre del cuadro que muestra a una pareja abrazándose en la terraza de un café?",
        respuesta: "Noche estrellada sobre el Ródano",
        distractores: ["Baile en el Moulin de la Galette", "El almuerzo en la hierba", "El beso"],
        ayuda: "Pista: Esta obra es una de las primeras representaciones de la famosa 'Noche estrellada'.",
        imgAyuda: "URL_DE_LA_IMAGEN",
    },
    {
        pregunta: "¿Quién pintó el cuadro 'La creación de Adán' que muestra la famosa escena del toque de dedos?",
        respuesta: "Miguel Ángel",
        distractores: ["Leonardo da Vinci", "Sandro Botticelli", "Hieronymus Bosch"],
        ayuda: "Pista: Forma parte del techo de la Capilla Sixtina en el Vaticano.",
        imgAyuda: "URL_DE_LA_IMAGEN",
    },
    {
        pregunta: "¿Cuál es el nombre del cuadro que muestra una escena de la vida nocturna en París?",
        respuesta: "Baile en el Moulin Rouge",
        distractores: ["Noche en la ciudad", "El beso", "Olympia"],
        ayuda: "Pista: Esta obra impresionista captura la atmósfera de la Belle Époque en París.",
        imgAyuda: "URL_DE_LA_IMAGEN",
    },
    {
        pregunta: "¿Quién pintó el cuadro 'La persistencia de la memoria' que muestra relojes derretidos?",
        respuesta: "Salvador Dalí",
        distractores: ["René Magritte", "Gustav Klimt", "Édouard Manet"],
        ayuda: "Pista: El artista surrealista español es conocido por su extravagante estilo.",
        imgAyuda: "URL_DE_LA_IMAGEN",
    },
    {
        pregunta: "¿Quién es el autor de la pintura 'La Gioconda'?",
        respuesta: "Leonardo da Vinci",
        distractores: ["Miguel Ángel", "Pierre-Auguste Renoir", "Vincent van Gogh"],
        ayuda: "Pista: Esta pintura es también conocida como 'Mona Lisa'.",
        imgAyuda: "URL de la imagen de La Gioconda",
    },
    {
        pregunta: "¿Cuál es el nombre de la obra maestra que representa la creación de Adán en el techo de la Capilla Sixtina?",
        respuesta: "La creación de Adán",
        distractores: ["La persistencia de la memoria", "El nacimiento de Venus", "Almuerzo de remeros"],
        ayuda: "Pista: Fue pintada por Miguel Ángel en el Vaticano.",
        imgAyuda: "URL de la imagen de La creación de Adán",
    },
    {
        pregunta: "¿Quién pintó 'Almuerzo de remeros', una obra impresionista que muestra a una pareja en un campo?",
        respuesta: "Pierre-Auguste Renoir",
        distractores: ["Edvard Munch", "Diego Velázquez", "Sandro Botticelli"],
        ayuda: "Pista: El pintor es conocido por su estilo impresionista.",
        imgAyuda: "URL de la imagen de Almuerzo de remeros",
    },
    {
        pregunta: "¿Cuál es el nombre del famoso cuadro que muestra un reloj de bolsillo derritiéndose y fue pintado por Salvador Dalí?",
        respuesta: "La persistencia de la memoria",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra surrealista que simboliza la relatividad del tiempo.",
        imgAyuda: "URL_DE_LA_IMAGEN_1",
    },
    {
        pregunta: "¿Quién pintó el cuadro 'La noche estrellada' que muestra un cielo lleno de remolinos y estrellas?",
        respuesta: "Vincent van Gogh",
        distractores: ["Leonardo da Vinci", "Pierre-Auguste Renoir", "Edvard Munch"],
        ayuda: "Pista: El artista era conocido por su estilo expresionista y su lucha contra la enfermedad mental.",
        imgAyuda: "URL_DE_LA_IMAGEN_2",
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