const questions = [
    {
      letter: "a",
      answer: "abducir",
      status: 0,
      question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
    },
    {
      letter: "b",
      answer: "bingo",
      status: 0,
      question: "CON LA B. Juego que ha sacado de quicio a todos los 'Coders' en las sesiones de precurso",
    },
    {
      letter: "c",
      answer: "caos",
      status: 0,
      question: "CON LA C. Expresión que denota falta de orden en un lugar",
    },
    {
      letter: "d",
      answer: "diarrea",
      status: 0,
      question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
    },
    {
      letter: "e",
      answer: "elefante",
      status: 0,
      question: "CON LA E. Animal terrestre más grande con trompa.",
    },
    {
      letter: "f",
      answer: "futbol",
      status: 0,
      question: "CON LA F. Deporte que se juega con una pelota y se utiliza principalmente el pie.",
    },{
        letter: "g",
        answer: "guitarra",
        status: 0,
        question: "CON LA G. Instrumento musical de cuerdas.",
      },{
        letter: "h",
        answer: "hamburguesa",
        status: 0,
        question: "CON LA H. Comida rápida que suele consistir en carne entre dos panes.",
      },{
        letter: "i",
        answer: "iglesia",
        status: 0,
        question: "CON LA I. Lugar de culto religioso.",
      },{
        letter: "j",
        answer: "jardín",
        status: 0,
        question: "CON LA J. Espacio al aire libre donde se cultivan plantas y flores.",
      },{
        letter: "k",
        answer: "koala",
        status: 0,
        question: "CON LA K. Mamífero marsupial originario de Australia.",
      },{
        letter: "l",
        answer: "león",
        status: 0,
        question: "CON LA L. Felino conocido por su melena y su fuerza.",
      },{
        letter: "m",
        answer: "manzana",
        status: 0,
        question: "CON LA M. Fruta de piel fina, generalmente de color rojo o verde.",
      },{
        letter: "n",
        answer: "nube",
        status: 0,
        question: "CON LA N. Masa visible de pequeñas gotas de agua o hielo en la atmósfera.",
      },{
        letter: "o",
        answer: "ornitorrinco",
        status: 0,
        question: "CON LA O. Mamífero ovíparo de Australia con pico de pato y cuerpo de castor.",
      },{
        letter: "p",
        answer: "perro",
        status: 0,
        question: "CON LA P. Animal doméstico conocido por ser el mejor amigo del hombre.",
      },{
        letter: "q",
        answer: "quiosco",
        status: 0,
        question: "CON LA Q. Pequeña estructura utilizada para la venta de periódicos, revistas y otros productos.",
      },{
        letter: "r",
        answer: "río",
        status: 0,
        question: "CON LA R. Corriente natural de agua que fluye hacia el mar, un lago o otro río.",
      },{
        letter: "s",
        answer: "sol",
        status: 0,
        question: "CON LA S. Estrella que proporciona luz y calor a la Tierra.",
      },{
        letter: "t",
        answer: "tigre",
        status: 0,
        question: "CON LA T. Felino de gran tamaño y rayas en su pelaje, originario de Asia.",
      },{
        letter: "u",
        answer: "universo",
        status: 0,
        question: "CON LA U. Conjunto de todo lo que existe, incluyendo galaxias, planetas y estrellas.",
      },{
        letter: "v",
        answer: "volcán",
        status: 0,
        question: "CON LA V. Montaña que puede entrar en erupción y expulsar lava, ceniza y gases.",
      },{
        letter: "w",
        answer: "wifi",
        status: 0,
        question: "CON LA W. Tecnología que permite la conexión a internet de forma inalámbrica.",
      },{
        letter: "x",
        answer: "xilófono",
        status: 0,
        question: "CON LA X. Instrumento musical de percusión formado por láminas de madera afinadas.",
      },{
        letter: "y",
        answer: "yogur",
        status: 0,
        question: "CON LA Y. Producto lácteo fermentado con bacterias beneficiosas para la salud.",
      },{
        letter: "z",
        answer: "zapato",
        status: 0,
        question: "CON LA Z. Calzado que se usa para proteger los pies y caminar cómodamente.",
      }
  ];
  
let correctAnswers = 0;
let falseAnswers = 0;
let turn = 0;
let pass = [];

const answerElement = document.querySelector('.answer');
const startElement = document.querySelector('.start');
const endElement = document.querySelector('.end-game');
const skipElement = document.querySelector('.skip');

const sumTurn = () => {
    if (turn < questions.length -1) {
        turn++
    } else {
        turn = 0;
    }
};

const changeLetterToGreen = () => {
    const elementLetter = document.querySelector(`.round-letter-${turn}`);
    elementLetter.classList.add("right");  
}

const changeLetterToRed = () => {
    const elementLetter = document.querySelector(`.round-letter-${turn}`);
    elementLetter.classList.add("fail"); 
}

const checkGameStatus = () => {
    if (correctAnswers + falseAnswers === questions.length){
        document.querySelector('.message').textContent = `JUEGO FINALIZADO. Este ha sido tu resultado: Correctas: ${correctAnswers} - Incorrectas: ${falseAnswers}`;
    }
};

const showQuestion = () => {
    while ((questions[turn].status !== 0) && (correctAnswers + falseAnswers < questions.length)){
        sumTurn()
    }
    const answerQuestion = document.querySelector(".message");
    answerQuestion.textContent = `${questions[turn].question}`;
    
};

const nextWord = () => {

    showQuestion();
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const result = event.target.elements.namedItem("question").value.toLowerCase();
        if (result === questions[turn].answer.toLowerCase()){
            document.querySelector(".result").textContent = 'CORRECTO';
            correctAnswers++;
            changeLetterToGreen();
        } else {
            document.querySelector(".result").textContent = 'FALSO';
            falseAnswers++;
            changeLetterToRed();
        }
        questions[turn].status = 1;
        sumTurn();
        if (correctAnswers + falseAnswers === questions.length) {
            document.querySelector('.message').textContent = `JUEGO FINALIZADO. Este ha sido tu resultado: Correctas: ${correctAnswers} - Incorrectas: ${falseAnswers}`;
        } else {
            showQuestion();
        }
        event.target.elements.namedItem("question").value = "";
    };

    document.querySelector('form').addEventListener('submit', handleFormSubmit);
}; 


const mainFunction = () => {

const handleButtonStart = (event) => {
    event.preventDefault();
//   startElement.style.display = 'none';
    nextWord();
};
startElement.addEventListener('click', handleButtonStart);

const handleButtonFinish = (event) => {
    event.preventDefault();
    document.querySelector('.message').textContent = `JUEGO FINALIZADO. Este ha sido tu resultado: Correctas: ${correctAnswers} - Incorrectas: ${falseAnswers}`;
}
endElement.addEventListener('click', handleButtonFinish);

const handleButtonSkip = (event) => {
    event.preventDefault();
    sumTurn();
    showQuestion();
}
skipElement.addEventListener('click', handleButtonSkip);
};


mainFunction();