import { useRef } from "react";
import { PropTypes } from "prop-types";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;

        let buttonStyle = "";

        if (answerState === "answered" && isSelected) {
          buttonStyle = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          buttonStyle = answerState;
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={buttonStyle}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;

Answers.propTypes = {
  answers: PropTypes.array,
  selectedAnswer: PropTypes.string,
  answerState: PropTypes.string,
  onSelect: PropTypes.func,
};
