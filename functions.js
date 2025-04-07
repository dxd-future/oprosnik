let n = 0;
let points = [];
let result = 0;

let start = () => {
    document.querySelector('.start_panel').style.display = 'none';
    document.querySelector('.questions_panel').style.display = 'flex';

    document.querySelector('.question_text').textContent = `${questions[0].question}`;
    document.querySelector('.question_num').textContent = `${n+1}`;
    for(let i = 0; i < 4; i++){
        document.querySelector('.question_answers').innerHTML += `
        <p class="answer"> 
        <input class="answer_radio" id="answer" type="radio" name="answer_radio" >
        ${questions[0].options[i]}
        </p>   
        `;
    }
}

let back = () => {
    if(n != questions.length - 2){
        document.querySelector('#next_button').disabled = false;
    }
    if(n <= 1){
        document.querySelector('#back_button').disabled = true;
    }
    if(n != questions.length - 2){
        document.querySelector('#end_button').disabled = true;
    }
    if(n > 0){
        document.querySelector('.question_answers').innerHTML = ``;
        n--;
        document.querySelector('.question_text').textContent = `${questions[n].question}`;
        document.querySelector('.question_num').textContent = `${n+1}`;

     
        if(questions[n].type == "double"){
            for(let i = 0; i < 4; i++){
                document.querySelector('.question_answers').innerHTML += `
                <p class="answer"> 
                    <input class="answer_radio" type="checkbox" name="answer_checkbox">
                    ${questions[n].options[i]}
                </p>
                `;
            }
        }
        if(questions[n].type == "single"){
            for(let i = 0; i < 4; i++){
                document.querySelector('.question_answers').innerHTML += `
                <p class="answer"> 
                    <input class="answer_radio" type="radio" name="answer_radio">
                    ${questions[n].options[i]}
                </p>
                `;
            }
        }
        if(questions[n].type == "text"){
            document.querySelector('.question_answers').innerHTML += `
                <p class="answer"> 
                    <input class="answer_input" type="text">
                </p>
            `;
        }
    }
}
let next = () => {
    if(n == questions.length - 2){
        document.querySelector('#next_button').disabled = true;
    }
    if(n == 0){
        document.querySelector('#back_button').disabled = false;
    }
    if(n == questions.length - 2){
        document.querySelector('#end_button').disabled = false;
    }
  
        if(questions[n].type == "double"){
            
        }
        if(questions[n].type == "single"){
            let radio = document.querySelector('.answer_radio:checked');
            if (radio) {
                let text = radio.parentElement.textContent.trim();
                points[n] = text;
            }
        }
        if(questions[n].type == "text"){
            let textbox = document.querySelector('.answer_input').value;
            points[n] = textbox;
        }
       
    
    if(n < questions.length - 1){
        document.querySelector('.question_answers').innerHTML = ``;
        n++;
        document.querySelector('.question_text').textContent = `${questions[n].question}`;
        document.querySelector('.question_num').textContent = `${n+1}`;

        if(questions[n].type == "double"){
            for(let i = 0; i < 4; i++){
                document.querySelector('.question_answers').innerHTML += `
                <p class="answer"> 
                    <input class="answer_radio" type="checkbox" name="answer_checkbox">
                    ${questions[n].options[i]}
                </p>
                `;
            }
        }
        if(questions[n].type == "single"){
            for(let i = 0; i < 4; i++){
                document.querySelector('.question_answers').innerHTML += `
                <p class="answer"> 
                    <input class="answer_radio" type="radio" name="answer_radio">
                    ${questions[n].options[i]}
                </p>
                `;
            }
        }
        if(questions[n].type == "text"){
            document.querySelector('.question_answers').innerHTML += `
                <p class="answer"> 
                    <input class="answer_input" type="text">
                </p>
            `;
        }
    }
}

let end = () => {
    if(n == questions.length - 1){
        let textbox = document.querySelector('.answer_input').value;
        points[n] = textbox;
    }
    questions.forEach((element, i) => {
        if(element.answer == points[i]){
            result ++;
        }
    });
    document.querySelector('#end_button').disabled = false;
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.modal').style.display = 'flex';
    document.querySelector('#res').textContent = `${result} из ${questions.length} баллов`;
}