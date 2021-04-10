/* eslint-disable react/prop-types */
import React from 'react';

export default function PostInfo({ post }){
  
    return (
        <div className="post_info" key={post.id}>
          <img className="post_img" src={post.image}></img>
          <h2>{post.title}</h2>
        </div>
    )
}
