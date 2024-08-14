let baseDePreguntas = [
    {
        pregunta: "¿En qué año se firmó la Declaración de Independencia de Estados Unidos?",
        respuesta: "1776",
        distractores: ["1789", "1812", "1865"],
        ayuda: "Pista: Esta fecha marcó la independencia de las Trece Colonias británicas.",
        imgAyuda: "https://images.app.goo.gl/wJbnpkVBFb6tSDsg8",
    },
    {
        pregunta: "¿Quién fue el primer presidente de Estados Unidos?",
        respuesta: "George Washington",
        distractores: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        ayuda: "Pista: Este líder fue conocido como el 'Padre de la Nación'.",
        imgAyuda: "https://images.app.goo.gl/6775jJNpjaH9dDWo6",
    },
    {
        pregunta: "¿Cuál fue el evento que desencadenó la Primera Guerra Mundial?",
        respuesta: "El asesinato de Francisco Fernando de Austria",
        distractores: ["El hundimiento del Titanic", "El ataque a Pearl Harbor", "La Revolución Rusa"],
        ayuda: "Pista: Este evento ocurrió en Sarajevo en 1914.",
        imgAyuda: "https://images.app.goo.gl/2YtVAYgK5rT7XLy88",
    },
    {
        pregunta: "¿En qué año se llevó a cabo la Revolución Rusa?",
        respuesta: "1917",
        distractores: ["1905", "1923", "1939"],
        ayuda: "Pista: Esta revolución condujo al derrocamiento del zar Nicolás II.",
        imgAyuda: "https://images.app.goo.gl/eRrhoYg5183tGdA4A",
    },
    {
        pregunta: "¿Quién fue el líder político sudafricano que luchó contra el apartheid y se convirtió en presidente de Sudáfrica?",
        respuesta: "Nelson Mandela",
        distractores: ["Desmond Tutu", "F.W. de Klerk", "Steve Biko"],
        ayuda: "Pista: Pasó más de 27 años en prisión antes de convertirse en presidente.",
        imgAyuda: "https://images.app.goo.gl/m57Ykg1u3GbHgoRM6",
    },
    {
        pregunta: "¿Cuál fue el período de gran expansión cultural y artística en Europa que siguió a la Edad Media?",
        respuesta: "El Renacimiento",
        distractores: ["La Ilustración", "El Barroco", "El Romanticismo"],
        ayuda: "Pista: Este período se caracterizó por un renovado interés en la cultura clásica.",
        imgAyuda: "https://images.app.goo.gl/3LQA2ikBa7oy3f1M6",
    },
    {
        pregunta: "¿Qué evento histórico marcó el comienzo de la Guerra Fría entre Estados Unidos y la Unión Soviética?",
        respuesta: "La caída del Muro de Berlín",
        distractores: ["La Crisis de los Misiles en Cuba", "El asesinato de John F. Kennedy", "El fin de la Segunda Guerra Mundial"],
        ayuda: "Pista: Este evento ocurrió en 1961 y dividió a Berlín en dos partes.", 
        imgAyuda: "https://images.app.goo.gl/Tku3pm5idyTsGuxB6",
    },
    {
        pregunta: "¿Cuál fue el líder militar que comandó las fuerzas aliadas en Europa durante la Segunda Guerra Mundial?",
        respuesta: "Dwight D. Eisenhower",
        distractores: ["Douglas MacArthur", "George Patton", "Winston Churchill"],
        ayuda: "Pista: Fue el Comandante Supremo de las Fuerzas Aliadas en Europa.",
        imgAyuda: "https://images.app.goo.gl/GaAtzjMhbxA3KwxB7",
    },
    {
        pregunta: "¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?",
        respuesta: "1945",
        distractores: ["1919", "1955", "1960"],
        ayuda: "Pista: La ONU se fundó después de la Segunda Guerra Mundial para promover la cooperación internacional.",
        imgAyuda: "https://images.app.goo.gl/8rDsELpBQEiDQEeY8",
    },
    {
        pregunta: "¿Cuál fue el primer satélite artificial en ser lanzado al espacio?",
        respuesta: "El Sputnik 1",
        distractores: ["El Apolo 11", "El Hubble", "El Explorer 1"],
        ayuda: "Pista: Fue lanzado por la Unión Soviética en 1957, marcando el inicio de la era espacial.",
        imgAyuda: "https://images.app.goo.gl/gP63Po6VKq2LLcR26",
    },
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