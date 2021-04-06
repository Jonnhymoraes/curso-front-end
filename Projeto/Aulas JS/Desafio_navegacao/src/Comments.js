import {useEffect, useState} from "react";
import React from "react";
import "./App.css";
import axios from "axios";
import Comment from "./Comment";

const Comments = () => {
    const [post, setPosts] = useState([]);

  const getPosts = async () => {
    const { data: post } = await axios.get(
      "http://jsonplaceholder.typicode.com/comments"
    );
    setPosts(post);
    console.log("Chamou getPosts");
  };

  useEffect(() => {
    getPosts();
  }, []);
    
  if(post.lenght === 0){
        return (<h1>Comentários</h1>)
    }
  
    return (
    <div>
        <h1>Comentários</h1>
        {post.map((post) =>{
            return (
            <div key = {post.id}>{Comment(post)}</div>
            )
        }
        )}
    </div>
  );
};

export default Comments;