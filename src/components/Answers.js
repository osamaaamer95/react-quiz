import React from 'react';
import PropTypes from 'prop-types';

  function Answers(props) {
    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioButton"
          name="radioGroup"
          checked={false}                  
        />
        <label className="radioCustomLabel">
          {props.answer}
        </label>
      </li>
    );
  }

  Answers.propTypes = {  
    answer: PropTypes.string.isRequired,    
  };

  export default Answers;
