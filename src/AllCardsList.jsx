import React from 'react';

export default function AllCardsList({
  // eslint-disable-next-line no-unused-vars
  cards, setCards, setOpenedCardId,
}) {
  return (
    <>
      <div className="cards-count">
        Всего карточек:
        <span className="count">{cards.length}</span>
      </div>
      <div className="all-cards">
        {cards
          .map((card) => (
            <div className="card" key={card.id}>
              <img className="img" src={card.image} alt="" />
              <h2 className="title">{card.title}</h2>
              <p>{card.author}</p>
              <p>{card.cardDate}</p>
            </div>
          ))}
      </div>
    </>
  );
}
