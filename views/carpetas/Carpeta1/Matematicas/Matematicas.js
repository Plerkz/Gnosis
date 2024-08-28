let baseDePreguntas = [
    {
        pregunta: "¿Cuánto es 3 + 4?",
        ayuda: "Pista: Suma tres y cuatro.",
        respuesta: "7",
        distractores: ["6", "8", "9"],
    },
    {
        pregunta: "¿Qué número viene después del 5?",
        ayuda: "Pista: Es el siguiente número en la secuencia después del 5.",
        respuesta: "6",
        distractores: ["4", "5", "7"],
    },
    {
        pregunta: "¿Cuál es el resultado de 10 - 2?",
        ayuda: "Pista: Resta dos de diez.",
        respuesta: "8",
        distractores: ["7", "9", "6"],
    },
    {
        pregunta: "Si tienes 4 manzanas y te dan 3 más, ¿cuántas manzanas tienes en total?",
        ayuda: "Pista: Suma las manzanas que tienes con las que te dieron.",
        respuesta: "7",
        distractores: ["5", "6", "8"],
    },
    {
        pregunta: "¿Cuál es el número que se encuentra en medio de 1 y 3?",
        ayuda: "Pista: Es el número entre uno y tres.",
        respuesta: "2",
        distractores: ["1", "3", "4"],
    },
    {
        pregunta: "¿Cuántas patas tiene un perro?",
        ayuda: "Pista: La mayoría de los perros tienen cuatro patas.",
        respuesta: "4",
        distractores: ["2", "3", "5"],
    },
    {
        pregunta: "¿Qué número es mayor, 7 o 5?",
        ayuda: "Pista: Compara los números para encontrar cuál es el mayor.",
        respuesta: "7",
        distractores: ["5", "6", "8"],
    },
    {
        pregunta: "¿Cuántos lados tiene un triángulo?",
        ayuda: "Pista: Un triángulo tiene tres lados.",
        respuesta: "3",
        distractores: ["2", "4", "5"],
    },
    {
        pregunta: "¿Qué figura tiene 4 lados iguales y 4 ángulos rectos?",
        ayuda: "Pista: Esta figura es un cuadrado.",
        respuesta: "Cuadrado",
        distractores: ["Triángulo", "Círculo", "Rectángulo"],
    },
    {
        pregunta: "Si tienes 6 caramelos y comes 2, ¿cuántos caramelos te quedan?",
        ayuda: "Pista: Resta los caramelos que comiste de los que tenías.",
        respuesta: "4",
        distractores: ["2", "5", "3"],
    },
    {
        pregunta: "¿Qué número es menor, 9 o 11?",
        ayuda: "Pista: Compara los números para encontrar cuál es el menor.",
        respuesta: "9",
        distractores: ["11", "10", "8"],
    },
    {
        pregunta: "¿Cuántas horas hay en un día?",
        ayuda: "Pista: Un día tiene 24 horas.",
        respuesta: "24",
        distractores: ["12", "60", "48"],
    },
    {
        pregunta: "Si tienes 5 grupos de 2 manzanas cada uno, ¿cuántas manzanas tienes en total?",
        ayuda: "Pista: Multiplica el número de grupos por el número de manzanas en cada grupo.",
        respuesta: "10",
        distractores: ["7", "8", "12"],
    },
    {
        pregunta: "¿Qué número es par y está entre 4 y 8?",
        ayuda: "Pista: Los números pares entre 4 y 8 son 6.",
        respuesta: "6",
        distractores: ["5", "7", "8"],
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
