let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el proceso mediante el cual las plantas fabrican su propio alimento?",
        ayuda: "Pista: Las plantas utilizan la luz solar para llevar a cabo este proceso vital.",
        imagen: "p8.jpg",
        ayudaImg: "https://booksandbooksdigital.com.co/ovas_unad/OVA-062/dist/assets/images/slide1_1.gif",
        respuesta: "La fotosíntesis",
        distractores: ["La respiración celular", "La mitosis", "La fermentación"],
    },
    {
        pregunta: "¿Cuál es el elemento químico más abundante en la Tierra?",
        ayuda: "Pista: Es el elemento más ligero y abundante en el universo",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7Ui_hKJSiUP_aoL4Gihd7fN9tHxnvcbVVt_5VfU7QU-zzo-uTO8gJIWS--TWA7XNUps&usqp=CAU.jpg",
        imagen: "p8.jpg",
        respuesta: "Hidrogeno",
        distractores: ["Oxigeno", "Hierro", "Carbono"],
    },
    {
        pregunta: "¿Cuál es la unidad básica de la estructura de los organismos vivos?",
        ayuda: "Pista: Todos los seres vivos están formados por estas unidades. ",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6P8wxtyKmj-xuMPVSGGWmBlQbua-JLCeoJVwIwJASa3g89oDivuBfE6qMzDDS744r9Q&usqp=CAU.jpg",
        imagen: "p8.jpg",
        respuesta: "Celulas",
        distractores: ["Átomo", "Gen", "Molecula"],
    },
    {
        pregunta: "¿Cuál es el componente principal de la capa de ozono?",
        ayuda: "Pista: Es un elemento químico vital para nuestra atmósfera y protege la Tierra de la radiación ultravioleta.",
        ayudaImg: "img-CN2/oxigeno.jpg",
        imagen: "p8.jpg",
        respuesta: "El oxígeno",
        distractores: ["El dióxido de carbono", "El nitrógeno", "El ozono"],
    },
    {
        pregunta: "¿Cuál es el proceso mediante el cual las sustancias pasan del estado sólido al estado gaseoso sin pasar por el estado líquido?",
        ayuda: "Pista: En este proceso, una sustancia pasa directamente de sólido a gas sin convertirse en líquido primero.",
        ayudaImg: "img-CN2/sublimacion.jpg",
        imagen: "p8.jpg",
        respuesta: "La sublimación",
        distractores: ["La evaporación", "La condensación", "La fusión"],
    },
    {
        pregunta: "¿Cuál es el proceso mediante el cual se forma un nuevo individuo a partir de la fusión de un óvulo y un espermatozoide?",
        ayuda: "Pista: Este proceso es esencial para la reproducción sexual en organismos multicelulares.",
        ayudaImg: "img-CN2/fecundacion.jpg",
        imagen: "p8.jpg",
        respuesta: "La fecundación",
        distractores: ["La mitosis", "La meiosis", "La reproducción asexual"],
    },
    {
        pregunta: "¿Cuál es la partícula subatómica con carga negativa?",
        ayuda: "Pista: Esta partícula gira alrededor del núcleo de un átomo y lleva una carga eléctrica negativa.",
        ayudaImg: "img-CN2/electron.jpg",
        imagen: "p8.jpg",
        respuesta: "El electrón",
        distractores: ["El protón", "El neutrón", "El fotón"],
    },
    {
        pregunta: "¿Cuál es la unidad de medida de la temperatura en el sistema métrico?",
        ayuda: "Pista: Se usa en la mayoría del mundo para medir la temperatura.",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfXxJS4XA73Fvja1TXtJzuWpDmaxkpEfWHKEz-PWYxFo6la9p2BkJ9tdEsB2Nb71eN-0o&usqp=CAU.jpg",
        imagen: "p8.jpg",
        respuesta: "Celsius",
        distractores: ["Kelvin", "Rankine", "Fahrenheit"],
    },
    {
        pregunta: "¿Cuál es el proceso natural de la Tierra para renovar su suelo y mantener la fertilidad??",
        ayuda: "Pista: Los organismos descomponedores juegan un papel importante en esto.",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeiyNr4Y7Fqb1ySf3AaL563oElSSn8eqcqnDdnXHS5LL7HQEwJCPc3aWL3o0ztYYR3YME&usqp=CAU.jpg",
        imagen: "p8.jpg",
        respuesta: "Desconpocisión",
        distractores: ["Erosión", "Desertificación", "Reciclaje"],
    },
    {
        pregunta: "¿Qué gas es esencial para la fotosíntesis de las plantas?",
        ayuda: "Pista: Los humanos exhalan este gas.",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojkJJn_iqxCPqwxJW-9dRGWvTHxqWWgDZkgo1XVHQo2FdoYKo3xyyMmD-QcSSu3bqrX0&usqp=CAU.jpg",
        imagen: "p8.jpg",
        respuesta: "Dioxido de carbono",
        distractores: ["Oxigeno", "Nitrogeno", "Hidrogeno"],
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