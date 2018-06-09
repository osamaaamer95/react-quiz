import React from 'react';
import PropTypes from 'prop-types';

import ResultSummary from './ResultSummary';
import ResultRow from './ResultRow';

function Results(props) {
    function generateSummary(key) {        
        return (
            <ResultRow
            key={key.question}   
            word={key.question}                      
            answerContent={key.meaning}                                                      
            isCorrect={key.isCorrect}
            />
        );
    }
    
    return (
        <div className="quizResult">
        <ResultSummary summary={props.resultSummary} />
        {/* generates answer options using map function */}
        <ul className="resultRows">
         {props.resultDetail.map(generateSummary)}
        </ul>
        </div>
    );
}

Results.propTypes = {
    resultDetail: PropTypes.array.isRequired,
    resultSummary: PropTypes.string.isRequired
};

export default Results;