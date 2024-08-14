let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la partícula subatómica responsable de la fuerza nuclear fuerte que mantiene unidos a los protones y neutrones en el núcleo atómico?",
        ayuda: "Pista: Esta partícula tiene una carga positiva y una masa similar al neutrón.",
        ayudaImg: "img-CN2/Gluon.jpg",
        imagen: "p8.jpg",
        respuesta: "El gluón",
        distractores: ["El fotón", "El gravitón", "El bosón W"],
    },
    {
        pregunta: "¿Qué ley física establece que la fuerza entre dos cargas eléctricas es directamente proporcional al producto de las magnitudes de las cargas e inversamente proporcional al cuadrado de la distancia entre ellas?",
        ayuda: "Pista: Esta ley fue formulada por un matemático y físico francés en el siglo XVIII.",
        ayudaImg: "img-CN2/ley-coulomb.jpg",
        imagen: "p8.jpg",
        respuesta: "La ley de Coulomb",
        distractores: ["La ley de Ohm", "La ley de Kepler", "La ley de Hooke"],
    },
    {
        pregunta: "¿Cuál es el proceso físico en el núcleo de las estrellas masivas que, al agotar su combustible nuclear, resulta en una explosión extremadamente poderosa?",
        ayuda: "Pista: Esta explosión produce elementos más pesados que el hierro y libera una cantidad colosal de energía.",
        ayudaImg: "img-CN2/supernova.jpg",
        imagen: "p8.jpg",
        respuesta: "La supernova",
        distractores: ["La fusión nuclear", "La fisión nuclear", "La formación de un agujero negro"],
    },
    {
        pregunta: "¿Qué tipo de célula del sistema inmunitario es responsable de la producción de anticuerpos específicos para combatir patógenos invasores?",
        ayuda: "Pista: Esta célula se desarrolla en el timo y desencadena una respuesta inmunitaria específica.",
        ayudaImg: "img-CN2/Linfocitos.jpg",
        imagen: "p8.jpg",
        respuesta: "Los linfocitos B",
        distractores: ["Los macrófagos", "Los linfocitos T", "Los neutrófilos"],
    },
    {
        pregunta: "¿Cuál es la ley física que establece que la cantidad total de energía y materia en un sistema aislado permanece constante con el tiempo?",
        ayuda: "Pista: Esta ley es un pilar fundamental de la física y se aplica a sistemas cerrados.",
        ayudaImg: "img-CN2/conservacion-de-la-energia.gif",
        imagen: "p8.jpg",
        respuesta: "La ley de conservación de la energía",
        distractores: ["La ley de la inercia", "La ley de la gravedad", "La ley de la termodinámica"],
    },
    {
        pregunta: "¿Cuál es la teoría que sugiere que los electrones se comportan tanto como partículas como ondas, y que se basa en el principio de incertidumbre de Heisenberg?",
        ayuda: "Pista: Esta teoría es fundamental en la mecánica cuántica y revolucionó nuestra comprensión de la materia.",
        ayudaImg: "img-CN2/dualidad-onda.jpg",
        imagen: "p8.jpg",
        respuesta: "La dualidad onda-partícula",
        distractores: ["La teoría de la relatividad", "La teoría de cuerdas", "La teoría del caos"],
    },
    {
        pregunta: "¿Qué molécula biológica es la principal responsable de almacenar y transmitir información genética en los organismos vivos?",
        ayuda: "Pista: Esta molécula tiene una estructura de doble hélice y está compuesta por nucleótidos.",
        ayudaImg: "img-CN2/ADN.jpg",
        imagen: "p8.jpg",
        respuesta: "El ácido desoxirribonucleico (ADN)",
        distractores: ["El ácido ribonucleico (ARN)", "El colágeno", "El glucógeno"],
    },
    {
        pregunta: "¿Qué tipo de célula del sistema inmunitario detecta y destruye células propias que han sido infectadas por virus?",
        ayuda: "Pista: Esta célula se desarrolla en el timo y puede identificar células infectadas mediante el complejo mayor de histocompatibilidad (MHC).",
        ayudaImg: "img-CN2/Linfocitos_T_.jpg",
        imagen: "p8.jpg",
        respuesta: "Los linfocitos T citotóxicos",
        distractores: ["Los neutrófilos", "Los macrófagos", "Los linfocitos B"],
    },
    {
        pregunta: "¿Cuál es el nombre del proceso mediante el cual una célula del sistema inmunitario detecta y destruye células propias que han sido infectadas por virus?",
        ayuda: "Pista: Este proceso es una característica del cáncer y puede afectar diferentes órganos y tejidos.",
        ayudaImg: "img-CN2/metastasis.jpg",
        imagen: "p8.jpg",
        respuesta: "La metástasis",
        distractores: ["La mitosis", "La meiosis", "La diferenciación celular"],
    },
    {
        pregunta: "¿Qué tipo de radiación electromagnética es utilizada en la radiografía para ver imágenes del interior del cuerpo?",
        ayuda: "Pista: Esta radiación tiene una longitud de onda más corta que la luz visible y puede atravesar tejidos blandos.",
        ayudaImg: "img-CN2/rayos-x.jpg",
        imagen: "p8.jpg",
        respuesta: "Los rayos X",
        distractores: ["Los rayos gamma", "Las ondas de radio", "Los rayos ultravioleta"],
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