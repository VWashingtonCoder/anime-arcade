import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeStyled } from "../styles/HomeStyled";
import memoryPrev from "../images/home/memory-preview.jpg"

export default function Home(){
    const navigate = useNavigate()
    
    function navigateToGame(evt){
        const game = evt.target.className
        switch(game){
            case("memory"):
                navigate("/memory-blast")
            default:
                return
        }
    } 

    return(
        <HomeStyled>
            <div className="home-header">
                <h1>Welcome to the Ani-Arcade!</h1>
                <p>Pick a game below to get the fun started!</p>
            </div>
            <div className="comp memory">
                <div className="info memory">
                    <h2>Memory Blast</h2>
                    <p>Come test your memory with this anime style card game.</p>
                    <button className="memory" onClick={navigateToGame}>
                        Go Play!
                    </button>
                </div>
                <img src={memoryPrev} alt="memory-preview" />
            </div>
        </HomeStyled>
    )
}