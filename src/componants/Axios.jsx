import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../assets/styles/style.css";
import axios from 'axios';
import React, { useEffect } from 'react';


// const baseURL = "https://jsonplaceholder.typicode.com/posts/1"; //Cette constante stocke l'URL de base de l'API à partir de laquelle vous allez 
//récupérer les données. 


const client= axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" ,
  timeout :1000,

});
function Axios() {
  
  const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get('?_limit=10').then((response) => {
         setPosts(response.data);
      });
   }, []);


  return (
    <div>
       <h2>All Posts </h2>
    {posts.map((post) => {
       return (
          <div className="post-card" key={post.id}>
             <h2 className="post-title">{post.title}</h2>
             <p className="post-body">{post.body}</p>
             <div className="button">
                <div className="delete-btn">Delete</div>
             </div>
          </div>
       );
    })}
    </div>
  );
}
export default Axios;
