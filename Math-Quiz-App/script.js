
const questionEl = document.getElementById('question')
const questionFormEl = document.getElementById('questionForm')
const scoreEl = document.getElementById('score')
let storeAnswered;
let score =0;


const randomNumber =(min, max) =>{

    return Math.floor(Math.random() *(max-min+1) + min)
}

//console.log("random number", randomNumber(20,100));


const generateQuestion =() =>{
    const randNum1 = randomNumber(2,15)
    const randNum2 = randomNumber(5,15)

    let questionType = randomNumber(1,4)
    let firstNumber;
  let secondNumber;

  if (randNum1 > randNum2 && questionType > 2) {
    firstNumber = randNum1;
    secondNumber = randNum2;
  } else {
    firstNumber = randNum2;
    secondNumber = randNum1;
  }

  let question;
  let answer;

  switch (questionType) {
    case 1:
      question = `Q. What is ${firstNumber} multiply by ${secondNumber} ?`;
      answer = firstNumber * secondNumber;
      break;
    case 2:
      question = `Q. What is ${firstNumber} Add to ${secondNumber} ?`;
      answer = firstNumber + secondNumber;
      break;
    case 3:
      question = `Q. What is ${firstNumber} Divided By ${secondNumber} ?`;
      answer = Math.floor( firstNumber / secondNumber);
      break;
    case 4:
      question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
      answer = firstNumber - secondNumber;
      break;
    default:
      question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
      answer = firstNumber - secondNumber;
      break;
  }

    return {question, answer}
}


// console.log(generateQuestion());

const showQuestion = () =>{

    const {question, answer} = generateQuestion()
    questionEl.innerText = question;
    // scoreEl.innerText = score;
    storeAnswered = answer

    
}

showQuestion()


const checkAnswer = (event) =>{
    event.preventDefault()

    const formData = new FormData(questionFormEl)

    const userAnswer = +formData.get("answer")

    if(userAnswer === storeAnswered){
        score +=1
    }else{
        score -=1;
    }

    scoreEl.innerText = score
    event.target.reset();
    showQuestion()

    console.log("answer", userAnswer);
    

}
