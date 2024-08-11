let baseDePreguntas = [
    {
        pregunta: "¿Qué es la recursión en programación?",
        ayuda: "Pista: Es un enfoque de resolución de problemas en el que una función se llama a sí misma para resolver instancias más pequeñas del mismo problema.",
        respuesta: "Un enfoque de resolución de problemas en el que una función se llama a sí misma",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Cuál es la complejidad temporal promedio del algoritmo de búsqueda binaria?",
        ayuda: "Pista: El algoritmo de búsqueda binaria divide el espacio de búsqueda a la mitad en cada iteración, lo que resulta en una complejidad temporal promedio que se puede expresar en términos de logaritmos.",
        respuesta: "O(log n)",
        distractores: ["O(1)", "O(n)", "O(n log n)"],
    },
    {
        pregunta: "¿Qué es el polimorfismo en programación orientada a objetos?",
        ayuda: "Pista: Es un principio que permite que objetos de diferentes clases sean tratados como objetos de una clase base común, lo que facilita el diseño y la reutilización de código.",
        respuesta: "Principio que permite tratar objetos de diferentes clases como objetos de una clase base común",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la complejidad espacial de un algoritmo?",
        ayuda: "Pista: La complejidad espacial de un algoritmo se refiere a la cantidad de espacio de memoria que utiliza para resolver un problema en función del tamaño de la entrada.",
        respuesta: "La cantidad de espacio de memoria utilizada por un algoritmo en función del tamaño de la entrada",
        distractores: ["La cantidad de operaciones realizadas por el algoritmo", "La cantidad de tiempo que tarda el algoritmo en ejecutarse", "La cantidad de funciones utilizadas por el algoritmo"],
    },
    {
        pregunta: "¿Qué es el paradigma de programación funcional?",
        ayuda: "Pista: Es un estilo de programación en el que se trata a la computación como la evaluación de funciones matemáticas puras, evitando el cambio de estado y los datos mutables.",
        respuesta: "Estilo de programación que trata a la computación como la evaluación de funciones matemáticas puras",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es el 'Big-O' notation?",
        ayuda: "Pista: Es una notación utilizada para describir la complejidad temporal de un algoritmo en términos de la función de crecimiento más grande en relación con el tamaño de la entrada.",
        respuesta: "Notación utilizada para describir la complejidad temporal de un algoritmo",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la sobrecarga de funciones en programación?",
        ayuda: "Pista: Es una característica que permite definir múltiples funciones con el mismo nombre en una clase, pero con diferentes parámetros, para que puedan ser llamadas con argumentos diferentes.",
        respuesta: "Definir múltiples funciones con el mismo nombre pero diferentes parámetros",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es un grafo en teoría de grafos?",
        ayuda: "Pista: Es una estructura matemática que consta de un conjunto de vértices (nodos) y un conjunto de aristas (conexiones) que establecen relaciones entre los vértices.",
        respuesta: "Una estructura matemática con vértices y aristas que establecen relaciones entre ellos",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la complejidad temporal del algoritmo de ordenamiento Bubble Sort?",
        ayuda: "Pista: Bubble Sort compara elementos adyacentes y los intercambia si están en el orden incorrecto, y repite este proceso hasta que la lista esté ordenada.",
        respuesta: "O(n^2)",
        distractores: ["O(1)", "O(n)", "O(n log n)"],
    },
    {
        pregunta: "¿Qué es la programación concurrente?",
        ayuda: "Pista: Es un paradigma de programación que permite que varias tareas se ejecuten de forma simultánea, lo que mejora la eficiencia y el rendimiento de los programas en sistemas multi-core y multi-procesador.",
        respuesta: "Paradigma de programación que permite la ejecución simultánea de varias tareas",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la herencia en programación orientada a objetos?",
        ayuda: "Pista: Es un principio que permite que una clase (clase hija) herede atributos y comportamientos de otra clase (clase padre), lo que promueve la reutilización de código y la jerarquía de clases.",
        respuesta: "Principio que permite que una clase herede atributos y comportamientos de otra clase",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Cuál es la complejidad temporal del algoritmo de ordenamiento Merge Sort?",
        ayuda: "Pista: Merge Sort divide la lista en mitades, ordena cada mitad y luego combina las dos mitades ordenadas en una lista ordenada.",
        respuesta: "O(n log n)",
        distractores: ["O(1)", "O(n)", "O(n^2)"],
    },
    {
        pregunta: "¿Qué es el polimorfismo de sobrecarga en programación?",
        ayuda: "Pista: Es una forma de polimorfismo que permite que una función tenga varios comportamientos diferentes dependiendo de los tipos o número de parámetros que recibe.",
        respuesta: "Capacidad de una función para tener múltiples comportamientos dependiendo de los parámetros recibidos",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la programación dinámica?",
        ayuda: "Pista: Es un método para resolver problemas complejos dividiéndolos en subproblemas más pequeños y resolviendo cada subproblema solo una vez, almacenando sus soluciones para su uso posterior.",
        respuesta: "Método para resolver problemas dividiéndolos en subproblemas más pequeños y resolviendo cada subproblema solo una vez",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la recursión de cola (tail recursion) en programación?",
        ayuda: "Pista: Es una forma especial de recursión en la que la última operación que realiza una función antes de llamarse a sí misma es la operación de recursión.",
        respuesta: "Forma especial de recursión en la que la última operación realizada es la operación de recursión",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es una tabla hash en estructuras de datos?",
        ayuda: "Pista: Es una estructura de datos que utiliza una función hash para mapear claves a valores, lo que permite un acceso rápido y eficiente a los datos.",
        respuesta: "Estructura de datos que utiliza una función hash para mapear claves a valores",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es el patrón de diseño Singleton?",
        ayuda: "Pista: Es un patrón de diseño creacional que garantiza que una clase solo tenga una instancia y proporciona un punto de acceso global a dicha instancia.",
        respuesta: "Patrón de diseño creacional que garantiza una sola instancia de una clase",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es la complejidad temporal del algoritmo de búsqueda secuencial?",
        ayuda: "Pista: El algoritmo de búsqueda secuencial recorre secuencialmente cada elemento de la lista hasta encontrar el valor deseado o llegar al final de la lista.",
        respuesta: "O(n)",
        distractores: ["O(1)", "O(log n)", "O(n^2)"],
    },
    {
        pregunta: "¿Qué es un árbol binario en estructuras de datos?",
        ayuda: "Pista: Es una estructura de datos jerárquica en la que cada nodo tiene como máximo dos hijos, conocidos como el hijo izquierdo y el hijo derecho.",
        respuesta: "Estructura de datos jerárquica con cada nodo teniendo como máximo dos hijos",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
    },
    {
        pregunta: "¿Qué es el patrón de diseño Factory Method?",
        ayuda: "Pista: Es un patrón de diseño creacional que proporciona una interfaz para crear objetos, pero permite a las subclases decidir qué clase concreta instanciar.",
        respuesta: "Patrón de diseño creacional que proporciona una interfaz para crear objetos",
        distractores: ["Un tipo de dato", "Una estructura de control", "Un tipo de función"],
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