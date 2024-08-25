let baseDePreguntas = [
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a un grupo de personas enmascaradas y fue pintada por Diego Velázquez?",
        respuesta: "Las lanzas",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra maestra del arte español que representa una escena histórica.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Velazquez-las_hilanderas.jpg/1200px-Velazquez-las_hilanderas.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a una mujer en un balcón y fue pintada por Édouard Manet?",
        respuesta: "El balcón",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra impresionista que retrata a una mujer y dos hombres en un balcón.",
        imgAyuda: "https://www.ttamayo.com/wp-content/uploads/2017/02/1177px-In_the_Conservatory_-_edited-1.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra una escena de guerra y fue pintada por Pablo Picasso?",
        respuesta: "Guernica",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra cubista que denuncia el bombardeo de la ciudad de Guernica durante la Guerra Civil Española.",
        imgAyuda: "https://www.eulixe.com/asset/thumbnail,992,558,center,center/media/eulixe/images/2021/03/29/2021032910342980820.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a una pareja abrazándose en medio de un torbellino y fue pintada por Auguste Rodin?",
        respuesta: "El beso",
        distractores: ["La última cena", "La noche estrellada", "El nacimiento de Venus"],
        ayuda: "Pista: Es una obra escultórica que representa un momento de pasión y amor.",
        imgAyuda: "https://s1.abcstatics.com/media/cultura/2016/04/25/Edvard_Munch_-_The_Kiss_-_Google_Art_Project-k8WG--510x287@abc.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una mujer con una jarra y fue pintada por Johannes Vermeer?",
        respuesta: "La lechera",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra del siglo XVII que representa a una mujer sirviendo leche.",
        imgAyuda: "https://cdn.culturagenial.com/es/imagenes/la-joven-de-la-perla-vermeer-cke.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a una mujer durmiente en una cama y fue pintada por Gustav Klimt?",
        respuesta: "Danae",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra del movimiento artístico conocido como Art Nouveau.",
        imgAyuda: "https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2018/02/05/5fa43b8a55fee.jpeg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra una escena de un prostíbulo y fue pintada por Henri de Toulouse-Lautrec?",
        respuesta: "En el Moulin Rouge",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra del siglo XIX que retrata la vida nocturna en el cabaret parisino Moulin Rouge.",
        imgAyuda: "https://i.blogs.es/8451d8/lautrec/1366_2000.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a un grupo de personas en una playa y fue pintada por Georges Seurat?",
        respuesta: "Un domingo en la isla de la Grande Jatte",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra del movimiento artístico conocido como puntillismo.",
        imgAyuda: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg/1200px-Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una mujer en un columpio y fue pintada por Jean-Honoré Fragonard?",
        respuesta: "El columpio",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra rococó que representa a una mujer siendo empujada en un columpio por un hombre.",
        imgAyuda: "https://mymodernmet.com/wp/wp-content/uploads/2019/11/fragonard-the-swing-fb-thumbnail.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a un hombre con un sombrero y fue pintada por Rembrandt?",
        respuesta: "Autorretrato con gorro y dos cadenas de oro",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra del siglo XVII que muestra al artista holandés en un autorretrato.",
        imgAyuda: "https://www.museothyssen.org/sites/default/files/styles/16x9_social_share/public/imagen/obras/1976.90_autorretrato-gorra-dos-cadenas.jpg?h=6429b14c",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una mujer con un abanico y fue pintada por Francisco Goya?",
        respuesta: "La maja desnuda",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra del siglo XVIII que representa a una mujer desnuda.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIX1TheXq_4aIgTorbzILAZwPdmer3SXrSUYeuup3zig9VV7pC0eHYJrvTR0S-TNbJJE&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra a un hombre con una pipa y fue pintada por Magritte?",
        respuesta: "La traición de las imágenes",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una obra surrealista que cuestiona la relación entre las imágenes y la realidad.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXbt3qr7OZV3jqPg0wjghill2z-rpGxQHfNSfCveSau6K7dc0akLmtvi-v7zef4LsWN4&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una pareja besándose en un jardín y fue pintada por Gustav Klimt?",
        respuesta: "El abrazo",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra del movimiento artístico conocido como Art Nouveau.",
        imgAyuda: "https://i.pinimg.com/originals/7e/20/7a/7e207a3792ed795f881c83caedd6bc05.jpg",
    },
    {
        pregunta: "¿Qué famosa pintura muestra un campo de trigo con cuervos volando y fue pintada por Vincent van Gogh?",
        respuesta: "Campo de trigo con cuervos",
        distractores: ["La última cena", "La noche estrellada", "El grito"],
        ayuda: "Pista: Es una de las últimas obras de Van Gogh antes de su muerte.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT158wgmgA4HaJNdhRD_bx-C3tRQwVdcnRhSOlyv8w15J1Jnv-IGEa1LDdeqLNhxIPZCJY&usqp=CAU.jpg",
    },
    {
        pregunta: "¿Cuál es el nombre de la pintura que muestra a una mujer y dos hombres en un bar y fue pintada por Édouard Manet?",
        respuesta: "Un bar en el Folies-Bergère",
        distractores: ["La última cena", "El nacimiento de Venus", "La noche estrellada"],
        ayuda: "Pista: Es una obra impresionista que retrata la vida nocturna en un famoso café de París.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMjF3hTbos4mxkC8WW3E76aOswvFTUADmkBjeLbVf5nbtAN-Lh9DUy-A7g1F1DYy1kLk&usqp=CAU.jpg",
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