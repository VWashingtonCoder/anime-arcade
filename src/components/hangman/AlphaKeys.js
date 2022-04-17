import React from 'react';
import { AlphaKeysStyled } from '../../styles/HangmanStyled';



export default function AlphaKeys(props) {
    const alphabets = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ]
    const { click, disabled } = props

    return(
        <AlphaKeysStyled>
            {alphabets.map((alphabet, index) => 
                <button
                    className="alphaBtn" 
                    key={index}
                    onClick={() => click(alphabet)}
                    disabled={disabled}
                >
                    {alphabet}
                </button>
            )}
        </AlphaKeysStyled>
    )
}