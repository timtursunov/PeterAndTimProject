import React from 'react';
import './quiz.scss';

function Quiz() {
    return (
        <section className="quiz">
            <div className="quiz__container">
                <p className="quiz__question">How to write an IF statement in JavaScript</p>
                <div className="quiz__button-container">
                    <button className="quiz__button" type="button" name="quiz-button">if i == 5 then</button>
                    <button className="quiz__button" type="button" name="quiz-button">if i = 5 then</button>
                    <button className="quiz__button" type="button" name="quiz-button">if (i = 5)</button>
                    <button className="quiz__button" type="button" name="quiz-button">if i = 5</button>
                </div>
                <button className="quiz__next-question" type="button" name="next-question">Next Question</button>

            </div>
        </section>
    )
}

export default Quiz;

