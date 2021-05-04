import React from 'react';
import PostInfo from './PostInfo';
import CommentsList from './CommentsList';

export default function Post({
  cards, setCards, openedCardId, comment, setComment,
}) {
  const post = cards.find((card) => card.id === openedCardId);
  return (
    <div className="post">
      <PostInfo post={post} />
      <CommentsList
        post={post}
        cards={cards}
        setCards={setCards}
        comment={comment}
        setComment={setComment}
        openedCardId={openedCardId}
      />
    </div>
  );
}
