
function toUppercase() {
    let input = document.getElementById('inputText').value;
    document.getElementById('result').innerHTML = input.toUpperCase();
}

function toLowercase() {
    let input = document.getElementById('inputText').value;
    document.getElementById('result').innerHTML = input.toLowerCase();
}

function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('result').textContent = '';
}

function wordCount() {
    let input = document.getElementById('inputText').value;
    let wordCount = input.trim() ? input.trim().split(/\s+/).length : 0;
    document.getElementById('result').textContent = `Word count: ${wordCount}`;
}

function removeSpaces() {
    let input = document.getElementById('inputText').value;
    document.getElementById('result').textContent = input.replace(/\s+/g, '');
}

function countLetters() {
    let input = document.getElementById('inputText').value;
    let letterCount = input.replace(/\s+/g, '').length;
    document.getElementById('result').textContent = `Letter count: ${letterCount}`;
}