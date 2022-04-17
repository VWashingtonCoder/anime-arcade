import React, { useEffect, useState } from "react";
import { StyledHangmanGame } from "../../styles/HangmanStyled";
//components
import GameDisplay from "./GameDisplay";
import GuessDisplay from "./GuessDisplay";
import AlphaKeys from "./AlphaKeys";
import { words } from "./data"; 

export default function HangmanGame () {
    //States
    const [gameWord, setGameWord] = useState({ id: null, word: "H", anime: ""}) 
    const [guesses, setGuesses] = useState([])
    const [correctGuesses, setCorrectGuesses] = useState([])
    const [guessNumber, setGuessNumber] = useState(10)
    const [showGuesses, setShowGuesses] = useState(false)
    const [message, setMessage] = useState("Guess A Letter")
    const [win, setWin] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const { id, word, anime } = gameWord
    
    const maskedWord = word.split("").map(letter => correctGuesses.includes(letter) ? letter : "_").join(" ")
    
    
    // Helpers/Handlers
    function getWord(){
        let randomId = Math.floor(Math.random() * 10)
        setGameWord(words[randomId])
    }
    
    function clickHandler(letter) {
        if(guessNumber > 0){
            if(guesses.includes(letter) || correctGuesses.includes(letter)){
                setMessage("Letter has been guessed. Try Again.")
                setGuessNumber(guessNumber)
            } else if(!correctGuesses.includes(letter) && word.includes(letter)){
                setCorrectGuesses([...correctGuesses, letter])
                setGuessNumber(guessNumber)
                setMessage("Guess A Letter")
            } else if (!guesses.includes(letter) && !word.includes(letter)){
                setGuesses([...guesses, letter])
                setGuessNumber(guessNumber - 1)
                setShowGuesses(true)
                setMessage("Guess A Letter")
            }
        }
    }
    function reset(){
        getWord()
        setGuesses([])
        setCorrectGuesses([])
        setGuessNumber(10)
        setShowGuesses(true)
        setMessage("Guess A Letter")
        setWin(false)
        setDisabled(false)
    }
    //useEffect
    useEffect(() => {
        getWord()
    }, [])

    useEffect(() =>{
        if(guessNumber === 0){
            setMessage("You Lose...Try Again")
            setDisabled(true)
        } else if (!maskedWord.includes("_")){
            setMessage("You Win!")
            setWin(true)
            setDisabled(true)
        }
    }, [guessNumber, maskedWord])
    
    return(
        <StyledHangmanGame>
            <div className="header">
                <h1>Hangman: Otaku Version</h1>
            </div>

            <GameDisplay 
               clue={anime}
               id={id}
               guessNum={guessNumber}
               masked={maskedWord}
               message={message}
               reset={reset}
               win={win}
            />

            <GuessDisplay 
                guesses={guesses} 
                guessNum={guessNumber} 
                show={showGuesses}
            />
           
            <AlphaKeys 
                click={clickHandler} 
                disabled={disabled} 
            />
        </StyledHangmanGame>
    )
}
