import React from 'react'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'
import Card from './Components/Card'
import data from './Components/data'


function App (){
  const apidata = data.map(database => {
    return < Card
        key = {database.key}
        {...database}
      /* alternatively you can spread the object using the spread syntax {...database}
       ad then just use the props to render {props.location}*/
      />
  })
  return(
    <div>
      <Navigation/>
      <Hero/>
        <section className='cards--list--section'>
          <div className='card--list-div'>
             {apidata}
             
            </div>
         </section>
      
    </div>
  )
}
export default App;