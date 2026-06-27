
import { useState } from "react";

import QuestionCard from "./QuestionCard";

function Quiz({

  finishQuiz

}) {

  const questions=[

    {

      question:"Who developed React?",

      options:[
        "Google",
        "Facebook",
        "Microsoft",
        "Apple"
      ],

      answer:"Facebook"

    },

    {

      question:"Which language is used for React?",

      options:[
        "Python",
        "Java",
        "JavaScript",
        "C++"
      ],

      answer:"JavaScript"

    },

    {

      question:"HTML stands for?",

      options:[
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Machine Language",
        "None"
      ],

      answer:"Hyper Text Markup Language"

    }

  ];

  const[currentQuestion,
  setCurrentQuestion]=
  useState(0);

  const[selectedOption,
  setSelectedOption]=
  useState("");

  const[score,
  setScore]=
  useState(0);

  const[correct,
  setCorrect]=
  useState(0);

  function nextQuestion(){

    if(selectedOption===""){

      alert("Select an option");

      return;

    }

    let newScore=score;

    let newCorrect=correct;

    if(

      selectedOption===

      questions[currentQuestion].answer

    ){

      newScore+=10;

      newCorrect++;

    }

    setScore(newScore);

    setCorrect(newCorrect);

    setSelectedOption("");

    if(

      currentQuestion===

      questions.length-1

    ){

      finishQuiz(

        newScore,

        newCorrect

      );

    }

    else{

      setCurrentQuestion(

        currentQuestion+1

      );

    }

  }

  return(

    <div className="quiz-container">

      <h1>

        Quiz Time

      </h1>

      <p>

        Question

        {

          currentQuestion+1

        }

        /

        {

          questions.length

        }

      </p>

      <QuestionCard

        question={
          questions[currentQuestion].question
        }

        options={
          questions[currentQuestion].options
        }

        selectedOption={
          selectedOption
        }

        selectOption={
          setSelectedOption
        }

      />

      <button

        className="next-btn"

        onClick={nextQuestion}

      >

        Next

      </button>

    </div>

  );

}

export default Quiz;
