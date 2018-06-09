import React from 'react';
import PropTypes from 'prop-types';

  function ResultSummary(props) {
    return (
      <h2 className="resultSummary">{props.summary}</h2>
    );
  }

  ResultSummary.propTypes = {
    summary: PropTypes.string.isRequired
  };

  export default ResultSummary;