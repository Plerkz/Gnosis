let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el sujeto en la oración: 'El gato duerme en el sofá'?",
        ayuda: "Pista: Es la parte de la oración que realiza la acción.",
        respuesta: "El gato",
        distractores: ["Duerme", "En el sofá", "El sofá"]
    },
    {
        pregunta: "¿Qué tipo de palabra es 'rápido' en la oración: 'El coche es rápido'?",
        ayuda: "Pista: Describe cómo es el coche.",
        respuesta: "Adjetivo",
        distractores: ["Sustantivo", "Verbo", "Adverbio"]
    },
    {
        pregunta: "¿Qué es una oración compuesta?",
        ayuda: "Pista: Es una oración que contiene más de un sujeto y verbo.",
        respuesta: "Una oración que tiene más de una proposición",
        distractores: ["Una oración con un solo sujeto y verbo", "Una oración sin verbo", "Una oración que no tiene sentido"]
    },
    {
        pregunta: "¿Qué es un adverbio?",
        ayuda: "Pista: Es una palabra que describe el verbo.",
        respuesta: "Una palabra que modifica el verbo",
        distractores: ["Una palabra que reemplaza al sustantivo", "Una palabra que expresa emoción", "Una palabra que conecta oraciones"]
    },
    {
        pregunta: "¿Cómo se llama el lugar donde ocurre la acción en una oración?",
        ayuda: "Pista: Generalmente, es una palabra que indica dónde sucede algo.",
        respuesta: "Complemento circunstancial de lugar",
        distractores: ["Sujeto", "Predicado", "Complemento directo"]
    },
    {
        pregunta: "¿Qué tipo de texto es una receta de cocina?",
        ayuda: "Pista: Este texto da instrucciones para preparar algo.",
        respuesta: "Texto instructivo",
        distractores: ["Texto narrativo", "Texto descriptivo", "Texto argumentativo"]
    },
    {
        pregunta: "¿Qué es una metáfora?",
        ayuda: "Pista: Es una figura retórica que compara dos cosas sin usar 'como'.",
        respuesta: "Comparación implícita entre dos cosas",
        distractores: ["Una comparación explícita", "Una exageración", "Una descripción detallada"]
    },
    {
        pregunta: "¿Cuál es el objeto directo en la oración: 'Ana lee un libro'?",
        ayuda: "Pista: Es la cosa sobre la que se realiza la acción del verbo.",
        respuesta: "Un libro",
        distractores: ["Ana", "Lee", "Un libro"]
    },
    {
        pregunta: "¿Qué tipo de oración es: 'Cuando llegué a casa, mi madre estaba esperando'?",
        ayuda: "Pista: La oración principal es seguida por una oración subordinada.",
        respuesta: "Oración compleja",
        distractores: ["Oración simple", "Oración coordinada", "Oración enunciativa"]
    },
    {
        pregunta: "¿Qué es un sustantivo propio?",
        ayuda: "Pista: Es el nombre específico de una persona, lugar o cosa.",
        respuesta: "Nombre específico de algo o alguien",
        distractores: ["Nombre común de algo o alguien", "Una acción", "Una cualidad"]
    },
    {
        pregunta: "¿Cómo se llama el tipo de oración que expresa una pregunta?",
        ayuda: "Pista: Suelen terminar con un signo de interrogación.",
        respuesta: "Oración interrogativa",
        distractores: ["Oración exclamativa", "Oración enunciativa", "Oración imperativa"]
    },
    {
        pregunta: "¿Qué es una oración simple?",
        ayuda: "Pista: Tiene un solo sujeto y un solo verbo.",
        respuesta: "Una oración con un solo sujeto y verbo",
        distractores: ["Una oración con más de un sujeto", "Una oración con más de un verbo", "Una oración sin verbo"]
    },
    {
        pregunta: "¿Qué es un pronombre?",
        ayuda: "Pista: Es una palabra que sustituye al sustantivo.",
        respuesta: "Palabra que reemplaza al sustantivo",
        distractores: ["Palabra que describe el verbo", "Palabra que une oraciones", "Palabra que indica el tiempo"]
    },
    {
        pregunta: "¿Cuál es el propósito de un texto narrativo?",
        ayuda: "Pista: Este texto cuenta una historia o evento.",
        respuesta: "Contar una historia o evento",
        distractores: ["Dar instrucciones", "Describir un objeto", "Argumentar una opinión"]
    },
    {
        pregunta: "¿Qué es una oración enunciativa?",
        ayuda: "Pista: Expresa una idea o información y suele terminar con un punto.",
        respuesta: "Oración que expresa una idea o información",
        distractores: ["Oración que hace una pregunta", "Oración que da una orden", "Oración que expresa emoción"]
    },
    {
        pregunta: "¿Cómo se llama el signo de puntuación que se usa para indicar una pausa en una oración?",
        ayuda: "Pista: Se usa para separar partes de una oración.",
        respuesta: "Coma",
        distractores: ["Punto", "Signo de interrogación", "Dos puntos"]
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