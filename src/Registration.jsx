import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

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
