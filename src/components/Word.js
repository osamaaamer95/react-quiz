import React from 'react';
import PropTypes from 'prop-types';

  function Word(props) {
    return (
      <div className="word">{props.word}</div>
    );
  }

  Word.propTypes = {
    word: PropTypes.string.isRequired
  };

  export default Word;