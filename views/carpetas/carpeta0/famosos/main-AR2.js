let baseDePreguntas = [
    {
        pregunta: "¿Cuál fue la primera canción que catapultó a la fama al cantante puertorriqueño Bad Bunny en 2016?",
        respuesta: "Soy Peor",
        ayuda: "Esta canción marcó el inicio de su ascenso meteórico en la música urbana.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ05Bex9wNxgeHjGPNGQczDIB64rqUFn06U0j_o6qgLLhle-MYa2QxnLNQo0easLXYmGbM&usqp=CAU.jpg",
        distractores: ["Mia", "Vete", "Callaita"],
    },
    {
        pregunta: "¿Cuál es el nombre completo de la cantante colombiana que lanzó éxitos como (Hips Don't Lie) y (Waka Waka)?",
        respuesta: " Shakira Isabel Mebarak Ripoll",
        ayuda: "Es conocida por su voz única y sus habilidades en la danza del vientre.",
        imgAyuda: "https://aws-modapedia.vogue.es/prod/designs/v1/assets/640x853/2107.jpg",
        distractores: [" Sofia Vergara", "Selena Gomez", "Gloria Estefan"],
    },
    {
        pregunta: "¿Quién es el cantante mexicano conocido como (El Sol de México) y es famoso por baladas como (Amor Eterno)?",
        respuesta: "Luis Miguel",
        ayuda: "Comenzó su carrera a una edad temprana y ha vendido millones de discos.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3A6packX7StE_HkWfb7NJ5GTXj8mC7Clowc31lFI0WXTA1SHtU7cw_2eVVU63WZO-qRA&usqp=CAU.jpg",
        distractores: ["Alejandro Fernández", "Vicente Fernández", "Juan Gabriel"],
    },
    {
        pregunta: "¿Qué grupo de música tropical colombiano alcanzó la fama internacional con la canción (Bailando) en 2014?",
        respuesta: "Gente de Zona",
        ayuda: "Colaboraron con Enrique Iglesias en Bailando.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPw8R4RKl87KkreCEvoM1vgzIy7NserDHI1jZUU587MiNSVRZ2avcxQbTz8489hgZEvQ&usqp=CAU.jpg",
        distractores: ["Los Del Río", "Aventura", "Grupo Niche"],
    },
    {
        pregunta: "¿Cuál es el nombre del cantante y actor mexicano que interpretó a Luis Miguel en la serie de Netflix (Luis Miguel: La Serie)?",
        respuesta: "Diego Boneta",
        ayuda: "Nació en Ciudad de México y ha trabajado en Hollywood.",
        imgAyuda: "https://pbs.twimg.com/profile_images/724069655711637505/LnKuE_Xb_400x400.jpg",
        distractores: ["Eugenio Derbez", "Gael García Bernal", "Ricardo Arjona"],
    },
    {
        pregunta: "¿Quién es la cantante dominicana conocida por su éxito (El Favor) y por colaborar con Cardi B en (I Like It)?",
        respuesta: "Karol G",
        ayuda: "Es una de las figuras destacadas del reguetón femenino.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_lgdp11Ov9Je0EGnuyU8wW0SgmuNsZwp5JhapNeMtbkFZumqSQEuRAb3hl64dHn8KFk&usqp=CAU.jpg",
        distractores: ["Natti Natasha", "Anitta", "Rosalía"],
    },
    {
        pregunta: "¿Qué cantante y actor puertorriqueño es conocido por su papel en la serie de Netflix (Élite) y su música urbana?",
        respuesta: "Bad Bunny (Benito Antonio Martinez Ocasio)",
        ayuda: "Es uno de los artistas más influyentes del género urbano.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrswTMQ6Akwa36MRrmFxPwTZhscwNhQ3mHoizpy6swIRvwTcL03AeGBWvm-iG-5kZ52H8&usqp=CAU.jpg",
        distractores: ["Ozuna", "Anuel AA", "Nicky Jam"],
    },
    {
        pregunta: "¿Quién es el cantante colombiano que se hizo famoso con su canción (Dákiti) en colaboración con Bad Bunny?",
        respuesta: "Jhay Cortez",
        ayuda: "Es conocido por su estilo único en la música urbana.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9J-oQgc17NF-Slt4q_05Q2-Cbmjy_HcNKz4oyG4LdMG8Bv5i79AqlzHppFsdlU8pKXc0&usqp=CAU.jpg",
        distractores: ["Sebastián Yatra", "Manuel Turizo", "Maluma"],
    },
    {
        pregunta: " ¿Cuál es el nombre del cantante y rapero dominicano conocido por su éxito (Te Boté?)",
        respuesta: "Nio García",
        ayuda: "Es uno de los exponentes más importantes del reguetón dominicano.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvuYg7eHdSJyYIQkd2KpwfF51isReXjb5clM79vq_VAYOucrU7OwKG_KLN_z-Ea1f790&usqp=CAU.jpg",
        distractores: ["Anuel AA", "El Alfa", "Don Omar"],
    },
    {
        pregunta: "¿Quién es la cantante mexicana conocida como (La Rosalía de México) y famosa por canciones como (Búscame)",
        respuesta: "Danna Paola",
        ayuda: "Es también actriz y participó en la serie de Netflix (Élite)",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLsJKhm4j1iwJ_rXkMhas-CjDOfBEd9NV1RnAe6Mv81uszfymo-jEZAjNiVkHKfY3ib8&usqp=CAU.jpg",
        distractores: ["Karol G", "Lali Espósito", "Becky G"],
    },
    {
        pregunta: "¿Cuál es el nombre del cantante y compositor puertorriqueño conocido por su canción (Vaina Loca)?",
        respuesta: " Ozuna (Juan Carlos Ozuna Rosado)",
        ayuda: "Ha colaborado con numerosos artistas en la música latina.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTlwHfKcxhbd3vXVE0v2xlTJObkIEpf4VG0mt-ZwiXmwFUqn3JRGYayB3HELdaFtA2bo&usqp=CAU.jpg",
        distractores: ["Wisin", "J Alvarez", "Farruko"],
    },
    {
        pregunta: "¿Quién es el cantante de reguetón colombiano conocido por éxitos como (Soy Peor) y (La Modelo)?",
        respuesta: "Bad Bunny",
        ayuda: "Es uno de los artistas latinos más influyentes en la música urbana",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScf_SY9VJTtQHxd1aJD3072dlrtkJ5e3gpuYQMQRNvh9Dny62qw-K89T4R41MbUU6Usdo&usqp=CAU.jpg",
        distractores: ["J Balvin", "Maluma", "Anuel AA"],
    },
    {
        pregunta: "¿Cuál es el nombre de la cantante argentina que se destacó con su álbum (KG0516) y éxitos como (Tusa)?",
        respuesta: "Nicki Nicole ",
        ayuda: "Es una de las artistas más prometedoras del trap argentino.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeANh8ai5aT5cfDKyTtOyvp8-V_jUu43xsYlR2U41un2sDJtU9-uDyFWyxtcqbW1te7c&usqp=CAU.jpg",
        distractores: ["María Becerra", "Cazzu", "Nathy Peluso"],
    },
    {
        pregunta: ": ¿Quién es el cantante y compositor colombiano conocido por canciones como (Machika) y (Ay Vamos)?",
        respuesta: "J balvin",
        ayuda: " Es uno de los líderes del reguetón contemporáneo.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYPOpT3GCgvvUB5BIzcYINq-Qd0TcWiCvP6yk2r-gdPs0ldrjuBKyfEVgU0p3OgtADZ8&usqp=CAU.jpg",
        distractores: ["Maluma", "Nicky Jam", "Sebastián Yatra"],
    },
    {
        pregunta: "¿Cuál es el nombre del cantante y compositor mexicano conocido por éxitos como (Se supone) y (Ya me enteré)?",
        respuesta: "Christian Nodal",
        ayuda: "Es uno de los artistas más destacados de la música regional mexicana",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKO8BCm8Xu3tdj7EqavHtHZZI3A64Fwlggyfg-And3p4xzOBDWJy_b4nfmdundr3-qwy0&usqp=CAU.jpg",
        distractores: ["Gerardo Ortiz", "El Bebeto", "La Adictiva Banda San José de Mesillas"],
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