import styled from "styled-components"

export const StyledHangmanGame = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    background-color: mediumorchid;
    color: skyblue;
    .header{
        margin-top: -30px
    }
`
export const GameDisplayStyled = styled.div`
    display: flex;
    width: 96%;
    justify-content: space-evenly;
    margin: 20px 0px 15px;
    img{
        width: 45%;
    }
    .word-display{
        width: 48%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
    }
    .masked{
        font-size: 75px;
    }
    .clue{
        font-size: 35px;
    }
    .message {
        font-size: 34px;
    }
    button{
        font-size: 20px;
    }
`

export const GuessDisplayStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    font-size: 30px;
    margin: 10px 0 15px;
    .guessLetters{
        width: 53%;
    }
`

export const AlphaKeysStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(13,auto);
    height: 150px;
    margin-bottom: 25px;
    .alphaBtn{
        width: 55px;
        font-size: 36px;
    }
`