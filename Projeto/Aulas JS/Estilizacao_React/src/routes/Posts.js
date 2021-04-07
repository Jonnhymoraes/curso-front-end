/* import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getPosts } from "../service/posts";
import "../styles/Posts.css";

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
    <div id = "posts-container">
      <h1 id = "posts-title">Posts</h1>
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
          <div key={post.id} className = "post-container">
            <h3 className = "post-title">{post.title}</h3>
            <p className = "post-body">{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts; */

///////////////////////////////////////////////////////
//  COM LIBS  //

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getPosts } from "../service/posts";
import {Container} from "../styles/default";
import { TextField, Button } from "@material-ui/core";

import { PostContainer, PostTitle, PostBody, Form } from "../styles/Posts";


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
    <Container>
      <h1>Posts</h1>
      <div>
        <h3>Buscar Posts</h3>
        <Form onSubmit= {handleSubmit(onSubmit)}>
          <TextField 
          inputProps = {{ ref: register, name: "searchText" }}
          Label="" 
          variant="outlined" 
          margin="dense">
          </TextField>
          <Button type = "submit" variant = "contained" color = "primary">
            Buscar 
          </Button>
        </Form>
      </div>
      <Button onClick={refreshPostList} variant = "contained">Atualizar</Button>
      {posts.map((post) => {
        return (
          <PostContainer key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
          </PostContainer>
        );
      })}
    </Container>
  );
};

// ---------- ESTILIZAÇÃO ----------- //

/* const Container = styled.div`
  margin: 50px;
`; */

/* const NewContainer = styled(Container)`
    border: 1px solid gray;
`; */

/* const PostContainer = styled.div`
    border: 1px solid gray;
    border-radius: 4px;
    margin: 10px 0px;
    padding: 8px;
`;

const PostTitle = styled.h3`
    color: darkblue;
`;

const PostBody = styled.p`
   color: gray;
`;
 */
// --------------------------------- //

export default Posts;

