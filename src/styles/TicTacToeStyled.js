import styled from "styled-components"
import ticTacBG from "../images/tic-tac-toe/tic-tac-bg.png"

export const StyledTicTacGame = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;    
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
        flex-flow: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .game-info button {
        font-size: 20px;
        color: darkorange;
        background-color: darkmagenta;  
        padding: 7px;
    }
    
    @media (max-width: 1200px) and (min-width: 768px){
        flex-flow: column;
    }
    
    @media (max-width: 767px) {
        flex-flow: column;
        h1 {
            font-size: 65px;
        }
    }
` 
export const StyledBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 900px;
    height: 900px;
    margin: 15px auto 5px;
    background-image: url(${ticTacBG});
    background-size: contain;
    @media (max-width: 1200px) and (min-width: 768px){
        width: 600px;
        height: 600px;
    }
    @media (max-width: 767px) {
        width: 300px;
        height: 300px;
    }
`

export const StyledCell = styled.button `
    width: 300px;
    height: 300px;
    box-shadow: 0 0 0 1px #e661b2;
    border: 1px solid #333333;
    cursor: pointer;
    line-height: 100px;
    font-size: 250px;
    background: transparent;
    color: fuchsia;
    
    @media (max-width: 1200px) and (min-width: 768px){
        width: 200px;
        height: 200px;
        font-size: 200px;
    }
    @media (max-width: 767px) {
        width: 100px;
        height: 100px;
        font-size: 100px;
    }
`
