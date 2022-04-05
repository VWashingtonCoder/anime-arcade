import React from "react";
import frontCard from "../../images/memory-blast/frontCard.png"
import { CardStyled } from "../../styles/MemoryStyled"

export default function Card({card, handleChoice, flipped, disabled}) {
    const handleClick = () => {
        if(!disabled){
            handleChoice(card)
        }
    }

    return(
        <CardStyled>
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
        </CardStyled>
    )
}