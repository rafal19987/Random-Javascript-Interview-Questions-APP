const getQuestionBtn = document.querySelector('#getQuestion');
const startOverBtn = document.querySelector('#startOver');
const resetBtn = document.querySelector('#reset');
const leftCouterQuestions = document.querySelector('#leftQuestions');

const section = document.createElement('section');
const title = document.createElement('h5');
const description = document.createElement('p');

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
leftCouterQuestions.innerHTML = 0;
let currentPullOfQuestions = [...baseOfQuestions];

const getRandomQuestion = () => {
  const isNull = 0;
  if (currentPullOfQuestions.length !== isNull) {
    const current = Math.floor(Math.random() * currentPullOfQuestions.length);
    leftCouterQuestions.innerHTML = `${currentPullOfQuestions.length - 1}`;
    resetBtn.style.visibility = 'visible';
    leftCouterQuestions.style.visibility = 'visible';
    title.innerText = currentPullOfQuestions[current].question;
    description.innerText = currentPullOfQuestions[current].answare;

    section.appendChild(title);
    section.appendChild(description);
    container.appendChild(section);
    currentPullOfQuestions.splice(current, 1);
  } else {
    title.innerText = 'Wyczerpałeś pulę pytań';
    description.innerText = '';
    getQuestionBtn.style.visibility = 'hidden';
    startOverBtn.style.visibility = 'visible';
    resetBtn.style.visibility = 'hidden';
  }

  return currentPullOfQuestions;
};

getQuestionBtn.addEventListener('click', getRandomQuestion);

startOverBtn.addEventListener('click', () => {
  currentPullOfQuestions = [...baseOfQuestions];
  title.innerText = '';
  getQuestionBtn.style.visibility = 'visible';
  startOverBtn.style.visibility = 'hidden';
});

resetBtn.addEventListener('click', () => {
  currentPullOfQuestions = [...baseOfQuestions];
  title.innerText = '';
  description.innerText = '';
});
