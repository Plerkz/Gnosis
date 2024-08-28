let baseDePreguntas = [
    {
        pregunta: "¿Qué es una oración subordinada adjetiva y cuál es su función en una oración compuesta?",
        ayuda: "Pista: Este tipo de oración modifica a un sustantivo en la oración principal.",
        respuesta: "Una oración que funciona como adjetivo modificando a un sustantivo",
        distractores: ["Una oración que expresa una condición", "Una oración que introduce una pregunta", "Una oración que ofrece una explicación"],
    },
    {
        pregunta: "¿Qué es un período en la estructura de un texto y cómo se diferencia de una oración compuesta?",
        ayuda: "Pista: El período es una unidad que puede contener varias oraciones compuestas.",
        respuesta: "Un período es una unidad de texto que puede incluir varias oraciones compuestas",
        distractores: ["Una oración simple que tiene un solo sujeto", "Una oración que contiene un solo verbo", "Una oración que solo tiene un sujeto"],
    },
    {
        pregunta: "¿Cómo se define la voz pasiva en una oración y qué estructura tiene en comparación con la voz activa?",
        ayuda: "Pista: En la voz pasiva, el sujeto recibe la acción del verbo.",
        respuesta: "En la voz pasiva, el sujeto recibe la acción del verbo, mientras que en la voz activa, el sujeto realiza la acción",
        distractores: ["En la voz pasiva, el sujeto realiza la acción; en la activa, la recibe", "En la voz pasiva, el verbo está en presente; en la activa, en pasado", "En la voz pasiva, el verbo es transitivo; en la activa, intransitivo"],
    },
    {
        pregunta: "¿Qué función cumple el discurso indirecto en una narración y cómo se diferencia del discurso directo?",
        ayuda: "Pista: El discurso indirecto reporta lo que alguien dijo sin citar textualmente sus palabras.",
        respuesta: "El discurso indirecto reporta lo dicho por alguien sin citar textualmente, mientras que el discurso directo usa las palabras exactas",
        distractores: ["El discurso indirecto usa citas literales; el directo no", "El discurso indirecto es informal; el directo es formal", "El discurso indirecto se usa para diálogos internos; el directo para externos"],
    },
    {
        pregunta: "¿Qué es un conectador de contraste y cómo mejora la coherencia en un texto?",
        ayuda: "Pista: Estos conectores establecen una oposición entre ideas.",
        respuesta: "Los conectadores de contraste establecen oposición entre ideas y ayudan a mejorar la coherencia al mostrar relaciones claras entre diferentes puntos",
        distractores: ["Establecen adición de ideas", "Introducen ejemplos específicos", "Indican tiempo en una narración"],
    },
    {
        pregunta: "¿Qué es un análisis sintáctico y cuáles son los pasos fundamentales para realizarlo?",
        ayuda: "Pista: El análisis sintáctico descompone una oración para identificar sus partes y funciones.",
        respuesta: "El análisis sintáctico descompone una oración en sus componentes (sujeto, predicado, objetos) y determina sus funciones",
        distractores: ["El análisis sintáctico traduce el texto a otro idioma", "El análisis sintáctico se enfoca en el significado de palabras", "El análisis sintáctico evalúa el estilo del autor"],
    },
    {
        pregunta: "¿Cómo se usa el subjuntivo en la oración compleja y cuál es su función principal?",
        ayuda: "Pista: El subjuntivo se usa para expresar deseos, dudas o situaciones hipotéticas.",
        respuesta: "El subjuntivo se usa para expresar deseos, dudas, o situaciones hipotéticas en oraciones complejas",
        distractores: ["El subjuntivo se usa solo en oraciones afirmativas", "El subjuntivo se usa para describir hechos reales", "El subjuntivo se usa solo en la voz activa"],
    },
    {
        pregunta: "¿Qué es una oración subordinada adverbial y cómo se diferencia de una oración subordinada adjetiva?",
        ayuda: "Pista: Las oraciones subordinadas adverbiales funcionan como adverbios, modificando al verbo.",
        respuesta: "Una oración subordinada adverbial modifica al verbo y funciona como adverbio, mientras que una subordinada adjetiva modifica al sustantivo",
        distractores: ["Una subordinada adverbial modifica al sustantivo; una adjetiva al verbo", "Una subordinada adverbial introduce una pregunta; una adjetiva da información adicional", "Una subordinada adverbial expresa una condición; una adjetiva proporciona un ejemplo"],
    },
    {
        pregunta: "¿Cuál es la diferencia entre el uso de comillas simples y comillas dobles en el estilo de citación y en qué contexto se utiliza cada una?",
        ayuda: "Pista: Las comillas simples se usan dentro de comillas dobles para citar algo dentro de una cita.",
        respuesta: "Las comillas dobles se usan para citas directas o palabras exactas, mientras que las comillas simples se usan dentro de citas directas o para indicar significado de palabras",
        distractores: ["Las comillas simples se usan para citas textuales; las dobles para citas indirectas", "Las comillas simples se usan en los diálogos; las dobles en títulos", "Las comillas simples se usan para enfatizar; las dobles para definir términos"],
    },
    {
        pregunta: "¿Qué es una oración coordinada y cómo se diferencia de una oración subordinada?",
        ayuda: "Pista: Las oraciones coordinadas están unidas por conjunciones coordinantes, mientras que las subordinadas dependen de una oración principal.",
        respuesta: "Una oración coordinada está unida por conjunciones coordinantes y puede ser independiente, mientras que una subordinada depende de una oración principal para tener sentido completo",
        distractores: ["Una oración subordinada es independiente y se une por comas; una coordinada es dependiente y se une por puntos", "Una oración subordinada no tiene verbo; una coordinada sí", "Una oración subordinada expresa contraste; una coordinada, causa"],
    },
    {
        pregunta: "¿Qué es la intertextualidad y cómo se manifiesta en la literatura?",
        ayuda: "Pista: La intertextualidad se refiere a las relaciones entre textos y cómo se hacen referencias a otros textos.",
        respuesta: "La intertextualidad es la relación entre textos y las referencias o influencias que un texto tiene sobre otro",
        distractores: ["La intertextualidad es la descripción de un texto", "La intertextualidad se refiere a la historia del autor", "La intertextualidad se usa para simplificar el lenguaje"],
    },
    {
        pregunta: "¿Qué es el discurso argumentativo y cuáles son sus componentes principales?",
        ayuda: "Pista: Este tipo de discurso busca persuadir al lector con argumentos y evidencia.",
        respuesta: "El discurso argumentativo busca persuadir mediante argumentos y evidencia, y sus componentes principales son la tesis, argumentos y conclusión",
        distractores: ["El discurso argumentativo cuenta una historia; sus componentes son introducción, desarrollo y desenlace", "El discurso argumentativo describe un objeto; sus componentes son descripción, análisis y opinión", "El discurso argumentativo se usa para narrar eventos; sus componentes son hechos, personajes y trama"],
    },
    {
        pregunta: "¿Qué es la anáfora en literatura y cómo afecta el ritmo o el estilo de un texto?",
        ayuda: "Pista: La anáfora es la repetición de una o varias palabras al comienzo de versos u oraciones.",
        respuesta: "La anáfora es la repetición de palabras al inicio de frases o versos, y puede afectar el ritmo y el estilo de un texto al crear énfasis",
        distractores: ["La anáfora es el uso de metáforas para comparar ideas", "La anáfora es una figura retórica que cambia el tono del texto", "La anáfora es el uso de palabras complejas para enriquecer el vocabulario"],
    },
    {
        pregunta: "¿Cómo se utiliza el estilo indirecto libre y en qué tipo de textos es común encontrarlo?",
        ayuda: "Pista: El estilo indirecto libre mezcla la narración con los pensamientos y sentimientos de los personajes.",
        respuesta: "El estilo indirecto libre mezcla la narración con los pensamientos y sentimientos de los personajes y es común en novelas y relatos",
        distractores: ["El estilo indirecto libre se usa en textos técnicos para explicar procedimientos", "El estilo indirecto libre presenta citas literales de los personajes", "El estilo indirecto libre se usa en discursos formales para presentar opiniones"],
    },
    {
    pregunta: "¿Qué es una figura de dicción y cómo se diferencia de una figura de pensamiento en la retórica?",
    ayuda: "Pista: Las figuras de dicción se enfocan en la forma del lenguaje, mientras que las figuras de pensamiento en el contenido.",
    respuesta: "Las figuras de dicción se enfocan en la forma del lenguaje (como la aliteración y la onomatopeya), mientras que las figuras de pensamiento se centran en el contenido (como la metáfora y la ironía)",
    distractores: ["Las figuras de dicción son metáforas y símiles; las figuras de pensamiento son juegos de palabras y repeticiones", "Las figuras de dicción se usan en la poesía; las figuras de pensamiento en la prosa", "Las figuras de dicción se aplican a la estructura del texto; las figuras de pensamiento al estilo narrativo"],
    },
    {
    pregunta: "¿Qué es la ironía dramática y cómo se diferencia de la ironía verbal?",
    ayuda: "Pista: La ironía dramática ocurre cuando el público sabe algo que los personajes no saben, mientras que la ironía verbal es cuando una persona dice algo y quiere decir lo contrario.",
    respuesta: "La ironía dramática ocurre cuando el público sabe algo que los personajes no saben; la ironía verbal es cuando lo que se dice es lo contrario de lo que se quiere decir",
    distractores: ["La ironía dramática se usa en discursos; la ironía verbal en descripciones", "La ironía dramática es un recurso visual; la ironía verbal es un recurso auditivo", "La ironía dramática se refiere a eventos futuros; la ironía verbal a eventos pasados"],
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
