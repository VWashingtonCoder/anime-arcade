import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeStyled } from "../styles/HomeStyled";
import memoryPrev from "../images/home/memory-preview.jpg"
import ticTacPrev from "../images/home/tic-tac-toe-prev.jpg"
import hangmanPrev from "../images/home/hangman-prev.jpg"


export default function Home(){
    const navigate = useNavigate()
    
    function navigateToGame(evt){
        const game = evt.target.className
        switch(game){
            case("memory"):
                navigate("/memory-blast")
                break
            case("tic-tac-toe"):
                navigate("/tic-tac-toe")
                break
            case("hangman"):
                navigate("/hangman")
                break
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
            <div className="comp-container">
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
                
                <div className="comp tic-tac-toe">
                    <div className="info tic-tac-toe">
                        <h2>Tic-Tac-Toe</h2>
                        <p>Great classic two-player game</p>
                        <button className="tic-tac-toe" onClick={navigateToGame}>
                            Go Play!
                        </button>
                    </div>
                    <img src={ticTacPrev} alt="tic-tac-toe-preview" />
                </div>
                
                <div className="comp hangman">
                    <div className="info hangman">
                        <h2>Hangman: Otaku Version</h2>
                        <p>Find the hidden words!</p>
                        <button className="hangman" onClick={navigateToGame}>
                            Go Play!
                        </button>
                    </div>
                    <img src={hangmanPrev} alt="hangman-preview" />
                </div>
            </div>
        </HomeStyled>
    )
}