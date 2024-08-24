// Obtener referencias a las pantallas
const pantallaInicial = document.getElementById('pantalla-inicial');
const pantallaJuego = document.getElementById('pantalla-juego');

// Obtener el botón "Comenzar a jugar"
const botonComenzar = document.querySelector('.btn');

botonComenzar.addEventListener('click', function () {
    pantallaInicial.style.display = 'none';
    pantallaJuego.style.display = 'block';
    iniciarCronometro();
});

const crosswordTable = document.getElementById('crossword');
const timerElement = document.getElementById('timer');

const tiempoLimite = 180;
let tiempoRestante = tiempoLimite;

let timerInterval;

function iniciarCronometro() {
    timerInterval = setInterval(function () {
        tiempoRestante--;

        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;

        timerElement.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

        if (tiempoRestante <= 0) {
            clearInterval(timerInterval);
            Swal.fire({
                title: '¡Tiempo agotado!',
                text: 'Lamentablemente, se te ha agotado el tiempo.',
                icon: 'error',
                showCancelButton: true,
                confirmButtonText: 'Volver a Intentar',
                cancelButtonText: 'Salir',
            }).then((result) => {
                if (result.isConfirmed) {
                    location.reload();
                } else {
                    window.close();
                }
            });        
        }
    }, 1000);
}

function detenerCronometro() {
    clearInterval(timerInterval);
}

// Generar la tabla de 8x14
for (let i = 0; i < 8; i++) {
    const row = crosswordTable.insertRow();
    for (let j = 0; j < 14; j++) {
        const cell = row.insertCell();
        cell.innerHTML = '<input type="text" maxlength="1">';
    }
}

function disableUnwantedCells() {
    const cellsToDisable = [
        //FILA 1
        { row: 0, col: 0 }, {row: 0, col: 2 }, {row: 0, col: 3 }, {row: 0, col: 4 }, {row: 0, col: 5 }, {row: 0, col: 6 }, {row: 0, col: 7 },
        {row: 0, col: 8 }, {row: 0, col: 9 }, {row: 0, col: 10 }, {row: 0, col: 11 }, {row: 0, col: 12 }, {row: 0, col: 13 },
        //FILA 2
        {row: 1, col: 7 }, {row: 1, col: 8 }, {row: 1, col: 9 }, {row: 1, col: 11 }, {row: 1, col: 12 }, {row: 1, col: 13 },
        //FILA 3
        {row: 2, col: 0 }, {row: 2, col: 2 }, {row: 2, col: 3 }, {row: 2, col: 5 },
        //fila 4
        {row: 3, col: 0 }, {row: 3, col: 2 }, {row: 3, col: 3 }, {row: 3, col: 5 }, {row: 3, col: 7 }, {row: 3, col: 8 }, {row: 3, col: 9 },
        {row: 3, col: 11 }, {row: 3, col: 12 }, {row: 3, col: 13 },
        //FILA 5
        {row: 4, col: 0 }, {row: 4, col: 2 }, {row: 4, col: 3 }, {row: 4, col: 5 }, {row: 4, col: 7 }, {row: 4, col: 8 }, {row: 4, col: 9 },
        {row: 4, col: 11 }, {row: 4, col: 12 }, {row: 4, col: 13 }, 
        //FILA 6
        {row: 5, col: 0 }, {row: 5, col: 1 }, {row: 5, col: 2 }, {row: 5, col: 3 }, {row: 5, col: 5 }, {row: 5, col: 6 }, {row: 5, col: 7 },
        {row: 5, col: 8 }, {row: 5, col: 13 },
        //FILA 7
        {row: 6, col: 0 }, {row: 6, col: 1 }, {row: 6, col: 2 }, {row: 6, col: 3 }, {row: 6, col: 5 }, {row: 6, col: 6 }, {row: 6, col: 7 },
        {row: 6, col: 8 }, {row: 6, col: 9 }, {row: 6, col: 10 }, {row: 6, col: 11 }, {row: 6, col: 12 }, {row: 6, col: 13 },
        //FILA 8
        {row: 7, col: 0 }, {row: 7, col: 1 }, {row: 7, col: 2 }, {row: 7, col: 3 }, {row: 7, col: 5 }, {row: 7, col: 6 }, {row: 7, col: 7 },
        {row: 7, col: 8 }, {row: 7, col: 9 }, {row: 7, col: 10 }, {row: 7, col: 11 }, {row: 7, col: 12 }, {row: 7, col: 13 }
    ];

    cellsToDisable.forEach(cellInfo => {
        const cell = crosswordTable.rows[cellInfo.row].cells[cellInfo.col];
        const input = cell.querySelector('input');
        input.disabled = true;
        input.style.backgroundColor = 'transparent';
        input.style.border = 'none';
    });

    const staticLetters = {
        0: [' ', 'R', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        1: ['C', ' ', ' ', ' ', 'C', ' ', 'L', ' ', ' ', ' ', 'C', ' ', ' ', ' '],
        2: [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'L', ' ', 'F', ' ', ' ', ' ', 'E'],
        3: [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        4: [' ', 'N', ' ', ' ', ' ', ' ', 'N', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        5: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'R', ' ', 'N', ' ', ' '],
        6: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        7: [' ', ' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    };

    for (let row = 0; row < 8; row++) {
        const cells = crosswordTable.rows[row].cells;
        const letters = staticLetters[row];

        for (let col = 0; col < 14; col++) {
            const input = cells[col].querySelector('input');
            if (letters[col] === ' ') {
                input.value = '';
            } else {
                input.value = letters[col];
                input.disabled = true;
                input.style.backgroundColor = 'white';
                input.style.color = 'black';
            }
        }
    }
}

disableUnwantedCells();

const letrasEsperadas = {
    '1-1': 'A',
    '1-2': 'R',
    '1-3': 'A',
    '1-5': 'O',
    '2-1': 'T',
    '2-4': 'A',
    '2-6': 'E',
    '2-8': 'E',
    '2-10': 'A',
    '2-11': 'N',
    '2-12': 'T',
    '3-1': 'O',
    '3-6': 'O',
    '4-4': 'A',
    '4-10': 'R',
    '5-4': 'L',
    '5-10': 'A',
    '5-12': 'A',
    '6-4': 'L',
};

function compareLetters() {
    const cellsToCompare = [
        { row: 1, col: 1 }, { row: 1, col: 2 }, {row: 1, col: 3 }, {row: 1, col: 5 },
        {row: 2, col: 1 }, {row: 2, col: 4 }, {row: 2, col: 6 }, {row: 2, col: 8 }, {row: 2, col: 10 }, {row: 2, col: 11 },
        {row: 2, col: 12 },
        {row: 3, col: 1 }, {row: 3, col: 6 },
        {row: 4, col: 4 }, {row: 4, col: 10 },
        {row: 5, col: 4 },  {row: 5, col: 10 },  {row: 5, col: 12 },
        {row: 6, col: 4 },
    ];

    cellsToCompare.forEach(cellInfo => {
        const cell = crosswordTable.rows[cellInfo.row].cells[cellInfo.col];
        const input = cell.querySelector('input');
        const expected = letrasEsperadas[`${cellInfo.row}-${cellInfo.col}`];
        input.dataset.expected = expected;
    });
}

compareLetters();

crosswordTable.addEventListener('click', function (e) {
    if (e.target.tagName === 'INPUT') {
        e.target.select();
    }
});

crosswordTable.addEventListener('input', function (e) {
    if (e.target.tagName === 'INPUT') {
        e.target.value = e.target.value.toUpperCase();
        
        if (e.target.dataset.expected) {
            const letraIngresada = e.target.value.toUpperCase();
            const letraEsperada = e.target.dataset.expected.toUpperCase();
            if (letraIngresada === letraEsperada) {
                e.target.style.backgroundColor = 'lightgreen';
            } else if (letraIngresada === '') {
                e.target.style.backgroundColor = '';
            } else {
                e.target.style.backgroundColor = 'lightcoral';
            }
        }
        
        checkWinCondition();
    }
});

function checkWinCondition() {
    const allCorrect = Object.entries(letrasEsperadas).every(([key, value]) => {
        const [row, col] = key.split('-').map(Number);
        const input = crosswordTable.rows[row].cells[col].querySelector('input');
        return input.value.toUpperCase() === value.toUpperCase();
    });

    if (allCorrect) {
        detenerCronometro();
        Swal.fire({
            title: '¡Felicidades!',
            text: 'Has completado el crucigrama correctamente.',
            icon: 'success',
            confirmButtonText: 'Jugar de nuevo'
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload();
            }
        });
    }
}