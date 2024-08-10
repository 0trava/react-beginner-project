import "./index.scss";
import { useState } from "react";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["Библиотека", "Фреймворк", "Приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "Приложение",
      "Часть приложения или страницы",
      "То, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
  {
    title: "Что такое hook?",
    variants: [
      "Это первый скилл Пуджа",
      "Это специальная функция",
      "Это метод сортировки массива",
    ],
    correct: 1,
  },
  {
    title: "???",
    variants: ["?", "?", "?"],
    correct: 0,
  },
];

function Result({ correct }) {
  let answer = "";
  console.log(correct);
  if (correct === 1 || correct == 21) {
    answer = "ответ";
  } else if (correct == 2 || 3 || 4 || 22 || 23 || 24) {
    answer = "ответа";
  }
  if (correct == 0 || (correct >= 5 && correct < 21)) {
    answer = "ответов";
  }
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} {answer} из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVar }) {
  let percentage = Math.round((step / questions.length) * 100);
  console.log(percentage);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVar(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];
  const onClickVar = (index) => {
    setStep(step + 1);
    if (index == question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step != questions.length ? (
        <Game question={question} onClickVar={onClickVar} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
