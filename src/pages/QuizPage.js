import React, { useState } from "react";

const Quiz = () => {
  // Define state to keep track of user's answers
  const [answers, setAnswers] = useState([]);

  // Define quiz questions and their possible answers
  const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "Madrid", "London"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the largest continent?",
      answers: ["Africa", "Europe", "Asia"],
      correctAnswer: "Asia",
    },
    {
      question: "What is the highest mountain in the world?",
      answers: ["K2", "Everest", "Makalu"],
      correctAnswer: "Everest",
    },
  ];

  // Define function to handle user's answer selection
  const handleAnswer = (questionIndex, answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  };

  // Define function to check user's answers
  const checkAnswers = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correctAnswer) {
        score++;
      }
    }
    alert(`You scored ${score} out of ${questions.length}!`);
  };

  return (
    <div>
      <h2>Quiz</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <ul>
            {question.answers.map((answer, answerIndex) => (
              <li key={answerIndex}>
                <label>
                  <input
                    type="radio"
                    value={answer}
                    checked={answers[index] === answer}
                    onChange={() => handleAnswer(index, answer)}
                  />
                  {answer}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={checkAnswers}>Submit</button>
    </div>
  );
};

export default Quiz;
