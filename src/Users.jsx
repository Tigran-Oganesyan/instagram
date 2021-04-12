/* eslint-disable react/prop-types */
import React from 'react';

export default function Users({ users, openUser, setOpenUser }) {
  return (
    <div>
      {users.map((user) => (
        <div className="user-account" key={user.userId}>
          <img className="user-image" src={user.image} alt="" />
          <h3>{user.name}</h3>
          <button
            type="button"
            onClick={() => setOpenUser(!openUser)}
          >
            Open
          </button>
        </div>
      ))}
    </div>
  );
}
