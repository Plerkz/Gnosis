const addNoteItem = document.getElementById('add-note');
const notesContainer = document.getElementById('notes-container');
let noteCount = 0;
let isNoteFormOpen = false;

function createNoteForm() {
    if (isNoteFormOpen) {
        Swal.fire({
            title: 'Nota en proceso',
            text: 'Por favor, guarda o elimina la nota actual antes de crear una nueva.',
            icon: 'warning',
            confirmButtonText: 'Entendido',
            confirmButtonColor: 'blueviolet',
            cancelButtonColor: '#b71c1c',
        });
        return;
    }

    isNoteFormOpen = true;
    const noteForm = document.createElement('div');
    noteForm.className = 'note-form';
    noteForm.innerHTML = `
                <input type="text" class="note-input" placeholder="Nombre de la nota" required>
                <textarea class="note-textarea" placeholder="Contenido de la nota"></textarea>
                <button class="btn save-btn">Guardar</button>
                <button class="btn delete-btn">Eliminar</button>
            `;

    const saveBtn = noteForm.querySelector('.save-btn');
    const deleteBtn = noteForm.querySelector('.delete-btn');

    saveBtn.addEventListener('click', () => {
        const noteName = noteForm.querySelector('.note-input').value.trim();
        const noteContent = noteForm.querySelector('.note-textarea').value.trim();

        if (noteName) {
            createNoteItem(noteName, noteContent);
            notesContainer.removeChild(noteForm);
            isNoteFormOpen = false;
        } else {
            Swal.fire({
                title: 'Nombre requerido',
                text: 'Por favor, ingresa un nombre para la nota.',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: 'blueviolet',
            });
        }
    });

    deleteBtn.addEventListener('click', () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Quieres eliminar esta nota?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#blueviolet',
            cancelButtonColor: '#b71c1c',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                notesContainer.removeChild(noteForm);
                isNoteFormOpen = false;
                Swal.fire(
                    'Eliminada',
                    'La nota ha sido eliminada.',
                    'success'
                );
            }
        });
    });

    notesContainer.insertBefore(noteForm, notesContainer.firstChild);
}

function createNoteItem(name, content) {
    noteCount++;
    const noteItem = document.createElement('div');
    noteItem.className = 'item';
    noteItem.innerHTML = `
                <div class="item-content">
                    <span class="item-icon">📄</span>
                    <span>${name}</span>
                </div>
                <span class="chevron">▼</span>
            `;

    const noteContent = document.createElement('div');
    noteContent.className = 'note-form hidden';
    noteContent.innerHTML = `
                <textarea class="note-textarea">${content}</textarea>
                <button class="btn save-btn">Guardar</button>
                <button class="btn delete-btn">Eliminar</button>
            `;

    const textarea = noteContent.querySelector('.note-textarea');
    const saveBtn = noteContent.querySelector('.save-btn');
    const deleteBtn = noteContent.querySelector('.delete-btn');

    saveBtn.addEventListener('click', () => {
        content = textarea.value;
        noteContent.classList.add('hidden');
        noteItem.querySelector('.chevron').textContent = '▼';
        Swal.fire({
            title: 'Guardada',
            text: 'La nota ha sido guardada exitosamente.',
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#blueviolet',
        });
    });

    deleteBtn.addEventListener('click', () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¿Quieres eliminar esta nota?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'blueviolet',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                notesContainer.removeChild(noteItem);
                notesContainer.removeChild(noteContent);
                Swal.fire(
                    'Eliminada',
                    'La nota ha sido eliminada.',
                    'success'
                );
            }
        });
    });

    noteItem.addEventListener('click', (event) => {
        if (!event.target.classList.contains('btn')) {
            noteContent.classList.toggle('hidden');
            const chevron = noteItem.querySelector('.chevron');
            chevron.textContent = noteContent.classList.contains('hidden') ? '▼' : '▲';
        }
    });

    notesContainer.insertBefore(noteContent, notesContainer.firstChild);
    notesContainer.insertBefore(noteItem, noteContent);
}

addNoteItem.addEventListener('click', createNoteForm);