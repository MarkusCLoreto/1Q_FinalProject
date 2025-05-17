let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("next");
const resultEl = document.getElementById("result");

function loadQuestion() {
    choicesEl.innerHTML = "";
    let correctAnswer = "";
    
    switch (currentQuestion) {
        case 0:
            questionEl.textContent = "What is the primary goal of SDG 4 (Quality Education)?";
            correctAnswer = "Ensure inclusive and equitable quality education";
            createChoice("Ensure inclusive and equitable quality education", true);
            createChoice("Provide free college education worldwide", false);
            createChoice("Eliminate all forms of private education", false);
            createChoice("Make education optional for all", false);
            break;
        case 1:
            questionEl.textContent = "Which age group does SDG 4 mainly focus on?";
            correctAnswer = "All age groups";
            createChoice("Children only", false);
            createChoice("Youth and adults", false);
            createChoice("All age groups", true);
            createChoice("Senior citizens only", false);
            break;
        case 2:
            questionEl.textContent = "What is one major challenge in achieving quality education?";
            correctAnswer = "Lack of resources and infrastructure";
            createChoice("Overqualified teachers", false);
            createChoice("Lack of resources and infrastructure", true);
            createChoice("Too many schools", false);
            createChoice("Declining student population", false);
            break;
        case 3:
            questionEl.textContent = "Which organization primarily supports global education initiatives?";
            correctAnswer = "UNESCO";
            createChoice("WHO", false);
            createChoice("UNESCO", true);
            createChoice("DEPED", false);
            createChoice("DOST", false);
            break;
        case 4:
            questionEl.textContent = "How can individuals contribute to SDG 4?";
            correctAnswer = "Donating books and resources";
            createChoice("Ignoring education policies", false);
            createChoice("Donating books and resources", true);
            createChoice("Discouraging schooling", false);
            createChoice("Eliminating school assessments", false);
            break;
        default:
            showResult();
            return;
    }
    choicesEl.setAttribute("data-correct", correctAnswer);
}

function createChoice(text, isCorrect) {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = function () {
        if (isCorrect) {
            score++;
        }
        displayCorrectAnswer();
    };
    choicesEl.appendChild(btn);
}

function displayCorrectAnswer() {
    const correctAnswer = choicesEl.getAttribute("data-correct");
    choicesEl.innerHTML = `Correct Answer: <strong>${correctAnswer}</strong><br><br>`;
    
    const nextQuestionBtn = document.createElement("button");
    nextQuestionBtn.textContent = "Next Question";
    nextQuestionBtn.onclick = function () {
        currentQuestion++;
        if (currentQuestion < 5) {
            loadQuestion();
        } else {
            showResult();
        }
    };
    choicesEl.appendChild(nextQuestionBtn);
}

function showResult() {
    questionEl.textContent = "Quiz Completed!";
    choicesEl.innerHTML = `Your Score: ${score} / 5`;
    nextBtn.style.display = "none";
}

nextBtn.onclick = function() {
    if (currentQuestion < 5) {
        loadQuestion();
    }
};

loadQuestion();