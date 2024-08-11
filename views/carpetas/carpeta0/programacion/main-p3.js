let baseDePreguntas = [
    {
        pregunta: "¿Qué es HTML?",
        ayuda: "Pista: Es un lenguaje de marcado utilizado para crear páginas web.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Lenguaje de marcado",
        distractores: ["Lenguaje de programación", "Lenguaje de scripting", "Lenguaje de consulta"],
    },
    {
        pregunta: "¿Cuál de los siguientes es un lenguaje de programación interpretado?",
        ayuda: "Pista: Este lenguaje no necesita ser compilado antes de ejecutar el código.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Python",
        distractores: ["C++", "Java", "C#"],
    },
    {
        pregunta: "¿Qué es CSS?",
        ayuda: "Pista: Es un lenguaje utilizado para definir el estilo y la presentación de una página web.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Hojas de estilo en cascada",
        distractores: ["Código de programación", "Hoja de cálculo", "Lenguaje de consultas"],
    },
    {
        pregunta: "¿Cuál es la sintaxis correcta para comentar en JavaScript?",
        ayuda: "Pista: Este tipo de comentario se utiliza para comentar una sola línea de código.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "// Este es un comentario",
        distractores: ["/* Este es un comentario */", "# Este es un comentario", "comentario = Este es un comentario"],
    },
    {
        pregunta: "¿Qué es un IDE en programación?",
        ayuda: "Pista: Es un entorno de desarrollo que proporciona herramientas para escribir, depurar y ejecutar código de programación.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Entorno de desarrollo integrado",
        distractores: ["Interfaz de diseño enriquecido", "Interfaz de datos estructurados", "Entorno de diseño interactivo"],
    },
    {
        pregunta: "¿Cuál es el lenguaje de programación utilizado para crear páginas interactivas en un sitio web?",
        ayuda: "Pista: Este lenguaje se utiliza para agregar interactividad y dinamismo a las páginas web.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "JavaScript",
        distractores: ["PHP", "Ruby", "Perl"],
    },
    {
        pregunta: "¿Qué es un algoritmo?",
        ayuda: "Pista: Es un conjunto de pasos o instrucciones para resolver un problema o realizar una tarea en programación.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Conjunto de pasos para resolver un problema",
        distractores: ["Un error en el código", "Un lenguaje de programación", "Una función matemática"],
    },
    {
        pregunta: "¿Qué es la programación orientada a objetos?",
        ayuda: "Pista: Es un paradigma de programación que se centra en la organización del código en objetos que contienen datos y funciones relacionadas.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Paradigma de programación",
        distractores: ["Tipo de dato en programación", "Un lenguaje de programación", "Un framework"],
    },
    {
        pregunta: "¿Cuál es el resultado de la siguiente operación matemática en JavaScript? 3 + 5 * 2",
        ayuda: "Pista: Recuerda el orden de las operaciones matemáticas (PEMDAS).",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "13",
        distractores: ["16", "11", "26"],
    },
    {
        pregunta: "¿Cuál es el objetivo principal de la depuración en programación?",
        ayuda: "Pista: Es el proceso de identificar y corregir errores en el código para que funcione correctamente.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Identificar y corregir errores",
        distractores: ["Optimizar el código", "Agregar nuevas funciones", "Eliminar funciones obsoletas"],
    },
    {
        pregunta: "¿Cuál de los siguientes es un tipo de dato en JavaScript?",
        ayuda: "Pista: Este tipo de dato se utiliza para representar números enteros y decimales en JavaScript.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Number",
        distractores: ["Text", "Boolean", "Array"],
    },
    {
        pregunta: "¿Qué es un operador lógico en programación?",
        ayuda: "Pista: Es un tipo de operador utilizado para evaluar condiciones y expresiones lógicas en el código de programación.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Operador para evaluar condiciones lógicas",
        distractores: ["Operador aritmético", "Operador de asignación", "Operador de comparación"],
    },
    {
        pregunta: "¿Qué es un bucle 'while'?",
        ayuda: "Pista: Es una estructura de control que repite un bloque de código mientras se cumple una condición específica.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Una estructura de control",
        distractores: ["Un operador lógico", "Un tipo de dato", "Una variable"],
    },
    {
        pregunta: "¿Qué es un evento en JavaScript?",
        ayuda: "Pista: Es una acción que ocurre en la página web y que puede ser detectada y manejada por el código JavaScript.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Una acción que ocurre en la página web",
        distractores: ["Un tipo de dato", "Un operador matemático", "Una estructura de control"],
    },
    {
        pregunta: "¿Qué es un objeto en programación?",
        ayuda: "Pista: Es una estructura de datos que puede contener propiedades y métodos para representar algo en el mundo real dentro del código de programación.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        respuesta: "Una estructura de datos con propiedades y métodos",
        distractores: ["Un tipo de dato", "Una variable", "Una función"],
    },
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