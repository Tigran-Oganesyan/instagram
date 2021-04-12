/* eslint-disable react/prop-types */
import React from 'react';
import CardListInsta from './CardListInsta';
import Form from './Form';

export default function InstaList({
  title, image, cards, setCards, setImage, setTitle, setOpenedCardId,
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
      />
      <CardListInsta
        cards={cards}
        setCards={setCards}
        setOpenedCardId={setOpenedCardId}
      />
    </div>
  );
}
