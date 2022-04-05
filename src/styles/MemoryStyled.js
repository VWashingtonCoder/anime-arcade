import styled from "styled-components";

export const MemoryStyled = styled.div`
    background-color: darkviolet;
    padding: 1px 0;
    color: #fff;
    h1{
        font-size: 73px;
        margin: 10px 0 20px;
    }
    .info-container{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .info {
        font-size: 1.2em;
        font-weight: bold;
        border: 2px solid #fff;
        border-radius: 4px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px
    }
    .message{
        font-size: 1.2em;
        font-weight: bold;
        width: 210px;
        border: 2px solid #fff;
        border-radius: 4px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        background: none;
        border: 2px solid #fff;
        padding: 0 12px;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        font-size: 1em;
        height: 45px;
    }
    button:hover{
        background-color: #c23866;
        color: #fff;
    }
    .card-grid{
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px;
        width: 80%;
        justify-items: end;
        margin-left: 6rem;
    }
`