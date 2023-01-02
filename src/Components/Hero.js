import React from 'react'

const Hero = () =>{
    return(
    <div className='hero_section'>
            <div className='hero'>
                <img src = { "/images/Group_77.png"}alt="missing" className='hero--photo'/>
            </div>
            <br/>
            <div className='hero_content'>
                <h1 className='hero--header'>Online Experiences</h1>
                <p className='hero--text'> 
                    Join unique interactive activities<br/>
                     led by one-of a kind hosts without <br/>
                    leaving home
                 </p>
            </div>
    </div>
       
    )
       
}
export default Hero;