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
  const [activeUser, setActiveUser] = useState({});
  const [date, setDate] = useState('');
  const history = useHistory();
  const [userCard, setUserCard] = useState('');

  return (
    <>
      <div className="logo">
        <h1 className="logo-name">Instagram</h1>
      </div>
      <div className="instagram">
        <Switch>
          <Route path="/user">
            <div>
              <p>{activeUser.name}</p>
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
                  activeUser={activeUser}
                />
                <Users
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

export default function Post({
  cards, setCards, openedCardId, comment, setComment,
}) {
  const post = cards.find((card) => card.id === openedCardId);
  return (
    <div className="post">
      <PostInfo post={post} />
      <CommentsList
        post={post}
        cards={cards}
        setCards={setCards}
        comment={comment}
        setComment={setComment}
        openedCardId={openedCardId}
      />
    </div>
  );
}

export default function PostInfo({ post }) {
    return (
      <div className="post-info" key={post.id}>
        <img className="post-img" src={post.image} alt="BigImage" />
        <h2>{post.title}</h2>
      </div>
    );
  }

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

  export default function Form({
    // eslint-disable-next-line max-len
    title, image, cards, setCards, setImage, setTitle, activeUser,
  }) {
    return (
      <div className="form">
        <h3>Добавить запись</h3>
        <form onSubmit={(event) => {
          event.preventDefault();
          const lastCard = cards[cards.length - 1] || {};
          const lastId = lastCard.id || 0;
          const newId = lastId + 1;
          const cardDate = `${
            new Date().getHours()
          } : ${
            new Date().getMinutes()
          } : ${
            new Date().getSeconds()
          }`;
          cards.push({
            id: newId,
            author: activeUser.name,
            title,
            image,
            userId: activeUser.id,
            cardDate,
            comments: [],
          });
          setCards([...cards]);
        }}
        >
          <input
            name="title"
            placeholder="New card"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            name="image"
            type="link"
            placeholder="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          <button
            type="submit"
          >
            Add Card
          </button>
        </form>
      </div>
    );
  }

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

  export default function Registration({
    userCard, setUserCard,
  }) {
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [password, setPassword] = useState('');
    return (
      <div className="form">
        <h3>Регистрация пользователя</h3>
        <RegistrationForm
          name={name}
          avatar={avatar}
          setName={setName}
          setAvatar={setAvatar}
          password={password}
          setPassword={setPassword}
          userCard={userCard}
          setUserCard={setUserCard}
        />
      </div>
    );
  }

  function RegistrationForm({
    name, avatar, setName, setAvatar, password, setPassword, addUser,
  }) {
    return (
      <div className="registration-form">
        <form
          className="registration-form"
          onSubmit={(event) => {
            event.preventDefault();
            if (avatar === '') {
              addUser({
                name,
                avatar: 'https://e7.pngegg.com/pngimages/178/595/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black.png',
                password,
              });
            } else {
              addUser({
                name,
                avatar,
                password,
              });
            }
          }}
        >
          <input
            className="input"
            name="name"
            placeholder="new user"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="input"
            name="avatar"
            type="link"
            placeholder="avatar"
            value={avatar}
            onChange={(event) => setAvatar(event.target.value)}
          />
          <input
            className="input"
            name="password"
            type="text"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="accept-button">Accept</button>
        </form>
      </div>
    );
  }
  export default connect(
    (store) => ({
      users: store.users,
    }),
    (dispatch) => ({
      addUser(payload) {
        dispatch({
          type: 'ADD_USER',
          payload,
        });
      },
    }),
  )(RegistrationForm);

  function Users(props) {
    const {
      users, setActiveUser, setCards, cards, activeUser, deleteUsers, // loadUsers,
    } = props;
    const [search, setSearch] = useState('');
    const history = useHistory();
    const [openPasswordForm, setOpenPasswordForm] = useState(false);
    const [activePassword, setActivePassword] = useState('');
  
    const handleChange = (event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };
  
    if (search.length > 0) {
      // eslint-disable-next-line no-param-reassign
      // users = users.filter((i) => i.name.match(search));
    }
    useEffect(() => {

    });
  
    return (
      <div className="search">
        {openPasswordForm
          && (
          <div className="password-form">
            <div className="password">
              <input
                className="input"
                name="password"
                type="password"
                placeholder="password"
                value={activePassword}
                onChange={(event) => setActivePassword(event.target.value)}
              />
              <button
                type="button"
                onClick={() => setOpenPasswordForm(false)}
              >
                x
              </button>
              <button
                type="button"
                onClick={() => {
                  if (activePassword === activeUser.password) {
                    history.push('/user');
                  } else {
                    alert('Неверный пароль!!! попробуйте снова');
                  }
                }}
              >
                log
              </button>
            </div>
          </div>
          )}
        <p>
          Всего пользователей:
          <span className="count">{users.length}</span>
        </p>
        <input
          className="search-form"
          type="text"
          placeholder="search"
          onChange={handleChange}
          value={search}
        />
        <div className="users-accounts">
          {users.map((user) => (
            <div className="user-account" key={user.id}>
              <div className="user-info">
                <img className="user-image" src={user.avatar} alt="Avatar" />
                <h3>{user.name}</h3>
              </div>
              <button
                className="users-button"
                type="button"
                onClick={() => {
                  setActiveUser(user);
                  setOpenPasswordForm(user.id);
                }}
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => {
                  // setUsers(users.filter((us) => us.id !== user.id));
                  deleteUsers(users.filter((us) => us.id !== user.id));
                  setCards(cards.filter((card) => card.userId !== user.id));
                }}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default connect(
    (store) => ({
      users: store.users,
    }),
    (dispatch) => ({
      loadUsers(payload) {
        dispatch({
          type: 'LOAD_USERS',
          payload,
        });
      },
      deleteUsers(payload) {
        dispatch({
          type: 'DELETE_USERS',
          payload,
        });
      },
    }),
  )(Users);

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