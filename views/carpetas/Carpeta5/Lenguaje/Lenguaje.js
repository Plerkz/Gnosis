let baseDePreguntas = [   
        {
            pregunta: "¿Cuál es el sinónimo de 'generoso'?",
            ayuda: "Pista: Busca una palabra que significa lo mismo que generoso.",
            respuesta: "Altruista",
            distractores: ["Egoísta", "Tacaño", "Ambicioso"]
        },
        {
            pregunta: "¿Cómo se llama el tipo de texto que narra eventos o historias ficticias?",
            ayuda: "Pista: Este tipo de texto se utiliza para contar cuentos o novelas.",
            respuesta: "Texto narrativo",
            distractores: ["Texto descriptivo", "Texto expositivo", "Texto argumentativo"]
        },
        {
            pregunta: "¿Qué tipo de oración es 'Por favor, pásame el libro'?",
            ayuda: "Pista: Este tipo de oración da una orden o hace una solicitud.",
            respuesta: "Oración imperativa",
            distractores: ["Oración exclamativa", "Oración interrogativa", "Oración afirmativa"]
        },
        {
            pregunta: "¿Cuál es el adjetivo en la oración 'La casa azul está cerca'?",
            ayuda: "Pista: El adjetivo describe el color de la casa.",
            respuesta: "Azul",
            distractores: ["Casa", "Está", "Cerca"]
        },
        {
            pregunta: "¿Cuál es la función principal de una introducción en un texto narrativo?",
            ayuda: "Pista: La introducción suele presentar a los personajes y el escenario.",
            respuesta: "Presentar a los personajes y el escenario",
            distractores: ["Desarrollar la trama", "Concluir la historia", "Argumentar un punto de vista"]
        },
        {
            pregunta: "¿Qué es una metáfora en literatura?",
            ayuda: "Pista: Es una figura retórica que compara dos cosas sin usar 'como'.",
            respuesta: "Comparación implícita entre dos cosas",
            distractores: ["Descripción detallada", "Repetición de palabras", "Uso de adjetivos"]
        },
        {
            pregunta: "¿Cuál es el pronombre en la oración 'Nosotros vamos al cine'?",
            ayuda: "Pista: El pronombre se refiere al grupo de personas que incluyen al hablante.",
            respuesta: "Nosotros",
            distractores: ["Vamos", "Al", "Cine"]
        },
        {
            pregunta: "¿Cómo se llama el tipo de texto que ofrece instrucciones o indicaciones?",
            ayuda: "Pista: Este tipo de texto es común en recetas y manuales.",
            respuesta: "Texto instructivo",
            distractores: ["Texto narrativo", "Texto descriptivo", "Texto argumentativo"]
        },
        {
            pregunta: "Lee la oración y elige el sustantivo: 'El gato duerme en la alfombra.'",
            ayuda: "Pista: Busca la palabra que se refiere a una cosa o a un animal.",
            respuesta: "Gato",
            distractores: ["Duerme", "En", "Alfombra"]
        },
        {
            pregunta: "¿Qué tipo de oración expresa sorpresa o emoción?",
            ayuda: "Pista: Este tipo de oración usa signos de exclamación.",
            respuesta: "Oración exclamativa",
            distractores: ["Oración afirmativa", "Oración interrogativa", "Oración imperativa"]
        },
        {
            pregunta: "¿Cuál es la forma correcta de escribir el plural de 'papá'?",
            ayuda: "Pista: Cambia la palabra para indicar que hay más de una persona.",
            respuesta: "Papás",
            distractores: ["Papás", "Papás", "Papás"]
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

// Función para cambiar una pregunta
function cambiarPregunta(indice, nuevaPregunta, nuevaAyuda, nuevasRespuestas, respuestaCorrecta) {
    if (indice >= 0 && indice < cuestionarioLenguaje.length) {
        cuestionarioLenguaje[indice].pregunta = nuevaPregunta;
        cuestionarioLenguaje[indice].ayuda = nuevaAyuda;
        cuestionarioLenguaje[indice].respuesta = respuestaCorrecta;
        cuestionarioLenguaje[indice].distractores = nuevasRespuestas.filter(respuesta => respuesta !== respuestaCorrecta);
    } else {
        console.log("Índice fuera de rango");
    }
}

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