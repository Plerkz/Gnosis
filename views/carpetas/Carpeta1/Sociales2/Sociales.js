let baseDePreguntas = [
    {
        pregunta: "¿Qué parte de la planta absorbe agua del suelo?",
        ayuda: "Pista: Está bajo la tierra.",
        respuesta: "Raíces",
        distractores: ["Hojas", "Flores", "Tallos"]
    },
    {
        pregunta: "¿Cómo se llama el líquido que bebemos para mantenernos hidratados?",
        ayuda: "Pista: Es claro y sin sabor.",
        respuesta: "Agua",
        distractores: ["Jugo", "Leche", "Soda"]
    },
    {
        pregunta: "¿Qué parte del cuerpo usamos para respirar?",
        ayuda: "Pista: Están en el pecho y te ayudan a tomar aire.",
        respuesta: "Pulmones",
        distractores: ["Manos", "Oídos", "Piernas"]
    },
    {
        pregunta: "¿Cuál es el principal gas que necesitamos para vivir?",
        ayuda: "Pista: Es el gas que está en el aire.",
        respuesta: "Oxígeno",
        distractores: ["Dióxido de carbono", "Nitrógeno", "Helio"]
    },
    {
        pregunta: "¿Qué parte de la planta hace fotosíntesis?",
        ayuda: "Pista: Son verdes y están en la parte superior.",
        respuesta: "Hojas",
        distractores: ["Raíces", "Flores", "Semillas"]
    },
    {
        pregunta: "¿Qué animal es conocido por tener una larga trompa?",
        ayuda: "Pista: Es un animal grande que vive en la selva.",
        respuesta: "Elefante",
        distractores: ["Perro", "Gato", "León"]
    },
    {
        pregunta: "¿Qué objeto se usa para ver cosas lejanas?",
        ayuda: "Pista: Este objeto tiene lentes grandes y se usa en el campo o en la playa.",
        respuesta: "Binoculares",
        distractores: ["Teléfono", "Reloj", "Ordenador"]
    },
    {
        pregunta: "¿Qué tipo de energía se obtiene del sol?",
        ayuda: "Pista: Es una energía renovable.",
        respuesta: "Energía solar",
        distractores: ["Energía eólica", "Energía hidráulica", "Energía térmica"]
    },
    {
        pregunta: "¿Cómo se llama el proceso cuando el agua se convierte en vapor?",
        ayuda: "Pista: Ocurre cuando calientas el agua.",
        respuesta: "Evaporación",
        distractores: ["Condensación", "Fusión", "Solidificación"]
    },
    {
        pregunta: "¿Qué animal vive en el agua y tiene una concha dura?",
        ayuda: "Pista: Este animal puede estar en el mar o en el río.",
        respuesta: "Tortuga",
        distractores: ["Perro", "Gato", "Vaca"]
    },
    {
        pregunta: "¿Qué objeto usamos para medir la temperatura?",
        ayuda: "Pista: Lo usamos cuando estamos enfermos para saber si tenemos fiebre.",
        respuesta: "Termómetro",
        distractores: ["Reloj", "Mapa", "Cinta métrica"]
    },
    {
        pregunta: "¿Qué parte del cuerpo te ayuda a oír sonidos?",
        ayuda: "Pista: Están en los lados de la cabeza.",
        respuesta: "Oídos",
        distractores: ["Manos", "Ojos", "Boca"]
    },
    {
        pregunta: "¿Qué tipo de planta produce flores y frutas?",
        ayuda: "Pista: Estas plantas tienen partes coloridas y a veces también dan frutos.",
        respuesta: "Planta con flores",
        distractores: ["Musgo", "Helecho", "Alga"]
    },
    {
        pregunta: "¿Qué necesitamos para crecer fuerte y saludable?",
        ayuda: "Pista: Esto incluye frutas, verduras y ejercicio.",
        respuesta: "Buena alimentación y ejercicio",
        distractores: ["Solo dormir", "Jugar videojuegos", "Comer dulces"]
    },
    {
        pregunta: "¿Qué parte del cuerpo usamos para correr y caminar?",
        ayuda: "Pista: Estos están en la parte inferior de las piernas.",
        respuesta: "Pies",
        distractores: ["Manos", "Brazos", "Dedos de la mano"]
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