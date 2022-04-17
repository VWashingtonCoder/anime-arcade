import React, { useEffect, useState } from "react";
import { GameDisplayStyled } from "../../styles/HangmanStyled";
//Images-Move Based
import sadGirl10 from "../../images/hangman/sad-dark-skin-10.png"
import sadGirl9 from "../../images/hangman/sad-dark-skin-9.png"
import sadGirl8 from "../../images/hangman/sad-dark-skin-8.png"
import sadGirl7 from "../../images/hangman/sad-dark-skin-7.png"
import sadGirl6 from "../../images/hangman/sad-dark-skin-6.png"
import sadGirl5 from "../../images/hangman/sad-dark-skin-5.png"
import sadGirl4 from "../../images/hangman/sad-dark-skin-4.png"
import sadGirl3 from "../../images/hangman/sad-dark-skin-3.png"
import sadGirl2 from "../../images/hangman/sad-dark-skin-2.png"
import sadGirl1 from "../../images/hangman/sad-dark-skin-1.png"
import sadGirl0 from "../../images/hangman/sad-dark-skin-0.png"
//winImages
const winImages = [
    require("../../images/hangman/winTosen.png"),
    require("../../images/hangman/winMare.png"),
    require("../../images/hangman/winCanary.png"),
    require("../../images/hangman/winAfro.png"),
    require("../../images/hangman/winBlue.png"),
    require("../../images/hangman/winUrd.png"),
    require("../../images/hangman/winMuhammad.png"),
    require("../../images/hangman/winAkira.png"),
    require("../../images/hangman/winPopo.png"),
    require("../../images/hangman/winDutch.png")
]


export default function GameDisplay(props){
    const [image, setImage] = useState(sadGirl10)
    const [allowReset, setAllowReset] = useState(true)
    const { clue, id, guessNum, masked, message, reset, win } = props

    function imageHandler(number) {
        switch(number){
            case 10:
                return
            case 9: 
                setImage(sadGirl9)
                break
            case 8:
                setImage(sadGirl8)
                break
            case 7:
                setImage(sadGirl7)
                break
            case 6:
                setImage(sadGirl6)
                break
            case 5:
                setImage(sadGirl5)
                break
            case 4: 
                setImage(sadGirl4)
                break
            case 3:
                setImage(sadGirl3)
                break
            case 2:
                setImage(sadGirl2)
                break
            case 1:
                setImage(sadGirl1)
                break
            case 0:
                setImage(sadGirl0)
                break
            default:
                return
        }
    }

    function resetHandler(evt){
        evt.preventDefault()
        reset()
        setImage(sadGirl10)
    }
    useEffect(() => {
        imageHandler(guessNum)
    }, [guessNum])
   
    useEffect(() => {
        if(guessNum === 0 || !masked.includes("_")){
            setAllowReset(false)
        } else {
            setAllowReset(true)
        }
    }, [guessNum, masked])

    return(
        <GameDisplayStyled>
            {win
                ? <img src={winImages[id]} alt='winCharacter' />
                : <img src={image} alt="SadGirl"/>
            }
            <div className="word-display">
                <div className="message">{message}</div>
                <div className="masked">{masked}</div>
                <div className="clue">Series: {clue}</div>
                
                <button 
                    disabled={allowReset}
                    onClick={resetHandler}
                >
                    Reset
                </button>
            </div>
            
            
        </GameDisplayStyled>
    )
}