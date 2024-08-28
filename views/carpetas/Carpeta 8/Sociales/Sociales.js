let baseDePreguntas = [
    {
        pregunta: "¿Qué es una sociedad y cuáles son sus principales características?",
        ayuda: "Pista: Una sociedad es un grupo de personas que comparten una cultura y un territorio.",
        respuesta: "Una sociedad es un grupo de personas que comparten una cultura, tradiciones y un territorio en común.",
        distractores: ["Una sociedad es un lugar donde solo viven animales", "Una sociedad es una reunión temporal de personas", "Una sociedad es solo un conjunto de ciudades."]
    },
    {
        pregunta: "¿Cuál es el principal objetivo de la historia como ciencia social?",
        ayuda: "Pista: La historia estudia eventos y procesos pasados.",
        respuesta: "El principal objetivo de la historia es estudiar los eventos y procesos del pasado para comprender el presente.",
        distractores: ["Estudiar el futuro y predecir acontecimientos", "Estudiar las ciencias naturales", "Analizar solamente los personajes famosos."]
    },
    {
        pregunta: "¿Qué es una cultura y cómo influye en la vida de las personas?",
        ayuda: "Pista: La cultura se refiere a las costumbres, creencias y formas de vida de un grupo.",
        respuesta: "La cultura incluye las costumbres, creencias, valores y formas de vida de un grupo de personas.",
        distractores: ["La cultura se refiere solo a las expresiones artísticas", "La cultura es solo la historia de los países", "La cultura son las leyes de un lugar."]
    },
    {
        pregunta: "¿Qué fue la Revolución Francesa y cuál fue su impacto?",
        ayuda: "Pista: La Revolución Francesa fue un evento importante en la historia de Europa que promovió ideales de libertad y justicia.",
        respuesta: "La Revolución Francesa fue un movimiento político y social que promovió la libertad, igualdad y derechos humanos, impactando a todo el mundo.",
        distractores: ["Fue una guerra entre Francia e Inglaterra", "Fue un periodo de paz y prosperidad en Francia", "Fue la unificación de los estados europeos."]
    },
    {
        pregunta: "¿Qué es la democracia y cuáles son sus principales características?",
        ayuda: "Pista: La democracia se basa en la participación de los ciudadanos en las decisiones del gobierno.",
        respuesta: "La democracia es un sistema de gobierno en el que los ciudadanos participan en la toma de decisiones a través del voto.",
        distractores: ["La democracia es un sistema donde solo votan los líderes", "La democracia es un tipo de monarquía", "La democracia es un gobierno militar."]
    },
    {
        pregunta: "¿Cuáles fueron las principales civilizaciones mesoamericanas?",
        ayuda: "Pista: Entre las civilizaciones mesoamericanas se encuentran los mayas y los aztecas.",
        respuesta: "Las principales civilizaciones mesoamericanas fueron los mayas, aztecas y olmecas.",
        distractores: ["Las principales civilizaciones fueron los incas y los egipcios", "Las civilizaciones mesoamericanas solo incluían a los mayas", "Solo existió la civilización azteca."]
    },
    {
        pregunta: "¿Qué es el comercio y cuál es su importancia en una sociedad?",
        ayuda: "Pista: El comercio implica el intercambio de bienes y servicios.",
        respuesta: "El comercio es el intercambio de bienes y servicios entre personas o países, y es vital para el desarrollo económico.",
        distractores: ["El comercio es solo la compra de productos locales", "El comercio es la producción de bienes", "El comercio es el intercambio cultural entre países."]
    },
    {
        pregunta: "¿Qué es la migración y qué efectos puede tener en un país?",
        ayuda: "Pista: La migración ocurre cuando personas se trasladan de un lugar a otro.",
        respuesta: "La migración es el movimiento de personas de un lugar a otro, lo que puede influir en la economía y cultura del país receptor.",
        distractores: ["La migración es un intercambio de mercancías entre países", "La migración solo afecta a las ciudades", "La migración es solo un fenómeno natural."]
    },
    {
        pregunta: "¿Qué es la globalización y cómo afecta a las sociedades?",
        ayuda: "Pista: La globalización conecta al mundo a través del comercio, la tecnología y la cultura.",
        respuesta: "La globalización es el proceso por el cual los países se conectan e influyen entre sí mediante el comercio, la tecnología y la cultura.",
        distractores: ["La globalización solo afecta a las grandes ciudades", "La globalización es un proceso político", "La globalización es el aislamiento de los países."]
    },
    {
        pregunta: "¿Qué es una monarquía y cómo se diferencia de una república?",
        ayuda: "Pista: En una monarquía, el poder está en manos de un rey o reina.",
        respuesta: "Una monarquía es un sistema de gobierno en el que el poder está en manos de un rey o reina, mientras que en una república, el poder reside en los ciudadanos.",
        distractores: ["En una monarquía todos votan por sus gobernantes", "Una monarquía es lo mismo que una democracia", "En una república el poder está en manos de la familia real."]
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

// Mezclar el orden de las preguntas para que no estén agrupadas por tema
baseDePreguntas = shuffle(baseDePreguntas);
