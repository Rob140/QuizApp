import React from "react";
import { useState } from "react";
import styles from "./Quiz.module.css";

const Quiz = () => {
  const card3 = [
    {
      id: 1,
      title: "Nate",
      chouseAnswer: ["orange", "mango", "banana", "kiwi"],
      answer: "mango",
      text: "This is the first card.",
    },
    {
      id: 2,
      title: "Ruta",
      chouseAnswer: ["london", "paris", "berlin", "oslo"],
      answer: "paris",
      text: "This is the second card.",
    },
    {
      id: 3,
      title: "Tom",
      chouseAnswer: ["tomato", "onion", "potato", "kohl"],
      answer: "onion",
      text: "This is the third card.",
    },
    {
      id: 4,
      title: "jan",
      chouseAnswer: ["mandel", "erdnuss", "walnuss", "kakaw"],
      answer: "kakaw",
      text: "This is the forth card.",
    },
    {
      id: 5,
      title: "tobi",
      chouseAnswer: ["maths", "english", "bio", "chemi"],
      answer: "maths",
      text: "This is the fiveth card.",
    },
    {
      id: 6,
      title: "andi",
      chouseAnswer: ["google", "meta", "tesla", "apple"],
      answer: "meta",
      text: "This is the sexes card.",
    },
  ];
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("");

  // card3 quiz
  // to find the corect answer
  function correct(arrlist) {
    if (arrlist !== card3[count].answer) {
      setResult("incorect answer");
    } else {
      setResult(card3[count].answer);
      // setCount(card3[count]);
    }
  }
  // to get to the next quation
  function nextquation() {
    if (count < card3.length - 1) {
      setCount((c) => c + 1);
    } else {
      setCount(0);
    }
  }
  // buck to the last quation
  function lastquation() {
    if (count === 0) {
      setCount((c) => c + 1);
    } else {
      setCount((c) => c - 1);
    }
  }
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Quiz Master</h1>
      <div className={styles.progress}>
        Question {count + 1} of {card3.length}
      </div>
      <ul className={styles.list}>
        {result && (
          <div
            className={
              result === card3[count].answer
                ? styles.successMessage
                : styles.errorMessage
            }
          >
            {result === card3[count].answer ? "✓ Correct!" : "✗ " + result}
          </div>
        )}
        <h2 className={styles.question}>{card3[count].text}</h2>
        <div className={styles.options}>
          {card3[count].chouseAnswer.map((ch, index) => (
            <button
              key={index}
              onClick={() => correct(ch)}
              className={
                ch === card3[count].answer ? styles.corr : styles.optionButton
              }
            >
              {ch}
            </button>
          ))}
        </div>
        <div className={styles.navButtons}>
          <button
            onClick={lastquation}
            disabled={count === 0}
            className={styles.navButton}
          >
            ← Previous
          </button>
          <button
            onClick={nextquation}
            disabled={count === card3.length - 1}
            className={styles.navButton}
          >
            Next →
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Quiz;
