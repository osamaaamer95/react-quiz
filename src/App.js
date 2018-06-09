import React, { Component } from 'react';

import QuizCore from './components/QuizCore';
import logo from './logo.svg';
import './App.css';

import dictionaryData from './dictionary/dict.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,   // keeps track of position in quiz
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      maxAnswers : 4,
      maxQuestions: 6,         
      answersCount: {
        correct: 0,
        incorrect: 0     
      },        
      result: ''
     };    
  }

  componentWillMount() {
    console.log(dictionaryData)
    // shuffle input dictionary
    this.shuffleArray(dictionaryData)
    // get shuffled answers including correct one
    const shuffledAnswerOptions = this.getRandomAnswers(dictionaryData[0].meaning, dictionaryData);  
    console.log(shuffledAnswerOptions)

    // update state and set first question
    this.setState({
      question: dictionaryData[0].word,
      answerOptions: shuffledAnswerOptions      
    });  
  }

  getRandomAnswers(correctAnswer, allAnswers) {
    var i = 0;
    var result = [];

    result.push( {"meaning": correctAnswer, "correct": true });
    // console.log(this.findInArray(result, "Characterizing the ovum when it has two primary germinallayers."))
    // while we do not have 4 options in the quiz answer including correct one
    while (i !== this.state.maxAnswers - 1) {
      // grab a random word meaning and push it in answers
      var randomIndex = Math.floor(Math.random() * allAnswers.length);
      if (this.findInArray(result, allAnswers[randomIndex].meaning)) continue;
      if (result.indexOf(randomIndex) > -1) continue;
      result.push({"meaning": allAnswers[randomIndex].meaning, "correct": false });
      i++;
    }

    return this.shuffleArray(result);
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  findInArray(arr, toFind) {
    return arr.find( o => o.meaning === toFind ) !== undefined 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the English Quiz!</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <Progress counter={1} total={10}/> */}
        {/* <Word word="ABASH" />
        <Answers answer="Sample answer"/>
        <Answers answer="Sample answer"/>
        <Answers answer="Sample answer"/> */}
        <QuizCore
          counter={this.state.counter}
           answer={this.state.answer}
           answerOptions={this.state.answerOptions}
           questionId={this.state.questionId}
           question={this.state.question}
           questionTotal={this.state.maxQuestions}
          />
      </div>
    );
  }
}

export default App;
