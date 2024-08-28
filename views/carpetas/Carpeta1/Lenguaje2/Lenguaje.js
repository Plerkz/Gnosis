let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la primera letra del alfabeto?",
        ayuda: "Pista: Es la primera letra que aparece cuando se canta el alfabeto.",
        respuesta: "A",
        distractores: ["B", "C", "D"]
    },
    {
        pregunta: "¿Cómo se llama el lugar donde viven los pájaros?",
        ayuda: "Pista: Este lugar está en los árboles y es donde los pájaros hacen sus nidos.",
        respuesta: "Nido",
        distractores: ["Cueva", "Casa", "Agujero"]
    },
    {
        pregunta: "¿Qué palabra usamos para saludar a alguien?",
        ayuda: "Pista: Esta palabra se usa cuando conocemos a alguien por primera vez o llegamos a un lugar.",
        respuesta: "Hola",
        distractores: ["Adiós", "Gracias", "Perdón"]
    },
    {
        pregunta: "¿Cuál es el nombre del libro que usamos para aprender a leer?",
        ayuda: "Pista: Este libro tiene muchas palabras y es importante en la escuela.",
        respuesta: "Libro de lectura",
        distractores: ["Cuaderno", "Diccionario", "Revista"]
    },
    {
        pregunta: "¿Cómo se llama la acción de contar una historia?",
        ayuda: "Pista: Esta acción se hace cuando hablamos de algo que pasó o inventamos una historia.",
        respuesta: "Narrar",
        distractores: ["Leer", "Escribir", "Dibujar"]
    },
    {
        pregunta: "¿Qué tipo de palabra es 'feliz'?",
        ayuda: "Pista: Esta palabra describe cómo nos sentimos.",
        respuesta: "Adjetivo",
        distractores: ["Sustantivo", "Verbo", "Artículo"]
    },
    {
        pregunta: "¿Qué significa la palabra 'mamá'?",
        ayuda: "Pista: Es el nombre que usamos para referirnos a nuestra madre.",
        respuesta: "Madre",
        distractores: ["Hermana", "Abuela", "Tía"]
    },
    {
        pregunta: "¿Cuál es el nombre del sonido que hace un perro?",
        ayuda: "Pista: Este sonido es conocido como 'guau'.",
        respuesta: "Guau",
        distractores: ["Miau", "Muu", "Oink"]
    },
    {
        pregunta: "¿Qué es un verbo?",
        ayuda: "Pista: Es una palabra que describe una acción, como 'correr' o 'saltar'.",
        respuesta: "Una palabra que describe una acción",
        distractores: ["Un nombre de cosa", "Una palabra que describe un lugar", "Una palabra que describe un sentimiento"]
    },
    {
        pregunta: "¿Cuál es el nombre de la letra que viene después de la B?",
        ayuda: "Pista: Esta letra sigue a la B en el alfabeto.",
        respuesta: "C",
        distractores: ["A", "D", "E"]
    },
    {
        pregunta: "¿Qué palabra usamos para decir adiós?",
        ayuda: "Pista: Esta palabra se usa cuando nos vamos de un lugar.",
        respuesta: "Adiós",
        distractores: ["Hola", "Gracias", "Por favor"]
    },
    {
        pregunta: "¿Cómo se llama el dibujo que representa una historia en los cómics?",
        ayuda: "Pista: Estos dibujos cuentan historias y se ven en libros especiales.",
        respuesta: "Viñetas",
        distractores: ["Páginas", "Caricaturas", "Fotos"]
    },
    {
        pregunta: "¿Qué tipo de palabra es 'rápido'?",
        ayuda: "Pista: Esta palabra describe la velocidad de algo.",
        respuesta: "Adjetivo",
        distractores: ["Sustantivo", "Verbo", "Artículo"]
    },
    {
        pregunta: "¿Cómo se llama la acción de escribir en una hoja?",
        ayuda: "Pista: Usamos lápiz o bolígrafo para hacer esto.",
        respuesta: "Escribir",
        distractores: ["Leer", "Dibujar", "Pintar"]
    },
    {
        pregunta: "¿Qué es un sustantivo?",
        ayuda: "Pista: Es una palabra que nombra a una persona, lugar, o cosa.",
        respuesta: "Una palabra que nombra una persona, lugar o cosa",
        distractores: ["Una palabra que describe una acción", "Una palabra que describe un sentimiento", "Una palabra que describe una acción"]
    },
    {
        pregunta: "¿Cuál es el nombre del objeto con el que dibujamos en una hoja?",
        ayuda: "Pista: Este objeto tiene una punta y viene en varios colores.",
        respuesta: "Lápiz",
        distractores: ["Bolígrafo", "Cepillo", "Regla"]
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