let baseDePreguntas = [
    {
        pregunta: "¿Cuál fue la principal causa de la Guerra Civil Americana?",
        ayuda: "Pista: Este conflicto se centró en la esclavitud y los derechos de los estados.",
        respuesta: "La esclavitud",
        distractores: ["Los impuestos altos", "Los derechos de los estados", "Las disputas territoriales"],
    },
    {
        pregunta: "¿Qué imperio construyó una vasta red de carreteras y tuvo su capital en Tenochtitlán?",
        ayuda: "Pista: Este imperio estaba ubicado en lo que hoy es México.",
        respuesta: "El Imperio Azteca",
        distractores: ["El Imperio Inca", "El Imperio Maya", "El Imperio Romano"],
    },
    {
        pregunta: "¿Cuál es el nombre del tratado que puso fin a la Primera Guerra Mundial?",
        ayuda: "Pista: Este tratado se firmó en la ciudad francesa de Versalles.",
        respuesta: "Tratado de Versalles",
        distractores: ["Tratado de París", "Tratado de Ginebra", "Tratado de Berlín"],
    },
    {
        pregunta: "¿Qué sistema político se basa en la propiedad común y la eliminación de las clases sociales?",
        ayuda: "Pista: Este sistema fue implementado en la Unión Soviética.",
        respuesta: "Comunismo",
        distractores: ["Capitalismo", "Feudalismo", "Monarquía"],
    },
    {
        pregunta: "¿Qué civilización antigua construyó las pirámides de Giza?",
        ayuda: "Pista: Esta civilización estaba ubicada en el noreste de África.",
        respuesta: "Los egipcios",
        distractores: ["Los romanos", "Los griegos", "Los fenicios"],
    },
    {
        pregunta: "¿Cuál es el nombre del documento que establece los derechos fundamentales de los ciudadanos en los Estados Unidos?",
        ayuda: "Pista: Este documento es parte de la Constitución de los EE. UU.",
        respuesta: "La Declaración de Derechos (Bill of Rights)",
        distractores: ["La Declaración de Independencia", "La Carta Magna", "El Tratado de Paz"],
    },
    {
        pregunta: "¿Qué guerra se libró entre 1950 y 1953 en la península de Corea?",
        ayuda: "Pista: Esta guerra enfrentó a Corea del Norte y Corea del Sur con el apoyo de diferentes potencias.",
        respuesta: "La Guerra de Corea",
        distractores: ["La Guerra de Vietnam", "La Guerra Fría", "La Segunda Guerra Mundial"],
    },
    {
        pregunta: "¿Qué imperio estaba dirigido por César Augusto y se extendió por todo el Mediterráneo?",
        ayuda: "Pista: Este imperio tenía su capital en Roma.",
        respuesta: "El Imperio Romano",
        distractores: ["El Imperio Bizantino", "El Imperio Otomano", "El Imperio Persa"],
    },
    {
        pregunta: "¿Qué tratado dividió el Nuevo Mundo entre España y Portugal en 1494?",
        ayuda: "Pista: Este tratado fue firmado en la ciudad de Tordesillas.",
        respuesta: "Tratado de Tordesillas",
        distractores: ["Tratado de Zaragoza", "Tratado de Utrecht", "Tratado de París"],
    },
    {
        pregunta: "¿Qué movimiento filosófico y cultural se desarrolló en Europa durante el Renacimiento?",
        ayuda: "Pista: Este movimiento enfatizó el estudio de las artes, la literatura y la ciencia.",
        respuesta: "Humanismo",
        distractores: ["Ilustración", "Barroco", "Romanticismo"],
    },
    {
        pregunta: "¿Qué líder sudafricano luchó contra el apartheid y se convirtió en el primer presidente negro de Sudáfrica?",
        ayuda: "Pista: Este líder pasó 27 años en prisión antes de asumir la presidencia.",
        respuesta: "Nelson Mandela",
        distractores: ["Desmond Tutu", "Steve Biko", "Winnie Mandela"],
    },
    {
        pregunta: "¿Cuál es el nombre del periodo de la historia europea que siguió a la caída del Imperio Romano y precedió al Renacimiento?",
        ayuda: "Pista: Este periodo también se conoce como la Edad Media.",
        respuesta: "La Edad Media",
        distractores: ["La Antigüedad", "El Renacimiento", "La Edad Moderna"],
    },
    {
        pregunta: "¿Qué revolución científica del siglo XVII promovió el método científico y transformó el entendimiento del universo?",
        ayuda: "Pista: Este movimiento incluyó figuras como Galileo y Newton.",
        respuesta: "La Revolución Científica",
        distractores: ["La Revolución Industrial", "La Revolución Francesa", "La Revolución Americana"],
    },
    {
        pregunta: "¿Qué evento histórico marcó el fin del régimen comunista en Europa del Este en 1989?",
        ayuda: "Pista: Este evento se relaciona con la caída de un muro en Berlín.",
        respuesta: "La caída del Muro de Berlín",
        distractores: ["La Revolución Rusa", "El colapso de la Unión Soviética", "La Guerra de los Balcanes"],
    },
    {
        pregunta: "¿Qué explorador portugués fue el primero en llegar a India por mar, navegando alrededor del Cabo de Buena Esperanza?",
        ayuda: "Pista: Este explorador abrió la ruta marítima entre Europa y Asia.",
        respuesta: "Vasco da Gama",
        distractores: ["Fernão de Magalhães", "Cristóbal Colón", "Bartolomeu Dias"],
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
