let baseDePreguntas = [
    {
        pregunta: "¿que es un algoritmo?",
        respuesta: "Un conjunto de pasos para resolver un problema",
        distractores: ["Una variable en programación", "Una imagen digital", "Un lenguaje de programación", ],
    },
    {
        pregunta: "¿Qué es un bucle?",
        respuesta: "Una estructura que permite la repetición de instrucciones",
        distractores: ["Una función matemática", "Una variable de tipo texto", "Una condición booleana"],
    },
    {
        pregunta: "¿Cuál es la finalidad de un comentario en el código?",
        respuesta: " Proporcionar explicaciones y aclaraciones en el código",
        distractores: ["Mejorar el rendimiento del código", "Definir nuevas variables", "Mostrar mensajes en la pantalla"],
    },
    {
        pregunta: "¿Qué es una variable en programación?",
        respuesta: " Un espacio en la memoria para almacenar datos",
        distractores: ["Un operador matemático", "Un tipo de dato", "Una función"],
    },
    {
        pregunta: "¿Cuál es la diferencia entre un compilador y un intérprete?",
        respuesta: " El compilador traduce todo el programa de una vez, mientras que el intérprete lo hace línea por línea",
        distractores: ["Ambos son lo mismo", "El compilador solo se usa en lenguajes antiguos", "El intérprete solo se usa en lenguajes modernos"],
    },
    {
        pregunta: "¿Qué es una función en programación?",
        respuesta: "Un conjunto de instrucciones que realizan una tarea específica",
        distractores: ["Una variable que almacena números", "Un tipo de dato", "Una etiqueta HTML"],
    },
    {
        pregunta: "¿Qué es un booleano?",
        respuesta: "Un tipo de dato que puede ser verdadero o falso",
        distractores: ["Un tipo de bucle", "Una función matemática", "Una variable de texto"]
    },
    {
        pregunta: "¿Qué significa debuggear un programa?",
        respuesta: "Encontrar y corregir errores en el código",
        distractores: ["Ejecutar el programa", "Crear un nuevo programa", "Guardar el programa"],
    },
    {
        pregunta: "¿Qué es un array (arreglo) en programación?",
        respuesta: "Una estructura que puede almacenar múltiples valores en una sola variable",
        distractores: ["Una función matemática", "Una operación lógica", "Una condición"],
    },
    {
        pregunta: "¿Qué es la programación orientada a objetos?",
        respuesta: "Un paradigma de programación que utiliza objetos y clases para organizar el código",
        distractores: ["Una función matemática", "Una estructura de control", "Un tipo de dato"],
    },
    {
        pregunta: "¿Qué es la recursividad en programación?",
        respuesta: "Cuando una función se llama a sí misma para resolver un problema",
        distractores: ["Una estructura de control", "Un operador matemático", "Un tipo de dato"],
    },
    {
        pregunta: "¿Qué es un operador lógico AND?",
        respuesta: "Un operador que devuelve verdadero si ambas condiciones son verdaderas",
        distractores: ["Un operador matemático", "Un operador de concatenación", "Un operador de asignación"],
    },
    {
        pregunta: "¿Qué es un bucle for?",
        respuesta: "Una estructura que repite un bloque de código un número específico de veces",
        distractores: [" Una función matemática", "Una estructura condicional", "Un tipo de dato"],
    },
    {
        pregunta: " ¿Qué es una sentencia IF en programación?",
        respuesta: "Una estructura que ejecuta un bloque de código si una condición es verdadera",
        distractores: ["Una función matemática", "Una estructura de bucle", "Un tipo de dato"],
    },
    {
        pregunta: "¿Qué es un operador aritmético?",
        respuesta: "Un símbolo utilizado para realizar operaciones matemáticas",
        distractores: ["Una función matemática", "Un operador lógico", "Un tipo de dato"],
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