import React from 'react'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Card from './Components/Card'

const App = () =>{
    return(
      <div>
          <div>
            <Navigation />
            <Hero/>
            <Card/>
         </div>
      </div>
    )
}
export default App;