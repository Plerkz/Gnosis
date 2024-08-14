let baseDePreguntas = [
    {
        pregunta: "¿Quién escribió Romeo y Julieta?",
        ayuda: "Pista:Trágica historia de amor, autor inglés renombrado. ",
        ayudaImg: "https://cdn.culturagenial.com/es/imagenes/william-shakespeare-cke.jpg",
        respuesta: "William Shakespeare",
        distractores: ["ane Austen", "Charles Dickens", "Mark Twain"],
    },
    {
        pregunta: "¿Cómo se llama el famoso libro de J.K. Rowling sobre un joven mago?",
        ayuda: "Pista:Serie de libros y películas, protagonista en Hogwarts. ",
        ayudaImg: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/6KUHYVHJDRCLPHZLPK42EVD6HY.jpg",
        respuesta: "Harry Potter",
        distractores: [" El Señor de los Anillos", "Narnia", "Las Crónicas de Eragon"],
    },
    {
        pregunta: "¿Quién escribió Cien años de soledad?",
        ayuda: "Pista:Realismo mágico, autor colombiano. ",
        ayudaImg: "https://www.educaciontrespuntocero.com/wp-content/uploads/2023/03/gabriel-garcia-marquez-1.jpg",
        respuesta: "Gabriel García Márquez",
        distractores: ["Mario Vargas Llosa", "Isabel Allende", "Julio Cortázar"],
    },
    {
        pregunta: " ¿Cómo se llama el protagonista de Don Quijote de la Mancha?",
        ayuda: "Pista:Caballero, molinos de viento, obra española clásica.",
        ayudaImg: "https://humanidades.com/wp-content/uploads/2018/12/don-quijote-1-scaled-e1584976931187-800x406.jpg",
        respuesta: " Don Quijote",
        distractores: [" Sancho Panza", "Don Juan", "El Cid"],
    },
    {
        pregunta: " ¿Quién escribió Drácula?",
        ayuda: "Pista:Vampiro, novela gótica, autor irlandés. ",
        ayudaImg: "https://cope-cdnmed.agilecontent.com/resources/jpg/4/6/1685084059864.jpg",
        respuesta: "Bram Stoker",
        distractores: ["Mary Shelley", "Edgar Allan Poe", "H.P. Lovecraft"],
    },
    {
        pregunta: "¿Cuál es el título de la historia sobre un niño mago que vive bajo una escalera?",
        ayuda: "Pista:Magia, escuela de brujería, cicatriz en forma de rayo. ",
        ayudaImg: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/SFGNV6VJXRA5XJSND2H2QEQQDM.jpg",
        respuesta: "Harry Potter y la Piedra Filosofal",
        distractores: [" Harry Potter y el Prisionero de Azkaban", "Harry Potter y el Cáliz de Fuego", "Harry Potter y el Misterio del Príncipe"],
    },
    {
        pregunta: "¿Cuál es el título de la saga de libros escrita por J.R.R. Tolkien?",
        ayuda: "Pista:Anillo, hobbits, Tierra Media. ",
        ayudaImg: "https://www.nacionflix.com/__export/1649276228857/sites/debate/img/2022/04/06/el-sexor-de-los-anillos-el-hobbit_1.jpg_976912859.jpg",
        respuesta: " El Señor de los Anillos",
        distractores: ["Las Crónicas de Narnia", "Juego de Tronos", "Los Juegos del Hambre"],
    },
    {
        pregunta: "¿Quién escribió La naranja mecánica, una novela que explora la violencia y la libertad del individuo?",
        ayuda: "Pista: Juventud violenta, Ludovico, Burgess.",
        ayudaImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Burgess1.jpg/220px-Burgess1.jpg",
        respuesta: "Anthony Burgess",
        distractores: ["George Orwell", "Aldous Huxley", "William S. Burroughs"],
    },
    {
        pregunta: "¿Cuál es el título de la obra de Franz Kafka en la que el protagonista es arrestado y juzgado sin saber el motivo? ",
        ayuda: "Pista:Burocracia, pesadilla, proceso absurdo. ",
        ayudaImg: "https://ellibrodurmiente.org/wp-content/uploads/2018/07/El-proceso.jpg",
        respuesta: "el proceso ",
        distractores: [" La metamorfosis", "El castillo", "En el camino"],
    },
    {
        pregunta: "¿Cuál es el título de la novela sobre un niño lobo llamado Mowgli?",
        ayuda: "Pista: Selva, Baloo, clásico de la infancia",
        ayudaImg: "https://www.chiquipedia.com/imagenes/el-libro-de-la-selva.jpg",
        respuesta: "El Libro de la Selva",
        distractores: [" La Isla del Tesoro", "Peter Pan", "Alicia en el País de las Maravillas"],
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