let baseDePreguntas = [
    {
        pregunta: "¿Cuánto es 7 + 2?",
        ayuda: "Pista: Suma 7 y 2.",
        respuesta: "9",
        distractores: ["8", "10", "11"]
    },
    {
        pregunta: "¿Cuál es el resultado de 15 - 6?",
        ayuda: "Pista: Resta 6 de 15.",
        respuesta: "9",
        distractores: ["7", "8", "10"]
    },
    {
        pregunta: "¿Cuánt lados tiene un triángulo?",
        ayuda: "Pista: Un triángulo tiene tres lados.",
        respuesta: "3",
        distractores: ["4", "5", "6"]
    },
    {
        pregunta: "¿Cuánto es 4 x 3?",
        ayuda: "Pista: Multiplica 4 por 3.",
        respuesta: "12",
        distractores: ["10", "11", "13"]
    },
    {
        pregunta: "¿Qué número es mayor: 8 o 5?",
        ayuda: "Pista: El mayor de estos dos números es el que tiene más unidades.",
        respuesta: "8",
        distractores: ["5", "6", "7"]
    },
    {
        pregunta: "¿Cuánt minutos hay en media hora?",
        ayuda: "Pista: Media hora es la mitad de 60 minutos.",
        respuesta: "30",
        distractores: ["15", "45", "60"]
    },
    {
        pregunta: "¿Cuánt segundos hay en 2 minutos?",
        ayuda: "Pista: Hay 60 segundos en un minuto.",
        respuesta: "120",
        distractores: ["60", "90", "180"]
    },
    {
        pregunta: "¿Cuál es el número que viene antes del 10?",
        ayuda: "Pista: Es el número inmediatamente anterior al 10.",
        respuesta: "9",
        distractores: ["8", "11", "12"]
    },
    {
        pregunta: "¿Cuánt horas tiene un día?",
        ayuda: "Pista: Un día tiene 24 horas.",
        respuesta: "24",
        distractores: ["12", "48", "36"]
    },
    {
        pregunta: "¿Cuánto es 5 + 5?",
        ayuda: "Pista: Suma 5 y 5.",
        respuesta: "10",
        distractores: ["9", "11", "12"]
    },
    {
        pregunta: "¿Qué forma tiene una pelota de fútbol?",
        ayuda: "Pista: Es una figura redonda.",
        respuesta: "Esférica",
        distractores: ["Cuadrada", "Triangular", "Rectangular"]
    },
    {
        pregunta: "¿Cuánt días tiene una semana?",
        ayuda: "Pista: Una semana tiene 7 días.",
        respuesta: "7",
        distractores: ["5", "6", "8"]
    },
    {
        pregunta: "¿Cuánto es 6 - 2?",
        ayuda: "Pista: Resta 2 de 6.",
        respuesta: "4",
        distractores: ["3", "5", "6"]
    },
    {
        pregunta: "Si tienes 3 pares de calcetines, ¿cuánt calcetines tienes en total?",
        ayuda: "Pista: Un par tiene 2 calcetines.",
        respuesta: "6",
        distractores: ["4", "5", "7"]
    },
    {
        pregunta: "¿Qué número es menor: 9 o 12?",
        ayuda: "Pista: El menor de estos dos números es el que está más cerca de 0.",
        respuesta: "9",
        distractores: ["12", "10", "8"]
    }
];


// Función para cambiar una pregunta
function cambiarPregunta(indice, nuevaPregunta, nuevaAyuda, nuevasRespuestas, respuestaCorrecta) {
    if (indice >= 0 && indice < cuestionarioMatematicas.length) {
        cuestionarioMatematicas[indice].pregunta = nuevaPregunta;
        cuestionarioMatematicas[indice].ayuda = nuevaAyuda;
        cuestionarioMatematicas[indice].respuesta = respuestaCorrecta;
        cuestionarioMatematicas[indice].distractores = nuevasRespuestas.filter(respuesta => respuesta !== respuestaCorrecta);
    } else {
        console.log("Índice fuera de rango");
    }
}

// Mostrar cuestionario original
console.log("Cuestionario de Matemáticas original:");
mostrarCuestionario();

// Cambiar la primera pregunta
cambiarPregunta(
    0,
    "¿Cuál es el resultado de 6 + 4?",
    "Pista: Suma dos números.",
    ["7", "8", "9"],
    "10"
);


// Mezclar el orden de las preguntas para que no estén agrupadas por tema
baseDePreguntas = shuffle(baseDePreguntas);
