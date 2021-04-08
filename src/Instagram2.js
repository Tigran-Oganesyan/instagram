import React, { useState } from 'react';
import './insta.css';
import InstaList from './InstaList';
import Post from './Post';

function Instagram2() {

  const [cards, setCards] = useState([]);

  const[openedCardId, setOpenedCardId] = useState(false);

  const [comment, setComment] = useState([]);
  const [commen, setCommen] = useState('');

  const [title, setTitle] = useState('');
  const [image, setImages] = useState('');

 



  return(
    <>
    {!openedCardId ? null : <Post cards={cards} openedCardId={openedCardId} comment={comment} commen={commen} setComment={setComment} setCommen={setCommen} setCards={setCards} />}
    <InstaList cards={cards}  title={title} image={image} setCards={setCards} setImages={setImages} setTitle={setTitle} setOpenedCardId={setOpenedCardId}/>
    </>
  )

}

export default Instagram2