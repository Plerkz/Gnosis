let baseDePreguntas = [
    {
        pregunta: "¿Cómo se resuelve una ecuación diferencial de primer orden de la forma dy/dx = ky?",
        ayuda: "Pista: La solución general de esta ecuación diferencial es una función exponencial.",
        respuesta: "y = Ce^(kx), donde C es una constante de integración",
        distractores: ["y = C × e^(kx)", "y = Ce^(-kx)", "y = C × kx"],
    },
    {
        pregunta: "¿Cómo se encuentra el área de un polígono regular dado el número de lados y la longitud de un lado?",
        ayuda: "Pista: Usa la fórmula que involucra el apotema y el número de lados del polígono.",
        respuesta: "Área = (1/2) × Perímetro × Apotema",
        distractores: ["Área = (1/2) × Número de lados × Longitud del lado", "Área = Perímetro × Apotema", "Área = (Número de lados × Longitud del lado) / 2"],
    },
    {
        pregunta: "¿Qué es la integral definida de una función y cómo se calcula el área bajo la curva de una función f(x) entre x=a y x=b?",
        ayuda: "Pista: La integral definida de f(x) entre a y b es el área bajo la curva de f(x) en ese intervalo.",
        respuesta: "Área = ∫[a to b] f(x) dx",
        distractores: ["Área = ∫[b to a] f(x) dx", "Área = f(b) - f(a)", "Área = (f(b) + f(a)) / 2"],
    },
    {
        pregunta: "¿Cómo se determina el punto de intersección de dos rectas dadas por sus ecuaciones en forma general?",
        ayuda: "Pista: Resuelve el sistema de ecuaciones simultáneamente.",
        respuesta: "Encuentra el punto resolviendo el sistema de ecuaciones lineales simultáneamente",
        distractores: ["Multiplicando las ecuaciones y resolviendo", "Sustituyendo una ecuación en la otra", "Comparando las pendientes"],
    },
    {
        pregunta: "¿Qué es una matriz inversa y cómo se encuentra la inversa de una matriz 2x2?",
        ayuda: "Pista: La inversa de una matriz 2x2 se encuentra utilizando el determinante y los cofactores.",
        respuesta: "La inversa de una matriz 2x2 [a b; c d] es 1/(ad - bc) × [d -b; -c a]",
        distractores: ["La inversa de una matriz 2x2 [a b; c d] es 1/(ad + bc) × [d -b; -c a]", "La inversa de una matriz 2x2 [a b; c d] es [d -b; -c a] / (ad + bc)", "La inversa de una matriz 2x2 [a b; c d] es 1/(ad - bc) × [a d; b c]"],
    },
    {
        pregunta: "¿Cómo se encuentra el valor de una serie infinita geométrica dado el primer término y la razón común?",
        ayuda: "Pista: Usa la fórmula para la suma de una serie geométrica infinita con razón menor que 1.",
        respuesta: "Suma = a / (1 - r), donde a es el primer término y r es la razón común",
        distractores: ["Suma = a × (1 - r)", "Suma = a × r / (1 - r)", "Suma = a / r"],
    },
    {
        pregunta: "¿Qué es la ley de los senos y cómo se aplica para encontrar un lado en un triángulo no rectángulo?",
        ayuda: "Pista: La ley de los senos relaciona los ángulos y lados de un triángulo no rectángulo.",
        respuesta: "En un triángulo, a / sin(A) = b / sin(B) = c / sin(C)",
        distractores: ["En un triángulo, a / cos(A) = b / cos(B) = c / cos(C)", "En un triángulo, a / tan(A) = b / tan(B) = c / tan(C)", "En un triángulo, a / sin(A) = b / sin(C) = c / sin(B)"],
    },
    {
        pregunta: "¿Cómo se calcula el volumen de un sólido de revolución generado al rotar una función f(x) alrededor del eje x?",
        ayuda: "Pista: Usa la fórmula del método de los discos o anillos.",
        respuesta: "Volumen = ∫[a to b] π [f(x)]² dx",
        distractores: ["Volumen = ∫[a to b] π × f(x) dx", "Volumen = ∫[a to b] f(x)² dx", "Volumen = 2π ∫[a to b] f(x) dx"],
    },
    {
        pregunta: "¿Cómo se encuentra el centro de masa de un sistema de partículas uniformemente distribuidas a lo largo de una línea?",
        ayuda: "Pista: Usa la fórmula que promedia las posiciones de las partículas ponderadas por sus masas.",
        respuesta: "Centro de masa = (Σ mi × xi) / Σ mi, donde mi y xi son masa y posición de cada partícula",
        distractores: ["Centro de masa = Σ mi / Σ xi", "Centro de masa = Σ xi / Σ mi", "Centro de masa = (Σ xi) / (Σ mi)"],
    },
    {
        pregunta: "¿Cómo se resuelve un problema de optimización usando derivadas?",
        ayuda: "Pista: Encuentra los puntos críticos de una función derivada y evalúa el valor máximo o mínimo.",
        respuesta: "Resuelve la derivada de la función para encontrar los puntos críticos y evalúa la función en estos puntos",
        distractores: ["Encuentra el valor medio de la función en un intervalo", "Evalúa la función en sus puntos de inflexión", "Multiplica la función por una constante para encontrar el óptimo"],
    },
    {
        pregunta: "¿Cómo se encuentra el área de una superficie parametrizada en coordenadas polares?",
        ayuda: "Pista: Usa la fórmula para el área en coordenadas polares.",
        respuesta: "Área = ∫[α to β] (1/2) × r² dθ",
        distractores: ["Área = ∫[α to β] r dθ", "Área = ∫[α to β] r² dθ", "Área = (1/2) × ∫[α to β] r dθ"],
    },
    {
        pregunta: "¿Qué es el teorema de Taylor y cómo se utiliza para aproximar funciones?",
        ayuda: "Pista: El teorema de Taylor usa polinomios para aproximar funciones cerca de un punto.",
        respuesta: "El teorema de Taylor aproxima una función f(x) alrededor de x=a usando la serie f(x) = f(a) + f'(a)(x - a) + f''(a)(x - a)² / 2! + ...",
        distractores: ["El teorema de Taylor usa solo términos lineales para aproximar la función", "El teorema de Taylor se basa en la integral de la función para aproximar", "El teorema de Taylor utiliza solo valores iniciales de la función para aproximar"],
    },
    {
        pregunta: "¿Cómo se encuentra el rango de una función a partir de su expresión algebraica?",
        ayuda: "Pista: Analiza los valores que puede tomar la función y sus límites.",
        respuesta: "Encuentra el rango evaluando los valores posibles de la función y los límites de la función en su dominio",
        distractores: ["Encuentra el rango usando solo la derivada de la función", "Encuentra el rango usando la integral de la función", "Encuentra el rango solo evaluando la función en puntos críticos"],
    },
    {
        pregunta: "¿Cómo se aplica la fórmula de Bayes para actualizar probabilidades en función de nueva información?",
        ayuda: "Pista: Usa la fórmula P(A|B) = P(B|A) × P(A) / P(B) para actualizar la probabilidad.",
        respuesta: "P(A|B) = P(B|A) × P(A) / P(B), donde A y B son eventos",
        distractores: ["P(A|B) = P(A) × P(B|A) / P(B)", "P(A|B) = P(A) × P(B) / P(B|A)", "P(A|B) = P(B) / P(A)"],
    },
    {
        pregunta: "¿Cómo se resuelve una ecuación exponencial de la forma a^x = b usando logaritmos?",
        ayuda: "Pista: Usa el logaritmo para resolver la variable en el exponente.",
        respuesta: "x = logₐ(b), donde logₐ es el logaritmo en base a",
        distractores: ["x = log(b) / log(a)", "x = log(a) / log(b)", "x = b / log(a)"],
    },
    {
        pregunta: "¿Cómo se encuentra el valor de una integral impropia con un límite infinito?",
        ayuda: "Pista: Evalúa la integral como el límite de una integral definida cuando uno de los límites tiende a infinito.",
        respuesta: "Evalúa la integral como el límite de ∫[a to t] f(x) dx cuando t → ∞",
        distractores: ["Evalúa la integral como el límite de f(x) cuando x → ∞", "Evalúa la integral como ∫[a to ∞] f(x) dx directamente", "Evalúa la integral como el límite de f(x) dx cuando x → a"],
    },
    {
        pregunta: "¿Cómo se calcula el determinante de una matriz 3x3 utilizando la regla de Sarrus?",
        ayuda: "Pista: Usa la regla de Sarrus que involucra sumar y restar productos de elementos de la matriz.",
        respuesta: "El determinante se calcula sumando los productos de las diagonales principales y restando los productos de las diagonales secundarias",
        distractores: ["El determinante se calcula sumando los productos de las filas y columnas", "El determinante se calcula como el producto de los elementos diagonales principales", "El determinante se calcula sumando los elementos de la matriz"],
    },
    {
        pregunta: "¿Qué es un espacio vectorial y cuáles son sus axiomas básicos?",
        ayuda: "Pista: Un espacio vectorial es un conjunto de vectores con operaciones definidas de suma y multiplicación por escalares.",
        respuesta: "Un espacio vectorial es un conjunto de vectores con operaciones de suma y multiplicación por escalares que satisfacen axiomas como conmutatividad, asociatividad y existencia de un vector cero",
        distractores: ["Un espacio vectorial es un conjunto de números con operaciones de suma y multiplicación", "Un espacio vectorial es un conjunto de funciones con operaciones de suma y multiplicación por escalares", "Un espacio vectorial es un conjunto de matrices con operaciones de suma y multiplicación por escalares"],
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
