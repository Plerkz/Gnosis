let baseDePreguntas = [
    {
        pregunta: " ¿Cuál es el nombre completo de la famosa cantante conocida como Queen Bey?",
        respuesta: "Beyoncé Knowles",
        ayuda: "Es una cantante, bailarina y actriz estadounidense, considerada una de las artistas más influyentes de la música pop contemporánea.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3P6URt9KcZ3dMYxG5kBrTjAp1u7Vnf2NFGyf75MgatIDirABU0zZL6sZ27pjRExL85o&usqp=CAU.jpg",
        distractores: ["Beyoncé Carter", "Beyoncé Johnson", "Beyoncé Williams"],
    },
    {
        pregunta: "¿Qué actor interpretó a Iron Man en la franquicia de películas de Marvel?",
        respuesta: "Robert Downey Jr",
        ayuda: "Este actor también es conocido por su papel en Sherlock Holmes.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCK0OL2CbEdQ_5AmCtr9cgYMtxd1L3-mPGrKR7IkmLkyTB3OAU847rDn_7roI047LSF8&usqp=CAU.jpg",
        distractores: ["Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
    },
    {
        pregunta: "¿Quién es el famoso pintor español conocido por su estilo surrealista y por obras?",
        respuesta: "Salvador Dalí",
        ayuda: "Este artista era conocido por su extravagante bigote y su estilo artístico único.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTud_qVVSBnckMTbzkGqbr2P5ClRRg7OPMNbX-WTc6IufWsKjcVQ112X-iDDXBZvns4G9g&usqp=CAU.jpg",
        distractores: ["Pablo Picasso", "Diego Rivera", "Joan Miró"],
    },
    {
        pregunta: "¿Cuál es el nombre real de la cantante conocida como Lady Gaga?",
        respuesta: "Stefani Joanne Angelina Germanotta",
        ayuda: "Antes de su carrera musical, esta artista estudió en la Escuela de Artes Tisch de la Universidad de Nueva York.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7pY5VY0odG7DGKzq7Fl6iFKepNDU1H7cSsATxptiNlKOzP0m70zlRw7S3gxiPDOadc8&usqp=CAU.jpg",
        distractores: ["Laura Gabriela González", "Jennifer Lynn Lopez", "Stefani Marie Gomez"],
    },
    {
        pregunta: "¿Cuál es el nombre de la famosa cantante de Barbados que es conocida por éxitos como UMBRELLA y DIAMONDS?",
        respuesta: "Rihanna",
        ayuda: "Esta artista también ha incursionado en la moda y la industria cosmética.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6e_ehCQDwlwcamKE44k8K3hX2qU-KJEprjGd1ZShfqNWhdM0knc5CGm219baFLMe3rN0&usqp=CAU.jpg",
        distractores: ["Beyoncé", "Adele", "Taylor Swift"],
    },
    {
        pregunta: "¿Quién es el actor que interpretó a Jack Dawson en la película TITANIC?",
        respuesta: "Leonardo DiCaprio",
        ayuda: "Ganó su primer Oscar por su papel en El Renacido.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZSV269YJTPS1XrVLWbwRZ6m5aQS9Iom8dbtuFCsM5HB6FA0-WvXRGdLiVq7Rn9vm65wI&usqp=CAU.jpg",
        distractores: ["Brad Pitt", "Johnny Depp", "Tom Cruise"],
    },
    {
        pregunta: "¿Quién es la protagonista de la película Los Juegos del Hambre?",
        respuesta: "Jennifer Lawrence",
        ayuda: "Ganó un Oscar por su papel en El lado luminoso de la vida.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkcbHfC3n0ogII8X1VDjMZHxr6A2U_fwqLtmv02IMAQKv94du08_mnSPX_el40_hXP6pQ&usqp=CAU.jpg",
        distractores: ["Emma Watson", "Kristen Stewart", "Anne Hathaway"],
    },
    {
        pregunta: " ¿Quién es el líder de la banda de rock QUEEN?",
        respuesta: "Freddie Mercury",
        ayuda: "Es famoso por su poderosa voz y carisma en el escenario.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_JqZ3svfGXMLc8Y93RWBJ-q2GeZ6GDXJra94xZK3xM7xh1BBRG8nLDy6zZSE38F0ifp4&usqp=CAU.jpg",
        distractores: ["Mick Jagger", "David Bowie", "Elton John"],
    },
    {
        pregunta: "¿Qué actor interpretó a Edward en la saga Crepúsculo?",
        respuesta: "Robert Pattinson",
        ayuda: "Después de Crepúsculo, interpretó a Batman en una película de DC.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45qt7ahKdo1guU11L2dKchpuEok0EW3hCoUcRrdj-ZEYqqpct0klMJInK67KF9KND7LI&usqp=CAU.jpg",
        distractores: ["Taylor Lautner", "Zac Efron", "Chris Pratt"],
    },
    {
        pregunta: "¿Cuál es el nombre real del rapero conocido como EMINEM?",
        respuesta: "Marshall Bruce Mathers III",
        ayuda: "Es considerado uno de los mejores raperos de todos los tiempos.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ZF8xhIIKeWAULf2CT-iwhYUBQs6Z2y6LykBkbf3r193dci-FSRxZE1OnfL6v9vHudCc&usqp=CAU.jpg",
        distractores: ["James Smith", "Michael Johnson", "David Williams"],
    },
    {
        pregunta: "¿Quién es la autora de la exitosa serie de libros Harry Potter?",
        respuesta: " J.K.Rowling",
        ayuda: "Su nombre completo es Joanne Rowling.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_bekHiBQIck6uNotGfai8mK80DFD0rLSJkcc_y8KELHx2I6Tp4og_dczlSvaI9WKoajk&usqp=CAU.jpg",
        distractores: ["Suzanne Collins", "George R.R. Martin", "Stephenie Meyer"],
    },
    {
        pregunta: "¿Qué dúo de música electrónica francés es conocido por éxitos como Get Lucky y One More Time?",
        respuesta: "Daft punk",
        ayuda: "Es conocida por su poderosa voz y emotivas baladas.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbhYdOpQto_rRdlx8pMjM2xTxI29BsVRdefUqFN4Rhree9oLPiKA_TZ16nD7Dllj9KG9A&usqp=CAU.jpg",
        distractores: ["Amy Winehouse", "Duffy", "Jessie J"],
    },
    {
        pregunta: "¿Qué artista pop estadounidense es famoso por éxitos como Shape of You y Thinking Out Loud?",
        respuesta: "Ed Sheeran",
        ayuda: "Es conocido por sus canciones románticas y pegajosas.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqfO33gHAuLZrVbI1UpdQzM470KL_SJkFsInkqnL7BwNjV2NccDAXGhEUOPXBQIjHEMk&usqp=CAU.jpg",
        distractores: ["Bruno Mars", "Charlie Puth", "John Legend"],
    },
    {
        pregunta: "¿Qué cantante canadiense es famoso por su éxito SORRY y su álbum PURPOSE en 2015?",
        respuesta: "Justin Bieber",
        ayuda: "Comenzó su carrera como estrella infantil en YouTube",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqlPWwNX5zKqp6_OvrezHHoD9XQ2QvEOE-3H3ljBmXcb-Zx7QkaKS4dTYU0OStfNoNm_I&usqp=CAU.jpg",
        distractores: ["Shawn Mendes", "Drake", "The Weeknd"],
    },
    {
        pregunta: "¿Cuál es el nombre del rapero que ganó el premio Grammy por su álbum To Pimp a Butterfly en 2015?",
        respuesta: "Kendrick Lamar",
        ayuda: "Sus letras a menudo abordan temas sociales y raciales.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlL85gJfYCOoKF7IwWp4E2EyMog4SZZXrNieCUbRi7wXkB44cWRE-ioe7BZwj5EqzNO0&usqp=CAU.jpg",
        distractores: ["Kanye West", "Jay-Z", "Chance the Rapper"],
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