let baseDePreguntas = [
    {
        pregunta: "¿Qué principio de la física establece que la energía total en un sistema cerrado se conserva, aunque pueda transformarse de una forma a otra?",
        ayuda: "Pista: Este principio es fundamental en la termodinámica y la mecánica.",
        respuesta: "Ley de conservación de la energía",
        distractores: ["Ley de la gravitación universal", "Ley de acción y reacción", "Ley de Coulomb"],
    },
    {
        pregunta: "¿Qué organelo celular es conocido como la 'central energética' de la célula debido a su papel en la producción de ATP?",
        ayuda: "Pista: Este organelo es esencial para la respiración celular.",
        respuesta: "Mitocondria",
        distractores: ["Ribosoma", "Lisoso­ma", "Retículo endoplasmático"],
    },
    {
        pregunta: "¿Cómo se llama el proceso mediante el cual las plantas convierten dióxido de carbono y agua en glucosa y oxígeno usando la luz solar?",
        ayuda: "Pista: Este proceso es crucial para la fotosíntesis.",
        respuesta: "Fotofosforilación",
        distractores: ["Ciclo de Calvin", "Respiración aeróbica", "Fermentación"],
    },
    {
        pregunta: "¿Qué tipo de enlace químico se forma cuando un átomo cede uno o más electrones a otro átomo?",
        ayuda: "Pista: Este tipo de enlace es común en sales y compuestos iónicos.",
        respuesta: "Enlace iónico",
        distractores: ["Enlace covalente", "Enlace metálico", "Enlace de hidrógeno"],
    },
    {
        pregunta: "¿Qué tipo de célula en el sistema nervioso es responsable de transmitir señales eléctricas rápidas a través del cuerpo?",
        ayuda: "Pista: Estas células forman las redes de comunicación del cerebro y la médula espinal.",
        respuesta: "Neurona",
        distractores: ["Glía", "Eritrocito", "Trombocito"],
    },
    {
        pregunta: "¿Qué fenómeno físico se produce cuando la luz cambia de dirección al pasar de un medio a otro con diferente densidad?",
        ayuda: "Pista: Este fenómeno es responsable del efecto de los prismas y los lentes.",
        respuesta: "Refracción",
        distractores: ["Reflexión", "Difracción", "Dispersión"],
    },
    {
        pregunta: "¿Qué tipo de reacciones químicas ocurren en las células para descomponer moléculas complejas en moléculas más simples y liberar energía?",
        ayuda: "Pista: Estos procesos son parte de la respiración celular.",
        respuesta: "Catálisis",
        distractores: ["Síntesis", "Redox", "Condensación"],
    },
    {
        pregunta: "¿Qué teoría sugiere que las placas tectónicas se mueven sobre una capa fluida de magma en la parte superior del manto terrestre?",
        ayuda: "Pista: Esta teoría explica la formación de montañas, terremotos y la deriva continental.",
        respuesta: "Teoría de la tectónica de placas",
        distractores: ["Teoría del origen del universo", "Teoría del equilibrio climático", "Teoría del campo magnético terrestre"],
    },
    {
        pregunta: "¿Qué tipo de energía es liberada en una reacción nuclear cuando los núcleos de los átomos se dividen o fusionan?",
        ayuda: "Pista: Esta energía es utilizada en reactores nucleares y armas nucleares.",
        respuesta: "Energía nuclear",
        distractores: ["Energía eléctrica", "Energía térmica", "Energía cinética"],
    },
    {
        pregunta: "¿Qué elemento químico es fundamental en la formación de ácidos nucleicos y proteínas, y se encuentra en todos los seres vivos?",
        ayuda: "Pista: Este elemento es el componente principal de la estructura del ADN.",
        respuesta: "Carbono",
        distractores: ["Oxígeno", "Hidrógeno", "Nitrógeno"],
    },
    {
        pregunta: "¿Qué tipo de roca se forma cuando minerales en estado líquido se enfrían y solidifican?",
        ayuda: "Pista: Estas rocas pueden ser intrusivas o extrusivas según el lugar de solidificación.",
        respuesta: "Roca ígnea",
        distractores: ["Roca sedimentaria", "Roca metamórfica", "Roca orgánica"],
    },
    {
        pregunta: "¿Qué proceso se refiere a la acumulación de sedimentos en un lugar debido a la acción del agua, el viento o el hielo?",
        ayuda: "Pista: Este proceso es fundamental en la formación de suelos y paisajes.",
        respuesta: "Sedimentación",
        distractores: ["Erosión", "Consolidación", "Descomposición"],
    },
    {
        pregunta: "¿Qué tipo de interacción entre moléculas resulta en la formación de puentes de hidrógeno, afectando la estructura del agua y de las proteínas?",
        ayuda: "Pista: Estos enlaces son responsables de muchas propiedades únicas del agua.",
        respuesta: "Enlaces de hidrógeno",
        distractores: ["Enlaces covalentes", "Enlaces iónicos", "Enlaces metálicos"],
    },
    {
        pregunta: "¿Qué es un ecosistema en el contexto de la ecología?",
        ayuda: "Pista: Un ecosistema incluye todos los organismos y el ambiente físico en una área determinada.",
        respuesta: "Una comunidad de organismos y su entorno físico",
        distractores: ["Una comunidad de organismos", "Un hábitat específico", "Una sola especie en un área"],
    },
    {
        pregunta: "¿Qué fenómeno ocurre cuando la energía cinética de las moléculas en un sólido aumenta, provocando que el sólido se convierta en líquido?",
        ayuda: "Pista: Este fenómeno ocurre al calentar el hielo hasta que se convierte en agua.",
        respuesta: "Fusión",
        distractores: ["Solidificación", "Evaporación", "Condensación"],
    },
    {
    pregunta: "¿Qué sustancia química es esencial para la formación de huesos y dientes y se encuentra en productos lácteos y vegetales de hoja verde?",
    ayuda: "Pista: Este mineral es crucial para la salud ósea.",
    respuesta: "Calcio",
    distractores: ["Sodio", "Potasio", "Magnesio"],
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
