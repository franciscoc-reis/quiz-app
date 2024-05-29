var instructions = document.getElementById("instructions");
var quiz = document.getElementById("quiz");
var startBtn = document.getElementById("startBtn");
var askQuestion = document.getElementById("askQuestion");
var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn");
var form = document.getElementById("form");
var quiz = document.getElementById("quiz");
var inform = document.getElementById("inform");
var showScore = document.getElementById("showScore");
var displayScore = document.getElementById("displayScore");
var displayQCount = document.getElementById("displayQCount");
var checkedRadio;
var allRadios;
var i;
var score;

var questions = [
  {
    question: "Qual a melhor forma de prevenir o acúmulo de placa bacteriana nos dentes?",
    choices: ["Beber mais café", "Escovar os dentes apenas uma vez ao dia", "Escovar os dentes regularmente", "Usar enxaguante bucal com frequência"],
    correct: 2
  },
  {
    question: "Qual o principal agente causador da cárie dentária?",
    choices: ["Açúcar", "Café", "Água", "Frutas cítricas"],
    correct: 3
  },
  {
    question: "Como é recomendado escovar os dentes para uma limpeza eficaz?",
    choices: ["Com movimentos circulares e suaves", "Rapidamente, em menos de 10 segundos", "Usando apenas água", "Pressionando com força excessiva"],
    correct: 0
  },
  {
    question: "Qual o papel do flúor na saúde bucal?",
    choices: ["Causar manchas nos dentes", "Aumentar o risco de cáries", "Reduzir a eficácia do fio dental", "Fortalecer o esmalte dentário"],
    correct: 3
  },
  {
    question: "Quais são os sinais de gengivite, uma doença comum nas gengivas?",
    choices: ["Dentes mais brancos", "Dor de cabeça", "Sangramento durante a escovação", "Sensibilidade ao calor"],
    correct: 2
  }
];

window.onload = beginQuiz;

function beginQuiz() {
    form.style.display = "block";
    instructions.style.display = "block";
    showScore.style.display = "none";
    quiz.style.display = "none";
    submitBtn.style.display = "none";
    i = 0;
    score = 0;
    displayQCount.innerHTML = 1;
    displayScore.innerHTML = 0;
}

startBtn.addEventListener("click", function() {
    instructions.style.display = "none";
    submitBtn.style.display = "block";
    quiz.style.display = "block";
    getQAs();
});

submitBtn.addEventListener("click", function() {
    allRadios = document.getElementsByName("option");
    var isChecked = false;
    for (var j = 0; j < allRadios.length; j++) {
        if (allRadios[j].checked) {
            isChecked = true;
            checkedRadio = j;
            break;
        }
    }
    if (!(isChecked)) {
        alert("Please select an answer before moving on");
    } else {
        getResults();
        deselectRadios();
        i++;
        displayQCount.innerHTML = i + 1;
        getQAs();
    }
});

function deselectRadios() {
    allRadios = document.getElementsByName("option");
    for (var p = 0; p < allRadios.length; p++) {
        allRadios[p].checked = false;
    }
}

function getResults() {
        if (allRadios[checkedRadio].value === questions[i].choices[questions[i].correct]) {
            score++;
            displayScore.innerHTML = score;
        }
}

function getQAs() {
    if (i < 5) {
        askQuestion.innerHTML = questions[i].question;
        for (var k = 0; k < 4; k++) {
            document.getElementById("answer" + k).innerHTML = questions[i].choices[k];
            document.getElementById("answer" + k).setAttribute("for", questions[i].choices[k]);
            document.getElementById("label" + k).setAttribute("value", questions[i].choices[k]);
        }
    } else {
        displayResults();
    }
};

function displayResults() {
    quiz.style.display = "none";
    showScore.style.display = "block";
    inform.innerHTML = "Parabéns!! Você acertou " + score + " de 5 perguntas.";
};

resetBtn.addEventListener("click", function() {
    beginQuiz();
});