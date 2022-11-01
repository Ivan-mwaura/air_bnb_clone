import React from 'react'
import hero from './images/Group 77.png'
const Hero = () =>{
    return(
    <div className='hero_section'>
            <div className='hero_i'>
            <img src = {hero} alt="missing" className='image'/>
            </div>
            <br/>
            <div className='hero_content'>
                <h1 className='hero_h'>Online Experiences</h1>
                <p className='hero_paragraph'> 
                    Join unique interactive activities<br/>
                     led by one-of a kind hosts without <br/>
                    leaving home
                 </p>
            </div>
    </div>
       
    )
       
}
export default Hero;