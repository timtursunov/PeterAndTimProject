import './App.css';
import React from 'react'
import axios from 'axios'
import {Switch, Route} from 'react-router-dom'
import Quiz from './components/Quiz'

//our API CALL
const API_URL = 'https://opentdb.com/api.php?amount=10&category=18'

class App extends React.Component {
  state={
    results: [],
    questions: [],
    score: 0,
    record: 0
  };
  componentDidMount() {
    axios.get(API_URL)
    .then(res => {
        console.log(res.data.results)
        this.setState({
          results: [...res.data.results],
          questions: [...this.state.results.map(result => result.question)]


        })
    })
    .catch (err => {
        console.log ('oopsie', err)
    }) 
  }
  render() {
    return (
      <div className="App">
        <h1>The Trivia</h1>
        <div className='quizContainer'>
          <div className='quizContainer__question'>
            <h2>this is where we have our question</h2>
          </div>
          <div className='questions-section'>
            <button> ANswer 1 </button>
            <button>Answer 2</button>
            <button>3</button>
            <button> 4</button>
          </div>



        </div>

      </div>
    );
  }
}
export default App;
