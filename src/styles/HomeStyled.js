import styled from "styled-components"

export const HomeStyled = styled.div`
    color: cyan;
    h1 {
        font-size: 60px;
    }
    h2{
        font-size: 48px;
        margin-bottom: 10px;
    }
    .home-header p {
        font-size: 35px;
    }
    .comp {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: 2px solid black;
        margin: 0px 15px 10px;
        padding: 10px 0;
    }
    .info {
        display: flex;
        flex-flow: column;
        width: 45%;
    }
    ,info p {
        font-size: 26px;
        margin-top: 0px;
    }
    img {
        width: 48%
    }

`