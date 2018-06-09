import React from 'react';
import PropTypes from 'prop-types';

// import quiz components
import Word from '../components/Word';
import Progress from '../components/Progress';
import Answers from '../components/Answers';

function QuizCore(props) {
    function generateAnswers(key) {
        return (
            <Answers
            key={key.meaning}            
            answer={key.meaning}   
            onAnswerSelected={props.onAnswerSelected}                                   
            />
        );
    }

    return (
       <div className="quiz">
       {/* quiz progress */}
         <Progress
           counter={props.questionId}
           total={props.questionTotal}
         />
         {/* quiz question */}  
         <Word word={props.question} />
         {/* generates answer options using map function */}
         <ul className="answerOptions">
            {props.answerOptions.map(generateAnswers)}
         </ul>
       </div>
    );
  }

  QuizCore.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default QuizCore;