let baseDePreguntas = [
    {
        pregunta: "¿Cuánto es 1 + 7?",
        ayuda: "Pista: Suma 1 y 7.",
        respuesta: "8",
        distractores: ["6", "7", "9"]
    },
    {
        pregunta: "¿Cuánt lados tiene un triángulo?",
        ayuda: "Pista: Un triángulo tiene una cantidad fija de lados.",
        respuesta: "3",
        distractores: ["4", "5", "6"]
    },
    {
        pregunta: "Si tienes 6 manzanas y comes 2, ¿cuánt manzanas te quedan?",
        ayuda: "Pista: Resta 2 de 6.",
        respuesta: "4",
        distractores: ["3", "5", "6"]
    },
    {
        pregunta: "¿Cuánto es 5 + 2?",
        ayuda: "Pista: Suma 5 y 2.",
        respuesta: "7",
        distractores: ["6", "8", "9"]
    },
    {
        pregunta: "¿Qué número es mayor: 9 o 5?",
        ayuda: "Pista: Compara los números 9 y 5.",
        respuesta: "9",
        distractores: ["5", "6", "7"]
    },
    {
        pregunta: "¿Cuánt días hay en una semana?",
        ayuda: "Pista: Una semana tiene 7 días.",
        respuesta: "7",
        distractores: ["5", "6", "8"]
    },
    {
        pregunta: "Si tienes 3 cajas con 4 juguetes cada una, ¿cuánt juguetes tienes en total?",
        ayuda: "Pista: Multiplica 3 por 4.",
        respuesta: "12",
        distractores: ["10", "11", "13"]
    },
    {
        pregunta: "¿Cuál es el número que viene antes del 10?",
        ayuda: "Pista: Este número es uno menos que 10.",
        respuesta: "9",
        distractores: ["8", "10", "11"]
    },
    {
        pregunta: "¿Cuánto es 4 + 4?",
        ayuda: "Pista: Suma 4 y 4.",
        respuesta: "8",
        distractores: ["7", "9", "10"]
    },
    {
        pregunta: "¿Cómo se llama el número 6 en palabras?",
        ayuda: "Pista: Es el número que sigue al 5.",
        respuesta: "Seis",
        distractores: ["Cinco", "Siete", "Ocho"]
    },
    {
        pregunta: "Si tienes 5 pasteles y das 3 a tus amigos, ¿cuánt pasteles te quedan?",
        ayuda: "Pista: Resta 3 de 5.",
        respuesta: "2",
        distractores: ["1", "3", "4"]
    },
    {
        pregunta: "¿Cuánt esquinas tiene un cuadrado?",
        ayuda: "Pista: Un cuadrado tiene una cantidad fija de esquinas.",
        respuesta: "4",
        distractores: ["3", "5", "6"]
    },
    {
        pregunta: "¿Qué número es menor: 2 o 7?",
        ayuda: "Pista: Compara los números 2 y 7.",
        respuesta: "2",
        distractores: ["7", "6", "5"]
    },
    {
        pregunta: "¿Cuánto es 3 + 3?",
        ayuda: "Pista: Suma 3 y 3.",
        respuesta: "6",
        distractores: ["5", "7", "8"]
    },
    {
        pregunta: "Si tienes 8 lápices y te dan 2 más, ¿cuánt lápices tienes en total?",
        ayuda: "Pista: Suma 8 y 2.",
        respuesta: "10",
        distractores: ["9", "11", "12"]
    },
    {
        pregunta: "¿Cuál es el número que sigue después del 4?",
        ayuda: "Pista: Este número viene justo después del 4.",
        respuesta: "5",
        distractores: ["3", "4", "6"]
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

// Mezclar el orden de las preguntas para que no estén agrupadas por tema
baseDePreguntas = shuffle(baseDePreguntas);
