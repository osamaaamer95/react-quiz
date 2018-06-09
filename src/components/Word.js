import React from 'react';
import PropTypes from 'prop-types';

  function Word(props) {
    return (
      <h2 className="word">{props.word}</h2>
    );
  }

  Word.propTypes = {
    word: PropTypes.string.isRequired
  };

  export default Word;