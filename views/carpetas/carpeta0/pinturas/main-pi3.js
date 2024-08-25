let baseDePreguntas = [
    {
        pregunta: "¿Qué famosa pintura representa a una mujer sonriendo y es conocida como la Mona Lisa?",
        respuesta: "La Gioconda",
        distractores: ["La Noche Estrellada", "El Grito", "La última cena"],
        ayuda: "Pista: Fue pintada por Leonardo da Vinci en el Renacimiento.",
        imgAyuda: "https://news.artnet.com/app/news-upload/2021/11/4126_10706281_0-727x1024.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a un hombre estirando su mano hacia un ser divino y fue pintada por Miguel Ángel?",
        respuesta: "La creación de Adán",
        distractores: ["La persistencia de la memoria", "El nacimiento de Venus", "La última cena"],
        ayuda: "Pista: Forma parte del techo de la Capilla Sixtina en el Vaticano.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm719vP5DD5fLc6DjIBGXfwjvDVr5YXu451w&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a una pareja bailando en un campo y fue pintada por Pierre-Auguste Renoir?",
        respuesta: "Almuerzo de remeros",
        distractores: ["La noche estrellada", "El nacimiento de Venus", "La última cena"],
        ayuda: "Pista: Es una obra impresionista que representa un momento de alegría y ocio.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkJJTD80SaOeACNggCNMzMzgesjnlLPto2vCCVizMvTAlrxngtqcSzb0CaE_qoTDhSgg&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que representa a una mujer sosteniendo un abanico y fue pintada por Diego Velázquez?",
        respuesta: "Las Meninas",
        distractores: ["El jardín de las delicias", "La última cena", "La creación de Adán"],
        ayuda: "Pista: Es una de las obras maestras del arte español.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4DnfwJ8m8cdSYeng3R1bIaLrIjZzDTorMn1sGzt_1_mZtVyxYpk2MWCEtYAdev294jS4&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra un paisaje lleno de girasoles y fue pintada por Vincent van Gogh?",
        respuesta: "Los girasoles",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Van Gogh pintó varias versiones de esta pintura.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhyJqx9GDALEPKdRTD5ulpLywCLoU2cJpeaw&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a un hombre gritando y fue pintada por Edvard Munch?",
        respuesta: "El grito",
        distractores: ["La última cena", "La noche estrellada", "La creación de Adán"],
        ayuda: "Pista: Es una obra expresionista que representa angustia y desesperación.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSawS1rfVdv0mCjM4YOW34lskhPNpTO9u1gkw&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra una escena de la vida nocturna en la ciudad de Nueva York y fue pintada por Edward Hopper?",
        respuesta: "Noche en la ciudad",
        distractores: ["La noche estrellada", "El nacimiento de Venus", "La última cena"],
        ayuda: "Pista: Es una obra realista que captura la soledad y el aislamiento en la ciudad.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYmHezn0sUETuch0inGjOJPYS1KDU6-h8wYJbsIq58bCxqChPRYDI3feJdxp6Qr_-6Zl4&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una pareja abrazándose y fue pintada por Gustav Klimt?",
        respuesta: "El beso",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra del movimiento artístico conocido como Art Nouveau.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SsWk7eqxIzVUFaB8xttTFe_PZqilBXcoUQ&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a una diosa nacida de una concha y fue pintada por Sandro Botticelli?",
        respuesta: "El nacimiento de Venus",
        distractores: ["La última cena", "La noche estrellada", "La creación de Adán"],
        ayuda: "Pista: Es una obra del Renacimiento italiano que representa la diosa del amor y la belleza.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKYu9onVJQZ8menyBUZ3gt-vouaC0TQxyGz7cZU0Dfi00wSCjf_CKKIzsz2TyjIAKeaQ&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una pareja bailando en la terraza de un café y fue pintada por Auguste Renoir?",
        respuesta: "Baile en el Moulin de la Galette",
        distractores: ["La última cena", "El grito", "La noche estrellada"],
        ayuda: "Pista: Es una obra impresionista que retrata la vida social y el entretenimiento en París.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Pierre-Auguste_Renoir_019.jpg/1200px-Pierre-Auguste_Renoir_019.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a una mujer sentada en un sofá y fue pintada por Édouard Manet?",
        respuesta: "Olympia",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra impresionista que causó controversia en su época por su desnudo.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Edouard_Manet_005.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra una escena del infierno y fue pintada por Hieronymus Bosch?",
        respuesta: "El jardín de las delicias",
        distractores: ["La última cena", "El nacimiento de Venus", "La creación de Adán"],
        ayuda: "Pista: Es una obra del siglo XVI que representa el paraíso, la tierra y el infierno.",
        imgAyuda: "https://www.laprensagrafica.com/__export/1574169298823/sites/prensagrafica/img/2019/11/19/_90746939_gettyimages-534656516_crop1574169287042.jpg_423682103.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a una mujer con un vestido azul mirando por una ventana y fue pintada por Johannes Vermeer?",
        respuesta: "La joven de la perla",
        distractores: ["La última cena", "La noche estrellada", "El nacimiento de Venus"],
        ayuda: "Pista: Es una obra del siglo XVII también conocida como 'la Mona Lisa del norte'.",
        imgAyuda: "https://cdn.culturagenial.com/es/imagenes/la-joven-de-la-perla-de-johannes-vermeer-og.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a un hombre con un sombrero y una pipa y fue pintada por René Magritte?",
        respuesta: "La traición de las imágenes",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra surrealista que cuestiona la relación entre las imágenes y la realidad.",
        imgAyuda: "https://s1.eestatic.com/2017/10/12/cultura/arte/arte_contemporaneo-arte_253737045_50131836_1706x1280.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a un grupo de personas cenando juntas y fue pintada por Leonardo da Vinci?",
        respuesta: "La última cena",
        distractores: ["El grito", "La noche estrellada", "La creación de Adán"],
        ayuda: "Pista: Es una de las obras más famosas del Renacimiento italiano.",
        imgAyuda: "https://resources.diariolibre.com/images/2022/04/12/grupo-de-personas-sentadas-alrededor-de-una-mesa-c5301ad7.jpg",
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