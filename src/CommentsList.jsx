import React from 'react';

export default function CommentsList({
  post, cards, setCards, openedCardId, comment, setComment,
}) {
  return (
    <>
      <div className="comments-list">
        {post.comments.map((comme) => (
          <div className="comment" key={comme.id}>
            <p>{comme.text}</p>
            <button
              type="button"
              onClick={() => {
                // eslint-disable-next-line no-param-reassign
                post.comments = post.comments.filter((pos) => pos.id !== comme.id);
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
          const lastId = lastComment.id || 0;
          const newId = lastId + 1;
          post.comments.push({
            id: newId,
            text: comment,
          });
          setCards([...cards.slice(0, openedCardId - 1), post, ...cards.slice(openedCardId)]);
        }}
        >
          <input
            name="comment"
            placeholder="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </>
  );
}
