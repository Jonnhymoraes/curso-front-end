import "./App.css";
import React from "react";

const Comment = (post) => {
    
  return ( 
      <div key = {post.id}>
            <h3>{post.name}</h3>
            <h3>{post.email}</h3>
            <p>{post.body}</p>
        </div>
  )
 }

export default Comment;