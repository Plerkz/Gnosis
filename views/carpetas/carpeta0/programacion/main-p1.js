let baseDePreguntas = [
    {
        pregunta: "¿que es un algoritmo?",
        ayuda: "Pista: Es un conjunto de pasos ordenados para resolver un problema.",
        respuesta: "Un conjunto de pasos para resolver un problema",
        distractores: ["Una variable en programación", "Una imagen digital", "Un lenguaje de programación", ],
    },
    {
        pregunta: "¿Qué es un bucle?",
        ayuda: "Pista: Es una estructura que permite repetir un conjunto de instrucciones.",
        respuesta: "Una estructura que permite la repetición de instrucciones",
        distractores: ["Una función matemática", "Una variable de tipo texto", "Una condición booleana"],
    },
    {
        pregunta: "¿Cuál es la finalidad de un comentario en el código?",
        ayuda: " Pista: Ayuda a los programadores a entender el código y no se ejecuta.",
        respuesta: " Proporcionar explicaciones y aclaraciones en el código",
        distractores: ["Mejorar el rendimiento del código", "Definir nuevas variables", "Mostrar mensajes en la pantalla"],
    },
    {
        pregunta: "¿Qué es una variable en programación?",
        ayuda: " Pista: Es un espacio en la memoria para almacenar datos.",
        respuesta: " Un espacio en la memoria para almacenar datos",
        distractores: ["Un operador matemático", "Un tipo de dato", "Una función"],
    },
    {
        pregunta: "¿Cuál es la diferencia entre un compilador y un intérprete?",
        ayuda: "Pista: Uno traduce todo el programa antes de ejecutarlo, el otro lo hace línea por línea.",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09rh74dVKiHWTxaP8IE2NxDnHvXM-T056uPP5cUBSKODtIE2ZOrhwk9I7cHQgFQVLtyc&usqp=CAU.jpg",
        respuesta: " El compilador traduce todo el programa de una vez, mientras que el intérprete lo hace línea por línea",
        distractores: ["Ambos son lo mismo", "El compilador solo se usa en lenguajes antiguos", "El intérprete solo se usa en lenguajes modernos"],
    },
    {
        pregunta: "¿Qué es una función en programación?",
        ayuda: "Pista: Es un conjunto de instrucciones que realizan una tarea específica.",
        ayudaImg: "",
        respuesta: "Un conjunto de instrucciones que realizan una tarea específica",
        distractores: ["Una variable que almacena números", "Un tipo de dato", "Una etiqueta HTML"],
    },
    {
        pregunta: "¿Qué es un booleano?",
        ayuda: "Pista: Es un tipo de dato que puede ser verdadero o falso.",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjCZeYBoct3vSGlpugOOEODq8zCLb4tfkuvSNc3TlN3e9v9eSWiHX_2NLPGsEFl7xUNY&usqp=CAU.jpg",
        respuesta: "Un tipo de dato que puede ser verdadero o falso",
        distractores: ["Un tipo de bucle", "Una función matemática", "Una variable de texto"]
    },
    {
        pregunta: "¿Qué significa debuggear un programa?",
        ayuda: "Pista: Es el proceso de encontrar y corregir errores en el código.",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrIANv_zpjSLEtCuilpsZ8XE4ttYa4kBPgzutigyfJGQdKLJcjbq1MszGWeQjp98YY8P0&usqp=CAU.jpg",
        respuesta: "Encontrar y corregir errores en el código",
        distractores: ["Ejecutar el programa", "Crear un nuevo programa", "Guardar el programa"],
    },
    {
        pregunta: "¿Qué es un array (arreglo) en programación?",
        ayuda: "Pista: Es una estructura que puede almacenar múltiples valores en una sola variable.",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCf5XGNzJy8O1GmN9J6LNFRn5l3sypQaZ1MLkbFtteICdTXP9of2BhRCZ1EKdhl5esmA&usqp=CAU.jpg",
        respuesta: "Una estructura que puede almacenar múltiples valores en una sola variable",
        distractores: ["Una función matemática", "Una operación lógica", "Una condición"],
    },
    {
        pregunta: "¿Qué es la programación orientada a objetos?",
        ayuda: "Pista: Es un paradigma de programación que utiliza objetos y clases para organizar el código.",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmOm9N5SmPgNtYSu592UYuvFEmrn5maSEhRxBe4YPDT_e-lj96GaUpkl1F7jXoqmKB4_k&usqp=CAU.jpg ",
        respuesta: "Un paradigma de programación que utiliza objetos y clases para organizar el código",
        distractores: ["Una función matemática", "Una estructura de control", "Un tipo de dato"],
    },
    {
        pregunta: "¿Qué es la recursividad en programación?",
        ayuda: "Pista: Es cuando una función se llama a sí misma para resolver un problema.",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7tVQisElupeyVUihVYeUppTdJb0jOJJXDoxqFCFuk6VAaR9HeulJ3WXz8Qpl43qVN0A&usqp=CAU.jpg",
        respuesta: "Cuando una función se llama a sí misma para resolver un problema",
        distractores: ["Una estructura de control", "Un operador matemático", "Un tipo de dato"],
    },
    {
        pregunta: "¿Qué es un operador lógico AND?",
        ayuda: "Pista: Es un operador que devuelve verdadero solo si ambas condiciones son verdaderas.",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrrXJWV1jUboQ1KEClSwpDWdwt4fR6l7hUeE8Ze9Uejo1UEN3IHI5iyOQHw71o5MCZBPI&usqp=CAU.jpg",
        respuesta: "Un operador que devuelve verdadero si ambas condiciones son verdaderas",
        distractores: ["Un operador matemático", "Un operador de concatenación", "Un operador de asignación"],
    },
    {
        pregunta: "¿Qué es un bucle for?",
        ayuda: "Pista: Es una estructura que repite un bloque de código un número específico de veces.",
        ayudaImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alegsa.com.ar%2FDic%2Ffor.php&psig=AOvVaw1ClunV2mhhhNHUDJut4dYL&ust=1693508203418000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCOjb_fGHhYEDFQAAAAAdAAAAABAD.jpg",
        respuesta: "Una estructura que repite un bloque de código un número específico de veces",
        distractores: [" Una función matemática", "Una estructura condicional", "Un tipo de dato"],
    },
    {
        pregunta: " ¿Qué es una sentencia IF en programación?",
        ayuda: "Pista: Es una estructura que ejecuta un bloque de código solo si una condición es verdadera",
        ayudaImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wDhPnTLwS7uNobWNfXww4iWPXhZ5QXAcu7BuFMMrHkDdNn9MO2jy_2stWP5__sT_VHk&usqp=CAU.jpg",
        respuesta: "Una estructura que ejecuta un bloque de código si una condición es verdadera",
        distractores: ["Una función matemática", "Una estructura de bucle", "Un tipo de dato"],
    },
    {
        pregunta: "¿Qué es un operador aritmético?",
        ayuda: "Pista: Son símbolos que se utilizan para realizar operaciones matemáticas.",
        ayudaImg: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fplatzi.com%2Fclases%2F1393-fundamentos-matematicas%2F14416-simbologia-en-el-algebra%2F&psig=AOvVaw2zRKgsp1T2j6ltc4nsyINp&ust=1693508577056000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCICdnaKJhYEDFQAAAAAdAAAAABAI.jpg",
        respuesta: "Un símbolo utilizado para realizar operaciones matemáticas",
        distractores: ["Una función matemática", "Un operador lógico", "Un tipo de dato"],
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