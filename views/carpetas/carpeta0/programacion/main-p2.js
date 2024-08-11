let baseDePreguntas = [
    {
        pregunta: "¿Qué lenguaje se utiliza para crear programas de software?",
        ayuda: "Pista: Muchos programas se escriben en este lenguaje.",
        respuesta: "Lenguaje de programación",
        distractores: ["Lenguaje de marcado", "Lenguaje natural", "Lenguaje de consulta"],
    },
    {
        pregunta: "¿Cuál es la unidad básica de ejecución en un programa?",
        ayuda: "Pista: Los programas se dividen en pequeñas partes llamadas...",
        respuesta: "Instrucción",
        distractores: ["Elemento", "Comando", "Función"],
    },
    {
        pregunta: "¿Cómo se llama el acto de encontrar y corregir errores en un programa?",
        ayuda: "Pista: Es similar a revisar un ensayo antes de entregarlo.",
        respuesta: "Depuración",
        distractores: ["Compilación", "Optimización", "Ejecución"],
    },
    {
        pregunta: "¿Qué tipo de software se utiliza para escribir y ejecutar programas?",
        ayuda: "Pista: Comienza con e y termina con ditor.",
        respuesta: "Editor",
        distractores: ["Navegador", "Procesador", "Reproductor"],
    },
    {
        pregunta: "¿Cómo se llama un valor que no puede cambiar en un programa?",
        ayuda: "Pista: Es constante, no cambia.",
        respuesta: "Constante",
        distractores: ["Variable", "Objeto", "Elemento"],
    },
    {
        pregunta: "¿Qué tipo de estructura se utiliza para tomar decisiones en un programa?",
        ayuda: "Pista: Puedes SI o NO hacer algo en base a esto.",
        respuesta: "Condición",
        distractores: ["Ciclo", "Función", "Clase"],
    },
    {
        pregunta: "¿Cómo se llama una acción que se repite varias veces en un programa?",
        ayuda: "Pista: Puedes hacer algo una y otra vez usando esto.",
        respuesta: "Bucle",
        distractores: ["Salto", "División", "Pausa",]
    },
    {
        pregunta: " ¿Cuál es la estructura de datos que almacena una lista ordenada de elementos?",
        ayuda: "Pista: Es similar a una lista de compras.",
        respuesta: "Array",
        distractores: ["Pila", "Cola", "Conjunto"],
    },
    {
        pregunta: "¿Cuál es el componente principal de la arquitectura web que maneja la lógica del lado del cliente?",
        ayuda: "Pista: Es donde ocurre la interacción directa con el usuario.",
        respuesta: "Navegador",
        distractores: ["Servidor", "Router", "Firewall"],
    },
    {
        pregunta: "¿Cómo se llama la acción de escribir instrucciones en un lenguaje de programación?",
        ayuda: "Pista: Es como escribir una receta.",
        respuesta: "codificacion",
        distractores: ["Decodificación", "Compilación", "Ejecución"],
    },
    {
        pregunta: "¿Qué tipo de programa se encarga de buscar información en la web?",
        ayuda: "Pista: Es como un detective en línea.",
        respuesta: "Motor de búsqueda",
        distractores: ["Navegador", "Antivirus", "Reproductor"],
    },
    {
        pregunta: "¿Cuál es el término general para los errores en un programa que evitan que funcione correctamente?",
        ayuda: " Pista: Son como obstáculos en el camino del programa.",
        respuesta: "Bugs",
        distractores: ["Glitches", "Virus", "Huecos"],
    },
    {
        pregunta: "¿Cuál es el proceso de convertir código fuente en un programa ejecutable?",
        ayuda: "Pista: Es como traducir un lenguaje a otro.",
        
        respuesta: " Compilación",
        distractores: ["Depuración", "Codificación", "Optimización"],
    },
    {
        pregunta: "¿Cómo se llama el acto de copiar el contenido de una página web para verla más tarde sin conexión?",
        ayuda: "Pista: Es como GUARDAR la página.",
        
        respuesta: "Descargar",
        distractores: ["Subir", "Compartir", "Enviar"],
    },
    {
        pregunta: " ¿Qué componente se utiliza para almacenar datos de manera permanente en una computadora?",
        ayuda: "Pista: Suele ser una parte física del equipo.",
        
        respuesta: "Disco Duro",
        distractores: ["Memoria RAM", "Procesador", "Tarjeta gráfica"],
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