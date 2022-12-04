const pullOverField = document.querySelector('.pullOver');
const getQuestionBtn = document.querySelector('#getQuestion');
const startOverBtn = document.querySelector('#startOver');
const resetBtn = document.querySelector('#reset');
const remainingQuestionCounter = document.querySelector('#leftQuestions');
remainingQuestionCounter.innerHTML = 0;

const section = document.querySelector('.questionField');
const title = document.querySelector('.questionTitle');
const description = document.querySelector('.questionDescription');

const baseOfQuestions = [
  {
    question: 'What is JavaScript?',
    answare:
      'JavaScript is a very powerful client-side scripting language. JavaScript is used mainly for enhancing the interaction of a user with the webpage. In other words, you can make your webpage more lively and interactive, with the help of JavaScript. JavaScript is also being used widely in game development and Mobile application development.',
  },
  {
    question: 'Enumerate the differences between Java and JavaScript?',
    answare:
      'Java is a complete programming language. In contrast, JavaScript is a coded program that can be introduced to HTML pages. These two languages are not at all inter-dependent and are designed for different intent. Java is an object-oriented programming (OOPS) or structured programming languages like C++ or C, whereas JavaScript is a client-side scripting language.',
  },
  {
    question: 'What is the use of isNaN function?',
    answare:
      'isNan function returns true if the argument is not a number; otherwise, it is false.',
  },
  {
    question: 'Which is faster between JavaScript and an ASP script?',
    answare:
      'JavaScript is faster. JavaScript is a client-side language,, and thus it does not need the assistance of the webserver to execute. On the other hand, ASP is a server-side language and hence is always slower than JavaScript. Javascript now is also a server-side language (nodejs).',
  },
];

let currentPullOfQuestions = [...baseOfQuestions];

const getRandomIndex = () => {
  const randomIndex = Math.floor(Math.random() * currentPullOfQuestions.length);
  return randomIndex;
};

const getQestionOfRandomIndex = () => {
  if (currentPullOfQuestions.length !== 0) {
    pullOverField.style.visibility = 'hidden';
    const currentIndex = getRandomIndex();
    const titleQuestion = currentPullOfQuestions[currentIndex].question;
    const descriptionQuestion = currentPullOfQuestions[currentIndex].answare;
    remainingQuestionCounter.innerHTML = `${
      currentPullOfQuestions.length - 1
    } / ${baseOfQuestions.length}`;
    title.innerText = titleQuestion;
    description.innerText = descriptionQuestion;
    /*     section.appendChild(title);
    section.appendChild(description);
    container.appendChild(section); */
    doNotShowCurrentQuestionAgain(currentIndex);
    makeElementVisible(resetBtn);
    makeElementVisible(remainingQuestionCounter);
  } else {
    // title.innerText = 'Wyczerpałeś pulę pytań';
    pullOverField.style.visibility = 'visible';
    description.innerText = '';
    makeElementVisible(startOverBtn);
    makeElementHidden(getQuestionBtn);
    makeElementHidden(resetBtn);
    makeElementHidden(remainingQuestionCounter);
  }
  return currentPullOfQuestions;
};

const doNotShowCurrentQuestionAgain = (currentIndex) => {
  currentPullOfQuestions.splice(currentIndex, 1);
  return currentPullOfQuestions;
};

const resetQuestions = () => {
  currentPullOfQuestions = [...baseOfQuestions];
  remainingQuestionCounter.innerHTML = `${currentPullOfQuestions.length} / ${baseOfQuestions.length}`;
  title.innerText = '';
  description.innerText = '';
};

const makeElementVisible = (element) => {
  element.style.visibility = 'visible';
};

const makeElementHidden = (element) => {
  element.style.visibility = 'hidden';
};

const startOverAgain = () => {
  resetQuestions();
  makeElementVisible(getQuestionBtn);
  makeElementHidden(startOverBtn);
};

getQuestionBtn.addEventListener('click', getQestionOfRandomIndex);
resetBtn.addEventListener('click', resetQuestions);
startOverBtn.addEventListener('click', startOverAgain);
