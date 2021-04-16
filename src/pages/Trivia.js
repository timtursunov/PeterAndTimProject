import React from 'react';
import {Link} from 'react-router-dom';
import SelectedVideo from '../components/SelectedVideo';
import Quiz from '../components/Quiz';
import './trivia.scss';
import Ron from '../Assets/Images/ron-burgundy.svg';
import axios from 'axios'

//our API CALL
const API_URL = 'https://opentdb.com/api.php?amount=10&category=18'

class Trivia extends React.Component {
    state={
        questions: [],
        start: 0,
        videoOn: false
      }
      componentDidMount() {
        axios.get(API_URL)
        .then(res => {
            console.log(res.data.results)
            this.setState({
              questions: [...res.data.results],
            })
        })
        .catch (err => {
            console.log ('oopsie', err)
        }) 
      }
    render () {
        return ( 
            <>        
            <header className="header">
                <div className="header__container">
                    <h1 className="header__title">Trivia This!</h1>
                    <Link to="/"><img className="header__img" src={Ron} alt="Trivia Logo"/></Link>
                </div>
            </header>
            <SelectedVideo/>
            <Quiz questions={this.state.questions} />
            </>
        )
    }  
}
export default Trivia;