import React from 'react';
import image from '../images/me.jpg'
import envelope from '../images/envelope.svg'
import linkedin from '../images/linkedin.svg'
export default function Profile() {
    return (
        <div className='profile'>
            <img src={image} alt="me"/>
            <h2>Nguyen Tu Khanh Duy</h2>
            <h4>Developer</h4>
            <h5>ntkd.website</h5>
            <div className='buttons'>
                <a className='email-button' href='#'><img src={envelope}/>Email</a>
                <a className='linkedin-button'href='#'><img src={linkedin}/>LinkedIn</a>
            </div>
        </div>
    )
}