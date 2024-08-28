let baseDePreguntas = [
    {
        pregunta: "¿Cómo se llama el lugar donde se guardan los libros en una biblioteca?",
        ayuda: "Pista: Es un lugar donde puedes leer y tomar libros prestados.",
        respuesta: "Biblioteca",
        distractores: ["Aula", "Salón", "Comedor"]
    },
    {
        pregunta: "¿Qué es un sustantivo?",
        ayuda: "Pista: Es una palabra que nombra a una persona, lugar, cosa o idea.",
        respuesta: "Una palabra que nombra a una persona, lugar, cosa o idea",
        distractores: ["Un verbo", "Un adjetivo", "Un adverbio"]
    },
    {
        pregunta: "¿Cuál es la función de un adjetivo en una oración?",
        ayuda: "Pista: El adjetivo describe o califica al sustantivo.",
        respuesta: "Describir o calificar al sustantivo",
        distractores: ["Indicar el tiempo", "Unir oraciones", "Decir cómo se hace algo"]
    },
    {
        pregunta: "¿Cómo se llama el signo de puntuación que se usa al final de una pregunta?",
        ayuda: "Pista: Este signo se usa para hacer preguntas.",
        respuesta: "Signo de interrogación",
        distractores: ["Signo de exclamación", "Coma", "Punto"]
    },
    {
        pregunta: "¿Qué es una oración?",
        ayuda: "Pista: Es un grupo de palabras que expresa una idea completa.",
        respuesta: "Un grupo de palabras que expresa una idea completa",
        distractores: ["Un solo sustantivo", "Un adjetivo", "Una sola palabra"]
    },
    {
        pregunta: "¿Qué es un verbo?",
        ayuda: "Pista: Es una palabra que indica una acción o estado.",
        respuesta: "Una palabra que indica una acción o estado",
        distractores: ["Un adjetivo", "Un sustantivo", "Una preposición"]
    },
    {
        pregunta: "¿Qué significa 'leer'?",
        ayuda: "Pista: Es el acto de comprender y pronunciar palabras en un texto.",
        respuesta: "Comprender y pronunciar palabras en un texto",
        distractores: ["Escribir palabras", "Dibujar palabras", "Escuchar palabras"]
    },
    {
        pregunta: "¿Cómo se llama el proceso de juntar letras para formar palabras?",
        ayuda: "Pista: Es el primer paso para escribir correctamente.",
        respuesta: "Ortografía",
        distractores: ["Lectura", "Gramática", "Vocabulario"]
    },
    {
        pregunta: "¿Qué es un sinónimo?",
        ayuda: "Pista: Son palabras que tienen el mismo o similar significado.",
        respuesta: "Palabras con el mismo o similar significado",
        distractores: ["Palabras con significados opuestos", "Palabras que se escriben diferente", "Palabras que riman"]
    },
    {
        pregunta: "¿Qué es una fábula?",
        ayuda: "Pista: Es una historia corta con una lección moral, a menudo con animales como personajes.",
        respuesta: "Una historia corta con una lección moral",
        distractores: ["Un poema largo", "Una noticia", "Un cuento de hadas"]
    },
    {
        pregunta: "¿Cuál es el propósito de un título en un libro?",
        ayuda: "Pista: El título da una idea de qué trata el libro.",
        respuesta: "Dar una idea de qué trata el libro",
        distractores: ["Describir el autor", "Mostrar el número de páginas", "Indicar el precio"]
    },
    {
        pregunta: "¿Qué es una sílaba?",
        ayuda: "Pista: Es una parte de una palabra que se pronuncia en una sola emisión de voz.",
        respuesta: "Una parte de una palabra que se pronuncia en una sola emisión de voz",
        distractores: ["Una letra individual", "Un grupo de palabras", "Un signo de puntuación"]
    },
    {
        pregunta: "¿Qué es una narración?",
        ayuda: "Pista: Es contar una historia o evento en un texto.",
        respuesta: "Contar una historia o evento en un texto",
        distractores: ["Hacer una lista", "Describir una imagen", "Escribir un poema"]
    },
    {
        pregunta: "¿Qué es un poema?",
        ayuda: "Pista: Es un tipo de texto que utiliza lenguaje figurado y rima para expresar sentimientos.",
        respuesta: "Un texto que usa lenguaje figurado y rima",
        distractores: ["Una lista de instrucciones", "Un tipo de ensayo", "Un artículo de periódico"]
    },
    {
        pregunta: "¿Cuál es la función de una coma en una oración?",
        ayuda: "Pista: La coma se usa para separar ideas dentro de una oración.",
        respuesta: "Separar ideas dentro de una oración",
        distractores: ["Terminar una oración", "Hacer una pregunta", "Indicar una exclamación"]
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

// Función para mostrar el cuestionario
function mostrarCuestionario() {
    cuestionarioLenguaje.forEach((item, index) => {
        console.log(`Pregunta ${index + 1}: ${item.pregunta}`);
        console.log(`Ayuda: ${item.ayuda}`);
        console.log("Opciones:");
        const opciones = [...item.distractores, item.respuesta];
        shuffle(opciones).forEach((opcion, i) => {
            console.log(`  ${i + 1}. ${opcion}`);
        });
    });
}

// Función para cambiar una pregunta
function cambiarPregunta(indice, nuevaPregunta, nuevaAyuda, nuevasRespuestas, respuestaCorrecta) {
    if (indice >= 0 && indice < cuestionarioLenguaje.length) {
        cuestionarioLenguaje[indice].pregunta = nuevaPregunta;
        cuestionarioLenguaje[indice].ayuda = nuevaAyuda;
        cuestionarioLenguaje[indice].respuesta = respuestaCorrecta;
        cuestionarioLenguaje[indice].distractores = nuevasRespuestas.filter(respuesta => respuesta !== respuestaCorrecta);
    } else {
        console.log("Índice fuera de rango");
    }
}

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