let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el género literario al que pertenece el libro 'El principito'?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://www.laesferaazul.com/wp-content/uploads/2022/09/Descubrir-el-Principito-1624x2048.jpg",
        respuesta: "Fábula",
        distractores: ["Novela histórica", "Ciencia ficción", "Poesía"],
    },
    {
        pregunta: "¿Quién escribió 'Harry Potter y la piedra filosofal'?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/9786073193009.jpg?scale=500&qlty=75",
        respuesta: "J.K. Rowling",
        distractores: ["J.R.R. Tolkien", "C.S. Lewis", "Roald Dahl"],
    },
    {
        pregunta: "¿Cuál es el país de origen de Gabriel García Márquez, autor de 'Cien años de soledad'?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f0/78/40/2018-04-15-01-016-largejpg.jpg?w=1200&h=-1&s=1",
        respuesta: "Colombia",
        distractores: ["Argentina", "México", "España"],
    },
    {
        pregunta: "¿Cuál es el tema principal de la obra 'La Odisea'?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://historia.nationalgeographic.com.es/medio/2021/05/25/en-su-oleo-ulises-y-las-sirenas-de-1891-j-w-waterhouse-recreo-este-episodio-de-la-odisea-galeria-nacional-de-victoria-melbourne_491e1d5e_1280x616.jpg",
        respuesta: "Viaje épico de Ulises",
        distractores: ["Amor prohibido", "Lucha contra dragones", "Caza de tesoros"],
    },
    {
        pregunta: "¿Quién escribió 'Crimen y castigo'?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "http://www.saint-petersburg.com/images/famous-people/fyodor-dostoevsky/fyodor-dostoevsky.jpg",
        respuesta: "Fiódor Dostoyevski",
        distractores: ["León Tolstói", "Franz Kafka", "Anton Chéjov"],
    },
    {
        pregunta: "¿Cuál es el género literario de 'Drácula' de Bram Stoker?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://www.cervantesvirtual.com/images/portales/novela_gotica/novela_gotica.jpg",
        respuesta: "Novela gótica",
        distractores: ["Ciencia ficción", "Poesía", "Novela de aventuras"],
    },
    {
        pregunta: "¿Cuál es el significado de la palabra 'metáfora' en la literatura?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://img.freepik.com/vector-premium/ilustracion-literatura-dibujada-mano_23-2149290552.jpg",
        respuesta: "Figura retórica que compara dos elementos diferentes",
        distractores: ["Lenguaje poético", "Narración de una historia real", "Escritura en verso"],
    },
    {
        pregunta: "¿Qué es una novela de ciencia ficción?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://infolibros.org/wp-content/uploads/2022/10/que-es-la-novela-de-ciencia-ficcion.webp",
        respuesta: "Género literario que mezcla elementos científicos y ficticios",
        distractores: ["Género épico", "Género romántico", "Género histórico"],
    },
    {
        pregunta: "¿Quién es el autor de la trilogía 'Los juegos del hambre'?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://images-na.ssl-images-amazon.com/images/S/amzn-author-media-prod/11q81821d0ovjemedg11f7knb8.jpg",
        respuesta: "Suzanne Collins",
        distractores: ["Veronica Roth", "J.K. Rowling", "George R.R. Martin"],
    },
    {
        pregunta: "¿Qué escritor escribió 'Las aventuras de Tom Sawyer'?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://th-thumbnailer.cdn-si-edu.com/Y5EG4qCSxEsGRjvfkSr_TMrJXLo=/fit-in/1600x0/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2FMark-Twain-Laura-Wright-631.jpg",
        respuesta: "Mark Twain",
        distractores: ["Herman Melville", "Jules Verne", "Emily Dickinson"],
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