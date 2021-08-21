import React, { useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Javascript - язык программирования" },
    { id: 2, title: "Java", body: "Java - язык программирования" },
    { id: 3, title: "C++", body: "C++ - язык программирования" }
  ])

  return (
    <div className="App">
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
