import React from 'react';
import PropTypes from 'prop-types';

function Progress(props) {
  return (
    <div className="quizProgress">
      <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}

Progress.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default Progress;