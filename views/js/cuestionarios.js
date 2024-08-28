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
document.getElementById('mostrarSweetAlert-38').addEventListener('click', function(event) {
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
document.getElementById('mostrarSweetAlert-39').addEventListener('click', function(event) {
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
document.getElementById('mostrarSweetAlert-40').addEventListener('click', function(event) {
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
document.getElementById('mostrarSweetAlert-41').addEventListener('click', function(event) {
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
document.getElementById('mostrarSweetAlert-42').addEventListener('click', function(event) {
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
document.getElementById('mostrarSweetAlert-43').addEventListener('click', function(event) {
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
document.getElementById('mostrarSweetAlert-44').addEventListener('click', function(event) {
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