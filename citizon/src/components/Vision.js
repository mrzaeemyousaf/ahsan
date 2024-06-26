import React from 'react';
//import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Zoom } from 'react-slideshow-image';
import './Vision.css';
const indicators = (index) => (<div className="indicator">{index + 1}</div>);

const Example = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        // <Slide>
            <Zoom indicators={indicators} scale={2.5}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Rule of law is upheld, and every citizen receives fair treatment.</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Constitutional rights are protected and promoted, ensuring freedom and equality for all.</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Intra and interstate conflicts are minimized, leading to a more harmonious existence.</span>
                </div>
            </div>
        </Zoom>
        //  </Slide> 
    );
};

export default Example;