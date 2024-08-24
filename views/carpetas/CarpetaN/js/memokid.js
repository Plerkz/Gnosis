const totalCards = 18;
const availableCards = ['J', 'K', 'Q', 'J', 'P', 'B', 'f', 'L', 'V'];
let cards = [];
let selectedCards = [];
let valuesUsed = [];
let currentMove = 0;
let currentAttempts = 0;
let paresEncontrados = 0;

let cardTemplate = '<div class="card"><div class="back"></div><div class="face"></div></div>';

let gameStarted = false; // Variable para rastrear si el juego ha comenzado

const limiteIntentos = 10; // Variable para establecer un límite de intentos

// Variable para rastrear el límite de intentos
const maxIntentos = limiteIntentos;
let intentosRestantes = maxIntentos;

function activate(e) {
    if (currentMove < 2) {
        if (gameStarted && (!selectedCards[0] || selectedCards[0] !== e.target) && !e.target.classList.contains('active')) {
            e.target.classList.add('active');
            selectedCards.push(e.target);

            if (++currentMove === 2) {
                if (
                    selectedCards[0].querySelectorAll('.face')[0].innerHTML ===
                    selectedCards[1].querySelectorAll('.face')[0].innerHTML
                ) {
                    // Cartas coinciden, no contamos este intento
                    selectedCards = [];
                    currentMove = 0;
                    paresEncontrados++;
                    // Actualiza el contador de pares encontrados
                    document.querySelector('#paresEncontrados').textContent = paresEncontrados;

                    // Verificar si se han encontrado todos los pares
                    if (paresEncontrados === 9) {
                        checkWin();
                    }
                } else {
                    currentAttempts++;
                    intentosRestantes--;

                    document.querySelector('#stats').innerHTML =
                        currentAttempts + ' intentos (' + intentosRestantes + ' restantes)';

                    if (intentosRestantes === 0) {
                        // Has agotado los intentos
                        showGameOver();
                    } else {
                        setTimeout(() => {
                            selectedCards[0].classList.remove('active');
                            selectedCards[1].classList.remove('active');
                            selectedCards = [];
                            currentMove = 0;
                        }, 600);
                    }
                }
            }
        }
    }
}

function randomValue() {
    let rnd = Math.floor(Math.random() * totalCards * 0.5);
    let values = valuesUsed.filter(value => value === rnd);
    if (values.length < 2) {
        valuesUsed.push(rnd);
    } else {
        randomValue();
    }
}

function getFaceValue(value) {
    let rtn = value;
    if (value < availableCards.length) {
        rtn = availableCards[value];
    }
    return rtn;
}

// Agrega el evento 'click' a las cartas después de crearlas
function agregarClickListeners() {
    const cardElements = document.querySelectorAll('.card');
    cardElements.forEach(card => {
        card.addEventListener('click', activate);
    });
}

// Función para iniciar el juego y ocultar la pantalla inicial
function comenzarJuego() {
    // RESETEAMOS LAS VARIABLES
    currentMove = 0;
    currentAttempts = 0;
    paresEncontrados = 0; // Reiniciar el contador de pares encontrados
    intentosRestantes = maxIntentos;
    document.querySelector('#paresEncontrados').textContent = paresEncontrados; // Actualizar el contador en la pantalla
    document.querySelector('#stats').innerHTML = currentAttempts + ' intentos (' + intentosRestantes + ' restantes)';
    valuesUsed = [];
    selectedCards = [];
    gameStarted = true;
    document.querySelector('#pantalla-inicial').style.display = 'none';
    document.querySelector('#pantalla-juego').style.display = 'block';

    for (let i = 0; i < totalCards; i++) {
        let div = document.createElement('div');
        div.innerHTML = cardTemplate;
        cards.push(div);
        document.querySelector('#game').append(cards[i]);
        randomValue();
        cards[i].querySelectorAll('.face')[0].innerHTML = getFaceValue(valuesUsed[i]);
    }

    // Voltear cartas al inicio del juego
    setTimeout(() => {
        cards.forEach(card => {
            card.querySelectorAll('.card')[0].classList.add('active');
        });

        // Voltear de nuevo después de 3 segundos
        setTimeout(() => {
            cards.forEach(card => {
                card.querySelectorAll('.card')[0].classList.remove('active');
            });
            // Agregar los event listeners para el clic después de dar vuelta las cartas
            agregarClickListeners();
        }, 3000);
    }, 100);
}

function checkWin() {
    setTimeout(() => {
        Swal.fire({
            title: '¡Felicitaciones!',
            html: `Completaste el juego en ${currentAttempts} intentos. <br> Intentos restantes: ${intentosRestantes}`,
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Jugar de nuevo',
            cancelButtonText: 'Salir',
        }).then((result) => {
            if (result.isConfirmed) {
                // Reiniciar el juego
                comenzarJuego();
            } else {
                // Redirigir o realizar otra acción para salir
                window.close(); // Esto cierra la pestaña actual
            }
        });
    }, 1000); // Agrega un retraso de 1 segundo antes de mostrar el mensaje
}

function showGameOver() {
    Swal.fire({
        title: '¡Perdiste!',
        text: 'Has agotado tus intentos. ¿Quieres intentarlo de nuevo?',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Salir',
    }).then((result) => {
        if (result.isConfirmed) {
            // Reiniciar el juego
            comenzarJuego();
        } else {
            // Redirigir o realizar otra acción para salir
            window.close(); // Esto cierra la pestaña actual
        }
    });
}

document.querySelector('.btn').addEventListener('click', comenzarJuego);