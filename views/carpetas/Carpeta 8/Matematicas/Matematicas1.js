let baseDePreguntas = [
    {
        pregunta: "¿Cómo se resuelve una ecuación cuadrática utilizando la fórmula general?",
        ayuda: "Pista: La fórmula general para una ecuación cuadrática ax² + bx + c = 0 es x = (-b ± √(b² - 4ac)) / 2a.",
        respuesta: "x = (-b ± √(b² - 4ac)) / 2a",
        distractores: ["x = (-b ± √(b² + 4ac)) / 2a", "x = (b ± √(a² - 4bc)) / 2a", "x = (-b ± √(b² - 4ac)) / a"],
    },
    {
        pregunta: "¿Cómo se determina el área de un trapecio?",
        ayuda: "Pista: Usa la fórmula que involucra las bases y la altura del trapecio.",
        respuesta: "Área = (Base mayor + Base menor) × altura / 2",
        distractores: ["Área = Base mayor × Base menor × altura", "Área = (Base mayor - Base menor) × altura / 2", "Área = Base mayor × altura / 2"],
    },
    {
        pregunta: "¿Cómo se calcula el logaritmo de un número en base 10?",
        ayuda: "Pista: El logaritmo en base 10 de un número es el exponente al que se debe elevar 10 para obtener ese número.",
        respuesta: "Logaritmo en base 10 de un número n es log₁₀(n), donde 10^x = n",
        distractores: ["Logaritmo en base 10 es la raíz cuadrada de n", "Logaritmo en base 10 es el número que se obtiene sumando 10 al número n", "Logaritmo en base 10 es el número n dividido por 10"],
    },
    {
        pregunta: "¿Cómo se resuelve un sistema de ecuaciones lineales usando el método de sustitución?",
        ayuda: "Pista: Sustituye una variable de una ecuación en la otra para resolver el sistema.",
        respuesta: "Resuelve una ecuación para una variable y sustituye esa expresión en la otra ecuación.",
        distractores: ["Sustituye una ecuación en la otra y resuelve por eliminación", "Resuelve ambas ecuaciones por separado y compara los resultados", "Multiplica las ecuaciones y luego suma o resta"],
    },
    {
        pregunta: "¿Qué es una función inversa y cómo se encuentra a partir de una función dada?",
        ayuda: "Pista: La función inversa intercambia los valores de x e y y resuelve para y.",
        respuesta: "La función inversa intercambia x e y y resuelve para y; si f(x) = y, entonces f⁻¹(y) = x",
        distractores: ["La función inversa mantiene los valores de x e y igual y resuelve para x", "La función inversa es la derivada de la función original", "La función inversa es la misma función, pero con coeficientes opuestos"],
    },
    {
        pregunta: "¿Cómo se calcula la derivada de una función polinómica?",
        ayuda: "Pista: Usa la regla de potencia para derivar cada término del polinomio.",
        respuesta: "Para la función f(x) = axⁿ, la derivada es f'(x) = a × n × x^(n-1)",
        distractores: ["Para la función f(x) = axⁿ, la derivada es f'(x) = a × xⁿ", "Para la función f(x) = axⁿ, la derivada es f'(x) = a × n × xⁿ", "Para la función f(x) = axⁿ, la derivada es f'(x) = a × (n + 1) × xⁿ"],
    },
    {
        pregunta: "¿Qué es un polinomio y cómo se clasifica según su grado y número de términos?",
        ayuda: "Pista: Los polinomios se clasifican por el mayor exponente de la variable (grado) y por el número de términos (monomio, binomio, trinomio).",
        respuesta: "Un polinomio es una expresión algebraica con varios términos; se clasifica según el grado (mayor exponente) y el número de términos (monomio, binomio, trinomio)",
        distractores: ["Un polinomio es una suma de fracciones; se clasifica por el denominador y numerador", "Un polinomio es una función que solo tiene dos términos", "Un polinomio es una expresión con operaciones básicas y se clasifica por el número de operaciones"],
    },
    {
        pregunta: "¿Cómo se encuentra la pendiente de una recta dada por la ecuación general Ax + By + C = 0?",
        ayuda: "Pista: Reescribe la ecuación en forma pendiente-intersección (y = mx + b) para encontrar la pendiente.",
        respuesta: "La pendiente m se encuentra como -A / B cuando la ecuación está en la forma y = -A/B × x - C/B",
        distractores: ["La pendiente m se encuentra como A / B", "La pendiente m se encuentra como B / A", "La pendiente m se encuentra como -C / A"],
    },
    {
        pregunta: "¿Qué es una sucesión aritmética y cómo se determina la fórmula del término general?",
        ayuda: "Pista: En una sucesión aritmética, la diferencia entre términos consecutivos es constante.",
        respuesta: "Una sucesión aritmética tiene una diferencia constante entre términos consecutivos; el término general es aₙ = a₁ + (n - 1) × d",
        distractores: ["Una sucesión aritmética tiene una diferencia variable entre términos; el término general es aₙ = a₁ × (n - 1) × d", "Una sucesión aritmética tiene una razón constante; el término general es aₙ = a₁ + d × n", "Una sucesión aritmética tiene una razón variable entre términos; el término general es aₙ = a₁ × d"],
    },
    {
        pregunta: "¿Cómo se determina la ecuación de una parábola dada por su vértice y foco?",
        ayuda: "Pista: Usa la fórmula estándar para una parábola con vértice (h, k) y foco (h, k + p).",
        respuesta: "La ecuación de una parábola con vértice (h, k) y foco (h, k + p) es (x - h)² = 4p(y - k)",
        distractores: ["La ecuación de una parábola con vértice (h, k) y foco (h, k + p) es (x - h)² = 4p(x - k)", "La ecuación de una parábola con vértice (h, k) y foco (h, k + p) es (y - k)² = 4p(x - h)", "La ecuación de una parábola con vértice (h, k) y foco (h, k + p) es (x - h)² = 2p(y - k)"],
    },
    {
        pregunta: "¿Qué es el determinante de una matriz 2x2 y cómo se calcula?",
        ayuda: "Pista: El determinante de una matriz 2x2 se calcula como ad - bc, donde la matriz es [a b; c d].",
        respuesta: "El determinante de una matriz 2x2 [a b; c d] es ad - bc",
        distractores: ["El determinante de una matriz 2x2 [a b; c d] es a + d - b - c", "El determinante de una matriz 2x2 [a b; c d] es a × d + b × c", "El determinante de una matriz 2x2 [a b; c d] es a × d - b × c"],
    },
    {
        pregunta: "¿Cómo se aplica la regla de Cramer para resolver un sistema de ecuaciones lineales?",
        ayuda: "Pista: La regla de Cramer usa determinantes de matrices para encontrar los valores de las variables.",
        respuesta: "La regla de Cramer usa determinantes para resolver un sistema de ecuaciones; cada variable se encuentra dividiendo el determinante de la matriz de coeficientes reemplazado por la columna de constantes entre el determinante de la matriz de coeficientes.",
        distractores: ["La regla de Cramer usa sustitución para resolver el sistema", "La regla de Cramer usa matrices inversas para resolver el sistema", "La regla de Cramer usa la suma de coeficientes para resolver el sistema"],
    },
    {
        pregunta: "¿Qué es una función racional y cómo se representa gráficamente?",
        ayuda: "Pista: Una función racional es el cociente de dos polinomios y su gráfico puede tener asíntotas.",
        respuesta: "Una función racional es de la forma f(x) = P(x) / Q(x), donde P(x) y Q(x) son polinomios; su gráfico puede mostrar asíntotas verticales y horizontales",
        distractores: ["Una función racional es el producto de dos polinomios; su gráfico es una parábola", "Una función racional es la suma de dos polinomios; su gráfico es una línea recta", "Una función racional es el cociente de dos números; su gráfico es una función constante"],
    },
    {
        pregunta: "¿Cómo se encuentra el área de un círculo dado su radio?",
        ayuda: "Pista: Usa la fórmula que involucra el cuadrado del radio y el número pi.",
        respuesta: "Área = π × radio²",
        distractores: ["Área = 2 × π × radio", "Área = π × diámetro", "Área = π × radio"],
    },
    {
        pregunta: "¿Qué es la probabilidad condicional y cómo se calcula?",
        ayuda: "Pista: La probabilidad condicional es la probabilidad de un evento dado que otro evento ha ocurrido.",
        respuesta: "La probabilidad condicional P(A|B) se calcula como P(A y B) / P(B), donde A y B son eventos",
        distractores: ["La probabilidad condicional es P(A) + P(B)", "La probabilidad condicional es P(A) × P(B)", "La probabilidad condicional es P(A) / P(B)"],
    },
    {
        pregunta: "¿Cómo se determina la ecuación de una recta perpendicular a otra dada una ecuación en forma pendiente-intersección?",
        ayuda: "Pista: La pendiente de la recta perpendicular es el negativo del recíproco de la pendiente original.",
        respuesta: "La pendiente de la recta perpendicular es -1/m, donde m es la pendiente de la recta original",
        distractores: ["La pendiente de la recta perpendicular es m + 1", "La pendiente de la recta perpendicular es 1/m", "La pendiente de la recta perpendicular es -m"],
    },
    {
        pregunta: "¿Qué es un número complejo y cómo se representa en forma estándar?",
        ayuda: "Pista: Un número complejo tiene una parte real y una parte imaginaria.",
        respuesta: "Un número complejo se representa como a + bi, donde a es la parte real y b es la parte imaginaria",
        distractores: ["Un número complejo se representa como a - bi, donde a es la parte real y b es la parte imaginaria", "Un número complejo se representa como a × b, donde a y b son partes reales", "Un número complejo se representa como a / b, donde a y b son partes imaginarias"],
    }
]
;

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
