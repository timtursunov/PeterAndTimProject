import './App.scss';
import React from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Trivia from './pages/Trivia';
import '../src/style/global.scss';

//our API CALL
const API_URL = 'https://opentdb.com/api.php?amount=10&category=18'

class App extends React.Component {
  state={

  }


  componentDidMount() {
    axios.get(API_URL)
    .then(res => {
        console.log(res.data.results)
        this.setState({
          questions: [...res.data.results]
          
            
            // detailedVideos: [...res.data],
            // sideVideos: [...res.data].filter((find) => find.id !== selectedId)
        })
    })
    .catch (err => {
        console.log ('oopsie', err)
    }) 
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/trivia"  component={Trivia}/>
          
        </Switch>
      </div>
    );
  }
}
export default App;
