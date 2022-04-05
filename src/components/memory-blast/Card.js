import React from "react";
import frontCard from "../../images/frontCard.png"

export default function Card({card, handleChoice, flipped, disabled}) {
    const handleClick = () => {
        if(!disabled){
            handleChoice(card)
        }
    }

    return(
        <div className = "card">
             <div className= {flipped ? "flipped" : ""}>
                <img 
                    className="front" 
                    src={card.src} 
                    alt="card front" 
                />
                <img 
                    className='back' 
                    src={frontCard} 
                    alt="card back" 
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}