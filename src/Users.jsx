/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

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
    // if (users.length === 0) {
    //   loadUsers([{
    //     id: 1,
    //     author: 'Max',
    //     title: '21',
    //     image: '',
    //     userId: 1,
    //     cardDate: '1 : 16 : 18',
    //     comments: [],
    //   }]);
    // }
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
