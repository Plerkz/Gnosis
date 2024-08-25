let baseDePreguntas = [
    {
        pregunta: "¿Quién es el dios del trueno en la mitología romana?",
        respuesta: "Júpiter",
        distractores: ["Apolo", "Thor", "Hades"],
        ayuda: "Pista: Su equivalente en la mitología griega es Zeus. Lleva un rayo como arma.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/7/71/PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del dios griego mensajero y guía de las almas al inframundo?",
        respuesta: "Hermes",
        distractores: ["Apolo", "Ares", "Poseidón"],
        ayuda: "Pista: Es conocido por llevar sandalias aladas y un sombrero alado.",
        imgAyuda: "https://lamenteesmaravillosa.com/wp-content/uploads/2020/01/ilustracion-hermes-370x259.jpg",
    },
    {
        pregunta: "¿Quién fue el famoso héroe que mató al Minotauro en el laberinto?",
        respuesta: "Teseo",
        distractores: ["Ulises", " Perseo", "Aquiles"],
        ayuda: "Pista: Utilizó un ovillo de hilo para encontrar la salida.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Laurent_de_la_La_Hyre_002.jpg/220px-Laurent_de_la_La_Hyre_002.jpg",
    },
    {
        pregunta: "¿Qué dios egipcio tiene cabeza de chacal y es asociado con la muerte y la vida después de la muerte?",
        respuesta: " Anubis",
        distractores: ["Ra", " Osiris", "Horus"],
        ayuda: "Pista: Es el guardián de las tumbas y participa en el juicio de los corazones..",
        imgAyuda: "https://media.mythopedia.com/6iZdxcKAYJmFCDeQ0mE0dd/a0d3665d2ca841f4e2607ee080cbcb76/anubis-egyptian-god-of-mummification.jpg?w=1920&q=50&fit=crop&ar=3:2&crop=faces,entropy&auto=compress,format",
    },
    {
        pregunta: "¿Quién es la diosa griega de la sabiduría, la estrategia y la artesanía?",
        respuesta: "Atenea",
        distractores: ["Afrodita", " Artemisa", "Hera"],
        ayuda: "Pista: Nació de la cabeza de su padre Zeus.",
        imgAyuda: "https://i.pinimg.com/originals/d5/5a/94/d55a947e7e762f851140cd7ef87c00ae.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del dios nórdico de la guerra y la valentía ?",
        respuesta: "Tyr",
        distractores: ["Thor", "Odin", "Loki"],
        ayuda: "Pista:Tiene un solo brazo y es conocido por su coraje .",
        imgAyuda: "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/God-of-War-Ragnarok-Tyr.jpg",
    },
    {
        pregunta: "¿Qué figura mitológica griega es conocida por su talón vulnerable?",
        respuesta: "Aquiles",
        distractores: [" Perseo", "Ulises", "teseo"],
        ayuda: "Pista:Fue sumergido en el río Estigia para hacerlo invulnerable, excepto por su talón.",
        imgAyuda: "https://st4.depositphotos.com/36808514/40874/v/450/depositphotos_408740332-stock-illustration-orange-and-black-figures-pottery.jpg",
    },
    {
        pregunta: "¿En la mitología china, ¿qué animal es un símbolo de la dualidad del yin y el yang?",
        respuesta: "dragon",
        distractores: ["fenix", "tigre", "serpiente"],
        ayuda: "Pista:  Es una criatura mítica asociada con la serpiente y el dragón.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg/1200px-Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg",
    },
    {
        pregunta: "¿Qué dios hindú con cabeza de elefante es el removedor de obstáculos y el patrón de las nuevas empresas?",
        respuesta: "Ganesha",
        distractores: [" Vishnu", "Shiva", "Brahma"],
        ayuda: "Pista:Tiene una gran devoción en la cultura hindú y es ampliamente adorado. ",
        imgAyuda: "https://img.freepik.com/fotos-premium/escultura-senor-ganesha-fondo-ganesh-chaturthi-generativo-ai_834602-410.jpg?w=2000",
    },
    {
        pregunta: "¿En la mitología romana, ¿quién es la madre de todos los dioses y diosas?",
        respuesta: "juno",
        distractores: ["minerva", "venus", "diana"],
        ayuda: "Pista: Es la esposa de Júpiter y la diosa del matrimonio y la familia. ",
        imgAyuda: "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia25015.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del dios del sol en la mitología egipcia?",
        respuesta: " Ra",
        distractores: ["Osiris", " Horus", "Anubis"],
        ayuda: "Pista:Es representado como un escarabajo o como un hombre con cabeza de halcón .",
        imgAyuda: "https://regalosdehistoria.com/wp-content/uploads/2022/11/el-dios-ra.jpg",
    },
    {
        pregunta: "¿Qué héroe griego usó un espejo para ver a la gorgona Medusa sin mirar directamente a ella?",
        respuesta: "Perseo",
        distractores: ["Teseo", "Ulises", "Aquiles"],
        ayuda: "Pista:Es conocido por decapitar a Medusa ",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Perseo_Perseus_%CE%A0%CE%B5%CF%81%CF%83%CE%B5%CE%B1%CF%82.jpg/220px-Perseo_Perseus_%CE%A0%CE%B5%CF%81%CF%83%CE%B5%CE%B1%CF%82.jpg",
    },
    {
        pregunta: "¿Quién es el dios romano de la agricultura y los cultivos?",
        respuesta: "Ceres",
        distractores: ["Ceres", "Neptuno", "Júpiter"],
        ayuda: "Pista: Es equivalente al dios griego Deméter.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/5/58/Ceres_-RC3-Haulani_Crater%2822381131691%29.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del rey legendario que sacó la espada Excalibur de una piedra y se convirtió en rey de Inglaterra?",
        respuesta: "Arturo",
        distractores: [": Lancelot", " Galahad", "Gawain"],
        ayuda: "Pista:La Dama del Lago le entregó la espada. ",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Charles_Ernest_Butler_-King_Arthur.jpg/320px-Charles_Ernest_Butler-_King_Arthur.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del titán condenado a sostener el mundo en sus hombros en la mitología griega?",
        respuesta: "Atlas",
        distractores: ["Prometeo", "Cronos", "Epimeteo"],
        ayuda: "Pista:Es castigado por rebelarse contra los dioses ",
        imgAyuda: "https://blogdidactico.com/wp-content/uploads/2017/03/el-titan-atlas.jpg",
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