let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el valor de x en la ecuación 3x + 5 = 20?",
        ayuda: "Pista: Despeja la variable x.",
        respuesta: "5",
        distractores: ["4", "6", "7"],
    },
    {
        pregunta: "Si un triángulo tiene lados de 5 cm, 12 cm y 13 cm, ¿es un triángulo rectángulo?",
        ayuda: "Pista: Utiliza el teorema de Pitágoras para comprobarlo.",
        respuesta: "Sí",
        distractores: ["No", "Solo si los ángulos son iguales", "Solo si el perímetro es mayor a 30 cm"],
    },
    {
        pregunta: "¿Cuál es el área de un círculo con radio de 7 cm? (Usa π ≈ 3.14)",
        ayuda: "Pista: Usa la fórmula del área de un círculo: A = πr².",
        respuesta: "153.86 cm²",
        distractores: ["49 cm²", "98 cm²", "154 cm²"],
    },
    {
        pregunta: "Si dos ángulos de un triángulo son 35° y 55°, ¿cuál es la medida del tercer ángulo?",
        ayuda: "Pista: La suma de los ángulos interiores de un triángulo es 180°.",
        respuesta: "90°",
        distractores: ["80°", "100°", "85°"],
    },
    {
        pregunta: "Un coche recorre 360 km en 6 horas. ¿Cuál es su velocidad promedio?",
        ayuda: "Pista: Divide la distancia por el tiempo para encontrar la velocidad.",
        respuesta: "60 km/h",
        distractores: ["40 km/h", "80 km/h", "50 km/h"],
    },
    {
        pregunta: "¿Cuál es el volumen de un cubo cuyo lado mide 5 cm?",
        ayuda: "Pista: La fórmula del volumen de un cubo es lado³.",
        respuesta: "125 cm³",
        distractores: ["25 cm³", "150 cm³", "100 cm³"],
    },
    {
        pregunta: "Si el precio de un artículo aumenta en un 25%, y luego se reduce en un 20%, ¿el precio final es mayor, menor o igual al precio original?",
        ayuda: "Pista: Aplica los porcentajes secuencialmente.",
        respuesta: "Menor",
        distractores: ["Mayor", "Igual", "Depende del precio inicial"],
    },
    {
        pregunta: "Resuelve la fracción 5/8 + 7/12. Simplifica el resultado si es necesario.",
        ayuda: "Pista: Encuentra el mínimo común denominador antes de sumar.",
        respuesta: "29/24 o 1 5/24",
        distractores: ["12/20", "19/20", "15/16"],
    },
    {
        pregunta: "¿Cuál es el máximo común divisor (MCD) de 36 y 48?",
        ayuda: "Pista: Encuentra el mayor número que divida a ambos sin dejar residuo.",
        respuesta: "12",
        distractores: ["6", "18", "24"],
    },
    {
        pregunta: "¿Cómo se llama una secuencia numérica donde cada término es el resultado de sumar el mismo número al término anterior?",
        ayuda: "Pista: Esta secuencia tiene un crecimiento constante entre términos consecutivos.",
        respuesta: "Progresión aritmética",
        distractores: ["Progresión geométrica", "Sucesión cuadrática", "Serie infinita"],
    },
    {
        pregunta: "Resuelve: (4² + 3²) ÷ (2³ - 1)",
        ayuda: "Pista: Aplica correctamente las reglas de prioridad de operaciones.",
        respuesta: "2",
        distractores: ["8", "4", "16"],
    },
    {
        pregunta: "Un prisma rectangular tiene dimensiones de 3 cm, 4 cm y 5 cm. ¿Cuál es su área total de superficie?",
        ayuda: "Pista: Suma las áreas de las seis caras del prisma.",
        respuesta: "94 cm²",
        distractores: ["60 cm²", "96 cm²", "120 cm²"],
    },
    {
        pregunta: "En un triángulo isósceles, los ángulos en la base miden 40° cada uno. ¿Cuál es la medida del ángulo en el vértice?",
        ayuda: "Pista: La suma de los ángulos interiores de un triángulo siempre es 180°.",
        respuesta: "100°",
        distractores: ["80°", "60°", "90°"],
    },
    {
        pregunta: "¿Cuál es el número que falta en la secuencia: 2, 6, 18, __, 162?",
        ayuda: "Pista: Cada número es el triple del anterior.",
        respuesta: "54",
        distractores: ["36", "48", "72"],
    },
    {
        pregunta: "Simplifica la expresión: 5x - 3x + 7 =",
        ayuda: "Pista: Agrupa los términos semejantes.",
        respuesta: "2x + 7",
        distractores: ["8x", "7x - 7", "3x + 7"],
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

// Mezclar el orden de las preguntas para que no estén agrupadas por nivel de dificultad
baseDePreguntas = shuffle(baseDePreguntas);
