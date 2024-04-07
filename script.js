let buttons = Array.from(document.getElementsByClassName("open-close-answer"));
let answers = Array.from(document.getElementsByClassName("answer"));

if (buttons.length !== answers.length) {
    throw new Error(`not enough buttons: ${buttons.length} buttons ${answers.length} answers`);
}

for (let i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i];
    let currentAnswer = answers[i];
    let plusIcon = currentButton.children[0];
    let minusIcon = currentButton.children[1];

    currentButton.addEventListener('click', e => {
        plusIcon.style.display === 'none' ? closeAnswer(plusIcon, minusIcon, currentAnswer) : openAnswer(plusIcon, minusIcon, currentAnswer);
    });
}

function openAnswer(plusIcon, minusIcon, currentAnswer) {
    plusIcon.style.display = 'none';
    minusIcon.style.display = 'block';
    currentAnswer.style.display = 'block';
}

function closeAnswer(plusIcon, minusIcon, currentAnswer) {
    plusIcon.style.display = 'block';
    minusIcon.style.display = 'none';
    currentAnswer.style.display = 'none';
}