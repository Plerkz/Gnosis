let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el resultado de 7 + 5?",
        ayuda: "Pista: Suma 7 y 5.",
        respuesta: "12",
        distractores: ["10", "13", "15"]
    },
    {
        pregunta: "¿Cuántos lados tiene un triángulo?",
        ayuda: "Pista: Es una figura con tres lados.",
        respuesta: "3",
        distractores: ["4", "5", "6"]
    },
    {
        pregunta: "Si tienes 15 manzanas y das 7, ¿cuántas manzanas te quedan?",
        ayuda: "Pista: Resta 7 de 15.",
        respuesta: "8",
        distractores: ["7", "9", "10"]
    },
    {
        pregunta: "¿Cuál es el área de un cuadrado con lados de 4 cm?",
        ayuda: "Pista: El área de un cuadrado se calcula multiplicando la longitud de un lado por sí misma.",
        respuesta: "16 cm²",
        distractores: ["8 cm²", "12 cm²", "20 cm²"]
    },
    {
        pregunta: "¿Qué es un número par?",
        ayuda: "Pista: Es un número que se puede dividir entre 2 sin dejar residuo.",
        respuesta: "Un número que es divisible por 2",
        distractores: ["Un número que termina en 1", "Un número que es mayor que 10", "Un número impar"]
    },
    {
        pregunta: "¿Cuánto es 9 - 4?",
        ayuda: "Pista: Resta 4 de 9.",
        respuesta: "5",
        distractores: ["4", "6", "7"]
    },
    {
        pregunta: "¿Cómo se llama el polígono de 5 lados?",
        ayuda: "Pista: Es un polígono con el prefijo 'penta'.",
        respuesta: "Pentágono",
        distractores: ["Hexágono", "Cuadrado", "Octágono"]
    },
    {
        pregunta: "¿Qué es una fracción?",
        ayuda: "Pista: Es una forma de expresar partes de un todo.",
        respuesta: "Una forma de expresar una parte de un todo",
        distractores: ["Un número entero", "Una operación matemática", "Un tipo de ángulo"]
    },
    {
        pregunta: "Si divides 24 en 6 grupos iguales, ¿cuántos elementos hay en cada grupo?",
        ayuda: "Pista: Divide 24 entre 6.",
        respuesta: "4",
        distractores: ["3", "5", "6"]
    },
    {
        pregunta: "¿Cuál es el resultado de multiplicar 6 por 3?",
        ayuda: "Pista: Multiplica 6 por 3.",
        respuesta: "18",
        distractores: ["15", "20", "24"]
    },
    {
        pregunta: "¿Qué forma tiene una esfera?",
        ayuda: "Pista: Es una figura redonda y tridimensional.",
        respuesta: "Esférica",
        distractores: ["Cuadrada", "Triangular", "Rectangular"]
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
