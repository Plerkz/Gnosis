let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el sinónimo de la palabra 'alegre'?",
        ayuda: "Pista: Es una palabra que usas para describir un estado de felicidad o contento.",
        respuesta: "Feliz",
        distractores: ["Triste", "Enojado", "Cansado"],
    },
    {
        pregunta: "Elige la opción que contiene un verbo en presente:",
        ayuda: "Pista: Este verbo describe una acción que está ocurriendo ahora.",
        respuesta: "Corre",
        distractores: ["Corrió", "Corriendo", "Correrá"],
    },
    {
        pregunta: "¿Qué tipo de oración es la siguiente: 'Cierra la ventana'?",
        ayuda: "Pista: Este tipo de oración da una orden o solicitud.",
        respuesta: "Oración imperativa",
        distractores: ["Oración exclamativa", "Oración afirmativa", "Oración interrogativa"],
    },
    {
        pregunta: "¿Cuál es el antónimo de 'alto'?",
        ayuda: "Pista: Es una palabra que describe algo que no tiene mucha altura.",
        respuesta: "Bajo",
        distractores: ["Alto", "Elevado", "Gigante"],
    },
    {
        pregunta: "Lee la siguiente oración y elige la opción correcta para completar el espacio en blanco: 'Mi amigo siempre ____ en la biblioteca.'",
        ayuda: "Pista: Este verbo indica una acción habitual en el presente.",
        respuesta: "Lee",
        distractores: ["Leía", "Leyó", "Leerá"],
    },
    {
        pregunta: "¿Cómo se llama el signo de puntuación que se usa para finalizar una oración afirmativa?",
        ayuda: "Pista: Este signo se coloca al final de una oración que expresa un hecho o una idea.",
        respuesta: "Punto",
        distractores: ["Coma", "Signo de interrogación", "Signo de exclamación"],
    },
    {
        pregunta: "¿Qué palabra está escrita incorrectamente en la siguiente oración? 'El libro esta en la mesa.'",
        ayuda: "Pista: Busca errores ortográficos en palabras comunes.",
        respuesta: "Esta",
        distractores: ["Libro", "Mesa", "En"],
    },
    {
        pregunta: "Identifica el adjetivo en la oración: 'La casa roja es muy bonita.'",
        ayuda: "Pista: Este es el adjetivo que describe cómo es la casa.",
        respuesta: "Roja",
        distractores: ["Casa", "Es", "Bonita"],
    },
    {
        pregunta: "Elige la opción que es una oración simple:",
        ayuda: "Pista: Una oración simple tiene una sola proposición.",
        respuesta: "El gato duerme.",
        distractores: ["El gato duerme, y el perro juega.", "El gato duerme mientras el perro juega.", "El gato duerme y el perro juega en el jardín."],
    },
    {
        pregunta: "¿Cuál es el pronombre correcto para completar la oración: '____ tienes un libro.'",
        ayuda: "Pista: Este pronombre se usa cuando te diriges a una sola persona.",
        respuesta: "Tú",
        distractores: ["Él", "Nosotros", "Ellos"],
    },
    {
        pregunta: "¿Qué es un sustantivo?",
        ayuda: "Pista: Es una palabra que se usa para nombrar personas, lugares, cosas o ideas.",
        respuesta: "Una palabra que nombra personas, lugares, cosas o ideas",
        distractores: ["Una acción", "Un adjetivo", "Un pronombre"],
    },
    {
        pregunta: "Lee la oración y elige el sustantivo: 'El perro juega en el jardín.'",
        ayuda: "Pista: Busca la palabra que se refiere a una cosa o a un ser en la oración.",
        respuesta: "Perro",
        distractores: ["El", "Juega", "Jardín"],
    },
    {
        pregunta: "¿Cuál es la forma correcta de escribir el plural de 'flor'?",
        ayuda: "Pista: Para formar el plural, debes cambiar la palabra para indicar que hay más de una.",
        respuesta: "Flores",
        distractores: ["Flors", "Floros", "Florinas"],
    },
    {
        pregunta: "¿Cómo se llama el tipo de oración que expresa emoción o sorpresa?",
        ayuda: "Pista: Este tipo de oración usa signos de exclamación.",
        respuesta: "Oración exclamativa",
        distractores: ["Oración imperativa", "Oración interrogativa", "Oración afirmativa"],
    },
    {
        pregunta: "¿Cuál es el adverbio en la siguiente oración: 'La niña canta suavemente'?",
        ayuda: "Pista: Este adverbio describe cómo se realiza la acción de cantar.",
        respuesta: "Suavemente",
        distractores: ["Niña", "Canta", "La"],
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