import { questions2 } from './Questions 100.js'
import { questions3 } from './Questions 200.js'
import { questions1 } from './Questions AAMC.js'
import { history } from '../script.js'
const card = document.querySelector('.card');

function generateRandomNumber(len) {
    let max = len;
    let randomNumber = Math.floor(Math.random() * max);
    console.log(randomNumber);
    return randomNumber;
};

function showCardContent(title, topic, question) {
    card.innerHTML = '';
    card.innerHTML = `
                            <h1 class="card-title">${title}</h1>\
                            <h5 class="card-topic">${topic}</h5>\
                            <p class="card-question">${question}</p>\
    `;

}

export function getRandomQuestion() {
    const selectQ = document.querySelector('.resourses').value;
    const selectT = document.querySelector('.topics').value;
    
    if (selectQ == "AAMC - Questions Frequently Asked") {
        let index = generateRandomNumber(questions1[0].questions.length);
        let question = questions1[0].questions[index];
        history.push(index);
        showCardContent(selectQ, selectT, question);
        console.log(history);
        console.log('\n\n\n');
    }

    if (selectQ == "100 Difficult Residency Interview Questions") {
        let currentElement = questions2.filter((element) => element.topic == selectT);
        let index = generateRandomNumber(currentElement[0].questions.length);
        let question = currentElement[0].questions[index];
        history.push(index);
        showCardContent(selectQ, selectT, question);
        console.log(history);
        console.log('\n\n\n');
    }

    if (selectQ == "200+ Residency Interview Questions") {
        let currentElement = questions3.filter((element) => element.topic == selectT);
        let index = generateRandomNumber(currentElement[0].questions.length);
        let question = currentElement[0].questions[index];
        history.push(index);
        showCardContent(selectQ, selectT, question);
        console.log(history);
        console.log('\n\n\n');
    }
};