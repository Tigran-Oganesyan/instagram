import React, { useState } from 'react';
import './insta.css';
import InstaList from './InstaList';
import Post from './Post';
import Users from './Users';

function Instagram2() {
  const [cards, setCards] = useState([]);
  const [openedCardId, setOpenedCardId] = useState(false);
  const [comment, setComment] = useState([]);
  const [commen, setCommen] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [users, setUsers] = useState([
    {
      userId:1,
      name:"Jack",
      image:'https://brewminate.com/wp-content/uploads/2016/11/JackLondon08.jpg',
    },
    {
      userId:2,
      name:"Jack",
      image:'https://brewminate.com/wp-content/uploads/2016/11/JackLondon08.jpg',
    },
  ]);
  const [openUser, setOpenUser] = useState(false);

  return (
    <div className="instagram">
      <div className="users">
        <Users 
          users={users}
          setUsers={setUsers}
          openUser={openUser}
          setOpenUser={setOpenUser}
        />
      </div>
      {openUser && (
      <div className="cards">
        {openedCardId && (
          <Post 
            cards={cards} 
            openedCardId={openedCardId} 
            comment={comment} 
            commen={commen} 
            setComment={setComment} 
            setCommen={setCommen} 
            setCards={setCards} 
          />)}
        <InstaList 
          cards={cards} 
          title={title} 
          image={image} 
          setCards={setCards} 
          setImage={setImage} 
          setTitle={setTitle} 
          setOpenedCardId={setOpenedCardId} 
        />
      </div>
       )}
    </div>
  );
}

export default Instagram2;