let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el nombre del legendario duende de la tradición salvadoreña que se cree habita en los bosques y montañas?",
        respuesta: "Cipitío",
        distractores: ["Cadejo", "Siguanaba", "Xemanaya"],
        ayuda: "Pista: Es el nombre de un duende en la tradición salvadoreña.",
        imgAyuda: "https://www.elsalvadormipais.com/wp-content/uploads/2017/01/leyenda-del-cipitio.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la entidad sobrenatural que, según la leyenda, protege a los viajeros en los caminos durante la noche?",
        respuesta: "Cadejo",
        distractores: ["Cipitío", "Siguanaba", "Xemanaya"],
        ayuda: "Pista: Es una figura mítica que protege a los viajeros.",
        imgAyuda: "https://elumbraldelodesconocido.com/wp-content/uploads/2018/07/perro-blanco-compressed.jpg",
    },
    {
        pregunta: "¿Cómo se le conoce a la figura legendaria que se presenta como una hermosa mujer durante el día y se transforma en un espanto por la noche?",
        respuesta: "Siguanaba",
        distractores: ["Cipitío", "Cadejo", "Xemanaya"],
        ayuda: "Pista: Es una figura que según la tradición, se aparece en los pueblos para anunciar la muerte de algún miembro de la comunidad.",
        imgAyuda: "https://pm1.aminoapps.com/8533/ecda893e839a7d457330c005267111ba4701c894r1-1224-2048v2_hq.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del espíritu o alma del río que, según la creencia, puede arrastrar a las personas que se acercan demasiado?",
        respuesta: "Xemanaya",
        distractores: ["Cipitío", "Cadejo", "Siguanaba"],
        ayuda: "Pista: Es el nombre de una entidad asociada a los ríos.",
        imgAyuda: "https://www.elsalvadormipais.com/wp-content/uploads/2017/01/cuyancua.jpg",
    },
    {
        pregunta: "¿Cómo se le llama a la figura legendaria que se aparece por las noches sin cabeza ?",
        respuesta: "El padre sin cabeza",
        distractores: ["Cipitío", "Cadejo", "Siguanaba"],
        ayuda: "Pista: Es el nombre de una figura asociada a la muerte.",
        imgAyuda: "https://3.bp.blogspot.com/-EVpejN1y7no/WcqEma_Xo-I/AAAAAAAAA7o/pG16Q2tK0H8HDC-NGj7U7WyDgDgZiScLQCLcBGAs/w1200-h630-p-k-no-nu/padre%2Bsin%2Bcabeza.png",
    },
    {
        pregunta: "¿Qué nombre se le da a los pequeños seres mitológicos del bosque que se dedican a hacer travesuras?",
        respuesta: "Duendes",
        distractores: ["Espíritus", "Gigantes", "Hadas"],
        ayuda: "Pista: Son seres traviesos del bosque.",
        imgAyuda: "https://www.honduras.com/wp-content/uploads/2020/07/duende-ivoox-1024x1024.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la criatura mítica que es mitad pájaro y mitad serpiente?",
        respuesta: "Cuazcalcoatl",
        distractores: ["Quetzalcoatl", "Tezcatlipoca", "Xemanaya"],
        ayuda: "Pista: Es una criatura mitad pájaro y mitad serpiente.",
        imgAyuda: "https://ih1.redbubble.net/image.2483794579.9867/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del gigante mítico que, según la leyenda, protegía el volcán de Izalco?",
        respuesta: "Gigante Chepetepeque",
        distractores: ["Gigante Tlaloc", "Gigante Popocatepetl", "Gigante Zaqueo"],
        ayuda: "Pista: Es el nombre de un gigante protector del volcán de Izalco.",
        imgAyuda: "img-mi/Gigante-Chepetepeque.jpg",
    },
    {
        pregunta: "¿Cómo se le llama a la figura mitológica que se cree aparece en los bosques con luces brillantes para guiar a los perdidos?",
        respuesta: "Lampijen",
        distractores: ["Cipitío", "Cadejo", "Siguanaba"],
        ayuda: "Pista: Es una figura luminosa que guía a los perdidos en los bosques.",
        imgAyuda: "https://images8.alphacoders.com/500/thumb-1920-500648.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del espíritu protector de la naturaleza y los animales según la tradición indígena?",
        respuesta: "Tulán Zú",
        distractores: ["Cipitío", "Cadejo", "Siguanaba"],
        ayuda: "Pista: Es el nombre de un espíritu protector de la naturaleza.",
        imgAyuda: "https://mxcity.mx/wp-content/uploads/2017/10/nah.jpg",
    },
    {
        pregunta: "¿Qué nombre se le da a los seres sobrenaturales que, según la leyenda, habitan en las lagunas y ríos?",
        respuesta: "Cipitío",
        distractores: ["Cadejo", "Siguanaba", "Xemanaya"],
        ayuda: "Pista: Es el nombre de seres que viven en lagunas y ríos.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/La_llorona.jpg/640px-La_llorona.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del ave mítica que, según la tradición, anuncia la muerte de alguien cercano?",
        respuesta: "Tecolotl",
        distractores: ["Quetzal", "Guara", "Aguila Harpía"],
        ayuda: "Pista: Es el nombre de un ave mítica que anuncia la muerte.",
        imgAyuda: "https://pm1.aminoapps.com/6203/17bfaa7945e02c484bea40820e7cd4462ee1b52c_00.jpg",
    },
    {
        pregunta: "¿Cómo se le llama al espíritu que, según la leyenda, habita en los bosques y se encarga de cuidar los árboles y las plantas?",
        respuesta: "Nayana",
        distractores: ["Cipitío", "Cadejo", "Siguanaba"],
        ayuda: "Pista: Es el nombre de un espíritu que cuida la naturaleza.",
        imgAyuda: "https://www.hoycripto.com/__export/1686951487025/sites/elimparcial/img/2023/06/16/353676138_6631735490172570_3248095584018455143_n.jpg_1262559067.jpg",
    },
    {
        pregunta: "¿Qué nombre se le da a los seres míticos que, según la tradición, viven en las rocas y piedras de los ríos?",
        respuesta: "Piedreros",
        distractores: ["Cipitío", "Cadejo", "Siguanaba"],
        ayuda: "Pista: Es el nombre de seres que habitan en rocas y piedras de los ríos.",
        imgAyuda: "https://p1.pxfuel.com/preview/93/929/242/river-stones-stone-stones-rock.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre del ave mítica que, según la creencia, canta en las noches para anunciar un nacimiento cercano?",
        respuesta: "Guardabarranco",
        distractores: ["Quetzal", "Perico Ligero", "Tecolotl"],
        ayuda: "Pista: Es el nombre de un ave mítica que anuncia nacimientos.",
        imgAyuda: "https://2.bp.blogspot.com/_uLVoIW-Fphw/S_b7zKqxscI/AAAAAAAAEAk/V8QqDD08rfw/s400/37583.JPG",
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