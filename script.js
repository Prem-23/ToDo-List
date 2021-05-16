let inputField = document.querySelector('.inputField');
let submit = document.querySelector('.submit');
let msges = document.querySelector('.msges');

submit.onclick = function() {
    if (inputField.value == '') {
        window.alert('Please Enter Some ToDo');
    } else {
        let miniContainer = document.createElement('div');
        msges.appendChild(miniContainer);
        miniContainer.classList.add('mini-container');

        let inputMsgBox = document.createElement('input')
        miniContainer.appendChild(inputMsgBox);
        inputMsgBox.value = inputField.value;
        inputField.value = '';
        inputMsgBox.disabled = 'true';

        let iconDivison = document.createElement('div');
        miniContainer.appendChild(iconDivison);

        let iconPencil = document.createElement('i');
        iconDivison.appendChild(iconPencil);
        iconPencil.classList.add('fa');
        iconPencil.classList.add('fa-pencil');
        iconPencil.onclick = function() {
            inputMsgBox.disabled = !inputMsgBox.disabled;
        }

        let iconTrash = document.createElement('i');
        iconDivison.appendChild(iconTrash);
        iconTrash.classList.add('fa');
        iconTrash.classList.add('fa-trash-o');
        iconTrash.onclick = function() {
            msges.removeChild(miniContainer);
        }
    }
}