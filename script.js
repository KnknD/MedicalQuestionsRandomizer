import { addSelectInput } from './module/selectModule.js'
import { getRandomQuestion } from './module/getRandomQuestion.js'

const btn_next = document.querySelector('.button-next');
const btn_previous = document.querySelector('.button-previous');
const card = document.querySelector('.card');
const selectQ = document.querySelector('.resourses');
const selectT = document.querySelector('.topics');

export const history = [];

btn_previous.style.display = 'none';
btn_next.style.width= '100%';

function start() {
    addSelectInput();
    getRandomQuestion();
}

function start2() {
    getRandomQuestion();
}

selectQ.addEventListener('input', start);
selectT.addEventListener('input', start2);
btn_next.addEventListener('click', start2);
