import React from "react";
import Cell from "./Cell";
import { StyledBoard } from "../../styles/TicTacToeStyled"



export default function Board(props) {
    const { cells, onClick } = props
    return(
        <StyledBoard>
            {cells.map((cell, i) => {
                return(
                <Cell 
                    key={i} 
                    value={cell} 
                    onClick={() => onClick(i)} 
                />
            )})}
        </StyledBoard>
    )
}