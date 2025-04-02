let n = 0;
let start = () => {
    document.querySelector('.start_panel').style.display = 'none';
    document.querySelector('.questions_panel').style.display = 'flex';

    document.querySelector('.question_text').textContent = `${questions[0].question}`;
    document.querySelector('.question_num').textContent = `${n+1}`;
    for(let i = 0; i < 4; i++){
        document.querySelector('.radio_answers').innerHTML += `
        <p class="answer"> <input class="answer_radio" type="radio" name="answer_radio" >${questions[0].options[i]}</input></p>
    `;
    }
}

let back = () => {
    if(n > 0){
        n--;
        document.querySelector('.question_text').textContent = `${questions[n].question}`;
        document.querySelector('.question_num').textContent = `${n+1}`;
    } 
    if(n == 0){
        document.querySelector(".radio_answers").style.display = `flex`;
    }
    if(questions[n].options.length != 0){
        for(let i = 0; i < 4; i++){
            document.querySelector('.radio_answers').innerHTML += `
            <p class="answer"> <input class="answer_radio" type="radio" name="answer_radio" >${questions[n].options[i]}</input></p>
        `;
        }
    }
}
let next = () => {
    if(n < questions.length - 1){
        n++;
        document.querySelector('.question_text').textContent = `${questions[n].question}`;
        document.querySelector('.question_num').textContent = `${n+1}`;
    } 
    if(n != 0){
        document.querySelector(".radio_answers").style.display = `none`;
    }
    if(questions[n].options.length != 0){
        for(let i = 0; i < 4; i++){
            document.querySelector('.radio_answers').innerHTML += `
            <p class="answer"> <input class="answer_radio" type="radio" name="answer_radio" >${questions[n].options[i]}</input></p>
        `;
        }
    }
}

let toanswer = () => {

}

let end = () => {

}