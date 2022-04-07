import styled from "styled-components"
import ticTacBG from "../images/tic-tac-toe/tic-tac-bg.png"

export const StyledTicTacGame = styled.div`
    display: flex;
    flex-flow: column;    
    color: darkorange;
    h1 {
        font-size: 78px;
        margin: 3px 0px 0px;
    }
    h2 {
        font-size: 36px;
    }
    .game-info {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .game-info button {
        font-size: 20px;
        color: darkorange;
        background-color: darkmagenta;  
        padding: 7px;
    }
    
    
` 
export const StyledBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 450px;
    height: 450px;
    margin: 15px auto 5px;
    background-image: url(${ticTacBG});
    background-size: contain;
`

export const StyledCell = styled.button `
    width: 148px;
    height: 148px;
    box-shadow: 0 0 0 1px #e661b2;
    border: 1px solid #333333;
    cursor: pointer;
    line-height: 100px;
    font-size: 100px;
    background: transparent;
    color: fuchsia;
`