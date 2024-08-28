let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la obra cumbre del realismo mágico escrita por Gabriel García Márquez?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://phantom-telva.unidadeditorial.es/f29ea11dfb8a26a7cf9850f836b41eb5/crop/0x34/799x514/resize/828/f/jpg/assets/multimedia/imagenes/2020/12/10/16075997705699.jpg",
        respuesta: "Cien años de soledad",
        distractores: ["Don Quijote de la Mancha", "El retrato de Dorian Gray", "Moby Dick"],
    },
    {
        pregunta: "¿Quién es el autor de la obra 'El amor en los tiempos del cólera'?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://wp.es.aleteia.org/wp-content/uploads/sites/7/2020/07/shutterstock_685436215.jpg?w=620&h=348&crop=1",
        respuesta: "Gabriel García Márquez",
        distractores: ["Pablo Neruda", "Isabel Allende", "Jorge Luis Borges"],
    },
    {
        pregunta: "¿Qué novela distópica escrita por George Orwell presenta una sociedad dominada por un gobierno totalitario?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://cdn.culturagenial.com/es/imagenes/novela-1984-de-george-orwell-og.jpg",
        respuesta: "1984",
        distractores: ["Un mundo feliz", "Fahrenheit 451", "Los juegos del hambre"],
    },
    {
        pregunta: "¿Qué novela de Leo Tolstói se centra en la vida de cinco familias aristocráticas rusas durante la invasión de Napoleón?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://i0.wp.com/contraste.info/desarrollo/wp-content/uploads/2020/04/Critica-GuerraYPaz-FichaTV.jpg?fit=1400%2C932&ssl=1",
        respuesta: "Guerra y paz",
        distractores: ["Anna Karenina", "Los hermanos Karamazov", "Crimen y castigo"],
    },
    {
        pregunta: "¿Cuál es la obra de William Shakespeare que presenta a un príncipe de Dinamarca obsesionado con la venganza?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hamlet_William_Morris_Hunt.jpeg/250px-Hamlet_William_Morris_Hunt.jpeg",
        respuesta: "Hamlet",
        distractores: ["Otelo", "Macbeth", "Romeo y Julieta"],
    },
    {
        pregunta: "¿Quién es el autor de la novela 'El gran Gatsby', que retrata la vida en la década de 1920 en Estados Unidos?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://sevenov.com/wp-content/uploads/2023/02/f-scott-fitzgerald-20230212.jpg",
        respuesta: "F. Scott Fitzgerald",
        distractores: ["Ernest Hemingway", "J.D. Salinger", "T.S. Eliot"],
    },
    {
        pregunta: "¿Qué novela de Harper Lee se centra en un juicio por violación y condena racial en Alabama?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://www.cinemajove.com/wp-content/uploads/2023/03/a-sangre-fria-foto-1.jpeg",
        respuesta: "A sangre fría",
        distractores: ["Por quién doblan las campanas", "Matar a un ruiseñor", "Las uvas de la ira"],
    },
    {
        pregunta: "¿Qué novela de Gabriel García Márquez se basa en un hecho histórico, el asesinato del político colombiano Jorge Eliécer Gaitán?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://definicion.de/wp-content/uploads/2013/01/otono-1.jpg",
        respuesta: "El otoño del patriarca",
        distractores: ["Cien años de soledad", "El amor en los tiempos del cólera", "Crónica de una muerte anunciada"],
    },
    {
        pregunta: "¿Cuál es la obra de William Golding que relata la historia de un grupo de niños varados en una isla desierta?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://cdn.storyboardthat.com/storyboard-srcsets/es-examples/el-senor-de-las-moscas-ela-poster.webp",
        respuesta: "El señor de las moscas",
        distractores: ["1984", "Un mundo feliz", "Fahrenheit 451"],
    },
    {
        pregunta: "¿Cuál es la obra de Albert Camus que aborda el tema del absurdo y la indiferencia del universo?",
        ayuda: "Pista: Su nombre completo es Miguel de Cervantes Saavedra y es considerado uno de los más grandes escritores en lengua española.",
        ayudaImg: "https://humildelector.files.wordpress.com/2018/05/0443e862-3658-11e7-b74e-007fb206abf9.jpeg?w=1200&h=300&crop=1",
        respuesta: "El extranjero",
        distractores: ["La peste", "Los miserables", "El túnel"],
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