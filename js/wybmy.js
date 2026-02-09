const messages = [
    "T'es sûre?",
    "Certaine??",
    "C'est ton dernier mot?",
    "Je crois que ton doigt à glissé...",
    "Repenses-y!",
    "Si tu dis non je vais être triste...",
    "Très triste...",
    "Très très triste...",
    "Ok j'arrête...",
    "Je rigole, dis oui s'il te plaît! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
