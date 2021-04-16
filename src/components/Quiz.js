import React from 'react';
import './quiz.scss';
function Quiz({questions}) {
    return (
        <section className="quiz">
            {questions.map(question => 
            <div className="quiz__container">
                <p className="quiz__question">{question.question}</p>
                <div className="quiz__button-container">
                    {question.incorrect_answers.map(answer => 
                    <button className="quiz__button" type="button" name="quiz-button">{answer}</button>)}
                    <button className="quiz__button" type="button" name="quiz-button">{question.correct_answer}</button>                    
                </div>
                <button onClick={() => {}} className="quiz__next-question" type="button" name="next-question">Next Question</button>
            </div> )}
        </section>
    )
}
export default Quiz;