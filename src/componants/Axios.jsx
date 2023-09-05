import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/style.css";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1"; //Cette constante stocke l'URL de base de l'API à partir de laquelle vous allez 
//récupérer les données. 

function Axios() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
export default Axios;
