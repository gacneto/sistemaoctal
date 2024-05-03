const startGameButton = document.querySelector(".start-quiz")
const nextQuestionButton = document.querySelector(".next-question")
const questionsContainer = document.querySelector(".questions-container")
const questionText = document.querySelector(".question")
const answersContainer = document.querySelector(".answers-container")
const answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

//criar botões para as futuras funções
startGameButton.addEventListener("click", startGame)
nextQuestionButton.addEventListener("click", displayNextQuestion)

//iniciar o quiz
function startGame() {
  startGameButton.classList.add("hide")
  questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

//pular questão
function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }


  //criar um sistema para o computador saber qual questão é a correta
  questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while(answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  nextQuestionButton.classList.add("hide")
}

//ver se o usuário acertou a questão ou não
function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    totalCorrect++
  } else {
    
  }

  //aparecer bloco verde caso acerto ou vermelho caso erro
  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  //remover questão anterior
  nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

//calcular quantos pontos foram feitos
function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente!"
      break
    case (performance >= 70):
      message = "Muito bom!"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar"
  }

  //mensagem após a finalização do quiz
  questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button">
      Refazer teste
    </button>
  `
}

//banco de questões
const questions = [
  {
    question: "Qual é o número base do sistema octal?",
    answers: [
      { text: "10", correct: false },
      { text: "16", correct: false },
      { text: "8", correct: true },
      { text: "2", correct: false }
    ]
  },
  {
    question: "Quantos dígitos diferentes são usados no sistema octal?",
    answers: [
      { text: "8", correct: true },
      { text: "6", correct: false },
      { text: "10", correct: false },
      { text: "16", correct: false }
    ]
  },
  {
    question: 'Qual é o valor decimal do número octal 36?',
    answers: [
      { text: '54', correct: true },
      { text: '30', correct: false },
      { text: ' 27', correct: false },
      { text: '24', correct: false }
    ]
  },
  {
    question: 'Qual é o equivalente octal do número decimal 25?',
    answers: [
      { text: '31', correct: false },
      { text: '21', correct: false },
      { text: '33', correct: true },
      { text: '27', correct: false }
    ]
  },
  {
    question: 'Qual é o número octal que representa o número binário 1101?',
    answers: [
      { text: '15', correct: false },
      { text: '13', correct: true },
      { text: '17', correct: false },
      { text: '11', correct: false }
    ]
  },
  {
    question: 'Qual é o valor decimal do número octal 777?',
    answers: [
      { text: '504', correct: false },
      { text: '511', correct: true },
      { text: '509', correct: false },
      { text: '497', correct: false }
    ]
  },
  {
    question: 'Qual é o número octal que representa o número decimal 100?',
    answers: [
      { text: '160', correct: false },
      { text: '150', correct: false },
      { text: '144', correct: true },
      { text: '1440', correct: false },
    ]
  },
  {
    question: 'Qual é o número decimal que representa o número octal 63?',
    answers: [
      { text: '53', correct: true },
      { text: '45', correct: false },
      { text: '51', correct: false },
      { text: '43', correct: false },
    ]
  },
  {
    question: 'Qual é o número octal que representa o número decimal 200?',
    answers: [
      { text: '320', correct: true },
      { text: '300', correct: false },
      { text: '220', correct: false },
      { text: '240', correct: false },
    ]
  },
  {
    question: 'Quantos dígitos diferentes podem ser usados em um número octal?',
    answers: [
      { text: '10', correct: false },
      { text: '8', correct: true },
      { text: '16', correct: false },
      { text: '6', correct: false },
    ]
  },
]