const selectQ = document.querySelector('.resourses');
const selectT = document.querySelector('.topics');

const select1 = '<option selected>Common questions</option>';

const select2 = '<option selected>Direct Questions on your Credentials for Residency</option>\
                <option>Values and Attributes</option>\
                <option>Readiness for Medicine</option>\
                <option>Ethical Questions</option>\
                <option>Leadership, Teamwork</option>\
                <option>Clinical Experience</option>\
                <option>Medicine, Medical Knowledge, and Hot Topics</option>';

const select3 = '<option selected>Tell me about yourself</option>\
                <option>Medicine and the specialty</option>\
                <option>Your strengths</option>\
                <option>Your weaknesses</option>\
                <option>Why the program?</option>\
                <option>Future goals</option>\
                <option>Hobbies and interests / icebreakers</option>\
                <option>Behavioral Questions - Interactions</option>\
                <option>Behavioral Questions - Challenges</option>\
                <option>Behavioral Questions - Personal attributes</option>\
                <option>Behavioral Questions - Patient interactions</option>\
                <option>Behavioral Questions - General</option>';




export function addSelectInput() {
    if (selectQ.value == "AAMC - Questions Frequently Asked") {
        selectT.innerHTML = '';
        selectT.innerHTML = select1;
    }

    if (selectQ.value == "100 Difficult Residency Interview Questions") {
        selectT.innerHTML = '';
        selectT.innerHTML = select2;
        
        
    }

    if (selectQ.value == "200+ Residency Interview Questions") {
        selectT.innerHTML = '';
        selectT.innerHTML = select3;
    }
}