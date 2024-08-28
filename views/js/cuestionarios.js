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
                        window.open('carpetas/carpeta0/banderas/banderas1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta0/banderas/banderas2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta0/banderas/banderas3.html', '_blank');
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
                        window.open('carpetas/carpeta0/programacion/programacion1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta0/programacion/programacion2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta0/programacion/programacion3.html', '_blank');
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
                        window.open('carpetas/carpeta0/pinturas/pinturas1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta0/pinturas/pinturas2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta0/pinturas/pinturas3.html', '_blank');
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
                        window.open('carpetas/carpeta0/astronomia/astronomia1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta0/astronomia/astronomia2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta0/astronomia/astronomia3.html', '_blank');
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
                        window.open('carpetas/carpeta0/mitologia/mitologia1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta0/mitologia/mitologia2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta0/mitologia/mitologia3.html', '_blank');
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
                        window.open('carpetas/carpeta0/famosos/artista1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta0/famosos/artista2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta0/famosos/artista3.html', '_blank');
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
document.getElementById('mostrarSweetAlert1').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta1/Ciencias/Ciencias.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta1/Ciencias2/Ciencias.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta1/Ciencias3/Ciencias.html', '_blank');
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
document.getElementById('mostrarSweetAlert2').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta1/Lenguaje/Lenguaje.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta1/Lenguaje2/Lenguaje.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta1/Lenguaje3/Lenguaje.html', '_blank');
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
document.getElementById('mostrarSweetAlert3').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta1/Sociales/Sociales.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta1/Sociales2/Sociales.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta1/Sociales3/Sociales.html', '_blank');
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
document.getElementById('mostrarSweetAlert4').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta1/Matematicas/Matematicas.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta1/Matematicas2/Matematicas.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta1/Matematicas3/Matematicas.html', '_blank');
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
document.getElementById('mostrarSweetAlert5').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta2/Ciencias/Ciencias.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta2/Ciencias2/Ciencias.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta2/Ciencias3/Ciencias.html', '_blank');
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
document.getElementById('mostrarSweetAlert6').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta2/Lenguaje/Lenguaje.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta2/Lenguaje2/Lenguaje.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta2/Lenguaje3/Lenguaje.html', '_blank');
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
document.getElementById('mostrarSweetAlert7').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta2/Sociales/Sociales.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta2/Sociales2/Sociales.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta2/Sociales3/Sociales.html', '_blank');
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
document.getElementById('mostrarSweetAlert8').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta2/Matematicas/Matematicas.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta2/Matematicas2/Matematicas.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta2/Matematicas3/Matematicas.html', '_blank');
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
document.getElementById('mostrarSweetAlert9').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta3/Ciencias/Ciencias.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta3/Ciencias2/Ciencias.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta3/Ciencias3/Ciencias.html', '_blank');
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
document.getElementById('mostrarSweetAlert10').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta3/Lenguaje/Lenguaje.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta3/Lenguaje2/Lenguaje.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta3/Lenguaje3/Lenguaje.html', '_blank');
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
document.getElementById('mostrarSweetAlert11').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta3/Sociales/Sociales.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta3/Sociales2/Sociales.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta3/Sociales3/Sociales.html', '_blank');
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
document.getElementById('mostrarSweetAlert12').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta3/Matematicas/Matematicas.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta3/Matematicas2/Matematicas.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta3/Matematicas3/Matematicas.html', '_blank');
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
document.getElementById('mostrarSweetAlert13').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta4/Ciencias/Ciencias.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta4/Ciencias2/Ciencias.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta4/Ciencias3/Ciencias.html', '_blank');
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
document.getElementById('mostrarSweetAlert14').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta4/Lenguaje/Lenguaje.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta4/Lenguaje2/Lenguaje.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta4/Lenguaje3/Lenguaje.html', '_blank');
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
document.getElementById('mostrarSweetAlert15').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta4/Sociales/Sociales.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta4/Sociales2/Sociales.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta4/Sociales3/Sociales.html', '_blank');
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
document.getElementById('mostrarSweetAlert16').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta4/Matematicas/Matematicas.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta4/Matematicas2/Matematicas.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta4/Matematicas3/Matematicas.html', '_blank');
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
document.getElementById('mostrarSweetAlert17').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta5/Ciencias/Ciencias.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta5/Ciencias2/Ciencias.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta5/Ciencias3/Ciencias.html', '_blank');
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
document.getElementById('mostrarSweetAlert18').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta5/Lenguaje/Lenguaje.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta5/Lenguaje2/Lenguaje.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta5/Lenguaje3/Lenguaje.html', '_blank');
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
document.getElementById('mostrarSweetAlert19').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta5/Sociales/Sociales.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta5/Sociales2/Sociales.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta5/Sociales3/Sociales.html', '_blank');
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
document.getElementById('mostrarSweetAlert20').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta5/Matematicas/Matematicas.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta5/Matematicas2/Matematicas.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta5/Matematicas3/Matematicas.html', '_blank');
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
document.getElementById('mostrarSweetAlert21').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 6/Ciencias/Ciencias.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 6/Ciencias/Ciencias1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 6/Ciencias/Ciencias2.html', '_blank');
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
document.getElementById('mostrarSweetAlert22').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 6/Lenguaje/Lenguaje.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 6/Lenguaje/Lenguaje1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 6/Lenguaje/Lenguaje2.html', '_blank');
                    break;
                    default:
                        break;
                }

                // Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert23').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 6/Sociales/Sociales.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 6/Sociales/Sociales1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 6/Sociales/Sociales2.html', '_blank');
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
document.getElementById('mostrarSweetAlert24').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 6/Matematicas/Matematicas.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 6/Matematicas/Matematicas1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 6/Matematicas/Matematicas2.html', '_blank');
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
document.getElementById('mostrarSweetAlert25').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 7/Ciencias/Ciencias.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 7/Ciencias/Ciencias1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 7/Ciencias/Ciencias2.html', '_blank');
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
document.getElementById('mostrarSweetAlert26').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 7/Lenguaje/Lenguaje.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 7/Lenguaje/Lenguaje1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 7/Lenguaje/Lenguaje2.html', '_blank');
                    break;
                    default:
                        break;
                }

                // Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert27').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 7/Sociales/Sociales.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 7/Sociales/Sociales1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 7/Sociales/Sociales2.html', '_blank');
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
document.getElementById('mostrarSweetAlert28').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 7/Matematicas/Matematicas.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 7/Matematicas/Matematicas1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 7/Matematicas/Matematicas2.html', '_blank');
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
document.getElementById('mostrarSweetAlert29').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 8/Ciencias/Ciencias.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 8/Ciencias/Ciencias1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 8/Ciencias/Ciencias2.html', '_blank');
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
document.getElementById('mostrarSweetAlert30').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 8/Lenguaje/Lenguaje.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 8/Lenguaje/Lenguaje1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 8/Lenguaje/Lenguaje2.html', '_blank');
                    break;
                    default:
                        break;
                }

                // Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert31').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 8/Sociales/Sociales.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 8/Sociales/Sociales1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 8/Sociales/Sociales2.html', '_blank');
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
document.getElementById('mostrarSweetAlert32').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 8/Matematicas/Matematicas.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 8/Matematicas/Matematicas1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 8/Matematicas/Matematicas2.html', '_blank');
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
document.getElementById('mostrarSweetAlert33').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 9/Ciencias/Ciencias.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 9/Ciencias/Ciencias1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 9/Ciencias/Ciencias2.html', '_blank');
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
document.getElementById('mostrarSweetAlert34').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 9/Lenguaje/Lenguaje.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 9/Lenguaje/Lenguaje1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 9/Lenguaje/Lenguaje2.html', '_blank');
                    break;
                    default:
                        break;
                }

                // Código del sweetalert al boton de x cuestionario
document.getElementById('mostrarSweetAlert35').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 8/Sociales/Sociales.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 8/Sociales/Sociales1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 8/Sociales/Sociales2.html', '_blank');
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
document.getElementById('mostrarSweetAlert36').addEventListener('click', function(event) {
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
                        window.open('carpetas/Carpeta 9/Matematicas/Matematicas.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/Carpeta 9/Matematicas/Matematicas1.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/Carpeta 9/Matematicas/Matematicas2.html', '_blank');
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
document.getElementById('mostrarSweetAlert37').addEventListener('click', function(event) {
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
                        window.open('carpetas/carpeta10/ciencias/ciencias1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta10/ciencias/ciencias2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta10/ciencias/ciencias3.html', '_blank');
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
document.getElementById('mostrarSweetAlert38').addEventListener('click', function(event) {
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
                        window.open('carpetas/carpeta10/lenguaje/lenguaje1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta10/lenguaje/lenguaje2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta10/lenguaje/lenguaje3.html', '_blank');
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
document.getElementById('mostrarSweetAlert39').addEventListener('click', function(event) {
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
                        window.open('carpetas/carpeta10/sociales/sociales1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta10/sociales/sociales2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta10/sociales/sociales3.html', '_blank');
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
document.getElementById('mostrarSweetAlert40').addEventListener('click', function(event) {
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
                        window.open('carpetas/carpeta10/matematicas/matematicas1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta10/matematicas/matematicas2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta10/matematicas/matematicas3.html', '_blank');
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
document.getElementById('mostrarSweetAlert41').addEventListener('click', function(event) {
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
                        window.open('carpetas/carpeta11/ciencias/ciencias1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta11/ciencias/ciencias2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta11/ciencias/ciencias3.html', '_blank');
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
document.getElementById('mostrarSweetAlert42').addEventListener('click', function(event) {
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
                        window.open('carpetas/carpeta11/lenguaje/lenguaje1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta11/lenguaje/lenguaje2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta11/lenguaje/lenguaje3.html', '_blank');
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
document.getElementById('mostrarSweetAlert43').addEventListener('click', function(event) {
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
                        window.open('carpetas/carpeta11/sociales/sociales1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta11/sociales/sociales2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta11/sociales/sociales3.html', '_blank');
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
document.getElementById('mostrarSweetAlert44').addEventListener('click', function(event) {
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
                        window.open('carpetas/carpeta11/matematicas/matematica1.html', '_blank');
                        break;
                    case 'Normal':
                        window.open('carpetas/carpeta11/matematicas/matematica2.html', '_blank');
                        break;
                    case 'Difícil':
                        window.open('carpetas/carpeta11/matematicas/matematica3.html', '_blank');
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