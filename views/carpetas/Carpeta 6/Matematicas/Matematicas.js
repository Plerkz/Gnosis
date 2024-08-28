let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el resultado de sumar 567 y 342?",
        ayuda: "Pista: Realiza una suma directa de dos números.",
        respuesta: "909",
        distractores: ["899", "912", "850"],
    },
    {
        pregunta: "Si tienes un triángulo con ángulos de 50° y 60°, ¿cuál es el valor del tercer ángulo?",
        ayuda: "Pista: La suma de los ángulos de un triángulo siempre es 180°.",
        respuesta: "70°",
        distractores: ["80°", "90°", "60°"],
    },
    {
        pregunta: "¿Qué es una fracción equivalente a 1/2?",
        ayuda: "Pista: Encuentra una fracción que represente la misma proporción que 1/2.",
        respuesta: "2/4",
        distractores: ["3/4", "1/3", "2/5"],
    },
    {
        pregunta: "¿Cómo se llama el proceso de multiplicar un número por sí mismo?",
        ayuda: "Pista: Este proceso se utiliza para calcular potencias.",
        respuesta: "Elevación al cuadrado",
        distractores: ["Multiplicación", "Suma", "División"],
    },
    {
        pregunta: "¿Cuál es la medida en metros de un objeto que mide 5 kilómetros?",
        ayuda: "Pista: Convierte kilómetros a metros sabiendo que 1 kilómetro es igual a 1000 metros.",
        respuesta: "5000 metros",
        distractores: ["500 metros", "50 metros", "50000 metros"],
    },
    {
        pregunta: "¿Cómo se llama el cuadrado del número 8?",
        ayuda: "Pista: Calcula el resultado de elevar 8 al cuadrado.",
        respuesta: "64",
        distractores: ["16", "32", "128"],
    },
    {
        pregunta: "Si tienes 3/4 de una pizza y comes 1/4, ¿cuánto queda?",
        ayuda: "Pista: Resta las fracciones para encontrar la cantidad restante.",
        respuesta: "1/2",
        distractores: ["2/4", "1/4", "3/4"],
    },
    {
        pregunta: "¿Cuál es el área de un rectángulo con base de 8 cm y altura de 5 cm?",
        ayuda: "Pista: Usa la fórmula del área de un rectángulo: base × altura.",
        respuesta: "40 cm²",
        distractores: ["30 cm²", "50 cm²", "45 cm²"],
    },
    {
        pregunta: "¿Qué es una tabla de multiplicar?",
        ayuda: "Pista: Es una herramienta que muestra el producto de dos números.",
        respuesta: "Una herramienta para ver los productos de multiplicaciones",
        distractores: ["Una lista de fracciones", "Un gráfico de estadísticas", "Una tabla de conversiones"],
    },
    {
        pregunta: "¿Qué es un ángulo recto?",
        ayuda: "Pista: Es un ángulo que mide exactamente 90 grados.",
        respuesta: "Un ángulo de 90 grados",
        distractores: ["Un ángulo de 45 grados", "Un ángulo de 180 grados", "Un ángulo de 360 grados"],
    },
    {
        pregunta: "Si un tren viaja a 60 km/h y viaja durante 2 horas, ¿cuál es la distancia recorrida?",
        ayuda: "Pista: Multiplica la velocidad por el tiempo.",
        respuesta: "120 km",
        distractores: ["100 km", "90 km", "150 km"],
    },
    {
        pregunta: "¿Cuál es el valor de la expresión 3^3?",
        ayuda: "Pista: Calcula 3 elevado a la potencia de 3.",
        respuesta: "27",
        distractores: ["9", "81", "12"],
    },
    {
        pregunta: "¿Qué es una media aritmética?",
        ayuda: "Pista: Es el valor que se obtiene sumando varios números y dividiendo el resultado entre la cantidad de números.",
        respuesta: "La suma de los números dividida por la cantidad de números",
        distractores: ["El número más grande en un conjunto", "El número más pequeño en un conjunto", "El producto de todos los números"],
    },
    {
        pregunta: "¿Qué significa simplificar una fracción?",
        ayuda: "Pista: Es reducir la fracción a su forma más simple.",
        respuesta: "Dividir el numerador y el denominador por su máximo común divisor",
        distractores: ["Multiplicar el numerador y el denominador", "Sumar el numerador y el denominador", "Restar el numerador del denominador"],
    },
    {
        pregunta: "¿Cuál es la fórmula para calcular el perímetro de un cuadrado?",
        ayuda: "Pista: Usa la longitud de un lado del cuadrado y multiplícalo por 4.",
        respuesta: "4 × lado",
        distractores: ["lado × lado", "2 × (base + altura)", "base × altura"],
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
