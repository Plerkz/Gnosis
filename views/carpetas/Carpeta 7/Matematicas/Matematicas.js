let baseDePreguntas = [
    {
        pregunta: "¿Qué es una fracción impropia?",
        ayuda: "Pista: Una fracción impropia tiene un numerador mayor o igual al denominador.",
        respuesta: "Una fracción con el numerador mayor o igual al denominador",
        distractores: ["Una fracción con el denominador mayor que el numerador", "Una fracción en la que el numerador es 1", "Una fracción que no se puede simplificar"],
    },
    {
        pregunta: "¿Cómo se convierte una fracción impropia a número mixto?",
        ayuda: "Pista: Divide el numerador por el denominador y escribe el cociente como la parte entera.",
        respuesta: "Dividiendo el numerador entre el denominador y escribiendo el cociente y el residuo como fracción",
        distractores: ["Multiplicando el numerador por el denominador", "Sumando el numerador al denominador", "Restando el denominador del numerador"],
    },
    {
        pregunta: "¿Qué es una proporción?",
        ayuda: "Pista: Es una igualdad entre dos razones o fracciones.",
        respuesta: "Una igualdad entre dos razones o fracciones",
        distractores: ["Una suma de dos fracciones", "Una multiplicación de dos números", "Una resta de dos números"],
    },
    {
        pregunta: "¿Cómo se resuelve una ecuación lineal con una incógnita?",
        ayuda: "Pista: Despeja la incógnita aislando la variable en un lado de la ecuación.",
        respuesta: "Aislando la variable en un lado de la ecuación y resolviendo para la incógnita",
        distractores: ["Sumando todos los términos de la ecuación", "Multiplicando ambos lados por el mismo número", "Dividiendo ambos lados por la misma incógnita"],
    },
    {
        pregunta: "¿Qué es una figura geométrica regular?",
        ayuda: "Pista: Una figura geométrica regular tiene todos sus lados y ángulos iguales.",
        respuesta: "Una figura con todos sus lados y ángulos iguales",
        distractores: ["Una figura con lados de diferentes longitudes", "Una figura con ángulos de diferentes tamaños", "Una figura con solo dos lados"],
    },
    {
        pregunta: "¿Cómo se calcula el área de un triángulo?",
        ayuda: "Pista: La fórmula para el área de un triángulo es base por altura dividido por dos.",
        respuesta: "Multiplicando la base por la altura y dividiendo el resultado por dos",
        distractores: ["Multiplicando la base por la altura", "Sumando la base y la altura", "Dividiendo la base entre la altura"],
    },
    {
        pregunta: "¿Qué son los números primos?",
        ayuda: "Pista: Son números que solo tienen dos divisores: uno y ellos mismos.",
        respuesta: "Números que solo tienen dos divisores: uno y ellos mismos",
        distractores: ["Números que tienen más de dos divisores", "Números que son divisibles por 2", "Números que terminan en 5"],
    },
    {
        pregunta: "¿Cómo se resuelve una ecuación con paréntesis?",
        ayuda: "Pista: Usa la propiedad distributiva para eliminar los paréntesis.",
        respuesta: "Aplicando la propiedad distributiva para eliminar los paréntesis",
        distractores: ["Sumando los números dentro del paréntesis", "Multiplicando todos los números dentro del paréntesis", "Restando los números fuera del paréntesis"],
    },
    {
        pregunta: "¿Qué es el perímetro de una figura?",
        ayuda: "Pista: El perímetro es la suma de las longitudes de todos los lados de una figura.",
        respuesta: "La suma de las longitudes de todos los lados de una figura",
        distractores: ["El área de la figura", "La diferencia entre las longitudes de los lados", "El producto de las longitudes de los lados"],
    },
    {
        pregunta: "¿Qué es un ángulo recto?",
        ayuda: "Pista: Un ángulo recto mide exactamente 90 grados.",
        respuesta: "Un ángulo que mide 90 grados",
        distractores: ["Un ángulo que mide 45 grados", "Un ángulo que mide 180 grados", "Un ángulo que mide 60 grados"],
    },
    {
        pregunta: "¿Cómo se encuentra el valor de una variable en una ecuación?",
        ayuda: "Pista: Debes resolver la ecuación para despejar la variable.",
        respuesta: "Resolviendo la ecuación para despejar la variable",
        distractores: ["Sustituyendo valores arbitrarios en la ecuación", "Multiplicando todos los términos por un número constante", "Sumando todos los términos de la ecuación"],
    },
    {
        pregunta: "¿Qué es una línea recta en geometría?",
        ayuda: "Pista: Una línea recta se extiende en una sola dirección sin curvatura.",
        respuesta: "Una línea que se extiende en una sola dirección sin curvatura",
        distractores: ["Una línea que forma ángulos", "Una línea que tiene curvas", "Una línea que cambia de dirección"],
    },
    {
        pregunta: "¿Qué es una escala en un mapa?",
        ayuda: "Pista: La escala indica la relación entre las dimensiones en el mapa y las dimensiones reales.",
        respuesta: "La relación entre las dimensiones en el mapa y las dimensiones reales",
        distractores: ["La distancia total en el mapa", "El número de colores usados en el mapa", "La dirección norte-sur en el mapa"],
    },
    {
        pregunta: "¿Cómo se resuelve un problema de porcentaje?",
        ayuda: "Pista: Usa la fórmula de porcentaje: (parte/total) x 100.",
        respuesta: "Multiplicando la parte por 100 y dividiendo por el total",
        distractores: ["Sumando la parte al total", "Multiplicando el total por el porcentaje", "Dividiendo el porcentaje por la parte"],
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
