let baseDePreguntas = [
    {
        pregunta: "¿Cuánto es 25 - 9?",
        ayuda: "Pista: Resta 9 de 25.",
        respuesta: "16",
        distractores: ["14", "15", "17"]
    },
    {
        pregunta: "¿Cuál es el resultado de 7 x 6?",
        ayuda: "Pista: Multiplica 7 por 6.",
        respuesta: "42",
        distractores: ["36", "40", "48"]
    },
    {
        pregunta: "¿Cómo se llama el número que está justo después del 99?",
        ayuda: "Pista: Es el siguiente número en la secuencia.",
        respuesta: "100",
        distractores: ["101", "99", "98"]
    },
    {
        pregunta: "¿Cuánt segundos hay en 3 minutos?",
        ayuda: "Pista: Un minuto tiene 60 segundos.",
        respuesta: "180",
        distractores: ["120", "150", "200"]
    },
    {
        pregunta: "¿Qué figura tiene 5 lados?",
        ayuda: "Pista: Es un polígono con el prefijo 'penta'.",
        respuesta: "Pentágono",
        distractores: ["Cuadrado", "Hexágono", "Heptágono"]
    },
    {
        pregunta: "¿Cuál es el valor de 48 ÷ 8?",
        ayuda: "Pista: Divide 48 entre 8.",
        respuesta: "6",
        distractores: ["4", "5", "7"]
    },
    {
        pregunta: "¿Cómo se llama el resultado de una multiplicación?",
        ayuda: "Pista: Es el producto de dos números.",
        respuesta: "Producto",
        distractores: ["Suma", "Cociente", "Diferencia"]
    },
    {
        pregunta: "¿Qué es un número par?",
        ayuda: "Pista: Es un número que se puede dividir por 2 sin dejar residuo.",
        respuesta: "Un número divisible por 2",
        distractores: ["Un número impar", "Un número mayor que 10", "Un número que termina en 5"]
    },
    {
        pregunta: "¿Cuánt lados tiene un triángulo?",
        ayuda: "Pista: Es una figura con tres lados.",
        respuesta: "3",
        distractores: ["4", "5", "6"]
    },
    {
        pregunta: "¿Qué es una línea recta?",
        ayuda: "Pista: Es una línea que no tiene curvas.",
        respuesta: "Una línea sin curvas",
        distractores: ["Una línea curva", "Una línea zigzagueante", "Una línea ondulada"]
    },
    {
        pregunta: "¿Cuál es el área de un cuadrado con lados de 5 cm?",
        ayuda: "Pista: El área de un cuadrado se calcula multiplicando la longitud del lado por sí misma.",
        respuesta: "25 cm²",
        distractores: ["20 cm²", "30 cm²", "35 cm²"]
    },
    {
        pregunta: "¿Qué es una fracción?",
        ayuda: "Pista: Es una manera de expresar una parte de un entero.",
        respuesta: "Una parte de un entero",
        distractores: ["Un número entero", "Un tipo de operación", "Una figura geométrica"]
    },
    {
        pregunta: "¿Qué figura tiene todos sus ángulos rectos y lados desiguales?",
        ayuda: "Pista: Es un rectángulo con lados diferentes.",
        respuesta: "Rectángulo",
        distractores: ["Cuadrado", "Trapecio", "Rombo"]
    },
    {
        pregunta: "¿Cuál es el número que representa la mitad de 40?",
        ayuda: "Pista: Divide 40 entre 2.",
        respuesta: "20",
        distractores: ["15", "25", "30"]
    },
    {
        pregunta: "¿Qué es una tabla de multiplicar?",
        ayuda: "Pista: Es una herramienta que ayuda a memorizar las multiplicaciones.",
        respuesta: "Una herramienta para memorizar multiplicaciones",
        distractores: ["Un libro de matemáticas", "Una calculadora", "Un gráfico de fracciones"]
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
