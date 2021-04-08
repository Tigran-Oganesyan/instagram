import React from 'react';
import CardListInsta from './CardListInsta';
import Form from './Form';

export default function InstaList({title,image,cards,setCards,setImages,setTitle,setOpenedCardId}){
    return(

      <div className="insta">
       <Form title={title} image={image} setImages={setImages} setTitle={setTitle} cards={cards} setCards={setCards}/>
       <CardListInsta cards={cards} setCards={setCards} setOpenedCardId={setOpenedCardId}/>
      </div>
    )
}