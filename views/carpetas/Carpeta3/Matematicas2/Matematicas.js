let baseDePreguntas = [
    {
        pregunta: "¿Cuánto es 7 + 5?",
        ayuda: "Pista: Suma 7 y 5.",
        respuesta: "12",
        distractores: ["10", "11", "13"]
    },
    {
        pregunta: "¿Cuánt lados tiene un triángulo?",
        ayuda: "Pista: Es una figura con tres lados.",
        respuesta: "3",
        distractores: ["4", "5", "6"]
    },
    {
        pregunta: "¿Cuál es el valor de 20 - 8?",
        ayuda: "Pista: Resta 8 de 20.",
        respuesta: "12",
        distractores: ["10", "11", "13"]
    },
    {
        pregunta: "¿Cuánt minutos hay en una hora?",
        ayuda: "Pista: Una hora tiene 60 minutos.",
        respuesta: "60",
        distractores: ["30", "45", "50"]
    },
    {
        pregunta: "¿Qué forma tiene una pelota de baloncesto?",
        ayuda: "Pista: Es una figura redonda.",
        respuesta: "Esférica",
        distractores: ["Cuadrada", "Rectangular", "Triangular"]
    },
    {
        pregunta: "¿Cuál es la multiplicación de 4 x 3?",
        ayuda: "Pista: Multiplica 4 por 3.",
        respuesta: "12",
        distractores: ["10", "11", "14"]
    },
    {
        pregunta: "¿Qué es una decena?",
        ayuda: "Pista: Es un grupo de 10 unidades.",
        respuesta: "Un grupo de 10 unidades",
        distractores: ["Un grupo de 5 unidades", "Un grupo de 15 unidades", "Un grupo de 20 unidades"]
    },
    {
        pregunta: "¿Cuánt centavos hay en 1 dólar?",
        ayuda: "Pista: Un dólar equivale a 100 centavos.",
        respuesta: "100",
        distractores: ["50", "75", "200"]
    },
    {
        pregunta: "¿Cómo se llama una figura con 5 lados?",
        ayuda: "Pista: El nombre de esta figura empieza con 'P'.",
        respuesta: "Pentágono",
        distractores: ["Hexágono", "Cuadrado", "Triángulo"]
    },
    {
        pregunta: "¿Qué operación se usa para repartir 20 manzanas entre 4 personas?",
        ayuda: "Pista: Esta operación encuentra cuántas manzanas le toca a cada persona.",
        respuesta: "División",
        distractores: ["Suma", "Resta", "Multiplicación"]
    },
    {
        pregunta: "¿Cuál es el doble de 9?",
        ayuda: "Pista: Multiplica 9 por 2.",
        respuesta: "18",
        distractores: ["16", "17", "19"]
    },
    {
        pregunta: "¿Cómo se llama la línea que divide una figura en dos mitades iguales?",
        ayuda: "Pista: Esta línea divide la figura en dos partes iguales.",
        respuesta: "Línea de simetría",
        distractores: ["Línea vertical", "Línea horizontal", "Línea diagonal"]
    },
    {
        pregunta: "¿Qué es un número impar?",
        ayuda: "Pista: Es un número que no se puede dividir en dos partes iguales.",
        respuesta: "Un número que no es divisible entre 2",
        distractores: ["Un número divisible entre 2", "Un número mayor que 10", "Un número que termina en 0"]
    },
    {
        pregunta: "¿Cuánto es 15 dividido entre 3?",
        ayuda: "Pista: Divide 15 en 3 partes iguales.",
        respuesta: "5",
        distractores: ["4", "6", "7"]
    },
    {
        pregunta: "¿Qué forma tiene una hoja de papel estándar?",
        ayuda: "Pista: La forma es rectangular.",
        respuesta: "Rectangular",
        distractores: ["Cuadrada", "Circular", "Triangular"]
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
