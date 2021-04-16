import React from 'react';
import {Link} from 'react-router-dom';
import SelectedVideo from '../components/SelectedVideo';
import './trivia.scss';
import Ron from '../Assets/Images/ron-burgundy.svg';
function Trivia () {
    return ( 
        <>        
        <header className="header">
            <div className="header__container">
                <h1 className="header__title">Trivia This!</h1>
                <Link to="/"><img className="header__img" src={Ron} alt="Trivia Logo"/></Link>
            </div>
        </header>
        <SelectedVideo/>
        </>
    )
}

export default Trivia;