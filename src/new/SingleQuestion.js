import React, { useState } from 'react';

export default function SingleQuestion({title,info}){
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
        +</button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};