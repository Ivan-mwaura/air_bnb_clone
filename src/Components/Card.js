import React from "react"
import Katie from './images/Katie.png'
import Star from './images/Star.png'
const Card = () =>{
    return(
        <div className="card">
            <img src={Katie} alt="Missing" className="katie"/>
            <div className="card_content">
                <img src={Star} alt="missing" className="star"/>
                <span className="gray">50</span>
                <span className="gray">(6)</span>
                <span className="gray">.USA</span>
            </div>
            <div>
                <p>Life lessons with Katie Zaferes</p>
                <p><b>from $136</b> / person</p>
            </div>
        </div>

    )
}
export default Card;