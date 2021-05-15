/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Users({
  users, setUsers, setActiveUser, setCards, cards, activeUser,
}) {
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
    users = users.filter((i) => i.name.match(search));
  }

  return (
    <div className="search">
      {openPasswordForm
        && (
        <div className="password-form">
          <div className="password">
            <input
              className="input"
              name="password"
              type="text"
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
                setUsers(users.filter((us) => us.id !== user.id));
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
