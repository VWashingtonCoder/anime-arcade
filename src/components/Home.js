import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home(){
    const navigate = useNavigate()

    return(
        <div className="home-comp">
            <div className="home-header">
                <h1>Welcome to the Ani-Arcade!</h1>
                <p>Pick a game below to get the fun started!</p>
            </div>
        </div>
    )
}