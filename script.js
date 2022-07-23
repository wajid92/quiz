const quizQuestions = [
    {
        question: "Who was the king of France during French Revolution ?",
        a : "Louis XVI",
        b : "Louis XV",
        c : "Louis III",
        d : "Louis V",
        correct : "a",
    },
    {
        question: "Dictator who emerged in France after the French Revolution?",
        a : "Adolf Hitler",
        b : "Benitto Musolini",
        c : "Napoleon Bonaparte",
        d : "Joseph Stalin",
        correct : "c",
    },
    {
        question: "Which of the following is an European Country ?",
        a : "Bahrain",
        b : "Turkey",
        c : "Japan",
        d : "Singapore",
        correct : "b",
    },
    {
        question: "What is the capital of Turkey?",
        a : "Istanbul",
        b : "Ankara",
        c : "Konya",
        d : "Bursa",
        correct:"b",
    },
    {
        question:"Delhi Sultanate ended in ?",
        a : "1192",
        b :"1757",
        c :"1526",
        d :"1947",
        correct:"c",
    },
];

const myscore = document.getElementById('myscore')
const answer = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const a = document.getElementById('a1')
const b = document.getElementById('b1')
const c = document.getElementById('c1')
const d = document.getElementById('d1')
const submit = document.getElementById('btn')

let current = 0
let score = 0

quiz()

function quiz() {
    deselect()
    const currentQuestion = quizQuestions[current]
    question.innerText = currentQuestion.question
    a.innerText=currentQuestion.a
    b.innerText=currentQuestion.b
    c.innerText=currentQuestion.c
    d.innerText=currentQuestion.d
}

function deselect(){
    answer.forEach(answer => answer.checked = false)
}

function select(){
    let myanswer
    answer.forEach(answer => {
        if(answer.checked){
            myanswer = answer.id
        }
    })
    return myanswer;
}

submit.addEventListener('click', ()=>{
    const newanswer = select()
    if(newanswer === quizQuestions[current].correct){
        score++
    }
    current++
    if(current < quizQuestions.length){
        quiz()
    }
    else{
        myscore.innerHTML = `<h3 id="myscore1"> Your Score is ${score}/${quizQuestions.length}</h3>
        <button onclick="location.reload()">Try Again</button>
        `
        
    }
})