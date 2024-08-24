//Buscador
document.addEventListener("keyup", (e) => {
    if (e.target.matches("#search")) {
        const searchTerm = e.target.value.toLowerCase();
        const cartas = document.querySelectorAll(".carta");

        cartas.forEach((carta) => {
            const titulo = carta.querySelector("h3").textContent.toLowerCase();

            if (titulo.includes(searchTerm)) {
                carta.style.display = "block";
            } else {
                carta.style.display = "none";
            }
        });
    }
});

//Menú desplegable
    // Función para mostrar/ocultar el menú lateral
    document.addEventListener("DOMContentLoaded", function () {
        const menuLateral = document.getElementById("menu-lateral");
        const toggleMenu = document.getElementById("toggle-menu");
    
        toggleMenu.addEventListener("click", function () {
            menuLateral.classList.toggle("oculto");
        });
    });
    
    const menuBtn = document.getElementById("menuBtn");
    
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
    });

//Menú horizontal
document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll(".category");
    const sections = document.querySelectorAll(".hidden");

    categories.forEach((category) => {
        category.addEventListener("click", function () {
            // Ocultar todas las secciones
            sections.forEach((section) => {
                section.classList.add("hidden");
            });

            // Mostrar la sección correspondiente al botón seleccionado
            const sectionId = category.id.replace('-btn', '');
            const section = document.getElementById(sectionId);
            section.classList.remove("hidden");
        });
    });

    // Inicialmente, muestra la sección "General" al cargar la página
    document.getElementById("General").classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
    const generalButton = document.getElementById("general-btn");
    const generalSection = document.getElementById("General");

    // Al hacer clic en el botón "General"
    generalButton.addEventListener("click", function () {
        // Quita la clase "hidden" de la sección "General"
        generalSection.classList.remove("hidden");

        // Oculta las demás secciones (si es necesario)
        const sections = document.querySelectorAll(".hidden");
        sections.forEach((section) => {
            section.classList.add("hidden");
        });
    });
});

//SweetAlert para la elección de los cuestionarios
// Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert-1').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se abra directamente
    Swal.fire({
        title: '¿Qué nivel deseas realizar?',
        imageUrl: 'https://i.ibb.co/prVXwN5/gif2.gif', // Reemplaza con la URL de la imagen que deseas mostrar
        imageAlt: 'Imagen personalizada',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (selectedOption) => {
            if (!selectedOption) {
                Swal.showValidationMessage('Debes seleccionar una dificultad'); // Mensaje de error si no selecciona nada
            } else {
                switch (selectedOption) {
                    case 'Fácil':
                        window.open('carpetas/carpetaN/memokid.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpetaN/memorama.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpetaN/memorama1.html', '_blank');
                    break;
                    default:
                        break;
                }
            }
        },
        allowOutsideClick: () => !Swal.isLoading(),
        input: 'select', // Tipo de input para mostrar las opcionesNormal
        inputOptions: {
            'Fácil': 'cuestionario 1',
            'Normal': 'cuestionario 2',
            'Difícil': 'cuestionario 3'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar acciones adicionales si es necesario al confirmar
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Aquí puedes agregar acciones adicionales si es necesario al cancelar
        }
    });
});

// Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert-2').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se abra directamente
    Swal.fire({
        title: '¿Qué nivel deseas realizar?',
        imageUrl: 'https://i.ibb.co/prVXwN5/gif2.gif', // Reemplaza con la URL de la imagen que deseas mostrar
        imageAlt: 'Imagen personalizada',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (selectedOption) => {
            if (!selectedOption) {
                Swal.showValidationMessage('Debes seleccionar una dificultad'); // Mensaje de error si no selecciona nada
            } else {
                switch (selectedOption) {
                    case 'Fácil':
                        window.open('carpetas/carpetaN/memorama2.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpetaN/memorama3.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpetaN/memorama4.html', '_blank');
                    break;
                    default:
                        break;
                }
            }
        },
        allowOutsideClick: () => !Swal.isLoading(),
        input: 'select', // Tipo de input para mostrar las opcionesNormal
        inputOptions: {
            'Fácil': 'cuestionario 1',
            'Normal': 'cuestionario 2',
            'Difícil': 'cuestionario 3'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar acciones adicionales si es necesario al confirmar
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Aquí puedes agregar acciones adicionales si es necesario al cancelar
        }
    });
});

// Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert-3').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se abra directamente
    Swal.fire({
        title: '¿Qué nivel deseas realizar?',
        imageUrl: 'https://i.ibb.co/prVXwN5/gif2.gif', // Reemplaza con la URL de la imagen que deseas mostrar
        imageAlt: 'Imagen personalizada',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (selectedOption) => {
            if (!selectedOption) {
                Swal.showValidationMessage('Debes seleccionar una dificultad'); // Mensaje de error si no selecciona nada
            } else {
                switch (selectedOption) {
                    case 'Fácil':
                        window.open('carpetas/carpetaN/crossword1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpetaN/crossword2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpetaN/crossword3.html', '_blank');
                    break;
                    default:
                        break;
                }
            }
        },
        allowOutsideClick: () => !Swal.isLoading(),
        input: 'select', // Tipo de input para mostrar las opcionesNormal
        inputOptions: {
            'Fácil': 'cuestionario 1',
            'Normal': 'cuestionario 2',
            'Difícil': 'cuestionario 3'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar acciones adicionales si es necesario al confirmar
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Aquí puedes agregar acciones adicionales si es necesario al cancelar
        }
    });
});

// Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert-4').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se abra directamente
    Swal.fire({
        title: '¿Qué nivel deseas realizar?',
        imageUrl: 'https://i.ibb.co/prVXwN5/gif2.gif', // Reemplaza con la URL de la imagen que deseas mostrar
        imageAlt: 'Imagen personalizada',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (selectedOption) => {
            if (!selectedOption) {
                Swal.showValidationMessage('Debes seleccionar una dificultad'); // Mensaje de error si no selecciona nada
            } else {
                switch (selectedOption) {
                    case 'Fácil':
                        window.open('carpetas/carpetaN/niños1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpetaN/niños2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpetaN/niños3.html', '_blank');
                    break;
                    default:
                        break;
                }
            }
        },
        allowOutsideClick: () => !Swal.isLoading(),
        input: 'select', // Tipo de input para mostrar las opcionesNormal
        inputOptions: {
            'Fácil': 'cuestionario 1',
            'Normal': 'cuestionario 2',
            'Difícil': 'cuestionario 3'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar acciones adicionales si es necesario al confirmar
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Aquí puedes agregar acciones adicionales si es necesario al cancelar
        }
    });
});

// Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert-5').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se abra directamente
    Swal.fire({
        title: '¿Qué nivel deseas realizar?',
        imageUrl: 'https://i.ibb.co/prVXwN5/gif2.gif', // Reemplaza con la URL de la imagen que deseas mostrar
        imageAlt: 'Imagen personalizada',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (selectedOption) => {
            if (!selectedOption) {
                Swal.showValidationMessage('Debes seleccionar una dificultad'); // Mensaje de error si no selecciona nada
            } else {
                switch (selectedOption) {
                    case 'Fácil':
                        window.open('carpetas/carpetaN/niños4.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpetaN/niños5.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpetaN/niños6.html', '_blank');
                    break;
                    default:
                        break;
                }
            }
        },
        allowOutsideClick: () => !Swal.isLoading(),
        input: 'select', // Tipo de input para mostrar las opcionesNormal
        inputOptions: {
            'Fácil': 'cuestionario 1',
            'Normal': 'cuestionario 2',
            'Difícil': 'cuestionario 3'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar acciones adicionales si es necesario al confirmar
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Aquí puedes agregar acciones adicionales si es necesario al cancelar
        }
    });
});

// Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert-6').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se abra directamente
    Swal.fire({
        title: '¿Qué nivel deseas realizar?',
        imageUrl: 'https://i.ibb.co/prVXwN5/gif2.gif', // Reemplaza con la URL de la imagen que deseas mostrar
        imageAlt: 'Imagen personalizada',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (selectedOption) => {
            if (!selectedOption) {
                Swal.showValidationMessage('Debes seleccionar una dificultad'); // Mensaje de error si no selecciona nada
            } else {
                switch (selectedOption) {
                    case 'Fácil':
                        window.open('carpetas/carpetaN/niños7.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpetaN/niños8.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpetaN/niños9.html', '_blank');
                    break;
                    default:
                        break;
                }
            }
        },
        allowOutsideClick: () => !Swal.isLoading(),
        input: 'select', // Tipo de input para mostrar las opcionesNormal
        inputOptions: {
            'Fácil': 'cuestionario 1',
            'Normal': 'cuestionario 2',
            'Difícil': 'cuestionario 3'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar acciones adicionales si es necesario al confirmar
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Aquí puedes agregar acciones adicionales si es necesario al cancelar
        }
    });
});

// Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert-7').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se abra directamente
    Swal.fire({
        title: '¿Qué nivel deseas realizar?',
        imageUrl: 'https://i.ibb.co/prVXwN5/gif2.gif', // Reemplaza con la URL de la imagen que deseas mostrar
        imageAlt: 'Imagen personalizada',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (selectedOption) => {
            if (!selectedOption) {
                Swal.showValidationMessage('Debes seleccionar una dificultad'); // Mensaje de error si no selecciona nada
            } else {
                switch (selectedOption) {
                    case 'Fácil':
                        window.open('carpetas/carpetaN/niños10.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpetaN/niños11.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpetaN/niños12.html', '_blank');
                    break;
                    default:
                        break;
                }
            }
        },
        allowOutsideClick: () => !Swal.isLoading(),
        input: 'select', // Tipo de input para mostrar las opcionesNormal
        inputOptions: {
            'Fácil': 'cuestionario 1',
            'Normal': 'cuestionario 2',
            'Difícil': 'cuestionario 3'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar acciones adicionales si es necesario al confirmar
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Aquí puedes agregar acciones adicionales si es necesario al cancelar
        }
    });
});

// Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert-8').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace se abra directamente
    Swal.fire({
        title: '¿Qué nivel deseas realizar?',
        imageUrl: 'https://i.ibb.co/prVXwN5/gif2.gif', // Reemplaza con la URL de la imagen que deseas mostrar
        imageAlt: 'Imagen personalizada',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
        showCloseButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (selectedOption) => {
            if (!selectedOption) {
                Swal.showValidationMessage('Debes seleccionar una dificultad'); // Mensaje de error si no selecciona nada
            } else {
                switch (selectedOption) {
                    case 'Fácil':
                        window.open('carpetas/carpetaN/niños13.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpetaN/niños14.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpetaN/niños15.html', '_blank');
                    break;
                    default:
                        break;
                }
            }
        },
        allowOutsideClick: () => !Swal.isLoading(),
        input: 'select', // Tipo de input para mostrar las opcionesNormal
        inputOptions: {
            'Fácil': 'cuestionario 1',
            'Normal': 'cuestionario 2',
            'Difícil': 'cuestionario 3'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Aquí puedes agregar acciones adicionales si es necesario al confirmar
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Aquí puedes agregar acciones adicionales si es necesario al cancelar
        }
    });
});