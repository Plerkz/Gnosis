let baseDePreguntas = [
    {
        pregunta: "¿Qué teoría propone que todas las formas de vida evolucionaron a lo largo del tiempo a partir de un ancestro común?",
        ayuda: "Pista: Esta teoría fue propuesta por Charles Darwin y se basa en el concepto de selección natural.",
        ayudaImg: "img-CN2/evolucion.jpg",
        imagen: "p8.jpg",
        respuesta: "La teoría de la evolución",
        distractores: ["La teoría del Big Bang", "La teoría de la relatividad", "La teoría cuántica"],
    },
    {
        pregunta: "¿Qué científico estableció las leyes del movimiento y la ley de la gravitación universal?",
        ayuda: "Pista: Este científico inglés es considerado uno de los más grandes físicos y matemáticos de la historia.",
        ayudaImg: "img-CN2/Isaac-Newton.jpg",
        imagen: "p8.jpg",
        respuesta: "Isaac Newton",
        distractores: ["Albert Einstein", "Marie Curie", "Galileo Galilei"],
    },
    {
        pregunta: "¿Cuál es el proceso mediante el cual las células especializadas se diferencian y desarrollan en tipos específicos de células?",
        ayuda: "Pista: Este proceso es fundamental para el desarrollo y funcionamiento del organismo multicelular.",
        ayudaImg: "img-CN2/diferencia-celular.jpg",
        imagen: "p8.jpg",
        respuesta: "La diferenciación celular",
        distractores: ["La mitosis", "La reproducción celular", "La meiosis"],
    },
    {
        pregunta: "¿Cuál es el gas responsable del efecto invernadero y del calentamiento global?",
        ayuda: "Pista: Este gas se libera en grandes cantidades debido a la quema de combustibles fósiles y la deforestación.",
        ayudaImg: "img-CN2/CO2-en-la-tierra.jpg",
        imagen: "p8.jpg",
        respuesta: "El dióxido de carbono (CO2)",
        distractores: ["El oxígeno", "El metano", "El nitrógeno"],
    },
    {
        pregunta: "¿Cuál es el proceso en el que una célula se divide en dos células hijas genéticamente idénticas?",
        ayuda: "Pista: Este proceso es esencial para el crecimiento y la reparación de tejidos en organismos multicelulares.",
        ayudaImg: "img-CN2/Mitosis.jpg",
        imagen: "p8.jpg",
        respuesta: "La mitosis",
        distractores: ["La meiosis", "La replicación del ADN", "La diferenciación celular"],
    },
    {
        pregunta: "¿Qué teoría propone que el universo se originó a partir de una gran explosión hace aproximadamente 13.8 mil millones de años?",
        ayuda: "Pista: Esta teoría es la explicación científica más aceptada sobre el origen y evolución del universo.",
        ayudaImg: "img-CN2/Mitosis.jpg",
        imagen: "p8.jpg",
        respuesta: "La teoría del Big Bang",
        distractores: ["La teoría de la relatividad", "La teoría de la gravedad", "La teoría de la evolución"],
    },
    {
        pregunta: "¿Cuál es el proceso en el que una célula sexual femenina se une con una célula sexual masculina para formar un cigoto?",
        ayuda: "Pista: Este proceso es esencial para la reproducción sexual y la variabilidad genética en la descendencia.",
        ayudaImg: "img-CN2/fertilización.jpg",
        imagen: "p8.jpg",
        respuesta: "La fertilización",
        distractores: ["La fecundación", "La meiosis", "La reproducción asexual"],
    },
    {
        pregunta: "¿Qué proceso utiliza la energía del Sol para convertir el agua y el dióxido de carbono en glucosa y oxígeno?",
        ayuda: "Pista: Este proceso es la base de la producción de alimentos y la liberación de oxígeno en la atmósfera.",
        ayudaImg: "img-CN2/fotosintesis.jpg",
        imagen: "p8.jpg",
        respuesta: "La fotosíntesis",
        distractores: ["La respiración celular", "La quimiosíntesis", "La transpiración"],
    },
    {
        pregunta: "¿Cuál es la partícula subatómica que tiene una masa similar al protón pero no tiene carga eléctrica?",
        ayuda: "Pista: Esta partícula se encuentra en el núcleo de un átomo y juega un papel importante en la estabilidad nuclear.",
        ayudaImg: "img-CN2/Neutrones.jpg",
        imagen: "p8.jpg",
        respuesta: "El neutrón",
        distractores: ["El electrón", "El protón", "El positrón"],
    },
    {
        pregunta: "¿Qué proceso geológico crea nuevas rocas a partir de la transformación de rocas preexistentes debido al calor y la presión?",
        ayuda: "Pista: Este proceso ocurre dentro de la corteza terrestre y puede convertir rocas sedimentarias en rocas metamórficas.",
        ayudaImg: "img-CN2/Metamorfismo.jpg",
        imagen: "p8.jpg",
        respuesta: "El metamorfismo",
        distractores: ["La sedimentación", "La erosión", "La solidificación"],
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