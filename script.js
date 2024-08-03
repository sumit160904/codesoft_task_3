let currentInput = '';
let lastResult = '';

// Update the display with the current input or result
function updateDisplay(value) {
    document.getElementById('display').innerText = value || '0';
}

// Append a character to the current input
function appendCharacter(char) {
    currentInput += char;
    updateDisplay(currentInput);
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

// Remove the last character from the current input
function backspace() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

// Calculate the result of the current input
function calculateResult() {
    try {
        lastResult = eval(currentInput);
        updateDisplay(lastResult);
        currentInput = '' + lastResult;
    } catch (e) {
        updateDisplay('Error');
        currentInput = '';
    }
}

// Calculate the percentage of the current input
function calculatePercentage() {
    try {
        lastResult = eval(currentInput) / 100;
        updateDisplay(lastResult);
        currentInput = '' + lastResult;
    } catch (e) {
        updateDisplay('Error');
        currentInput = '';
    }
}

// Recall the last answer
function recallAnswer() {
    appendCharacter(lastResult);
}

// Handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;

    // Handle numeric keys and decimal point
    if ((key >= '0' && key <= '9') || key === '.') {
        appendCharacter(key);
    } 
    // Handle operators and other keys
    else if (key === 'Enter') {
        calculateResult();
    } 
    else if (key === 'Backspace') {
        backspace();
    } 
    else if (key === 'Escape') {
        clearDisplay();
    } 
    else if (key === '%' || key === '/' || key === '*' || key === '-' || key === '+') {
        appendCharacter(key);
    }
}

// Add event listener for keyboard input
document.addEventListener('keydown', handleKeyboardInput);
