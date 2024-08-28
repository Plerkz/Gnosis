let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el órgano del cuerpo humano responsable de bombear la sangre?",
        ayuda: "Pista: Este órgano se encuentra en el centro del pecho y es fundamental para la circulación.",
        respuesta: "Corazón",
        distractores: ["Pulmones", "Hígado", "Riñones"],
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual las plantas convierten la luz solar en energía?",
        ayuda: "Pista: Este proceso es esencial para la vida en la Tierra y ocurre en las hojas.",
        respuesta: "Fotosíntesis",
        distractores: ["Respiración", "Digestión", "Transpiración"],
    },
    {
        pregunta: "¿Cuál es la unidad básica de la materia?",
        ayuda: "Pista: Es la partícula más pequeña que conserva las propiedades de un elemento.",
        respuesta: "Átomo",
        distractores: ["Molécula", "Ion", "Cristal"],
    },
    {
        pregunta: "¿Qué tipo de energía es producida por el movimiento de las moléculas en un objeto caliente?",
        ayuda: "Pista: Esta energía se relaciona con la temperatura de los objetos.",
        respuesta: "Energía térmica",
        distractores: ["Energía cinética", "Energía potencial", "Energía eléctrica"],
    },
    {
        pregunta: "¿Qué tipo de roca se forma a partir de la acumulación y compactación de sedimentos?",
        ayuda: "Pista: Estas rocas a menudo se encuentran en capas y pueden contener fósiles.",
        respuesta: "Roca sedimentaria",
        distractores: ["Roca ígnea", "Roca metamórfica", "Roca orgánica"],
    },
    {
        pregunta: "¿Qué es el sistema circulatorio en los seres humanos?",
        ayuda: "Pista: Es el sistema que transporta sangre, nutrientes, y oxígeno a través del cuerpo.",
        respuesta: "El sistema que transporta sangre y otros fluidos por todo el cuerpo",
        distractores: ["El sistema digestivo", "El sistema nervioso", "El sistema respiratorio"],
    },
    {
        pregunta: "¿Cuál es la función principal de los riñones en el cuerpo humano?",
        ayuda: "Pista: Estos órganos filtran los desechos y el exceso de agua de la sangre para formar orina.",
        respuesta: "Filtrar los desechos de la sangre",
        distractores: ["Producción de hormonas", "Controlar la temperatura", "Digestion de alimentos"],
    },
    {
        pregunta: "¿Qué es una cadena trófica?",
        ayuda: "Pista: Es una serie de organismos que se alimentan unos de otros en un ecosistema.",
        respuesta: "Una secuencia de organismos que se alimentan unos de otros",
        distractores: ["Un tipo de hábitat", "Un ciclo del agua", "Un grupo de especies en peligro"],
    },
    {
        pregunta: "¿Cuál es el gas principal responsable del efecto invernadero?",
        ayuda: "Pista: Este gas se encuentra en la atmósfera y atrapa el calor.",
        respuesta: "Dióxido de carbono",
        distractores: ["Oxígeno", "Nitrógeno", "Helio"],
    },
    {
        pregunta: "¿Qué tipo de célula se encarga de transmitir impulsos eléctricos en el sistema nervioso?",
        ayuda: "Pista: Estas células permiten la comunicación entre el cerebro y el resto del cuerpo.",
        respuesta: "Neuronas",
        distractores: ["Glóbulos rojos", "Células epiteliales", "Glóbulos blancos"],
    },
    {
        pregunta: "¿Qué es la biodiversidad?",
        ayuda: "Pista: Se refiere a la variedad de formas de vida en un ecosistema o en el planeta.",
        respuesta: "La variedad de organismos vivos en un ecosistema",
        distractores: ["La cantidad de agua en un ecosistema", "La altura de las plantas en un ecosistema", "El tamaño del hábitat"],
    },
    {
        pregunta: "¿Cuál es la función de la clorofila en las plantas?",
        ayuda: "Pista: Este pigmento es crucial para el proceso de fotosíntesis.",
        respuesta: "Captar la luz solar para la fotosíntesis",
        distractores: ["Absorber agua del suelo", "Producir flores", "Transportar nutrientes"],
    },
    {
        pregunta: "¿Qué es un ecosistema acuático?",
        ayuda: "Pista: Este tipo de ecosistema se encuentra en ambientes con agua, como océanos y lagos.",
        respuesta: "Un ecosistema donde el agua es el componente principal",
        distractores: ["Un ecosistema en el desierto", "Un ecosistema en la montaña", "Un ecosistema en el bosque"],
    },
    {
        pregunta: "¿Qué tipo de movimiento realizan los músculos cuando se contraen y relajan?",
        ayuda: "Pista: Este movimiento es fundamental para el funcionamiento del cuerpo humano.",
        respuesta: "Movimiento de contracción y relajación",
        distractores: ["Movimiento oscilatorio", "Movimiento rotacional", "Movimiento translacional"],
    },
    {
        pregunta: "¿Cómo se llama el proceso por el cual el agua se convierte en vapor?",
        ayuda: "Pista: Este proceso ocurre cuando el agua se calienta.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Precipitación", "Transpiración"],
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
