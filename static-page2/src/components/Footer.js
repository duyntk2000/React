import React from 'react'
import fb from '../images/facebook.svg'
import github from '../images/github.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <div>
            <img src={twitter} alt='tweet'/>
            </div>
            <div>
            <img src={fb} alt='fb'/>
            </div>
            <div>
            <img src={instagram} alt='ins'/>
            </div>
            <div>
            <img src={github} alt='github'/>
            </div>
        </div>
    )
}