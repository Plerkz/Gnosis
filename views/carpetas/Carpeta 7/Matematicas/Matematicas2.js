let baseDePreguntas = [
    {
        pregunta: "¿Cómo se resuelve una ecuación lineal de una variable, como 3x - 7 = 11?",
        ayuda: "Pista: Primero, debes aislar la variable 'x' moviendo los términos constantes a un lado de la ecuación.",
        respuesta: "Primero, se suma 7 a ambos lados, obteniendo 3x = 18, luego se divide entre 3, resultando en x = 6.",
        distractores: ["Multiplicando ambos lados por 3", "Restando 11 de ambos lados", "Dividiendo 7 entre 11"],
    },
    {
        pregunta: "¿Qué es un número compuesto y cómo se diferencia de un número primo?",
        ayuda: "Pista: Un número compuesto tiene más de dos divisores, mientras que un número primo solo tiene dos divisores.",
        respuesta: "Un número compuesto tiene más de dos divisores, mientras que un número primo solo tiene dos: 1 y él mismo.",
        distractores: ["Un número compuesto tiene exactamente dos divisores", "Un número compuesto es divisible solo por 1 y él mismo", "Un número compuesto tiene solo un divisor"],
    },
    {
        pregunta: "¿Cómo se calcula el área de un trapezoide con bases de 8 cm y 5 cm y una altura de 6 cm?",
        ayuda: "Pista: La fórmula para el área de un trapezoide es (base mayor + base menor) × altura / 2.",
        respuesta: "El área es (8 cm + 5 cm) × 6 cm / 2 = 39 cm².",
        distractores: ["El área es (8 cm - 5 cm) × 6 cm / 2 = 9 cm²", "El área es 8 cm × 5 cm × 6 cm", "El área es (8 cm + 5 cm) × 6 cm"],
    },
    {
        pregunta: "¿Qué es una proporción y cómo se resuelve una proporción como 3/4 = x/8?",
        ayuda: "Pista: Una proporción es una igualdad entre dos fracciones. Para resolver, usa el método de productos cruzados.",
        respuesta: "Multiplicando cruzadamente, obtenemos 3 × 8 = 4 × x, por lo que x = 6.",
        distractores: ["Multiplicando 3 y 4 por 8", "Sumando 3 y 4, y dividiendo por 8", "Restando 3 de 8 y dividiendo entre 4"],
    },
    {
        pregunta: "¿Cómo se encuentra el valor de la mediana en un conjunto de datos: 7, 12, 5, 19, 14?",
        ayuda: "Pista: Ordena los datos de menor a mayor y encuentra el valor del medio.",
        respuesta: "Ordenando los datos: 5, 7, 12, 14, 19. La mediana es el valor del medio, que es 12.",
        distractores: ["La mediana es 7", "La mediana es 14", "La mediana es 19"],
    },
    {
        pregunta: "¿Cómo se resuelve una desigualdad como 2x + 3 < 7?",
        ayuda: "Pista: Primero, resuelve para la variable 'x' moviendo los términos constantes y luego dividiendo si es necesario.",
        respuesta: "Primero, restamos 3 de ambos lados, obteniendo 2x < 4, luego dividimos entre 2, resultando en x < 2.",
        distractores: ["Sumando 3 a ambos lados, obteniendo x < 10", "Restando 7 de ambos lados, resultando en x < 4", "Multiplicando ambos lados por 2, resultando en x < 14"],
    },
    {
        pregunta: "¿Qué es un número irracional y puedes dar un ejemplo?",
        ayuda: "Pista: Los números irracionales no pueden expresarse como una fracción exacta y su expansión decimal es infinita y no repetitiva.",
        respuesta: "Un número irracional no puede expresarse como una fracción exacta y su expansión decimal es infinita y no repetitiva. Ejemplo: √2.",
        distractores: ["Un número irracional puede expresarse como una fracción exacta", "Un número irracional tiene una expansión decimal finita", "Un número irracional es el resultado de una suma de dos números enteros"],
    },
    {
        pregunta: "¿Cómo se resuelve una ecuación cuadrática como x² - 5x + 6 = 0?",
        ayuda: "Pista: Puedes resolverla factorizando la ecuación o usando la fórmula cuadrática.",
        respuesta: "Factorizando, obtenemos (x - 2)(x - 3) = 0, por lo que x = 2 o x = 3.",
        distractores: ["La ecuación tiene soluciones x = 1 y x = 6", "La ecuación tiene soluciones x = 0 y x = 5", "La ecuación tiene una única solución x = 5"],
    },
    {
        pregunta: "¿Cómo se calcula el volumen de un prisma rectangular con longitud de 4 cm, ancho de 3 cm y altura de 5 cm?",
        ayuda: "Pista: La fórmula para el volumen de un prisma rectangular es longitud × ancho × altura.",
        respuesta: "El volumen es 4 cm × 3 cm × 5 cm = 60 cm³.",
        distractores: ["El volumen es 12 cm³", "El volumen es 20 cm³", "El volumen es 45 cm³"],
    },
    {
        pregunta: "¿Qué es un ángulo complementario y cómo se determina si dos ángulos son complementarios?",
        ayuda: "Pista: Dos ángulos son complementarios si la suma de sus medidas es igual a 90 grados.",
        respuesta: "Dos ángulos son complementarios si la suma de sus medidas es 90 grados.",
        distractores: ["Dos ángulos son complementarios si la suma es 180 grados", "Dos ángulos son complementarios si la diferencia es 90 grados", "Dos ángulos son complementarios si ambos son agudos"],
    },
    {
        pregunta: "¿Qué es una progresión aritmética y cómo se encuentra el término general de una progresión con diferencia común?",
        ayuda: "Pista: En una progresión aritmética, cada término se obtiene sumando una diferencia constante al término anterior.",
        respuesta: "Una progresión aritmética es una secuencia de números en la que la diferencia entre términos consecutivos es constante. El término general se encuentra usando la fórmula: a_n = a_1 + (n - 1)d.",
        distractores: ["Es una secuencia en la que cada término es el doble del anterior", "Es una secuencia de números que siguen una forma geométrica", "Es una secuencia donde la diferencia entre términos cambia"],
    },
    {
        pregunta: "¿Cómo se convierte un porcentaje a una fracción y se simplifica?",
        ayuda: "Pista: Para convertir un porcentaje a fracción, coloca el porcentaje sobre 100 y simplifica si es necesario.",
        respuesta: "Coloca el porcentaje sobre 100 y simplifica. Por ejemplo, 25% se convierte en 25/100 y simplifica a 1/4.",
        distractores: ["Coloca el porcentaje sobre 10 y simplifica", "Coloca el porcentaje sobre 1 y simplifica", "Coloca el porcentaje sobre 50 y simplifica"],
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
