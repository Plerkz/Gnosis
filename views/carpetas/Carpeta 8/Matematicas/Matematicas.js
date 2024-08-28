let baseDePreguntas = [
    {
        pregunta: "¿Cómo se calcula el área de un triángulo?",
        ayuda: "Pista: Usa la fórmula que involucra la base y la altura del triángulo.",
        respuesta: "Área = (base × altura) / 2",
        distractores: ["Área = base × altura", "Área = base + altura", "Área = (base + altura) / 2"],
    },
    {
        pregunta: "¿Cuál es la fórmula para calcular el volumen de un cubo?",
        ayuda: "Pista: Usa la longitud de una arista del cubo para calcular el volumen.",
        respuesta: "Volumen = lado³",
        distractores: ["Volumen = lado × 6", "Volumen = 6 × lado²", "Volumen = lado × lado × lado"],
    },
    {
        pregunta: "¿Qué es una proporción y cómo se resuelve?",
        ayuda: "Pista: Una proporción es una igualdad entre dos razones o fracciones.",
        respuesta: "Una proporción es una igualdad entre dos razones; se resuelve cruzando multiplicando y comparando productos.",
        distractores: ["Una proporción es la suma de dos fracciones", "Una proporción es una resta entre dos números", "Una proporción es una multiplicación entre dos números"],
    },
    {
        pregunta: "¿Cómo se resuelve una ecuación lineal de la forma 3x + 5 = 20?",
        ayuda: "Pista: Primero, despeja la variable x restando 5 y luego divide por 3.",
        respuesta: "x = 5",
        distractores: ["x = 15", "x = 10", "x = 25"],
    },
    {
        pregunta: "¿Qué es el teorema de Pitágoras y cómo se aplica?",
        ayuda: "Pista: El teorema se usa para encontrar la longitud de un lado en un triángulo rectángulo.",
        respuesta: "El teorema de Pitágoras establece que en un triángulo rectángulo, la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa (a² + b² = c²).",
        distractores: ["La suma de los ángulos de un triángulo es 180 grados", "El área de un círculo es π × radio²", "La longitud de la hipotenusa es la suma de los catetos"],
    },
    {
        pregunta: "¿Cómo se calcula la media aritmética de un conjunto de números?",
        ayuda: "Pista: Suma todos los números y divide por la cantidad de números.",
        respuesta: "Media = (suma de todos los números) / (cantidad de números)",
        distractores: ["Media = suma de todos los números", "Media = producto de todos los números", "Media = diferencia entre el número mayor y el menor"],
    },
    {
        pregunta: "¿Qué es un ángulo obtuso?",
        ayuda: "Pista: Es un ángulo mayor de 90 grados pero menor de 180 grados.",
        respuesta: "Un ángulo mayor de 90 grados pero menor de 180 grados",
        distractores: ["Un ángulo menor de 90 grados", "Un ángulo mayor de 180 grados", "Un ángulo igual a 90 grados"],
    },
    {
        pregunta: "¿Cómo se encuentra el perímetro de un rectángulo?",
        ayuda: "Pista: Usa la fórmula que involucra la suma de todos los lados del rectángulo.",
        respuesta: "Perímetro = 2 × (base + altura)",
        distractores: ["Perímetro = base × altura", "Perímetro = 2 × base × altura", "Perímetro = base + altura"],
    },
    {
        pregunta: "¿Qué es una fracción irreducible?",
        ayuda: "Pista: Una fracción irreducible no puede simplificarse más porque el numerador y el denominador son primos entre sí.",
        respuesta: "Una fracción en la que el numerador y el denominador no tienen otros factores comunes que 1",
        distractores: ["Una fracción en la que el numerador es mayor que el denominador", "Una fracción que tiene denominador 1", "Una fracción que puede ser simplificada más"],
    },
    {
        pregunta: "¿Cómo se resuelve una ecuación cuadrática de la forma x² - 5x + 6 = 0?",
        ayuda: "Pista: Usa el método de factorización para encontrar los valores de x.",
        respuesta: "x = 2 y x = 3",
        distractores: ["x = 1 y x = 6", "x = -2 y x = -3", "x = 0 y x = 6"],
    },
    {
        pregunta: "¿Qué es un número primo y cuál es el primer número primo?",
        ayuda: "Pista: Un número primo solo es divisible por 1 y por sí mismo.",
        respuesta: "Un número que solo es divisible por 1 y por sí mismo; el primer número primo es 2",
        distractores: ["Un número que es divisible por 2; el primer número primo es 1", "Un número que es divisible por 1, 2 y 3; el primer número primo es 3", "Un número que tiene más de dos divisores; el primer número primo es 4"],
    },
    {
        pregunta: "¿Qué es una función lineal y cómo se representa gráficamente?",
        ayuda: "Pista: Una función lineal tiene la forma y = mx + b y su gráfico es una línea recta.",
        respuesta: "Una función lineal es una función de la forma y = mx + b, y se representa gráficamente como una línea recta",
        distractores: ["Una función que tiene una parábola como gráfico", "Una función con exponente cuadrático", "Una función que se representa con una curva"],
    },
    {
        pregunta: "¿Cómo se calcula el área de un círculo?",
        ayuda: "Pista: Usa la fórmula que involucra el radio del círculo.",
        respuesta: "Área = π × radio²",
        distractores: ["Área = 2 × π × radio", "Área = π × diámetro²", "Área = 2 × π × radio²"],
    },
    {
        pregunta: "¿Qué es una progresión aritmética y cómo se calcula su término general?",
        ayuda: "Pista: En una progresión aritmética, la diferencia entre términos consecutivos es constante.",
        respuesta: "Una sucesión de números en la que la diferencia entre términos consecutivos es constante; el término general se calcula como aₙ = a₁ + (n - 1) × d",
        distractores: ["Una sucesión en la que la razón entre términos consecutivos es constante; el término general se calcula como aₙ = a₁ × r^(n-1)", "Una sucesión en la que la diferencia entre términos consecutivos es variable; el término general es aₙ = a₁ + n", "Una sucesión en la que la suma de los términos es constante; el término general es aₙ = n + 1"],
    },
    {
        pregunta: "¿Cómo se realiza la división de polinomios usando el método de la división larga?",
        ayuda: "Pista: Divide cada término del dividendo por el primer término del divisor y resta el resultado del dividendo.",
        respuesta: "Divide el dividendo por el divisor, restando el resultado en cada paso, y repite hasta que obtengas el residuo",
        distractores: ["Multiplica el dividendo por el divisor y resta", "Suma los términos del dividendo y del divisor", "Repite la división sin restar en cada paso"],
    },
    {
        pregunta: "¿Qué es una función exponencial y cómo se representa gráficamente?",
        ayuda: "Pista: Una función exponencial tiene la forma y = a × b^x y su gráfico crece rápidamente.",
        respuesta: "Una función exponencial tiene la forma y = a × b^x, y su gráfico muestra un crecimiento rápido",
        distractores: ["Una función que tiene la forma y = a + b × x y su gráfico es lineal", "Una función con la forma y = a / b^x y su gráfico es una línea recta", "Una función que tiene la forma y = a × x^b y su gráfico es una parábola"],
    },
    {
        pregunta: "¿Qué es el teorema de la semejanza en triángulos y cómo se aplica?",
        ayuda: "Pista: Los triángulos son semejantes si tienen los mismos ángulos y sus lados correspondientes están en proporción.",
        respuesta: "El teorema de la semejanza establece que dos triángulos son semejantes si tienen los mismos ángulos y sus lados correspondientes están en proporción",
        distractores: ["El teorema de la semejanza establece que dos triángulos son iguales si tienen los mismos lados", "El teorema de la semejanza establece que dos triángulos tienen los mismos ángulos pero no necesariamente los mismos lados", "El teorema de la semejanza establece que dos triángulos son semejantes si tienen la misma área"],
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
