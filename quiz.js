const quizForm=document.querySelector('.quiz-form');
const submitAnswersBtn=document.querySelector('#submit-answers');
const quizOutput=document.querySelector('.quiz-output')

const correctAnswers=[
    '90',
    '10',
    '45',
    'no'
]

function calcScore(formResult){
    let score = 0;
    let i = 0;
    for (const entry of formResult.values()) {
      if (entry === correctAnswers[i]) {
        score = score + 1;
      }
      i = i + 1;
    }

    return score;
}

function PrintScore(e){
    
    const formAnswers= new FormData(quizForm);
    const result=calcScore(formAnswers);
    quizOutput.innerHTML = `Your score is ${result} 😉`
}
    

submitAnswersBtn.addEventListener('click',PrintScore)