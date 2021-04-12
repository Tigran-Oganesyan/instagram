/* eslint-disable react/prop-types */
import React from 'react';
import PostInfo from './PostInfo';

export default function Post({
  cards, setCards, openedCardId, commen, setCommen,
}) {
  const post = cards.find((card) => card.id === openedCardId);
  return (
    <div className="post">
      <PostInfo post={post} />
      <div className="comments_list">
        {post.comments.map((comme) => (
          <div className="comment" key={comme.comId}>
            <p>{comme.comText}</p>
            <button
              type="button"
              onClick={() => {
                post.comments = post.comments.filter((n) => n.comId !== comme.comId);
                setCards([...cards.slice(0, openedCardId - 1), post, ...cards.slice(openedCardId)]);
              }}
            >
              x
            </button>
          </div>
        ))}
        <form onSubmit={(event) => {
          event.preventDefault();
          const lastComment = post.comments[post.comments.length - 1] || {};
          const lastId = lastComment.comId || 0;
          const newId = lastId + 1;
          post.comments.push({
            comId: newId,
            comText: commen,
          });
          setCards([...cards.slice(0, openedCardId - 1), post, ...cards.slice(openedCardId)]);
        }}
        >
          <input
            name="comment"
            placeholder="comment"
            value={commen}
            onChange={(event) => setCommen(event.target.value)}
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
  );
}
