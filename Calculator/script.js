// Get the display elements
const display = document.getElementById('display');
const history = document.getElementById('history');

/**
 * Appends a value to the display, overwriting the initial '0'.
 * @param {string} value - The character, number, or function to append.
 */
function appendValue(value) {
    if (display.value === '0' && !'/*-+.%'.includes(value)) {
        display.value = value;
    } else {
        display.value += value;
    }
}

/**
 * Clears the entire display and history.
 */
function clearDisplay() {
    display.value = '0';
    history.value = '';
}

/**
 * Deletes the last character from the display.
 */
function deleteLast() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

/**
 * Evaluates the complex expression and shows the result.
 */
function calculateResult() {
    try {
        let expression = display.value;
        history.value = expression + '=';

        // Replace user-friendly symbols with JavaScript operators
        expression = expression.replace(/X/g, '*');
        
        // --- CORE FIX: Process functions before final evaluation ---

        // Handle trigonometric functions (degrees to radians)
        expression = expression.replace(/sin\(([^)]+)\)/g, (match, number) => {
            return Math.sin(parseFloat(number) * Math.PI / 180);
        });
        expression = expression.replace(/cos\(([^)]+)\)/g, (match, number) => {
            return Math.cos(parseFloat(number) * Math.PI / 180);
        });
        expression = expression.replace(/tan\(([^)]+)\)/g, (match, number) => {
            return Math.tan(parseFloat(number) * Math.PI / 180);
        });

        // Handle other math functions
        expression = expression.replace(/log\(([^)]+)\)/g, (match, number) => {
            return Math.log10(parseFloat(number));
        });
        expression = expression.replace(/√\(([^)]+)\)/g, (match, number) => {
            return Math.sqrt(parseFloat(number));
        });

        // After replacing functions, evaluate the simplified arithmetic expression
        const result = new Function('return ' + expression)();
        
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Error';
        } else {
            // Round to a reasonable number of decimal places
            display.value = parseFloat(result.toFixed(10));
        }
    } catch (error) {
        display.value = 'Error';
    }
}