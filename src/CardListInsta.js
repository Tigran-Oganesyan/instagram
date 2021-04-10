import React from 'react';

export default function CardListInsta ({cards,setCards,setOpenedCardId}){
    return (
        <div className="cardsList">
          {cards.map((card)=> (
            <div className="card" key={card.id}>
              <img className="img" src={card.image}></img>
              <h2 className="title">{card.title}</h2>
              <div className="buttons">
                <button onClick={() => {
                  setOpenedCardId(card.id);
             }}>+</button>
                <button onClick={()=>{
                  setCards(cards.filter((c) => c.id !== card.id))
                }}>x</button>
              </div>
            </div>
          ))}
        </div> 
    )
}