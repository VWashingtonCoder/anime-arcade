import React from "react";
import { StyledCell } from "../../styles/TicTacToeStyled";



export default function Cell(props) {
    const { value, onClick } = props
    return(
        <StyledCell onClick={onClick}>
            {value}
        </StyledCell>
    )
}