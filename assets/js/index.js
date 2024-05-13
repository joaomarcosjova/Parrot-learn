const textElement = document.getElementById('typing-text');
const text = textElement.textContent;
textElement.textContent = '';

let index = 0;

function type() {
    textElement.textContent += text[index];
    index++;

    if (index >= text.length) {
        clearInterval(typingInterval);
    }
}

const typingInterval = setInterval(type, 50);
