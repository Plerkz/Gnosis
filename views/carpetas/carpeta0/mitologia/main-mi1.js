let baseDePreguntas = [
    {
        pregunta: "¿Quién es el rey de los dioses en la mitología griega?",
        respuesta: "Zeus",
        distractores: ["Poseidón", "Ares", "Hades"],
        ayuda: "Pista: Es el rey de los dioses en la mitología griega.",
        imgAyuda: "https://cdn0.unprofesor.com/es/posts/6/6/4/los_mitos_de_zeus_mas_conocidos_3466_600_square.jpg",
    },
    {
        pregunta: "¿Qué ave mitológica renace de sus propias cenizas?",
        respuesta: "Fénix",
        distractores: ["Cuervo", "aguila", "fenix"],
        ayuda: "Pista:Este ave mitológica renace de sus propias cenizas .",
        imgAyuda: "https://img.freepik.com/fotos-premium/ave-fenix-es-simbolo-fuerza-lealtad_608068-20841.jpg?w=2000",
    },
    {
        pregunta: "¿Cuál es el nombre del dios romano del amor y la belleza?",
        respuesta: "cupido",
        distractores: ["Eros", "apolo", " Hermes"],
        ayuda: "Pista:En la mitología romana, es el dios del amor y la belleza. ",
        imgAyuda: "https://media.admagazine.com/photos/63ca075161e1bc9896834a17/4:3/w_2663,h_1997,c_limit/quie%CC%81n-es-cupido.jpg",
    },
    {
        pregunta: "¿Quién es el dios del sol en la mitología egipcia?",
        respuesta: "Ra",
        distractores: ["Horus", "osiris", " Anubis"],
        ayuda: "Pista: Este dios egipcio del sol tiene cabeza de halcón.",
        imgAyuda: "https://static.wixstatic.com/media/af1176_553226dd96c04daabf41048eaf8f0964~mv2.jpg/v1/crop/x_0,y_191,w_2048,h_2048/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_6309_JPG.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del dios nórdico del trueno?",
        respuesta: " Thor",
        distractores: [" Balder", " Loki", " Freyja"],
        ayuda: "Pista: Es el dios nórdico del trueno y lleva un martillo mágico .",
        imgAyuda: "https://efmdcxc59hb.exactdn.com/wp-content/uploads/2012/05/thor.jpg?strip=all&lossy=1&quality=70&ssl=1",
    },
    {
        pregunta: "¿ Qué heroína griega fue convertida en una araña por Atenea?",
        respuesta: "Aracne",
        distractores: [" Ariadna", " Andrómeda", "helena"],
        ayuda: "Esta heroína griega tejía una famosa telaraña.",
        imgAyuda: "https://www.ecured.cu/images/4/45/Aracn%C3%A9000.jpg",
    },
    {
        pregunta: "¿Quién fue condenado a cargar el mundo en sus hombros en la mitología griega?",
        respuesta: "Atlas",
        distractores: ["Perseo", "Orfeo", " Prometeo"],
        ayuda: "Pista: Fue condenado a cargar el mundo en sus hombros por la eternidad..",
        imgAyuda: "https://media.mythopedia.com/5WRjllYMxgAaXP4fFcPIZc/c65b3dbcf2109d746eca461796d9a880/atlas-greek-titan.jpg?w=1920&q=50&fit=crop&ar=3:2&crop=faces,entropy&auto=compress,format",
    },
    {
        pregunta: "¿Cuál es el nombre del dios hindú creador del universo?",
        respuesta: "Brahma",
        distractores: ["Vishnu", " Shiva", "Brahma"],
        ayuda: "Pista: Es el dios hindú creador del universo y tiene cuatro cabezas. ",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Brahma_on_hamsa.jpg/800px-Brahma_on_hamsa.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la serpiente gigante en la mitología nórdica que rodea el mundo?",
        respuesta: "Jormungandr",
        distractores: [" Hel", "Fenrir", "Jormungandr"],
        ayuda: "Pista: Esta serpiente gigante en la mitología nórdica rodea el mundo.",
        imgAyuda: "https://epiclootshop.com/cdn/shop/articles/Jormungandr_The_Midgard_Serpent_1024x1024.jpg?v=1666500240",
    },
    {
        pregunta: "¿Quién es la diosa griega de la caza y la naturaleza salvaje?",
        respuesta: "Artemisa",
        distractores: [" Afrodita", " Deméter", "Artemisa"],
        ayuda: "Pista:Es la diosa griega de la caza y la naturaleza salvaje, hermana gemela de Apolo. ",
        imgAyuda: "https://live.mrf.io/statics/i/ps/hayunalesbianaenmisopa.com/wp-content/uploads/2018/04/Artemisa-23.jpg?width=1200&enable=upscale",
    },
    {
        pregunta: "¿Cuál es el nombre del río que, según la mitología griega, los muertos deben cruzar para llegar al inframundo?",
        respuesta: "Aqueronte",
        distractores: ["Amazonas", "nilo", "Aqueronte"],
        ayuda: "Pista: En la mitología griega, los muertos deben cruzar este río para llegar al inframundo ",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Ach%C3%A9ron.JPG/640px-Ach%C3%A9ron.JPG",
    },
    {
        pregunta: "¿Cuál es el nombre del dios egipcio del embalsamamiento y la muerte?",
        respuesta: "anubis",
        distractores: ["ra", "osiris", " Horus"],
        ayuda: "Pista:Tiene cabeza de chacal y es el protector de las tumbas ",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Anubis_standing.svg/1200px-Anubis_standing.svg.png",
    },
    {
        pregunta: "¿Cuál es el nombre de la diosa griega de la agricultura y la cosecha??",
        respuesta: "Deméter",
        distractores: ["Artemisa,", "Atenea,", "Afrodita"],
        ayuda: "Pista:Su hija fue secuestrada por Hades y llevada al inframundo. ",
        imgAyuda: "https://cdn.britannica.com/53/126853-050-96D8EA33/Demeter-statue-London-British-Museum.jpg",
    },
    {
        pregunta: "¿Quién es el dios romano del fuego y la forja?",
        respuesta: "Vulcano",
        distractores: ["Neptuno", "Marte", "Júpiter"],
        ayuda: "Pista:Es equivalente al dios griego Hefesto ",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Vel%C3%A1zquez_-La_Fragua_de_Vulcano%28Museo_del_Prado%2C_1630%29.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la espada mágica que el rey Arturo extrajo de una piedra y se convirtió en rey?",
        respuesta: "Excalibur",
        distractores: ["Caliburn", "Avalon", "Mjolnir"],
        ayuda: "Pista: Esta espada es un símbolo importante en las leyendas artúricas. ",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/a/ab/ExcalaburCaledfwlchTranslucent.gif",
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