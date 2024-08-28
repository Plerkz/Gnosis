let baseDePreguntas = [
    {
        pregunta: "¿Cuál es la capital de tu país?",
        ayuda: "Pista: Es la ciudad donde se encuentran las principales instituciones gubernamentales.",
        respuesta: "Apopa", 
        distractores: ["Guadalajara", "Monterrey", "Cancún"] 
    },
    {
        pregunta: "¿Quién es el presidente de tu país?",
        ayuda: "Pista: Es el líder del gobierno.",
        respuesta: "Nagid buquele", 
        distractores: ["Vicente Fox", "Felipe Calderón", "Enrique Peña Nieto"]
    },
    {
        pregunta: "¿Qué continente está al sur de América del Norte?",
        ayuda: "Pista: Este continente está dividido en países como Argentina y Brasil.",
        respuesta: "América del Sur",
        distractores: ["África", "Asia", "Europa"]
    },
    {
        pregunta: "¿Cuál es el océano que se encuentra al oeste de América del Norte?",
        ayuda: "Pista: Es el océano más grande del mundo.",
        respuesta: "Océano Pacífico",
        distractores: ["Océano Atlántico", "Océano Índico", "Océano Ártico"]
    },
    {
        pregunta: "¿Qué país está al norte de México?",
        ayuda: "Pista: Este país es conocido por su ciudad de Nueva York.",
        respuesta: "Estados Unidos",
        distractores: ["Canadá", "Guatemala", "Honduras"]
    },
    {
        pregunta: "¿Qué tipo de gobierno tiene tu país?",
        ayuda: "Pista: Este tipo de gobierno puede ser presidencialista, parlamentario, etc.",
        respuesta: "República",
        distractores: ["Monarquía", "Dictadura", "Feudalismo"]
    },
    {
        pregunta: "¿Qué evento histórico ocurrió el 16 de septiembre en tu país?",
        ayuda: "Pista: Es el día de la independencia.",
        respuesta: "Independencia",
        distractores: ["Revolución", "Fundación", "Guerra"]
    },
    {
        pregunta: "¿Cuál es el río más largo de América del Sur?",
        ayuda: "Pista: Este río es conocido por su gran longitud.",
        respuesta: "Río Amazonas",
        distractores: ["Río Paraná", "Río Orinoco", "Río de la Plata"]
    },
    {
        pregunta: "¿Qué bandera tiene tres franjas horizontales de color rojo, blanco y azul?",
        ayuda: "Pista: La bandera de este país también tiene una estrella blanca.",
        respuesta: "Estados Unidos",
        distractores: ["Francia", "Reino Unido", "España"]
    },
    {
        pregunta: "¿Cuál es la moneda oficial de tu país?",
        ayuda: "Pista: Esta moneda se usa en todas las transacciones financieras en tu país.",
        respuesta: "Peso", // Cambia esto por la moneda de tu país
        distractores: ["Dólar", "Euro", "Yen"] // Cambia estos distractores según el país
    }
];

// Función para cambiar una pregunta
function cambiarPregunta(indice, nuevaPregunta, nuevaAyuda, nuevasRespuestas, respuestaCorrecta) {
    if (indice >= 0 && indice < cuestionarioMatematicas.length) {
        cuestionarioMatematicas[indice].pregunta = nuevaPregunta;
        cuestionarioMatematicas[indice].ayuda = nuevaAyuda;
        cuestionarioMatematicas[indice].respuesta = respuestaCorrecta;
        cuestionarioMatematicas[indice].distractores = nuevasRespuestas.filter(respuesta => respuesta !== respuestaCorrecta);
    } else {
        console.log("Índice fuera de rango");
    }
}

// Mostrar cuestionario original
console.log("Cuestionario de Matemáticas original:");
mostrarCuestionario();

// Cambiar la primera pregunta
cambiarPregunta(
    0,
    "¿Cuál es el resultado de 6 + 4?",
    "Pista: Suma dos números.",
    ["7", "8", "9"],
    "10"
);


// Mezclar el orden de las preguntas para que no estén agrupadas por tema
baseDePreguntas = shuffle(baseDePreguntas);
