import React from 'react';
import CardListInsta from './CardListInsta';
import Form from './Form';

export default function InstagramList({
  // eslint-disable-next-line max-len
  title, image, cards, setCards, setImage, setTitle, setOpenedCardId, openedCardId, activeUser, setDate, date, userCard, setUserCard,
}) {
  return (
    <div className="insta">
      <Form
        title={title}
        image={image}
        setImage={setImage}
        setTitle={setTitle}
        cards={cards}
        setCards={setCards}
        activeUser={activeUser}
        setDate={setDate}
        date={date}
        userCard={userCard}
        setUserCard={setUserCard}
      />
      <CardListInsta
        openedCardId={openedCardId}
        cards={cards}
        setCards={setCards}
        setOpenedCardId={setOpenedCardId}
        activeUser={activeUser}
        setDate={setDate}
        date={date}
        userCard={userCard}
        setUserCard={setUserCard}
      />
    </div>
  );
}
