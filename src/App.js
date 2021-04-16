import './App.scss';
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Trivia from './pages/Trivia';
import '../src/style/global.scss';



class App extends React.Component {
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
