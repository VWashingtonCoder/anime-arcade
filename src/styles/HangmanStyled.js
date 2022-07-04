import styled from "styled-components";

/**
 * @media (max-width: 719px) {}
*/

export const StyledHangmanGame = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    color: skyblue;
    .header{
        margin-top: -30px
    }
    @media (max-width: 719px) {
        h1{
            font-size: 61px;
            margin-top: 25px;
        }
        .header {
            font-size: 50px;
        }
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
    
    @media (max-width: 719px) {
        flex-flow: column;
        align-items: center;
        img {
            width: 80%;
        }
        .masked {
            font-size: 54px;
        }
        .clue {
            font-size: 24px;
            margin-bottom: 10px;
        }
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
    
    @media (max-width: 719px) {
        flex-flow: column;
        align-items: center;
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

    @media (max-width: 719px) {
        grid-template-columns: repeat(7,auto);
        margin-bottom: 60px;
    }
`