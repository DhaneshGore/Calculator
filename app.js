window.onload = () => {
    const buttons = document.querySelectorAll('.numbers');
    const screen = document.querySelector('.screen');
    const equals = document.querySelector('#btn-equals');
    const clear = document.querySelector('#btn-clear');

    // Function to update the screen value
    function updateScreen(value) {
        screen.value += value;
    }

    // Function to clear the screen
    function clearScreen() {
        screen.value = "";
    }

    // Function to perform calculation
    function calculate() {
        if (!screen.value) {
            screen.value = "Enter Value";
        } else {
            screen.value = eval(screen.value);
        }
    }

    // Add event listeners for button clicks
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            updateScreen(e.target.innerHTML);
        })
    })

    // Add event listener for equals button
    equals.addEventListener('click', calculate);

    // Add event listener for clear button
    clear.addEventListener('click', clearScreen);

    // Add event listener for keyboard input
    document.addEventListener('keydown', (e) => {
        const key = e.key;
        if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            updateScreen(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Escape') {
            clearScreen();
        }
    });
}
