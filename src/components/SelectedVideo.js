import React from 'react';
import './selectedVideo.scss';
import RonB from '../Assets/Images/RB6.jpg';

function SelectedVideo (){
    
    return (
        <section className="selected-video">
            <img className="selected-video__poster" src={RonB} alt="Ron asking question"/> 
        </section>
    )
}

export default SelectedVideo;