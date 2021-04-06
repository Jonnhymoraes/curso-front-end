/* FORMULARIO SEM LIBS

import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [originalPosts, setOriginalPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const[searchText, setSearchText] = useState("");

  const getPosts = async () => {
    const { data: posts } = await axios.get(
      "http://jsonplaceholder.typicode.com/posts"
    );
    setOriginalPosts(posts);
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleSubmit = (event) => {
      event.preventDefault();
      const filteredPosts = originalPosts.filter((post) => {
        return post.title.includes(searchText);
      });
      setPosts(filteredPosts);
  };

  const onChangeSearchText = (event) => {
      setSearchText(event.target.value);
  };

  const refreshPostList = () => {
    setSearchText("");
    getPosts();
  }

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <h3>Buscar Posts</h3>
        <form onSubmit= {handleSubmit}>
          <input type = "text" 
          value={searchText} 
          onChange={onChangeSearchText} />
          <input type = "submit" value = "Buscar"/>
        </form>
      </div>
      <button onClick={refreshPostList}>Atualizar</button>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
 */

//FORMULARIO COM LIBS

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getPosts } from "../service/posts";

const Posts = () => {
  const { register, handleSubmit, setValue } = useForm();

  const [originalPosts, setOriginalPosts] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const { data: posts } = await getPosts();
    setOriginalPosts(posts);
    setPosts(posts);
    } catch(error) {
      toast.error("Ops! Algo deu errado!");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const onSubmit = (data) => {
      const filteredPosts = originalPosts.filter((post) => {
        return post.title.includes(data.searchText);
      });
      setPosts(filteredPosts);
      toast.success("Busca realizada com sucesso!");
  };

  const refreshPostList = () => {
    setValue("searchText", "");
    fetchPosts();
  }

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <h3>Buscar Posts</h3>
        <form onSubmit= {handleSubmit(onSubmit)}>
          <input name="searchText" type = "text" ref={register} />
          <input type = "submit" value = "Buscar"/>
        </form>
      </div>
      <button onClick={refreshPostList}>Atualizar</button>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;


