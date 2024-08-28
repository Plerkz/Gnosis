let baseDePreguntas = [
    {
        pregunta: "¿Qué tratado puso fin a la Primera Guerra Mundial y qué países principales participaron en su firma?",
        ayuda: "Pista: Este tratado se firmó en 1919 y tuvo lugar en la ciudad francesa de Versalles.",
        respuesta: "Tratado de Versalles; firmado principalmente por Alemania, Francia, Reino Unido y Estados Unidos.",
        distractores: ["Tratado de Tordesillas; firmado entre España y Portugal", "Tratado de Utrecht; firmado entre Francia, España y el Reino Unido", "Tratado de Paz de París; firmado entre Estados Unidos y el Reino Unido"],
    },
    {
        pregunta: "¿Qué imperio se extendió desde el noreste de Asia hasta el suroeste de Europa durante la Edad Media?",
        ayuda: "Pista: Este imperio fue uno de los más grandes y duraderos de la historia, abarcando gran parte de Europa Oriental y Asia.",
        respuesta: "Imperio Bizantino",
        distractores: ["Imperio Romano", "Imperio Otomano", "Imperio Mongol"],
    },
    {
        pregunta: "¿Cómo se llama el proceso de industrialización que comenzó en Gran Bretaña a finales del siglo XVIII y se extendió por el mundo?",
        ayuda: "Pista: Este proceso cambió la forma en que se producían bienes y tuvo un gran impacto en la economía y la sociedad.",
        respuesta: "Revolución Industrial",
        distractores: ["Revolución Francesa", "Revolución Científica", "Revolución Americana"],
    },
    {
        pregunta: "¿Qué filósofo griego es conocido por sus ideas sobre la teoría de las formas y el gobierno ideal?",
        ayuda: "Pista: Este filósofo fue el discípulo de Sócrates y escribió 'La República'.",
        respuesta: "Platón",
        distractores: ["Aristóteles", "Sócrates", "Pitágoras"],
    },
    {
        pregunta: "¿Qué evento histórico llevó a la independencia de las colonias americanas del dominio británico en 1776?",
        ayuda: "Pista: Este evento se conmemora en Estados Unidos cada 4 de julio.",
        respuesta: "Declaración de Independencia de los Estados Unidos",
        distractores: ["Revolución Francesa", "Guerra de Secesión", "Revolución Industrial"],
    },
    {
        pregunta: "¿Cuál fue la principal causa de la caída del Imperio Romano de Occidente en el año 476 d.C.?",
        ayuda: "Pista: Esta causa involucró invasiones de tribus bárbaras y problemas internos en el imperio.",
        respuesta: "Invasiones de tribus bárbaras y crisis internas",
        distractores: ["Descubrimiento de América", "Revolución Francesa", "La peste negra"],
    },
    {
        pregunta: "¿Qué teoría económica fue promovida por Adam Smith en su obra 'La riqueza de las naciones'?",
        ayuda: "Pista: Esta teoría sostiene que la economía funciona mejor con mínima intervención gubernamental.",
        respuesta: "Liberalismo económico o capitalismo de mercado libre",
        distractores: ["Teoría del keynesianismo", "Teoría del socialismo", "Teoría del mercantilismo"],
    },
    {
        pregunta: "¿Qué civilización antigua desarrolló el sistema de escritura cuneiforme y tuvo una influencia significativa en Mesopotamia?",
        ayuda: "Pista: Esta civilización es conocida por sus contribuciones a la escritura y la ley.",
        respuesta: "Sumerios",
        distractores: ["Egipcios", "Asirios", "Babilonios"],
    },
    {
        pregunta: "¿Cuál fue el principal objetivo de la misión Apolo 11 en 1969?",
        ayuda: "Pista: Esta misión espacial fue famosa por ser la primera en llevar seres humanos a la superficie de otro cuerpo celeste.",
        respuesta: "Aterrizar en la Luna y devolver a los astronautas a la Tierra",
        distractores: ["Llevar a astronautas a Marte", "Establecer una estación espacial en órbita", "Realizar un paseo espacial alrededor de la Tierra"],
    },
    {
        pregunta: "¿Qué tratado internacional fue firmado en 1945 para establecer la Organización de las Naciones Unidas?",
        ayuda: "Pista: Este tratado se firmó en la ciudad de San Francisco.",
        respuesta: "Carta de las Naciones Unidas",
        distractores: ["Tratado de Versalles", "Tratado de París", "Tratado de Yalta"],
    },
    {
        pregunta: "¿Qué evento desencadenó la crisis de los misiles en Cuba en 1962?",
        ayuda: "Pista: Este evento involucró la instalación de misiles soviéticos en un país cercano a Estados Unidos.",
        respuesta: "Descubrimiento de misiles soviéticos en Cuba",
        distractores: ["La invasión de la Bahía de Cochinos", "El bloqueo de Berlín", "La construcción del Muro de Berlín"],
    },
    {
        pregunta: "¿Qué impacto tuvo el Tratado de Tordesillas en la exploración y colonización de América?",
        ayuda: "Pista: Este tratado dividió las zonas de exploración y colonización entre dos potencias europeas.",
        respuesta: "Dividió el Nuevo Mundo entre España y Portugal",
        distractores: ["Permitió la colonización de América del Norte por Inglaterra y Francia", "Unificó los derechos de exploración para todas las potencias europeas", "Estableció un acuerdo para compartir recursos naturales en América del Sur"],
    },
    {
        pregunta: "¿Qué imperio conquistó gran parte de América del Sur en el siglo XVI bajo el liderazgo de Francisco Pizarro?",
        ayuda: "Pista: Este imperio estaba ubicado en el actual Perú y sus conquistadores buscaron oro y riquezas.",
        respuesta: "Imperio Inca",
        distractores: ["Imperio Azteca", "Imperio Maya", "Imperio Chibcha"],
    },
    {
        pregunta: "¿Qué evento fue una de las principales causas de la Guerra de Secesión en Estados Unidos?",
        ayuda: "Pista: Este evento estuvo relacionado con las disputas sobre la esclavitud y los derechos de los estados.",
        respuesta: "La disputa sobre la esclavitud",
        distractores: ["La independencia de Texas", "La compra de Alaska", "La crisis del Canal de Panamá"],
    },
    {
        pregunta: "¿Cuál fue el papel de la Ruta de la Seda en el comercio entre Asia y Europa durante la Edad Media?",
        ayuda: "Pista: Esta ruta facilitó el intercambio de bienes, culturas e ideas entre continentes.",
        respuesta: "Facilitó el comercio y el intercambio cultural entre Asia y Europa",
        distractores: ["Solo permitió el comercio de especias", "Fue una ruta marítima que conectaba los océanos Atlántico e Índico", "Era utilizada únicamente para la difusión de religiones"],
    },
    {
        pregunta: "¿Qué evento marcó el inicio de la Revolución Francesa en 1789?",
        ayuda: "Pista: Este evento fue un ataque a una prisión que simbolizaba la opresión del régimen.",
        respuesta: "La toma de la Bastilla",
        distractores: ["La firma del Tratado de Versalles", "La ejecución de Luis XVI", "La Revolución Industrial"],
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
