let baseDePreguntas = [
    {
        pregunta: "¿Qué es un número primo?",
        ayuda: "Pista: Este número solo tiene dos divisores: 1 y él mismo.",
        respuesta: "Un número que solo se puede dividir por 1 y por sí mismo",
        distractores: ["Un número que se puede dividir por cualquier número", "Un número que tiene solo un divisor", "Un número que no puede ser dividido"],
    },
    {
        pregunta: "¿Cómo se llama el resultado de una multiplicación?",
        ayuda: "Pista: Es el número que se obtiene al multiplicar dos o más números.",
        respuesta: "Producto",
        distractores: ["Suma", "Cociente", "Diferencia"],
    },
    {
        pregunta: "¿Cuántos lados tiene un hexágono?",
        ayuda: "Pista: Este polígono tiene más de cinco lados pero menos de siete.",
        respuesta: "6",
        distractores: ["5", "7", "8"],
    },
    {
        pregunta: "¿Qué propiedad de la suma establece que el orden de los sumandos no altera el resultado?",
        ayuda: "Pista: Esta propiedad es válida para operaciones de suma y multiplicación.",
        respuesta: "Propiedad conmutativa",
        distractores: ["Propiedad asociativa", "Propiedad distributiva", "Propiedad de identidad"],
    },
    {
        pregunta: "¿Cuál es el valor de π (pi) aproximado?",
        ayuda: "Pista: Este número irracional es aproximadamente 3.14.",
        respuesta: "3.1416",
        distractores: ["2.718", "1.618", "4.567"],
    },
    {
        pregunta: "¿Cómo se llama el número que se encuentra en la parte superior de una fracción?",
        ayuda: "Pista: Es el número que indica cuántas partes se toman del total.",
        respuesta: "Numerador",
        distractores: ["Denominador", "Cociente", "Divisor"],
    },
    {
        pregunta: "¿Cuál es la operación inversa de la multiplicación?",
        ayuda: "Pista: Esta operación consiste en repartir o dividir un número en partes iguales.",
        respuesta: "División",
        distractores: ["Suma", "Resta", "Exponente"],
    },
    {
        pregunta: "¿Qué es un ángulo recto?",
        ayuda: "Pista: Este ángulo tiene una medida de 90 grados.",
        respuesta: "Un ángulo de 90 grados",
        distractores: ["Un ángulo de menos de 90 grados", "Un ángulo de más de 90 grados", "Un ángulo de 180 grados"],
    },
    {
        pregunta: "¿Cuál es la forma de expresar la parte de un todo en porcentajes?",
        ayuda: "Pista: Se expresa como una fracción de 100.",
        respuesta: "Porcentaje",
        distractores: ["Decimal", "Fracción", "Cociente"],
    },
    {
        pregunta: "¿Cómo se llama el punto donde se encuentran dos lados de un ángulo?",
        ayuda: "Pista: Este punto se encuentra en el centro del ángulo.",
        respuesta: "Vértice",
        distractores: ["Base", "Altura", "Hipotenusa"],
    },
    {
        pregunta: "¿Cómo se llama el proceso de buscar un número que, multiplicado por sí mismo, da un número dado?",
        ayuda: "Pista: Esta operación es lo contrario de elevar un número al cuadrado.",
        respuesta: "Raíz cuadrada",
        distractores: ["Suma", "Exponente", "Factorización"],
    },
    {
        pregunta: "¿Qué es una fracción impropia?",
        ayuda: "Pista: Es una fracción cuyo numerador es mayor o igual al denominador.",
        respuesta: "Una fracción cuyo numerador es mayor o igual al denominador",
        distractores: ["Una fracción cuyo denominador es mayor que el numerador", "Una fracción con un numerador de 1", "Una fracción con un denominador de 1"],
    },
    {
        pregunta: "¿Cuánto es el perímetro de un cuadrado si cada lado mide 4 cm?",
        ayuda: "Pista: El perímetro es la suma de todos los lados del cuadrado.",
        respuesta: "16 cm",
        distractores: ["8 cm", "12 cm", "20 cm"],
    },
    {
        pregunta: "¿Cuál es el mínimo común múltiplo de 4 y 6?",
        ayuda: "Pista: Es el número más pequeño que es divisible por 4 y 6.",
        respuesta: "12",
        distractores: ["18", "24", "6"],
    },
    {
        pregunta: "¿Cómo se llama el gráfico que se utiliza para mostrar datos en categorías mediante barras?",
        ayuda: "Pista: Este gráfico utiliza barras rectangulares para representar los datos.",
        respuesta: "Gráfico de barras",
        distractores: ["Gráfico de líneas", "Diagrama de dispersión", "Histograma"],
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
