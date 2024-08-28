let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el resultado de 8 + 6?",
        ayuda: "Pista: Suma 8 y 6.",
        respuesta: "14",
        distractores: ["12", "13", "15"]
    },
    {
        pregunta: "¿Cuánt lados tiene un cuadrado?",
        ayuda: "Pista: Es una figura con cuatro lados iguales.",
        respuesta: "4",
        distractores: ["3", "5", "6"]
    },
    {
        pregunta: "Si tienes 20 caramelos y comes 8, ¿cuántos caramelos te quedan?",
        ayuda: "Pista: Resta 8 de 20.",
        respuesta: "12",
        distractores: ["10", "11", "13"]
    },
    {
        pregunta: "¿Cuál es el área de un rectángulo con base de 5 cm y altura de 3 cm?",
        ayuda: "Pista: El área se calcula multiplicando la base por la altura.",
        respuesta: "15 cm²",
        distractores: ["8 cm²", "10 cm²", "20 cm²"]
    },
    {
        pregunta: "¿Qué es una fracción?",
        ayuda: "Pista: Es una forma de representar una parte de un todo.",
        respuesta: "Una forma de expresar una parte de un todo",
        distractores: ["Un número entero", "Una operación matemática", "Un tipo de número"]
    },
    {
        pregunta: "¿Cuánto es 7 × 4?",
        ayuda: "Pista: Multiplica 7 por 4.",
        respuesta: "28",
        distractores: ["24", "30", "32"]
    },
    {
        pregunta: "¿Qué forma tiene una moneda?",
        ayuda: "Pista: Es una figura redonda.",
        respuesta: "Circular",
        distractores: ["Cuadrada", "Triangular", "Rectangular"]
    },
    {
        pregunta: "¿Qué es una suma?",
        ayuda: "Pista: Es una operación que agrega dos o más números.",
        respuesta: "Una operación que suma dos o más números",
        distractores: ["Una operación que resta dos números", "Una operación que multiplica dos números", "Una operación que divide dos números"]
    },
    {
        pregunta: "Si divides 30 en 5 grupos iguales, ¿cuántos elementos hay en cada grupo?",
        ayuda: "Pista: Divide 30 entre 5.",
        respuesta: "6",
        distractores: ["5", "7", "8"]
    },
    {
        pregunta: "¿Cuál es el resultado de restar 15 de 40?",
        ayuda: "Pista: Resta 15 de 40.",
        respuesta: "25",
        distractores: ["20", "22", "30"]
    }
];

// Función para mezclar el orden de las preguntas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Función para mezclar el orden de las preguntas (shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


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
