let baseDePreguntas = [
    {
        pregunta: "¿Qué es una ciudad?",
        ayuda: "Pista: Una ciudad es un lugar con muchas personas y edificios.",
        respuesta: "Un lugar con muchas personas y edificios",
        distractores: ["Un tipo de animal", "Una planta", "Un objeto"],
    },
    {
        pregunta: "¿Qué usamos para viajar de un lugar a otro?",
        ayuda: "Pista: Puedes usar este medio para ir a la escuela o al parque.",
        respuesta: "Transporte",
        distractores: ["Comida", "Ropa", "Juguete"],
    },
    {
        pregunta: "¿Cómo se llama el lugar donde vivimos?",
        ayuda: "Pista: Este lugar es donde está tu casa y tu familia.",
        respuesta: "Hogar",
        distractores: ["Escuela", "Parque", "Oficina"],
    },
    {
        pregunta: "¿Qué es una comunidad?",
        ayuda: "Pista: Una comunidad es un grupo de personas que viven en el mismo lugar y se ayudan entre sí.",
        respuesta: "Un grupo de personas que viven en el mismo lugar",
        distractores: ["Un tipo de animal", "Un objeto", "Un lugar de vacaciones"],
    },
    {
        pregunta: "¿Cuál es la principal función de una escuela?",
        ayuda: "Pista: En la escuela aprendemos y hacemos amigos.",
        respuesta: "Enseñar y aprender",
        distractores: ["Jugar videojuegos", "Comprar comida", "Hacer deporte"],
    },
    {
        pregunta: "¿Qué es un país?",
        ayuda: "Pista: Un país es una gran región con un gobierno y muchas personas.",
        respuesta: "Una gran región con un gobierno",
        distractores: ["Una calle", "Una casa", "Un río"],
    },
    {
        pregunta: "¿Qué celebramos en una fiesta de cumpleaños?",
        ayuda: "Pista: En una fiesta de cumpleaños celebramos el día en que nacimos.",
        respuesta: "El día en que nacimos",
        distractores: ["La llegada de la primavera", "El inicio de la escuela", "La Navidad"],
    },
    {
        pregunta: "¿Qué es un mapa?",
        ayuda: "Pista: Un mapa nos muestra dónde están los lugares y las calles.",
        respuesta: "Una representación de lugares y calles",
        distractores: ["Una lista de compras", "Una foto de la familia", "Un libro de cuentos"],
    },
    {
        pregunta: "¿Qué es una familia?",
        ayuda: "Pista: La familia está formada por las personas con las que vivimos y que nos cuidan.",
        respuesta: "Las personas con las que vivimos y nos cuidan",
        distractores: ["Un grupo de amigos", "Nuestros vecinos", "Las personas en la escuela"],
    },
    {
        pregunta: "¿Qué es un parque?",
        ayuda: "Pista: Un parque es un lugar al aire libre donde se puede jugar y pasear.",
        respuesta: "Un lugar al aire libre para jugar y pasear",
        distractores: ["Una oficina", "Un supermercado", "Una habitación"],
    },
    {
        pregunta: "¿Cuál es la función principal de un médico?",
        ayuda: "Pista: Los médicos nos ayudan a mantenernos saludables.",
        respuesta: "Cuidar la salud de las personas",
        distractores: ["Enseñar en la escuela", "Construir casas", "Cocinar comida"],
    },
    {
        pregunta: "¿Qué es un evento comunitario?",
        ayuda: "Pista: Es una actividad en la que participamos todos en nuestra comunidad.",
        respuesta: "Una actividad en la que participa toda la comunidad",
        distractores: ["Una clase de matemáticas", "Un juego en casa", "Una película en el cine"],
    },
    {
        pregunta: "¿Qué es una tradición?",
        ayuda: "Pista: Una tradición es una costumbre que se repite en una familia o comunidad.",
        respuesta: "Una costumbre que se repite en una familia o comunidad",
        distractores: ["Un juguete nuevo", "Una comida especial", "Un libro de cuentos"],
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