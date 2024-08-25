let baseDePreguntas = [
    {
        pregunta: "¿Qué actriz dio vida a Black Widow en el UCM?",
        respuesta: " Scarlett Johansson",
        ayuda: "Fundó su propia organización llamada (Fundación Footprint Coalition.)",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSnNnulYtnwDbSonaJHFRyRhooBHe6ihbmefBJvSfv5dBqvXtJznsfJlFz3rd7_ZO8Jc&usqp=CAU.jpg",
        distractores: ["Elizabeth Olsen", "Emily Blunt", "Natalie Portman"],
    },
    {
        pregunta: "¿Cuál es el nombre del actor que interpreta a Spider-Man en el UCM?",
        respuesta: "Tom Holland",
        ayuda: "Debutó como Spider-Man en Capitán América: Civil War.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vqh2rIYGA9kbb6zWofyK3cGe9hEqVLxd3t4MkYwS18Yd-awO9jHmgY5GV4ou-56dm8g&usqp=CAU.jpg",
        distractores: ["Andrew Garfield", "Tobey Maguire", "Zendaya"],
    },
    {
        pregunta: "¿Quién interpretó a Loki en el UCM?",
        respuesta: "Tom Hiddleston",
        ayuda: "Loki es uno de los villanos más carismáticos de Marvel.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTwwRMS6Xk1LaEFIiQ2BcFsVQWY0iRQE7LEQ6mySchs_GSJr_5vTOPxAyYE64SdpCy3Q&usqp=CAU.jpg",
        distractores: ["Chris Evans", "Mark Ruffalo", "Benedict Cumberbatch"],
    },
    {
        pregunta: "¿Qué actor dio vida a Star-Lord en las películas de Guardians of the Galaxy en el UCM?",
        respuesta: "Chris Pratt",
        ayuda: "También es conocido por su papel en (Jurassic World.)",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbsjdpWSJb4nrywSlais3V9466sitQgVISEcZT71Flr1zPFXr9IJ3PFj6uW3bBcxM_jk&usqp=CAU.jpg",
        distractores: ["Dave Bautista", "Vin Diesel", "Bradley Cooper"],
    },
    {
        pregunta: "¿Quién interpretó a Black Panther en el UCM?",
        respuesta: "Chadwick Boseman",
        ayuda: "Su actuación recibió elogios por representar la cultura africana.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQONDsmtKE4dMYaodsqmDAG-eJwM8-eqYjW12X5y5P9MviLJpYx8KrQOLIefm68hoz5wec&usqp=CAU.jpg",
        distractores: ["Michael B. Jordan", "Winston Duke", "Daniel Kaluuya"],
    },
    {
        pregunta: "¿Cuál es el nombre del actor que encarna a Thor en el UCM?",
        respuesta: "Chris Hemsworth",
        ayuda: "Es conocido por su físico musculoso y su sentido del humor.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOL8YxndXuEH3lUuJ6EK6Br_3g1eKQ_Ur7P_3YNoleSp8Rc0M4YGkdZa1NRFGsQKdrz0&usqp=CAU.jpg",
        distractores: ["Chris Pratt", "Chris Evans", "Chris Pine"],
    },
    {
        pregunta: "¿Quién interpretó a Doctor Strange en el UCM?",
        respuesta: " Benedict Cumberbatch",
        ayuda: " Su personaje es un maestro de las artes místicas.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwxrh-YHA7IHgXB9Vfp6jqX6E0vqyPy9ujX29uG0JK2ip7Y8xoIMAgSVEAPE42wPnGOI&usqp=CAU.jpg",
        distractores: ["Matt Smith", "Tom Hiddleston", "Martin Freeman"],
    },
    {
        pregunta: "¿Cuál es el nombre del actor que interpreta a Rocket en el UCM?",
        respuesta: "Bradley Cooper (voz)",
        ayuda: "Bradley Cooper presta su voz al astuto mapache espacial.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXgCwlhwmYDVOkmfq5jsUuwZGMgsD4k2M8sZ92ety5P3MFiLjuVZKaHgS5c7HM9OODa6U&usqp=CAU.jpg",
        distractores: ["Vin Diesel", "Dave Bautista", "Sean Gunn"],
    },
    {
        pregunta: "¿Quién interpretó a Groot en el UCM?",
        respuesta: " Vin Diesel (voz)",
        ayuda: "Su personaje tiene una línea de diálogo icónica: (I am Groot)",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtUR1TDHls_bTXK6ctmYimETxhbFsflao5B8RSRcVSi0q1eUsPFdSvnjndrWW7ygmJ89Y&usqp=CAU.jpg",
        distractores: ["Bradley Cooper", "Dave Bautista", "Sean Gunn"],
    },
    {
        pregunta: "¿Cuál es el nombre del actor que interpreta a Hulk en el UCM?",
        respuesta: "Mark Ruffalo",
        ayuda: "Ha aparecido como Bruce Banner en varias películas del UCM.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7SQbeuYyrmdc3kLxsmr2-i3S8QGmD2-DUtU1vugsvB_W-zSakJraPxofIPjyJdBwKyY&usqp=CAU.jpg",
        distractores: ["Edward Norton", "Eric Bana", "Lou Ferrigno"],
    },
    {
        pregunta: "¿Quién dio vida a Capitán América en el UCM?",
        respuesta: "Chris Evans",
        ayuda: "Luchó contra el Cráneo Rojo y Thanos en la saga.",
        imgAyuda: "https://www.tribunadesanluis.com.mx/incoming/lc5q84-capitanamerica/ALTERNATES/LANDSCAPE_768/capitanamerica.jpg",
        distractores: ["Sebastian Stan", "Anthony Mackie", "Robert Downey Jr."],
    },
    {
        pregunta: "¿Cuál es el nombre del actor que interpreta a Ant-Man en el UCM?",
        respuesta: "Paul Rudd",
        ayuda: "Su personaje puede reducir su tamaño y aumentar su fuerza.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpyqeBbHUCThFlnJbh2VozapzHo63b_Te_BXSq_vq1oJJqqbtGWrTaSkGuEXfRBj4zaw&usqp=CAU.jpg",
        distractores: ["Michael Douglas", "Corey Stoll", "Michael Peña"],
    },
    {
        pregunta: "¿Quién interpretó a Nick Fury en el UCM?",
        respuesta: "Samuel L. Jackson",
        ayuda: "Es el líder de S.H.I.E.L.D. y aparece en numerosas películas.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaOKhCxyZOJrBu_UluN9HI1O3aMaMmJSL-n-sSbflVtNc_EHlYb141zKhy1G7pbcoUw9c&usqp=CAU.jpg",
        distractores: [" Laurence Fishburne", "Morgan Freeman", "Don Cheadle"],
    },
    {
        pregunta: "¿Cuál es el nombre del actor que interpretó a Spider-Man en la trilogía dirigida por Sam Raimi?",
        respuesta: "Tobey Maguire",
        ayuda: "Fue el primer Spider-Man en la pantalla grande.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8yEUGbXHAJmEq-y8szU_7n4bRdYIIKAlIXCgEYiI8aD290oyOqQmwJ7gxCzG82aUDw&usqp=CAU.jpg",
        distractores: ["Andrew Garfield", "Tom Holland", "Jake Gyllenhaal"],
    },
    {
        pregunta: " ¿Quién interpretó a Electro en la película (The Amazing Spider-Man 2)?",
        respuesta: "Jamie Foxx",
        ayuda: "Su personaje es un villano con poderes eléctricos.",
        imgAyuda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSckNks9ar6Eh9nHd5mxda4ia1K2Eh9-Qhfpc8SnRb_4fHh0mJp9tCbhSO5FRcFnMDMFM&usqp=CAU.jpg",
        distractores: ["Willem Dafoe", "Rhys Ifans", "Alfred Molina"],
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