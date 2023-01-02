import React from "react"
import '../Components/data.css'

export default function Card(props) {

    let badgetext
    if(props.openSpots === 0){
        badgetext = "SOLD OUT";
    }
    else if(props.location === "Online"){
        badgetext = "ONLINE";
    }
   
    return (

    <div className="card--1">
        
          <span className="card--3">
            {badgetext && <div className="card--badge">{badgetext}</div>}
            <div>
                <img src={`/images/${props.coverImg}`} alt={"missing"} className="card--image" />
            </div>
            <div className="card--stats">
                <img src="/images/star.png" alt = {"missing"} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <div>
                <p className="card--title">{props.title}</p>
                <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
            </div>
         </span>
    </div>

       
    )
}

