window.addEventListener('load', () => { /* Para escuchar cuando se carga el documento */
    const display = document.querySelector('.calculator-display')
    const keypadButtons = document.getElementsByClassName('keypad-button');

    let keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.innerHTML);
        })

    })
});

