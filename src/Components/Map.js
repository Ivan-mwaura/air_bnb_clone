import React from "react"

const Names = [ "Jane", "Cess", "Evan","Jacy","Matash"]
const Beauty = ["Alisha","Martin", "Kesha", "Mary","Kalya"]
   
const Upper = Names.map((nam) =>{
    console.log(Upper)
    return(
         nam[0].toUpperCase()  + nam.slice(1)
    )
});
 const Array = Beauty.map((beau) =>{
    console.log(Array)
    return(
        
            `{<p>${beau}</p>}`
       
    )
 })
 export default Array && Names;
 
 const App = () =>{
    return(
      <div>
          <div>
            <Navigation />
            <Hero/>
            <Card
              img = "/images/Katie.png"
              star = "/images/Star 1-1.png"
              rating = "5.0  "
              reviewcount = "(6)"
              country = "Kenya"
              title = "Life lessons with Katie Zaferes"
              price = {136}
            />
    
         </div>
      </div>
    )
}
function Card (props){
  console.log(props)
  return(
      <div className="card">
          <img src= {`/images/$props.coverImg`} alt="Missing" className="katie"/>
          <div className="card_content">
              <img src={"/images/Star 1-1.png"} alt="Missing" className="star"/>
              <span className="gray">{props.stats.rating}</span>
              <span className="gray">{props.stats.reviewCount}</span>
              <span className="gray">{props.location}</span>
          </div>
          <div>
              <p>{props.title}</p>
              <p><b>from ${props.price}</b> / person</p>
              <p>openSpots:{props.openSpots}</p>
          </div>
      </div>

  )
}
