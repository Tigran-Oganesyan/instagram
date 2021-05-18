import React from 'react';

export default function PostInfo({ post }) {
  return (
    <div className="post-info" key={post.id}>
      <img className="post-img" src={post.image} alt="BigImage" />
      <h2>{post.title}</h2>
    </div>
  );
}
