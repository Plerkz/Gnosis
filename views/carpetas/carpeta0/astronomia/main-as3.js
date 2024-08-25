let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuesta: "Júpiter",
        distractores: ["Marte", "Saturno", "Urano"],
        ayuda: "Pista: Este planeta es conocido por su gran tamaño y sus bandas de nubes.",
        imgAyuda: "https://noirlab.edu/public/media/archives/images/screen/noirlab2116b.jpg",
    },
    {
        pregunta: "¿Cuál es la estrella más cercana a la Tierra?",
        respuesta: "El Sol",
        distractores: ["Alfa Centauri", "Betelgeuse", "Sirio"],
        ayuda: "Pista: Esta estrella es fundamental para la vida en la Tierra.",
        imgAyuda: "https://www.ngenespanol.com/wp-content/uploads/2023/06/el-sol-asi-es-la-estrella-de-nuestro-sistema-planetario.jpg",
    },
    {
        pregunta: "¿Qué es un agujero negro?",
        respuesta: "Una región del espacio con una gravedad extremadamente fuerte",
        distractores: ["Una supernova", "Un cometa", "Un planeta enano"],
        ayuda: "Pista: La gravedad en esta región es tan intensa que nada puede escapar de ella, ni siquiera la luz.",
        imgAyuda: "https://www.ngenespanol.com/wp-content/uploads/2023/08/podria-un-agujero-negro-devorar-al-universo.jpg",
    },
    {
        pregunta: "¿Cuál es la galaxia más cercana a la Vía Láctea?",
        respuesta: "La galaxia de Andrómeda",
        distractores: ["La galaxia del Sombrero", "La galaxia del Triángulo", "La galaxia del Remolino"],
        ayuda: "Pista: Esta galaxia es espiral y se acerca gradualmente a la Vía Láctea.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/5/57/M31bobo.jpg",
    },
    {
        pregunta: "¿Qué es un quásar?",
        respuesta: "Un núcleo galáctico activo y luminoso",
        distractores: ["Un asteroide", "Un satélite artificial", "Una nebulosa"],
        ayuda: "Pista: Los quásares emiten enormes cantidades de energía y son objetos muy distantes en el universo.",
        imgAyuda: "https://www.mdscc.nasa.gov/wp-content/uploads/2020/03/hoy7.png",
    },
    {
        pregunta: "¿Cuál es el nombre del telescopio espacial lanzado por la NASA en 1990?",
        respuesta: "El Telescopio Espacial Hubble",
        distractores: ["El Telescopio Espacial Kepler", "El Telescopio Espacial Chandra", "El Telescopio Espacial James Webb"],
        ayuda: "Pista: Este telescopio ha proporcionado imágenes impresionantes del universo profundo.",
        imgAyuda: "https://www.ngenespanol.com/wp-content/uploads/2023/05/telescopio-espacial-hubble-que-es-y-como-funciona-este-observatorio.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del telescopio espacial que se lanzó en 2018 para estudiar exoplanetas?",
        respuesta: "El Telescopio Espacial TESS (Transiting Exoplanet Survey Satellite)",
        distractores: ["El Telescopio Espacial Hubble", "El Telescopio Espacial James Webb", "El Telescopio Espacial Kepler"],
        ayuda: "Pista: Este telescopio está diseñado específicamente para buscar exoplanetas en tránsito frente a sus estrellas.",
        imgAyuda: "https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/tessbeautypass.jpg",
    },    
    {
        pregunta: "¿Qué es un cometa?",
        respuesta: "Un objeto compuesto por hielo y polvo que orbita el Sol",
        distractores: ["Un planeta", "Un satélite natural", "Una supernova"],
        ayuda: "Pista: Los cometas a menudo desarrollan una cola brillante cuando se acercan al Sol.",
        imgAyuda: "https://concepto.de/wp-content/uploads/2019/06/cometa-e1561938278988.jpg",
    },
    {
        pregunta: "¿Qué es un exoplaneta?",
        respuesta: "Un planeta que orbita una estrella fuera de nuestro sistema solar",
        distractores: ["Un asteroide", "Un agujero negro", "Una galaxia enana"],
        ayuda: "Pista: La búsqueda de exoplanetas es importante en la investigación de vida fuera de la Tierra.",
        imgAyuda: "https://images.ecestaticos.com/2LdXfQElgwiwb3fZj0AUZX_u5Xg=/0x0:2272x1609/1338x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fcd6%2F4d7%2F80e%2Fcd64d780e81a3f3555b33fa7a9cfc8da.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la misión de la NASA que aterrizó en Marte en 2021 para buscar signos de vida pasada?",
        respuesta: "El rover Perseverance",
        distractores: ["El rover Curiosity", "El rover Spirit", "El rover Opportunity"],
        ayuda: "Pista: Esta misión también tiene un helicóptero llamado Ingenuity.",
        imgAyuda: "https://smd-prod.s3.amazonaws.com/ciencia-pink/s3fs-public/styles/background_image_file_size/public/thumbnails/image/PIA23764-16.jpg?itok=lxESJq-L",
    },
    {
        pregunta: "¿Cuál es la luna más grande de Júpiter?",
        respuesta: "Ganímedes",
        distractores: ["Ío", "Calisto", "Europa"],
        ayuda: "Pista: Ganímedes es la luna más grande del sistema solar.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Ganymede-moon.jpg/220px-Ganymede-moon.jpg",
    },
    {
        pregunta: "¿Cuál es la teoría que sugiere que el universo se está expandiendo?",
        respuesta: "La teoría de la expansión del universo",
        distractores: ["La teoría del universo estacionario", "La teoría del universo oscilante", "La teoría de la creación divina"],
        ayuda: "Pista: Esta teoría se basa en la observación de que las galaxias se alejan unas de otras.",
        imgAyuda: "https://www.gaceta.unam.mx/wp-content/uploads/2021/05/210531-aca1-f1-universo.jpg",
    },
    {
    
        pregunta: "¿Cuál es el nombre de la galaxia que contiene nuestro sistema solar?",
        respuesta: "La Vía Láctea",
        distractores: ["Andrómeda", "La galaxia del Triángulo", "La galaxia del Sombrero"],
        ayuda: "Pista: Es una galaxia espiral en la que se encuentra nuestro sistema solar.",
        imgAyuda: "https://humanidades.com/wp-content/uploads/2018/08/via-lactea-e1535495054860.jpg",
    },
    {
        pregunta: "¿Qué es una estrella enana blanca?",
        respuesta: "El núcleo colapsado de una estrella que ya no produce fusión nuclear",
        distractores: ["Una estrella muy caliente y brillante", "Una estrella joven en proceso de formación", "Una estrella gigante roja"],
        ayuda: "Pista: Las enanas blancas son el destino final de estrellas como el Sol.",
        imgAyuda: "https://1.bp.blogspot.com/-QPPVw4uFPxc/XhkYMLAFvwI/AAAAAAAAEPs/IB_jrPtZPIglsLou6TboSUNcahDxUIJgQCLcBGAsYHQ/s1600/estrella.webp",
    },
    {
        pregunta: "¿Cuál es el evento astronómico que ocurre cuando la Luna bloquea completamente al Sol?",
        respuesta: "Un eclipse solar total",
        distractores: ["Un eclipse lunar", "Un tránsito de Venus", "Una lluvia de estrellas"],
        ayuda: "Pista: Durante este evento, el día se convierte momentáneamente en noche.",
        imgAyuda: "https://dam.ngenespanol.com/wp-content/uploads/2022/04/GettyImages-837061294.jpg",
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