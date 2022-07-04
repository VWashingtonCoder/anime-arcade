import { MemoryStyled } from "../../styles/MemoryStyled";
import React, { useState, useEffect } from 'react';
import Card from "./Card";
import backCard1 from "../../images/memory-blast/backCard1.png"
import backCard2 from "../../images/memory-blast/backCard2.png"
import backCard3 from "../../images/memory-blast/backCard3.png"
import backCard4 from "../../images/memory-blast/backCard4.png"
import backCard5 from "../../images/memory-blast/backCard5.png"
import backCard6 from "../../images/memory-blast/backCard6.png"

//Set up card images
const cardImages = [
  {"src": backCard1, matched: false},
  {"src": backCard2, matched: false},
  {"src": backCard3, matched: false},
  {"src": backCard4, matched: false},
  {"src": backCard5, matched: false},
  {"src": backCard6, matched: false}
]

function MemoryApp() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [matches, setMatches] = useState(0)
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("Click A Card")
  
  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({...card, id: Math.random()}));
    setChoice1(null);
    setChoice2(null);
    setCards(shuffledCards);
    setTurns(0);
    setMessage("Click A Card")
    setMatches(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    setMessage("Click A Card")
    choice1 ? setChoice2(card) : setChoice1(card);
  }

  // compare cards
  useEffect(() => {
    if (choice1 && choice2) {
      setDisabled(true);
      if (choice1.src === choice2.src){
        setCards(prevCards => {
          return prevCards.map(card =>{
            if(card.src === choice1.src){
              setMatches(matches + 1)
              setMessage("It's A Match!")
              return {...card, matched: true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      }else{
        resetTurn()
        setMessage("Sorry...Not A Match")
      }
    }
  }, [choice1, choice2])

  useEffect(() => {
    if (matches === 6){
      setMessage("You Won!")
    }
  }, [matches])
  
  //reset choices and increase turn
  const resetTurn = () => {
    setChoice1(null);
    setChoice2(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabled(false);
    
  }
  //Start new Game Automatically
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <MemoryStyled>
      <h1>Memory Blast</h1>
      <div className="info-container">
        <div className="info turns">
          Turns: {turns}
        </div>
        <div className="message">
          {message}
        </div>
        <div className="info matches">
          Matches: {matches}
        </div>        
      </div>      
      <button id='newGameBtn' onClick={shuffleCards}>
          New Game
      </button>
      <div className='card-grid'>
        {
          cards.map((card) => (
            <Card 
              card={card} 
              key={card.id} 
              handleChoice={handleChoice}
              flipped={card === choice1 || card === choice2 || card.matched}
              disabled={disabled}
            />
          ))
        }
      </div>
      
      
    </MemoryStyled>
  );
}

export default MemoryApp;
