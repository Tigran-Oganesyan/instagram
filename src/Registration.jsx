import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

export default function Registration({
  users, setUsers, userCard, setUserCard,
}) {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  return (
    <div className="form">
      <h3>Регистрация пользователя</h3>
      <RegistrationForm
        name={name}
        avatar={avatar}
        setName={setName}
        setAvatar={setAvatar}
        users={users}
        setUsers={setUsers}
        userCard={userCard}
        setUserCard={setUserCard}
      />
    </div>
  );
}
