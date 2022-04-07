import React, { useEffect, useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./Helper"
import { StyledTicTacGame } from "../../styles/TicTacToeStyled";


export default function TicTacGame () {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [filledSpaces, setFilledSpaces] = useState(0)
    const [message, setMessage] = useState("Next Player: X")
    const winner = calculateWinner(board)  
    
    const validate = (filledSpaces) => {
        if (filledSpaces === 9){
            setMessage("It's A Draw")
        } else {
            setMessage("Next Player: " + (xIsNext ? "O" : "X"))
        }
    }

    const handleClick = i => {
        const boardCopy = [...board]
        // if user click an occupied space or if game is won, return
        if(winner || boardCopy[i]) return;
        //put an X or O in clicked cell
        boardCopy[i] = xIsNext ? "X" : "O"
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
        setFilledSpaces(filledSpaces + 1)
        validate(filledSpaces+1)

    };
    const resetMoves = evt => {
        evt.preventDefault()
        setBoard(Array(9).fill(null))
        setXIsNext(true)
    };
    
    return (
        <StyledTicTacGame>
            <h1>Tic Tac Toe</h1>
            
            <Board cells={board} onClick={handleClick}/>

            <div className="game-info">
                <h2> {winner ? `Winner: ${winner}` : message} </h2>
                <button onClick={resetMoves}>
                    Restart Game
                </button>
            </div>
        </StyledTicTacGame>
    )
}

