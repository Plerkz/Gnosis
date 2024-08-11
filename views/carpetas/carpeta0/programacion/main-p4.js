let baseDePreguntas = [
    {
        pregunta: "¿Qué es una excepción en programación?",
        ayuda: "Pista: Es un evento inesperado que ocurre durante la ejecución del programa y que puede ser manejado por el código.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Evento inesperado durante la ejecución del programa",
        distractores: ["Un tipo de dato", "Un operador lógico", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la complejidad temporal de un algoritmo?",
        ayuda: "Pista: Es una medida que indica cómo aumenta el tiempo de ejecución de un algoritmo a medida que crece el tamaño del problema.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Medida del tiempo de ejecución de un algoritmo",
        distractores: ["Un tipo de dato", "Un tipo de función", "Un operador matemático"],
    },
    {
        pregunta: "¿Cuál es la diferencia entre una lista y una tupla en Python?",
        ayuda: "Pista: Una de estas estructuras es mutable, lo que significa que se puede modificar después de su creación, mientras que la otra es inmutable.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Una es mutable y la otra es inmutable",
        distractores: ["Una es una estructura de datos y la otra es un tipo de función", "Una es un tipo de dato y la otra es una variable", "Ambas son iguales"],
    },
    {
        pregunta: "¿Qué es la recursividad de cola?",
        ayuda: "Pista: Es un tipo especial de recursividad donde la última operación de una función recursiva es una llamada a sí misma, lo que permite una optimización de memoria.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Tipo especial de recursividad con optimización de memoria",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la notación big-O en análisis de algoritmos?",
        ayuda: "Pista: Es una notación que se utiliza para describir la eficiencia o la complejidad de un algoritmo en términos de la entrada del problema.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Notación para describir la eficiencia de un algoritmo",
        distractores: ["Un tipo de dato", "Un operador lógico", "Un tipo de función"],
    },
    {
        pregunta: "¿Cuál de las siguientes estructuras de datos utiliza el principio 'último en entrar, primero en salir'?",
        ayuda: "Pista: Esta estructura de datos se asemeja a una pila de platos, donde el último plato apilado es el primero en ser retirado.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Pila",
        distractores: ["Cola", "Lista enlazada", "Árbol binario"],
    },
    {
        pregunta: "¿Qué es la resolución de ámbito (scope) en programación?",
        ayuda: "Pista: Es el alcance o la visibilidad de una variable en el código, lo que determina en qué partes del programa puede ser accesible y utilizada.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Alcance o visibilidad de una variable en el código",
        distractores: ["Un tipo de dato", "Un operador lógico", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la herencia múltiple en programación orientada a objetos?",
        ayuda: "Pista: Es un concepto que permite que una clase herede atributos y métodos de múltiples clases, formando una jerarquía de herencia compleja.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Concepto de clase heredando de múltiples clases",
        distractores: ["Un tipo de dato", "Un operador lógico", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es una función recursiva en programación?",
        ayuda: "Pista: Es una función que se llama a sí misma para resolver un problema más pequeño hasta que se alcanza un caso base, luego se combinan las soluciones para obtener el resultado final.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Función que se llama a sí misma para resolver un problema",
        distractores: ["Un tipo de dato", "Una estructura de control", "Una función matemática"],
    },
    {
        pregunta: "¿Qué es una clase en programación orientada a objetos?",
        ayuda: "Pista: Es una plantilla o un plano para crear objetos, que define los atributos y métodos que tendrán los objetos de esa clase.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Plantilla para crear objetos con atributos y métodos",
        distractores: ["Un tipo de dato", "Un operador lógico", "Una estructura de control"],
    },
    {
        pregunta: "¿Qué es un método abstracto en programación orientada a objetos?",
        ayuda: "Pista: Es un método que solo está declarado en una clase pero no tiene una implementación concreta en esa clase, y debe ser implementado en las subclases que heredan de ella.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Método sin implementación concreta que debe ser implementado en las subclases",
        distractores: ["Un tipo de dato", "Un operador lógico", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la programación concurrente?",
        ayuda: "Pista: Es un paradigma de programación que se centra en el diseño y desarrollo de programas que pueden ejecutar múltiples tareas de forma simultánea y eficiente.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Paradigma de programación para ejecutar múltiples tareas simultáneamente",
        distractores: ["Un tipo de dato", "Un operador lógico", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la programación paralela?",
        ayuda: "Pista: Es un paradigma de programación que se centra en el diseño y desarrollo de programas que dividen tareas grandes en tareas más pequeñas que se ejecutan de forma simultánea en múltiples procesadores o núcleos de CPU.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Paradigma de programación para dividir tareas grandes en tareas más pequeñas y ejecutarlas simultáneamente",
        distractores: ["Un tipo de dato", "Un operador lógico", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la programación funcional?",
        ayuda: "Pista: Es un paradigma de programación que se centra en el uso de funciones puras que no tienen efectos secundarios y en el uso de expresiones para evaluar y transformar datos.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Paradigma de programación basado en funciones puras y expresiones",
        distractores: ["Un tipo de dato", "Un operador lógico", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la programación orientada a eventos?",
        ayuda: "Pista: Es un paradigma de programación que se centra en el diseño y desarrollo de programas basados en eventos y respuestas a esos eventos, como clics de botones o movimientos del mouse.",
        ayudaImg: "https://i.ibb.co/jkynpfj/52714-edit-555772569218145.jpg",
        imagen: "https://i.ibb.co/sv1qZn8/p7.jpg",
        respuesta: "Paradigma de programación basado en eventos y respuestas a esos eventos",
        distractores: ["Un tipo de dato", "Un operador lógico", "Un tipo de función"],
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