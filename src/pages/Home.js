import React from 'react';
import {Link} from 'react-router-dom';
import Ron from '../Assets/Images/ron-burgundy.svg';
import './home.scss';
function Home() {
    return (
        <main className="main">
            <div className="main__container">
                <h1 className="main__title">Trivia This!</h1>
                <img className="main__img" src={Ron} alt="Trivia main photo"/>
            </div>
                <p className="main__quote">I don't know how to put this but, Trivia This! is kind of a big deal</p>
                <Link to="/trivia"><button className="main__button" type="button" name="button">Play NOW!</button></Link>
        </main>
    )
}

export default Home
