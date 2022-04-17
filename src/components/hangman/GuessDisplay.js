import React from "react";
import { GuessDisplayStyled } from "../../styles/HangmanStyled";

export default function GuessDisplay(props){
    const {guessNum, show, guesses } = props
    
    return(
        <GuessDisplayStyled>
            <div className="guessNum">
                Guesses Left: {guessNum}
            </div>
            <div className="guessLetters">
                Wrong Guess List: {show ? guesses.map(guess => guess) : "Empty" }
            </div>
        </GuessDisplayStyled>
    )
}