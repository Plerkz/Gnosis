let baseDePreguntas = [
    {
        pregunta: "¿Qué fue el Tratado de Versalles y cómo afectó a Alemania después de la Primera Guerra Mundial?",
        ayuda: "Pista: Este tratado impuso varias sanciones a Alemania y redibujó las fronteras europeas.",
        respuesta: "El Tratado de Versalles fue un acuerdo de paz que impuso severas reparaciones de guerra y restricciones militares a Alemania, y redibujó las fronteras de Europa.",
        distractores: ["Un tratado comercial entre Francia y Alemania", "Un acuerdo de cooperación económica entre países europeos", "Un tratado que estableció la Liga de Naciones sin consecuencias para Alemania"],
    },
    {
        pregunta: "¿Cómo influyó la Revolución Industrial en la urbanización y las condiciones laborales en el siglo XIX?",
        ayuda: "Pista: La Revolución Industrial llevó a un rápido crecimiento de las ciudades y a condiciones laborales a menudo difíciles.",
        respuesta: "La Revolución Industrial impulsó la urbanización rápida y llevó a condiciones laborales precarias en fábricas y ciudades.",
        distractores: ["Mejoró las condiciones laborales y redujo la urbanización", "Eliminó las ciudades y promovió el trabajo rural", "No tuvo impacto en las condiciones laborales ni en la urbanización"],
    },
    {
        pregunta: "¿Qué fue el Renacimiento y cuáles fueron sus principales características?",
        ayuda: "Pista: Este período cultural se destacó por un renacer del interés en el arte, la ciencia y la antigüedad clásica.",
        respuesta: "El Renacimiento fue un movimiento cultural en Europa caracterizado por un renacimiento del interés en el arte, la ciencia, y la cultura clásica grecolatina.",
        distractores: ["Una era de oscuridad y estancamiento cultural", "Un período de expansión militar y conquista", "Un movimiento exclusivamente religioso"],
    },
    {
        pregunta: "¿Qué fue la Guerra de los Treinta Años y cuáles fueron sus principales consecuencias en Europa?",
        ayuda: "Pista: Esta guerra tuvo un fuerte impacto en Europa central y se centró en conflictos religiosos y políticos.",
        respuesta: "La Guerra de los Treinta Años fue un conflicto prolongado que afectó principalmente a Alemania y resultó en grandes pérdidas humanas y cambios en el equilibrio de poder en Europa.",
        distractores: ["Una guerra corta entre Francia y España", "Un conflicto marítimo entre potencias europeas", "Una guerra de independencia en las colonias americanas"],
    },
    {
        pregunta: "¿Qué fue la Reforma Protestante y quién fue su principal líder?",
        ayuda: "Pista: Este movimiento religioso criticó la corrupción en la Iglesia Católica y llevó a la creación de nuevas denominaciones cristianas.",
        respuesta: "La Reforma Protestante fue un movimiento que cuestionó las prácticas de la Iglesia Católica y su principal líder fue Martín Lutero.",
        distractores: ["Un movimiento para reformar el sistema educativo europeo", "Un intento de fortalecer el poder de la Iglesia Católica", "Una campaña militar contra el Imperio Otomano"],
    },
    {
        pregunta: "¿Qué impacto tuvo el colonialismo europeo en las sociedades africanas durante el siglo XIX?",
        ayuda: "Pista: El colonialismo llevó a la explotación de recursos y cambios en las estructuras sociales en África.",
        respuesta: "El colonialismo europeo provocó la explotación de recursos naturales, la imposición de nuevas estructuras sociales, y alteró profundamente las sociedades africanas.",
        distractores: ["Promovió el desarrollo económico equitativo en África", "Preservó las estructuras sociales tradicionales en las colonias", "No tuvo impacto significativo en las sociedades africanas"],
    },
    {
        pregunta: "¿Qué es el sistema de castas en la India y cómo ha afectado la sociedad india moderna?",
        ayuda: "Pista: Este sistema tradicional clasifica a las personas en jerarquías sociales rígidas y sigue teniendo efectos en la sociedad actual.",
        respuesta: "El sistema de castas es un sistema de jerarquía social en la India que ha influido en la estructura social y sigue afectando las interacciones sociales y económicas en la India moderna.",
        distractores: ["Un sistema de gobierno democrático en la India", "Un conjunto de leyes económicas aplicadas a todas las personas", "Un sistema de clasificación basado en la riqueza económica"],
    },
    {
        pregunta: "¿Qué fue el apartheid en Sudáfrica y cómo se logró su abolición?",
        ayuda: "Pista: El apartheid fue un sistema de segregación racial en Sudáfrica que fue abolido a través de la lucha política y social.",
        respuesta: "El apartheid fue un sistema de segregación racial en Sudáfrica que se logró abolir mediante la resistencia política y social, liderada por figuras como Nelson Mandela.",
        distractores: ["Un sistema de gobierno basado en la igualdad racial", "Un acuerdo comercial entre países africanos", "Una política de cooperación internacional en Sudáfrica"],
    },
    {
        pregunta: "¿Qué fue el Plan Marshall y cómo contribuyó a la recuperación de Europa después de la Segunda Guerra Mundial?",
        ayuda: "Pista: Este plan proporcionó ayuda económica a los países europeos para su reconstrucción.",
        respuesta: "El Plan Marshall fue un programa de ayuda económica de Estados Unidos para la reconstrucción de Europa después de la Segunda Guerra Mundial.",
        distractores: ["Un acuerdo militar entre Estados Unidos y la Unión Soviética", "Un tratado de paz entre países europeos", "Un programa para la redistribución de tierras en Europa"],
    },
    {
        pregunta: "¿Cómo influyó la Revolución Francesa en el desarrollo de la democracia moderna?",
        ayuda: "Pista: La Revolución Francesa introdujo conceptos clave como la igualdad y los derechos humanos en la política.",
        respuesta: "La Revolución Francesa introdujo ideas de igualdad, derechos humanos y soberanía popular que influyeron en el desarrollo de sistemas democráticos modernos.",
        distractores: ["Promovió la restauración de monarquías absolutas en Europa", "No tuvo impacto en el desarrollo de la democracia", "Consolidó el poder absoluto de la Iglesia Católica"],
    },
    {
        pregunta: "¿Qué fue la Guerra Fría y cuáles fueron sus principales frentes de conflicto?",
        ayuda: "Pista: La Guerra Fría fue un período de tensión entre dos superpotencias sin enfrentamientos directos.",
        respuesta: "La Guerra Fría fue un conflicto ideológico y político entre Estados Unidos y la Unión Soviética, con frentes de conflicto en Asia, Europa y América Latina.",
        distractores: ["Una serie de guerras directas entre potencias europeas", "Un conflicto militar entre dos grandes imperios coloniales", "Una serie de enfrentamientos entre países de América del Norte"],
    },
    {
        pregunta: "¿Qué fue el Tratado de Tordesillas y cómo afectó a la colonización de América?",
        ayuda: "Pista: Este tratado dividió las tierras del Nuevo Mundo entre dos potencias europeas.",
        respuesta: "El Tratado de Tordesillas fue un acuerdo entre España y Portugal que dividió el mundo no europeo en zonas de influencia para la colonización.",
        distractores: ["Un tratado que estableció una alianza militar entre España y Portugal", "Un acuerdo sobre comercio entre potencias europeas", "Un tratado que resolvió conflictos territoriales en Asia"],
    },
    {
        pregunta: "¿Cuál fue el impacto de la Revolución Industrial en la clase trabajadora en el siglo XIX?",
        ayuda: "Pista: La Revolución Industrial cambió las condiciones de vida y trabajo de las personas en las ciudades.",
        respuesta: "La Revolución Industrial llevó a condiciones de trabajo difíciles, largas horas y bajos salarios para la clase trabajadora, además de un aumento en la urbanización.",
        distractores: ["Mejoró las condiciones laborales y promovió el bienestar de los trabajadores", "No tuvo impacto en la clase trabajadora", "Consolidó la riqueza en manos de la clase trabajadora"],
    },
    {
        pregunta: "¿Qué fue la Liga de Naciones y por qué no logró prevenir la Segunda Guerra Mundial?",
        ayuda: "Pista: La Liga de Naciones fue una organización creada para mantener la paz, pero enfrentó problemas de eficacia.",
        respuesta: "La Liga de Naciones fue una organización internacional creada para promover la paz, pero no logró prevenir la Segunda Guerra Mundial debido a la falta de poder para imponer sus decisiones y la ausencia de países clave.",
        distractores: ["Una organización económica destinada a promover el comercio", "Una alianza militar entre potencias europeas", "Un movimiento cultural para la cooperación internacional"],
    },
    {
        pregunta: "¿Cómo influyó la Revolución Científica del siglo XVII en el pensamiento moderno?",
        ayuda: "Pista: Este movimiento promovió el uso del método científico y cuestionó las ideas tradicionales.",
        respuesta: "La Revolución Científica promovió el uso del método científico, el pensamiento crítico y la investigación empírica, influyendo en el desarrollo del pensamiento moderno.",
        distractores: ["Reforzó la autoridad de las creencias religiosas tradicionales", "Desalojó a los científicos y fomentó la ignorancia", "No tuvo impacto en el pensamiento moderno"],
    },
    {
        pregunta: "¿Qué eventos llevaron a la independencia de las colonias españolas en América Latina?",
        ayuda: "Pista: La independencia se produjo a través de una serie de movimientos revolucionarios y guerras.",
        respuesta: "La independencia de las colonias españolas en América Latina fue el resultado de movimientos revolucionarios y guerras lideradas por figuras como Simón Bolívar y José de San Martín.",
        distractores: ["Un acuerdo pacífico entre España y las colonias", "La intervención militar de potencias europeas en favor de España", "Un proceso de integración económica entre las colonias y España"],
    }
]
;

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
