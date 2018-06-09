import React, { Component } from 'react';
import update from 'react-addons-update';

import QuizCore from './components/QuizCore';
import Results from './components/Results';
import logo from './logo.svg';

import './less/index.css';

import dictionaryData from './dictionary/dict.json'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 0,   // keeps track of position in quiz
      questionId: 1,
      question: '',
      answer: '',
      answerOptions: [],
      answerContent: '',
      maxAnswers : 4,   // change this to modify the quiz
      maxQuestions: 7,  // change this to modify the quiz
      resultDetail: [],         
      answersCount: {
        correct: 0,
        incorrect: 0     
      },        
      correctAnswer: '',
      result: ''
    };    
    this.updateQuizProgress = this.updateQuizProgress.bind(this);
  }
  
  componentWillMount() {
    // shuffle input dictionary
    this.shuffleArray(dictionaryData)
    // get shuffled answers including correct one
    const shuffledAnswerOptions = this.getRandomAnswers(dictionaryData[0].meaning, dictionaryData);  
    
    // update state and set first question
    this.setState({
      question: dictionaryData[0].word,
      answerOptions: shuffledAnswerOptions,
      correctAnswer: dictionaryData[0].meaning      
    });  
  }
  
  // generate a random array of random meanings taken from other dictionary words
  getRandomAnswers(correctAnswer, allAnswers) {
    var i = 0;
    var result = [];
    
    result.push( {"meaning": correctAnswer, "correct": true });
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
  
  // coutesy: mitchgavan
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
  
  // helper which returns true if meaning is found in array
  findInArray(arr, toFind) {
    return arr.find( o => o.meaning === toFind ) !== undefined 
  }
  
  // callback on selecting an answer
  updateQuizProgress(event) {
    // if more quiz questions remain continue to next question else display result
    this.setAnswer(event.currentTarget.value, event.currentTarget.getAttribute('meaning'));
    
    if (this.state.questionId < this.state.maxQuestions) {        
      // show next question
      setTimeout(() => this.displayNextQuestion(), 300);
    } 
    else {        
      // show results
      setTimeout(() => this.showResult(), 300);
    }
  }
  
  // update user score and state
  setAnswer(selection, meaning) {
    var updatedAnswersCount = null;    
    var newResult = {"question": this.state.question, "isCorrect": selection, "meaning": this.state.correctAnswer};
    
    if (selection === "true") {
      updatedAnswersCount = update(this.state.answersCount, {
        correct: {$apply: (currentValue) => currentValue + 1}
      });
    } else {
      updatedAnswersCount = update(this.state.answersCount, {
        incorrect: {$apply: (currentValue) => currentValue + 1}
      });
    }
    
    this.setState(prevState => ({
      answersCount: updatedAnswersCount,
      answer: meaning,
      resultDetail: [...prevState.resultDetail, newResult]
    }));    
    
  }
  
  // present next question on answer selection
  displayNextQuestion() {
    // increment counters
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    
    // update the state
    this.setState({
      counter: counter,
      questionId: questionId,
      question: dictionaryData[counter].word,
      answerOptions: this.getRandomAnswers(dictionaryData[counter].meaning, dictionaryData),
      correctAnswer: dictionaryData[counter].meaning,
      answer: ''
    });
  }
  
  showResult() { 
    var result = this.state.answersCount;
    this.setState({ result: "You got " + result.correct + " out of " + (result.correct + result.incorrect) + " correct." });
  }
  
  
  renderQuiz() {
    return (
      <QuizCore
      counter={this.state.counter}
      answer={this.state.answer}           
      answerOptions={this.state.answerOptions}           
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={this.state.maxQuestions}
      onAnswerSelected={this.updateQuizProgress}  
      />);
    }
    
    renderResult(summary) {
      return (
        <Results
        resultSummary={this.state.result}
        resultDetail={this.state.resultDetail}
        />
      );
    }
    
    render() {
      return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to the English Quiz!</h1>
        </header>
        {this.state.result ? this.renderResult() : this.renderQuiz()} 
        </div>
      );
    }
  }
  
  export default App;
  