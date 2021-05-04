import React from 'react';

export default function Form({
  // eslint-disable-next-line max-len
  title, image, cards, setCards, setImage, setTitle, activeUser, setDate, date, setUserCard, userCard,
}) {
  return (
    <div className="form">
      <h3>Добавить запись</h3>
      <form onSubmit={(event) => {
        event.preventDefault();
        const lastCard = cards[cards.length - 1] || {};
        const lastId = lastCard.id || 0;
        const newId = lastId + 1;
        cards.push({
          id: newId,
          author: activeUser.name,
          title,
          image,
          userId: activeUser.id,
          cardDate: date,
          comments: [
            {
              id: 1,
              text: '',
            },
          ],
        });
        setCards([...cards]);
        activeUser.userCards.push(userCard);
        setUserCard([...activeUser.userCards]);
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
          onClick={() => {
            const curDate = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
            setDate(curDate);
          }}
        >
          Add Card
        </button>
      </form>
    </div>
  );
}
