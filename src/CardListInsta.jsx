import React from 'react';

export default function CardListInsta({
  // eslint-disable-next-line no-unused-vars
  cards, setCards, setOpenedCardId, openedCardId, activeUser, userCard, setUserCard,
}) {
  return (
    <div className="cardsList">
      {cards
        .filter((card) => (
          card.userId === activeUser.id))
        .map((card) => {
          setUserCard(card);
          return (
            <div className="card" key={card.id}>
              <img className="img" src={card.image} alt="" />
              <h2 className="title">{card.title}</h2>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => {
                    setOpenedCardId(card.id);
                  }}
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setOpenedCardId(false);
                  }}
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCards(cards.filter((c) => c.id !== card.id));
                    setOpenedCardId(false);
                    setUserCard(activeUser.userCards.length - 1);
                  }}
                >
                  x
                </button>
              </div>
              <p>{card.author}</p>
              <p>{card.cardDate}</p>
            </div>
          );
        })}
    </div>
  );
}
