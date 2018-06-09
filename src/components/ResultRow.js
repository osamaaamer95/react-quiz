import React from 'react';
import PropTypes from 'prop-types';

function ResultRow(props) {
    return (
        <div>
            <h3 className="resultSummary">{props.word}</h3>
            <div className="meaning">
                {props.answerContent}
            </div>
            {props.isCorrect}
        </div>        
    );
}

ResultRow.propTypes = {
    word: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    isCorrect: PropTypes.string.isRequired
};

export default ResultRow;