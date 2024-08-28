let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el resultado de 15 x 3?",
        ayuda: "Pista: Multiplica 15 por 3.",
        respuesta: "45",
        distractores: ["30", "40", "50"]
    },
    {
        pregunta: "¿Cuánt grados tiene un ángulo recto?",
        ayuda: "Pista: Un ángulo recto forma una esquina de una hoja de papel.",
        respuesta: "90 grados",
        distractores: ["45 grados", "60 grados", "180 grados"]
    },
    {
        pregunta: "¿Qué es una fracción?",
        ayuda: "Pista: Es una forma de expresar una parte de un todo.",
        respuesta: "Una forma de expresar una parte de un todo",
        distractores: ["Un número entero", "Una operación matemática", "Una unidad de medida"]
    },
    {
        pregunta: "¿Cuál es el perímetro de un cuadrado con lados de 6 cm?",
        ayuda: "Pista: El perímetro de un cuadrado se calcula sumando todos sus lados.",
        respuesta: "24 cm",
        distractores: ["12 cm", "18 cm", "30 cm"]
    },
    {
        pregunta: "¿Cómo se llama la figura geométrica con 8 lados?",
        ayuda: "Pista: Esta figura se usa comúnmente en señales de stop.",
        respuesta: "Octágono",
        distractores: ["Hexágono", "Pentágono", "Heptágono"]
    },
    {
        pregunta: "¿Qué es una regla para resolver problemas de división?",
        ayuda: "Pista: La división consiste en repartir una cantidad en partes iguales.",
        respuesta: "Dividir el número total entre el número de partes",
        distractores: ["Multiplicar el número total por el número de partes", "Restar el número de partes del número total", "Sumar el número total al número de partes"]
    },
    {
        pregunta: "¿Cuál es la suma de los ángulos interiores de un triángulo?",
        ayuda: "Pista: Todos los triángulos tienen la misma suma de ángulos interiores.",
        respuesta: "180 grados",
        distractores: ["90 grados", "360 grados", "270 grados"]
    },
    {
        pregunta: "¿Cómo se calcula el área de un rectángulo?",
        ayuda: "Pista: Multiplica la longitud por el ancho.",
        respuesta: "Longitud x Ancho",
        distractores: ["Longitud + Ancho", "Longitud - Ancho", "Longitud / Ancho"]
    },
    {
        pregunta: "¿Qué es una tabla de multiplicar?",
        ayuda: "Pista: Es una herramienta para aprender los productos de números.",
        respuesta: "Una herramienta para aprender los productos de números",
        distractores: ["Un conjunto de divisiones", "Una lista de sumas", "Una secuencia de números aleatorios"]
    },
    {
        pregunta: "¿Cuál es el valor de 100 dividido por 4?",
        ayuda: "Pista: Divide 100 entre 4.",
        respuesta: "25",
        distractores: ["20", "30", "15"]
    },
    {
        pregunta: "¿Qué es una figura geométrica?",
        ayuda: "Pista: Es una forma que tiene límites definidos en el espacio.",
        respuesta: "Una forma con límites definidos",
        distractores: ["Un tipo de número", "Un conjunto de palabras", "Una medida de tiempo"]
    },
    {
        pregunta: "¿Qué es un número primo?",
        ayuda: "Pista: Es un número que solo tiene dos divisores: 1 y él mismo.",
        respuesta: "Un número que solo tiene dos divisores: 1 y él mismo",
        distractores: ["Un número divisible por 2", "Un número que termina en 0", "Un número que es mayor que 10"]
    },
    {
        pregunta: "¿Qué es una fracción impropia?",
        ayuda: "Pista: Es una fracción en la que el numerador es mayor que el denominador.",
        respuesta: "Una fracción donde el numerador es mayor que el denominador",
        distractores: ["Una fracción con numerador menor que denominador", "Una fracción con denominador mayor que numerador", "Una fracción con numerador y denominador iguales"]
    },
    {
        pregunta: "¿Cómo se llama la línea que divide un círculo en dos partes iguales?",
        ayuda: "Pista: Esta línea pasa por el centro del círculo.",
        respuesta: "Diámetro",
        distractores: ["Radio", "Circunferencia", "Perímetro"]
    },
    {
        pregunta: "¿Cuál es la diferencia entre 50 y 23?",
        ayuda: "Pista: Resta 23 de 50.",
        respuesta: "27",
        distractores: ["17", "23", "30"]
    },
    {
        pregunta: "¿Qué es una regla para sumar números?",
        ayuda: "Pista: Para sumar dos números, se suman sus valores.",
        respuesta: "Sumar los valores de los números",
        distractores: ["Restar uno de los números del otro", "Multiplicar los números", "Dividir uno de los números entre el otro"]
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
