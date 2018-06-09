import React from 'react';
import PropTypes from 'prop-types';

function Progress(props) {
  return (
    <div className="quizProgress">
        <span>{props.counter}</span> of <span>{props.total}</span>
        <div className="inner" style={{ "width": ((props.counter-1)/props.total)*100 + "%"}}>
        </div>      
    </div>
  );
}

Progress.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Progress;