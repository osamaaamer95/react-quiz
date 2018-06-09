import React from 'react';
import PropTypes from 'prop-types';

function ResultRow(props) {
    const isCorrect = props.isCorrect;
    console.log(isCorrect)
    return (
        <div className="resultRow">
            <h3 className="word">{props.word}</h3>
            <div className="meaning">
                CORRECT ANSWER: {props.answerContent}
            </div>
            <div className="userResult"> You got this question <b>{ isCorrect === "true" ? "right" : "wrong" }</b>.</div> 
        </div>        
    );
}

ResultRow.propTypes = {
    word: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    isCorrect: PropTypes.string.isRequired
};

export default ResultRow;