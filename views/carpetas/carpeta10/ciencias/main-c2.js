let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la ley que establece que la energía no se crea ni se destruye, solo se transforma?",
        ayuda: "Pista: Busca el nombre de la ley que describe la conservación de la energía en un sistema cerrado.",
        ayudaImg: "img-CN2/conservacion-de-la-energia.gif",
        imagen: "p8.jpg",
        respuesta: "La ley de la conservación de la energía",
        distractores: ["La ley de la gravedad", "La ley de la inercia", "La ley de la acción y reacción"],
    },
    {
        pregunta: "¿Cuál es el proceso mediante el cual las plantas fabrican su propio alimento?",
        ayuda: "Pista: Las plantas utilizan la luz solar para llevar a cabo este proceso vital.",
        imagen: "p8.jpg",
        ayudaImg: "img-CN2/fotosintesis.jpg",
        respuesta: "La fotosíntesis",
        distractores: ["La respiración celular", "La mitosis", "La fermentación"],
    },
    {
        pregunta: "¿Cuál es la unidad básica de la materia?",
        ayuda: "Pista: Es una partícula subatómica y el bloque de construcción de toda la materia.",
        ayudaImg: "img-CN2/atomo.jpg",
        imagen: "p8.jpg",
        respuesta: "El átomo",
        distractores: ["La célula", "El electrón", "El protón"],
    },
    {
        pregunta: "¿Qué tipo de energía posee un objeto en movimiento?",
        ayuda: "Pista: Esta energía está asociada al movimiento y depende de la masa y la velocidad del objeto.",
        ayudaImg: "img-CN2/energia-cinetica.jpg",
        imagen: "p8.jpg",
        respuesta: "Energía cinética",
        distractores: ["Energía potencial", "Energía térmica", "Energía electromagnética"],
    },
    {
        pregunta: "¿Cuál es el componente principal de la capa de ozono?",
        ayuda: "Pista: Es un elemento químico vital para nuestra atmósfera y protege la Tierra de la radiación ultravioleta.",
        ayudaImg: "img-CN2/oxigeno.jpg",
        imagen: "p8.jpg",
        respuesta: "El oxígeno",
        distractores: ["El dióxido de carbono", "El nitrógeno", "El ozono"],
    },
    {
        pregunta: "¿Cuál es la principal fuente de energía del Sol?",
        ayuda: "Pista: Es el proceso en el que núcleos ligeros se combinan para formar un núcleo más pesado, liberando una enorme cantidad de energía.",
        ayudaImg: "img-CN2/fusion-nuclear.jpg",
        imagen: "p8.jpg",
        respuesta: "La fusión nuclear",
        distractores: ["La fisión nuclear", "La radiación electromagnética", "La convección"],
    },
    {
        pregunta: "¿Cuál es la ley que establece que la presión y el volumen de un gas son inversamente proporcionales?",
        ayuda: "Pista: Esta ley describe la relación entre la presión y el volumen de un gas a temperatura constante.",
        ayudaImg: "img-CN2/ley-boyle.gif",
        imagen: "p8.jpg",
        respuesta: "La ley de Boyle",
        distractores: ["La ley de Charles", "La ley de Avogadro", "La ley de Dalton"],
    },
    {
        pregunta: "¿Cuál es la partícula subatómica con carga negativa?",
        ayuda: "Pista: Esta partícula gira alrededor del núcleo de un átomo y lleva una carga eléctrica negativa.",
        ayudaImg: "img-CN2/electron.jpg",
        imagen: "p8.jpg",
        respuesta: "El electrón",
        distractores: ["El protón", "El neutrón", "El fotón"],
    },
    
    {
        pregunta: "¿Cuál es la sustancia que compone aproximadamente el 60% del cuerpo humano y es esencial para la vida?",
        ayuda: "Pista: El agua es conocida como el solvente universal y desempeña un papel vital en muchas funciones biológicas.",
        ayudaImg: "img-CN2/H2O.jpg",
        imagen: "p8.jpg",
        respuesta: "El agua",
        distractores: ["El sodio", "El hierro", "El oxígeno"],
    },
    {
        pregunta: "¿Qué fenómeno natural es responsable de la formación de un arco de colores en el cielo después de la lluvia?",
        ayuda: "Pista: Este fenómeno ocurre cuando la luz blanca del Sol se descompone en diferentes colores al atravesar las gotas de agua en el aire.",
        ayudaImg: "img-CN2/arcoiris.jpg",
        imagen: "p8.jpg",
        respuesta: "El arcoíris",
        distractores: ["La aurora boreal", "El cometa", "El eclipse lunar"],
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