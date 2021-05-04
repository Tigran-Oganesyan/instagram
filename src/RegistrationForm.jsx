import React from 'react';

export default function RegistrationForm({
  name, avatar, setName, setAvatar, users, setUsers,
}) {
  return (
    <div className="registration-form">
      <form
        className="registration-form"
        onSubmit={(event) => {
          event.preventDefault();
          const lastUser = users[users.length - 1] || {};
          const lastId = lastUser.id || 0;
          const newId = lastId + 1;
          users.push({
            id: newId,
            name,
            avatar,
            userCards: [],
          });
          setUsers([...users]);
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
        <button type="submit" className="accept-button">Accept</button>
      </form>
    </div>
  );
}
