const textElement = document.getElementById('text');
const textLines = [
    'Hello there!',
    'My name is Poojan Shah',
    'Software Developer',
    'Welcome to my Page'
];
let lineIndex = 0;
let charIndex = 0;

function type() {
    if (lineIndex === textLines.length) {
        return; // Typing animation completed
    }

    if (charIndex === textLines[lineIndex].length) {
        // Move to the next line after a pause
        setTimeout(() => {
            lineIndex++;
            charIndex = 0;
            textElement.innerHTML = ''; // Clear the previous line
            type();
        }, 600);
    } else {
        textElement.innerHTML += textLines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
    }
}

type(); // Start the typing animation
