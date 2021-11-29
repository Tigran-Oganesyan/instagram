import React from 'react';
import { connect } from 'react-redux';

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
