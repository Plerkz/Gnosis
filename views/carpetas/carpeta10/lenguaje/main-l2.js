let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el título de la obra más famosa de William Shakespeare?",
        ayuda: "Pista:el nombre seria el personaje principal",
        ayudaImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bernhardt_Hamlet2.jpg/800px-Bernhardt_Hamlet2.jpg",
        respuesta: "Hamlet",
        distractores: ["Romeo y Julieta", "Don Quijote", " El Gran Gatsby"],
    },
    {
        pregunta: "¿Cuál es el nombre del protagonista en Matar a un ruiseñor?",
        ayuda: "Pista:es es de la que mas habla en la novela",
        ayudaImg: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Scout-Finch.To-Kill-a-Mockingbird.webp",
        respuesta:  "Scout Finch",
        distractores: ["Tom Sawyer", "Holden Caulfield","Jay Gatsby"],
    },
    {
        pregunta: "¿Cuál es la novela que narra la historia de un marinero llamado Ishmael y su encuentro con el capitán Ahab en busca de Moby Dick?",
        ayuda: "Pista: Ambientada en el mundo de la caza de ballenas. ",
        ayudaImg: "https://fotografias.lasexta.com/clipping/cmsimages02/2019/08/01/C7CC883F-C0C4-4AA6-80A9-17EECF8221BB/98.jpg?crop=999,562,x1,y0&width=1900&height=1069&optimize=low&format=webply",
        respuesta: "Moby Dick de Herman Melville",
        distractores: ["El corazón de las tinieblas", "La isla del tesoro", "Veinte mil leguas de viaje submarino"],
    },
    {
        pregunta: "¿Quién es el autor de El Gran Gatsby?",
        ayuda: "Pista:La novela está ambientada en la década de 1920, conocida como la Era del Jazz.",
        ayudaImg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/F_Scott_Fitzgerald_1921.jpg",
        respuesta: "F. Scott Fitzgerald",
        distractores: ["Ernest Hemingway", "ohn Dos Passos", " Sinclair Lewis"],
    },
    {
        pregunta: "¿Quién escribió El extraño caso del Dr. Jekyll y Mr. Hyde?",
        ayuda: "Pista:La historia explora la dualidad de la naturaleza humana. .",
        ayudaImg: "https://historia.nationalgeographic.com.es/medio/2019/12/02/stevenson-en-una-fotografia-coloreada-tomada-en-1888_cc7df309_1280x1840.jpg",
        respuesta: "Robert Louis Stevenson",
        distractores: ["Bram Stoker", "Mary Shelley", "H.G. Wells."],
    },
    {
        pregunta: "¿Cuál es la protagonista de la novela Orgullo y prejuicio de Jane Austen?",
        ayuda: "Pista:Es una joven inteligente y decidida en busca del amor verdadero ",
        ayudaImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.beautylish.com%2Ft%2Fymsmvp%2Fhow-to-look-like-elizabeth-bennet&psig=AOvVaw3UlEw644fcXDD3fEDrxdkH&ust=1693766755993000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJCe0oDLjIEDFQAAAAAdAAAAABAE",
        respuesta: "Elizabeth Bennet",
        distractores: [" Emma Woodhouse", "Catherine Earnshaw", "Scarlett O'Hara."],
    },
    {
        pregunta: "¿n cuál de sus novelas, Charles Dickens describe la vida de Pip, un huérfano que aspira a convertirse en un caballero?",
        ayudaImg: "https://i0.wp.com/www.micropsiacine.com/wp-content/uploads/2023/06/24expectations-03-jwtb-superJumbo-1.webp?fit=2048%2C1396&ssl=1",
        respuesta: "Grandes esperanzas",
        distractores: ["Oliver Twist", "Casa desolada", "Historia de dos ciudades"],
    },
    {
        pregunta: "En qué novela de época de Victor Hugo el personaje principal, Jean Valjean, busca redimirse después de ser condenado por robar un pan",
        ayuda: "Pista:La trama se desarrolla durante la Revolución Francesa. ",
        ayudaImg: "https://cdn.culturagenial.com/es/imagenes/los-miserables-de-victor-hugo-og.jpg",
        respuesta: "Los miserables",
        distractores: ["El conde de Montecristo", "Notre-Dame de París", "El jorobado de Notre-Dame"],
    },
    {
        pregunta: "¿Cuál es el título de la novela de Emily Brontë que se desarrolla en la Inglaterra del siglo XIX y narra una historia de amor y venganza?",
        ayuda: "Pista:La historia se centra en los personajes Heathcliff y Catherine. ",
        ayudaImg: "https://r2.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fs3.abcstatics.com%2Fmedia%2Fpeliculas%2F000%2F001%2F786%2Fcumbres-borrascosas-2.jpg&nuevoancho=620&medio=abc",
        respuesta: "Cumbres borrascosas",
        distractores: ["Jane Eyre", "Mujercitas", "Rebeca"],
    },
    {
        pregunta: "¿En qué novela de época de Jane Austen la protagonista se casa con el Sr. Darcy?",
        ayuda: "Pista:La protagonista es Elizabeth Bennet. ",
        respuesta: "Orgullo y prejuicio",
        distractores: ["Sentido y sensibilidad", "Mansfield Park", "Emma"],
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