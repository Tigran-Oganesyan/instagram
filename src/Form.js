import React from 'react';

export default function Form({title,image,cards,setCards,setImages,setTitle}){
    return(
        <div className="form">
          <h3>Добавить запись</h3>
          <form onSubmit={(event) => {
            event.preventDefault();
            const lastCard= cards[cards.length - 1] || {};
            const lastId = lastCard.id || 0;
            const newId = lastId + 1;
            cards.push({
              id:newId,
              title,
              image,
              comments:[
                {
                  comId:1,
                  comText:'',
                }
              ],
            });
            setCards([...cards]);
          }}>
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
             onChange={(event) => setImages(event.target.value)}
             />
             <button type="submit">Add Card</button>
          </form>
        </div>
        )
}