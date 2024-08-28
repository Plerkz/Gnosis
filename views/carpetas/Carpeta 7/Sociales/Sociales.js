let baseDePreguntas = [
    {
        pregunta: "¿Qué es una civilización antigua?",
        ayuda: "Pista: Una civilización antigua se refiere a una sociedad que ha desarrollado formas avanzadas de organización, cultura y tecnología en tiempos históricos.",
        respuesta: "Una sociedad con formas avanzadas de organización, cultura y tecnología en tiempos históricos",
        distractores: ["Una sociedad moderna con tecnología avanzada", "Una comunidad sin organización social", "Una tribu nómada sin escritura"],
    },
    {
        pregunta: "¿Cuál fue una de las principales aportaciones de los egipcios antiguos?",
        ayuda: "Pista: Los egipcios antiguos son conocidos por sus contribuciones en arquitectura y escritura.",
        respuesta: "La escritura jeroglífica y las pirámides",
        distractores: ["El sistema decimal", "La pólvora", "Los números romanos"],
    },
    {
        pregunta: "¿Qué es el Renacimiento?",
        ayuda: "Pista: El Renacimiento fue un período de gran desarrollo cultural y artístico en Europa, que ocurrió después de la Edad Media.",
        respuesta: "Un período de desarrollo cultural y artístico en Europa después de la Edad Media",
        distractores: ["Una era de guerra y conflictos", "Un tiempo de exploración espacial", "Una fase de industrialización masiva"],
    },
    {
        pregunta: "¿Qué evento marcó el inicio de la Edad Moderna?",
        ayuda: "Pista: El inicio de la Edad Moderna se suele asociar con un gran descubrimiento geográfico.",
        respuesta: "El descubrimiento de América por Cristóbal Colón",
        distractores: ["La Revolución Industrial", "La firma de la Declaración de Independencia", "La caída del Imperio Romano"],
    },
    {
        pregunta: "¿Qué es una monarquía absoluta?",
        ayuda: "Pista: En una monarquía absoluta, el monarca tiene control total sobre el gobierno y no está limitado por una constitución o leyes.",
        respuesta: "Un sistema de gobierno en el que el monarca tiene control total sobre el Estado",
        distractores: ["Un sistema en el que el poder está dividido entre diferentes ramas del gobierno", "Un gobierno en el que los ciudadanos eligen a sus líderes", "Una forma de gobierno basada en la representación democrática"],
    },
    {
        pregunta: "¿Qué es la globalización?",
        ayuda: "Pista: La globalización se refiere al proceso de interconexión y dependencia entre países y economías a nivel mundial.",
        respuesta: "El proceso de interconexión y dependencia global entre países y economías",
        distractores: ["La independencia económica de un país", "El aislamiento cultural de una nación", "La desconexión entre economías locales"],
    },
    {
        pregunta: "¿Cuál es la función de un gobierno local?",
        ayuda: "Pista: Los gobiernos locales se encargan de administrar y regular asuntos dentro de una comunidad o región específica.",
        respuesta: "Administrar y regular asuntos dentro de una comunidad o región específica",
        distractores: ["Establecer políticas a nivel nacional", "Controlar las relaciones internacionales", "Supervisar las finanzas de empresas privadas"],
    },
    {
        pregunta: "¿Qué es un tratado internacional?",
        ayuda: "Pista: Un tratado internacional es un acuerdo formal entre países que regula aspectos de sus relaciones mutuas.",
        respuesta: "Un acuerdo formal entre países que regula sus relaciones",
        distractores: ["Una ley interna de un país", "Un acuerdo comercial entre empresas", "Un documento sobre derechos civiles"],
    },
    {
        pregunta: "¿Qué evento histórico se conoce como la Revolución Francesa?",
        ayuda: "Pista: La Revolución Francesa fue un período de gran cambio político y social en Francia que llevó al derrocamiento de la monarquía.",
        respuesta: "Un período de cambio político y social en Francia que llevó al derrocamiento de la monarquía",
        distractores: ["La independencia de los Estados Unidos", "La unificación de Italia", "La formación de la Unión Europea"],
    },
    {
        pregunta: "¿Qué es una dictadura?",
        ayuda: "Pista: En una dictadura, el poder está concentrado en una sola persona o grupo, y las libertades individuales suelen estar restringidas.",
        respuesta: "Un sistema de gobierno en el que el poder está concentrado en una sola persona o grupo",
        distractores: ["Un sistema en el que el poder es compartido por diferentes ramas del gobierno", "Una forma de gobierno basada en elecciones libres y justas", "Un gobierno donde los ciudadanos tienen poder absoluto"],
    },
    {
        pregunta: "¿Qué es una región geográfica?",
        ayuda: "Pista: Una región geográfica es una área definida por características físicas, culturales o políticas específicas.",
        respuesta: "Un área definida por características físicas, culturales o políticas",
        distractores: ["Una ciudad o pueblo específico", "Una línea fronteriza entre dos países", "Una forma de gobierno local"],
    },
    {
        pregunta: "¿Cuál fue uno de los efectos principales de la Revolución Industrial?",
        ayuda: "Pista: La Revolución Industrial llevó a cambios significativos en la producción y el trabajo.",
        respuesta: "El aumento de la producción industrial y el crecimiento urbano",
        distractores: ["La disminución de la población rural", "La mejora de las relaciones internacionales", "La reducción del comercio global"],
    },
    {
        pregunta: "¿Qué es el censo de una población?",
        ayuda: "Pista: Un censo es una recopilación sistemática de datos sobre la población y las características de un país o región.",
        respuesta: "Una recopilación sistemática de datos sobre la población y sus características",
        distractores: ["Un estudio sobre el clima de una región", "Una evaluación de los recursos naturales", "Un informe sobre la economía internacional"],
    },
    {
        pregunta: "¿Qué papel desempeñaron los exploradores en la Edad Media?",
        ayuda: "Pista: Los exploradores medievales realizaron viajes para descubrir nuevas rutas comerciales y territorios.",
        respuesta: "Descubrir nuevas rutas comerciales y territorios",
        distractores: ["Consolidar el poder político en sus países", "Establecer alianzas militares", "Desarrollar nuevas tecnologías de comunicación"],
    },
    {
        pregunta: "¿Qué es una organización no gubernamental (ONG)?",
        ayuda: "Pista: Las ONG son organizaciones independientes que trabajan en áreas como el desarrollo social, los derechos humanos y la ayuda humanitaria.",
        respuesta: "Una organización independiente que trabaja en desarrollo social, derechos humanos o ayuda humanitaria",
        distractores: ["Una agencia gubernamental encargada de políticas públicas", "Una empresa privada con fines de lucro", "Una institución académica que ofrece educación superior"],
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
