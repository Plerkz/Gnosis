let baseDePreguntas = [
    {
        pregunta: "¿Qué es una casa?",
        ayuda: "Pista: Es el lugar donde vives con tu familia.",
        respuesta: "Un lugar donde vives con tu familia",
        distractores: ["Una escuela", "Un parque", "Una tienda"]
    },
    {
        pregunta: "¿Cómo se llama el lugar donde guardamos los libros en la escuela?",
        ayuda: "Pista: Es el lugar donde puedes leer y tomar libros prestados.",
        respuesta: "Biblioteca",
        distractores: ["Aula", "Gimnasio", "Comedor"]
    },
    {
        pregunta: "¿Qué es un país?",
        ayuda: "Pista: Es una gran área de tierra con su propio gobierno.",
        respuesta: "Una gran área con su propio gobierno",
        distractores: ["Una ciudad", "Un barrio", "Una casa"]
    },
    {
        pregunta: "¿Qué es una regla en la escuela?",
        ayuda: "Pista: Es una norma que todos deben seguir.",
        respuesta: "Una norma que todos deben seguir",
        distractores: ["Un libro", "Un juguete", "Una clase"]
    },
    {
        pregunta: "¿Qué es una fiesta de cumpleaños?",
        ayuda: "Pista: Es una celebración que haces cada año en tu cumpleaños.",
        respuesta: "Una celebración en tu cumpleaños",
        distractores: ["Una reunión familiar", "Una fiesta de Navidad", "Una salida al cine"]
    },
    {
        pregunta: "¿Qué significa 'cuidar' a alguien?",
        ayuda: "Pista: Es proteger y asegurarte de que estén bien.",
        respuesta: "Proteger y asegurarte de que estén bien",
        distractores: ["Jugar con ellos", "Enseñarles", "Reñirles"]
    },
    {
        pregunta: "¿Cómo se llama el lugar donde compras comida?",
        ayuda: "Pista: Es una tienda donde encuentras alimentos y productos.",
        respuesta: "Supermercado",
        distractores: ["Restaurante", "Farmacia", "Taller"]
    },
    {
        pregunta: "¿Qué es una tradición?",
        ayuda: "Pista: Es una costumbre que se repite en ocasiones especiales.",
        respuesta: "Una costumbre que se repite",
        distractores: ["Un deporte", "Una película", "Un lugar"]
    },
    {
        pregunta: "¿Qué significa 'respetar' a los demás?",
        ayuda: "Pista: Es tratar a las personas con amabilidad y consideración.",
        respuesta: "Tratar a las personas con amabilidad",
        distractores: ["Gritarles", "Ignorarlas", "Competir con ellas"]
    },
    {
        pregunta: "¿Cómo se llama el lugar donde se cuida a las personas cuando están enfermas?",
        ayuda: "Pista: Es un lugar donde los doctores ayudan a los enfermos.",
        respuesta: "Hospital",
        distractores: ["Escuela", "Biblioteca", "Parque"]
    },
    {
        pregunta: "¿Qué es una familia?",
        ayuda: "Pista: Son las personas con las que vives y te cuidan.",
        respuesta: "Las personas con las que vives y te cuidan",
        distractores: ["Tus amigos", "Tus compañeros de clase", "Tus vecinos"]
    },
    {
        pregunta: "¿Qué se celebra en un Día de Independencia?",
        ayuda: "Pista: Es una celebración de la libertad de un país.",
        respuesta: "La libertad de un país",
        distractores: ["El inicio del año escolar", "El cumpleaños de un presidente", "Una festividad religiosa"]
    },
    {
        pregunta: "¿Qué significa 'viajar'?",
        ayuda: "Pista: Es ir a diferentes lugares lejos de tu casa.",
        respuesta: "Ir a diferentes lugares",
        distractores: ["Quedarse en casa", "Leer un libro", "Jugar en el jardín"]
    },
    {
        pregunta: "¿Qué es un mapa?",
        ayuda: "Pista: Es una imagen que muestra los lugares de la tierra.",
        respuesta: "Una imagen de los lugares de la tierra",
        distractores: ["Un dibujo", "Un libro", "Un juguete"]
    },
    {
        pregunta: "¿Qué es un amigo?",
        ayuda: "Pista: Es alguien con quien te gusta jugar y compartir.",
        respuesta: "Alguien con quien juegas y compartes",
        distractores: ["Un familiar", "Un compañero de clase", "Un vecino"]
    },
    {
        pregunta: "¿Qué se celebra en un desfile?",
        ayuda: "Pista: Es una celebración pública con música y bailes en la calle.",
        respuesta: "Una celebración pública en la calle",
        distractores: ["Una reunión familiar", "Una fiesta en casa", "Una actividad escolar"]
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