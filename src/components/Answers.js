import React from 'react';
import PropTypes from 'prop-types';

  function Answers(props) {
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioButton"
          name="radioGroup"
          checked={props.answerContent === props.answer}               
          meaning={props.answerContent}
          value={props.isAnswerCorrect}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerContent}>
          {props.answerContent}
        </label>
      </li>
    );
  }

  Answers.propTypes = {        
    answer: PropTypes.string.isRequired,  
    answerContent: PropTypes.string.isRequired,
    isAnswerCorrect: PropTypes.bool.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default Answers;
