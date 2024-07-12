import { useState, useEffect } from "react";

import axios from 'axios';

import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {

  const [post, setPost] = useState([]);

  const getPosts = async()=>{
    try {
      const response = axios.get('https://jsonplaceholder.typicode.com/posts');
      
      const data = (await response).data;
      console.log(data);
    } catch(error){
        console.log(error);
    };
  };

  useEffect(()=>{
    getPosts();
  }, []);

  return (
    <div>Home</div>
  );
};

export default Home;