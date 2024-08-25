let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una mujer desnuda de espaldas y fue pintada por Édouard Manet?",
        respuesta: "Olympia",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra que causó controversia debido a su representación audaz de una mujer desnuda.",
        imgAyuda: "https://i.ibb.co/6wX1Zyy/olympia.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a una multitud de personas en una playa y fue pintada por Joaquín Sorolla?",
        respuesta: "Paseo a orillas del mar",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra impresionista que representa una escena de verano en la playa.",
        imgAyuda: "https://i.ibb.co/41Yw93d/paseo-a-orillas-del-mar.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una pareja abrazándose en medio de un paisaje nevado y fue pintada por Caspar David Friedrich?",
        respuesta: "El caminante sobre el mar de nubes",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra romántica que representa a un hombre de pie en un acantilado.",
        imgAyuda: "https://i.ibb.co/km2g9jv/el-caminante-sobre-el-mar-de-nubes.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra una habitación con sillas y fue pintada por Vincent van Gogh?",
        respuesta: "La silla de Van Gogh",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra postimpresionista que muestra una silla vacía junto a una mesa.",
        imgAyuda: "https://i.ibb.co/4FJnH03/la-silla-de-van-gogh.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra una escena de un café y fue pintada por Edgar Degas?",
        respuesta: "Absenta",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra impresionista que representa a personas bebiendo absenta en un café.",
        imgAyuda: "https://i.ibb.co/YkJG2Hw/absenta.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra un grupo de personas bailando y fue pintada por Henri Matisse?",
        respuesta: "La danza",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra fauvista que representa a personas bailando en un círculo.",
        imgAyuda: "https://i.ibb.co/PcK1yyr/la-danza.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra una escena de un circo y fue pintada por Georges Seurat?",
        respuesta: "El circo",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra postimpresionista que representa a personas en un circo.",
        imgAyuda: "https://i.ibb.co/Jr0q7Tk/el-circo.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a una mujer en una posición contorsionada y fue pintada por Egon Schiele?",
        respuesta: "Autorretrato con torsión",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra expresionista que muestra al artista en una pose inusual.",
        imgAyuda: "https://i.ibb.co/gMr9B2d/autorretrato-con-torsion.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a un grupo de personas enmascaradas y fue pintada por James Ensor?",
        respuesta: "Entrada de máscaras",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra simbolista que representa a personas enmascaradas en un desfile.",
        imgAyuda: "https://i.ibb.co/3vJTGxh/entrada-de-mascaras.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a una mujer con una camisa de dormir y fue pintada por Berthe Morisot?",
        respuesta: "Eugène Manet en el piano",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra impresionista que representa a una mujer tocando el piano.",
        imgAyuda: "https://i.ibb.co/5R7Mw0P/eugene-manet-en-el-piano.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una mujer con un sombrero y fue pintada por Henri Matisse?",
        respuesta: "La mujer con sombrero",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra fauvista que representa a una mujer con un sombrero extravagante.",
        imgAyuda: "https://i.ibb.co/BZcVqGt/la-mujer-con-sombrero.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a un grupo de personas en una terraza y fue pintada por Pierre-Auguste Renoir?",
        respuesta: "Almuerzo de remeros",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra impresionista que representa a personas almorzando en una terraza junto al río.",
        imgAyuda: "https://i.ibb.co/7jh7HjT/almuerzo-de-remeros.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una pareja abrazándose y fue pintada por Gustav Klimt?",
        respuesta: "El beso",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra simbolista que representa a una pareja abrazándose con vestimenta decorativa.",
        imgAyuda: "https://i.ibb.co/vzLrWxW/el-beso.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra un paisaje de la ciudad de Nueva York y fue pintada por Georgia O'Keeffe?",
        respuesta: "Radiator Building—Night, New York",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra que muestra un rascacielos iluminado por la noche.",
        imgAyuda: "https://i.ibb.co/k2gxG8x/radiator-building-night-new-york.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra un grupo de personas en una habitación y fue pintada por Paul Cézanne?",
        respuesta: "Los jugadores de cartas",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra postimpresionista que representa a personas jugando a las cartas.",
        imgAyuda: "https://i.ibb.co/mFhYK8v/los-jugadores-de-cartas.jpg",
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