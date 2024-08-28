let baseDePreguntas = [
    {
        pregunta: "¿Cómo se llama el proceso para encontrar el área de un rectángulo?",
        ayuda: "Pista: El área de un rectángulo se encuentra multiplicando la longitud por el ancho.",
        respuesta: "Multiplicando la longitud por el ancho",
        distractores: ["Sumando la longitud y el ancho", "Dividiendo la longitud por el ancho", "Restando el ancho de la longitud"],
    },
    {
        pregunta: "¿Cuál es la fórmula para calcular el perímetro de un cuadrado?",
        ayuda: "Pista: El perímetro de un cuadrado es la suma de todos sus lados.",
        respuesta: "4 veces la longitud de un lado",
        distractores: ["2 veces la longitud de un lado", "La longitud de un lado más el área", "La longitud de un lado menos el área"],
    },
    {
        pregunta: "¿Qué es una fracción equivalente?",
        ayuda: "Pista: Una fracción equivalente tiene el mismo valor que otra, aunque los números sean diferentes.",
        respuesta: "Fracción que representa la misma cantidad que otra fracción",
        distractores: ["Fracción con el mismo denominador", "Fracción con el mismo numerador", "Fracción con un valor diferente"],
    },
    {
        pregunta: "¿Cómo se convierte un número decimal a una fracción?",
        ayuda: "Pista: Para convertir un decimal a fracción, se coloca el decimal sobre 1 y se multiplica por una potencia de 10.",
        respuesta: "Colocando el decimal sobre una fracción con denominador 10, 100, etc., y simplificando",
        distractores: ["Sumando el decimal a 1", "Multiplicando el decimal por 100", "Restando el decimal de 1"],
    },
    {
        pregunta: "¿Cuál es el valor de la suma 7 + 5?",
        ayuda: "Pista: Suma los dos números juntos.",
        respuesta: "12",
        distractores: ["10", "13", "11"],
    },
    {
        pregunta: "¿Cómo se llama el resultado de una división?",
        ayuda: "Pista: Es el número que obtienes cuando divides un número entre otro.",
        respuesta: "Cociente",
        distractores: ["Producto", "Suma", "Resto"],
    },
    {
        pregunta: "¿Qué es un número primo?",
        ayuda: "Pista: Un número primo solo puede ser dividido sin dejar residuo por 1 y por sí mismo.",
        respuesta: "Número que solo tiene dos divisores: 1 y él mismo",
        distractores: ["Número que tiene más de dos divisores", "Número que es divisible por 2", "Número que es múltiplo de 10"],
    },
    {
        pregunta: "¿Cuál es el área de un triángulo con base de 8 cm y altura de 5 cm?",
        ayuda: "Pista: El área de un triángulo se encuentra usando la fórmula (base × altura) / 2.",
        respuesta: "20 cm²",
        distractores: ["40 cm²", "15 cm²", "25 cm²"],
    },
    {
        pregunta: "¿Cómo se llama el ángulo menor de 90 grados?",
        ayuda: "Pista: Este tipo de ángulo es más agudo que un ángulo recto.",
        respuesta: "Ángulo agudo",
        distractores: ["Ángulo recto", "Ángulo obtuso", "Ángulo llano"],
    },
    {
        pregunta: "¿Qué es una línea paralela?",
        ayuda: "Pista: Dos líneas paralelas nunca se cruzan y están a la misma distancia en todo momento.",
        respuesta: "Líneas que nunca se cruzan y mantienen una distancia constante",
        distractores: ["Líneas que se cruzan en un punto", "Líneas que forman ángulos rectos entre sí", "Líneas que se intersectan en un plano"],
    },
    {
        pregunta: "¿Qué es un múltiplo de 3?",
        ayuda: "Pista: Un múltiplo de 3 es cualquier número que se puede dividir por 3 sin dejar residuo.",
        respuesta: "Número que resulta de multiplicar 3 por un número entero",
        distractores: ["Número que es divisible por 2", "Número que es menor que 3", "Número que se obtiene restando 3"],
    },
    {
        pregunta: "¿Cuál es la diferencia entre el perímetro y el área de una figura geométrica?",
        ayuda: "Pista: El perímetro es la distancia alrededor de la figura, mientras que el área es el espacio dentro de la figura.",
        respuesta: "El perímetro es la suma de todos los lados, y el área es el espacio dentro de la figura.",
        distractores: ["El perímetro mide el área, y el área mide la longitud de los lados", "El perímetro se calcula solo para círculos, y el área para cuadrados", "El área mide el perímetro, y el perímetro mide el volumen"],
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
