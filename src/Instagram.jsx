import React, { useState } from 'react';
import './insta.css';
import { useHistory, Switch, Route } from 'react-router-dom';
import InstagramList from './InstagramList';
import Post from './Post';
import Users from './Users';
import Registration from './Registration';
import AllCardsList from './AllCardsList';
import useLocalStorage from './hook/useLocalStorage';

function Instagram() {
  const [cards, setCards] = useLocalStorage('card', []);
  const [openedCardId, setOpenedCardId] = useState(false);
  const [comment, setComment] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [users, setUsers] = useLocalStorage('user', []);
  const [activeUser, setActiveUser] = useState({});
  const [date, setDate] = useState('');
  const history = useHistory();

  const [userCard, setUserCard] = useState('');
  console.log(users);
  return (
    <>
      <div className="logo">
        <h1 className="logo-name">Instagram</h1>
      </div>
      <div className="instagram">
        <Switch>
          <Route path="/user">
            <div>
              <button
                type="button"
                onClick={() => {
                  history.push('/');
                  setOpenedCardId(false);
                }}
              >
                Log out
              </button>
              {activeUser.id !== undefined && (
              <div className="cards">
                {openedCardId && (
                  <Post
                    cards={cards}
                    openedCardId={openedCardId}
                    comment={comment}
                    setComment={setComment}
                    setCards={setCards}
                  />
                )}
                <div>
                  <p>
                    Всего карточек:
                    {cards.filter((card) => card.userId === activeUser.id).length}
                  </p>
                  <InstagramList
                    cards={cards}
                    title={title}
                    image={image}
                    setCards={setCards}
                    setImage={setImage}
                    setTitle={setTitle}
                    setOpenedCardId={setOpenedCardId}
                    openedCardId={openedCardId}
                    activeUser={activeUser}
                    setDate={setDate}
                    date={date}
                    userCard={userCard}
                    setUserCard={setUserCard}
                  />
                </div>
              </div>
              )}
            </div>
          </Route>
          <Route path="/">
            <div className="home">
              <div className="users">
                <Registration
                  users={users}
                  setUsers={setUsers}
                  activeUser={activeUser}
                />
                <Users
                  users={users}
                  setUsers={setUsers}
                  activeUser={activeUser}
                  setActiveUser={setActiveUser}
                  cards={cards}
                  setCards={setCards}
                />
              </div>
              <AllCardsList
                cards={cards}
                setCards={setCards}
                setOpenedCardId={setOpenedCardId}
              />
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Instagram;
