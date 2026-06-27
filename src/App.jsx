import "./App.css";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostNew from "./pages/PostNew";
import Layout from "./components/Layout";
import PostDetail from "./pages/PostDetail";
import PostEdit from "./pages/PostEdit";
import { useEffect, useState } from "react";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("./data/blog.json")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setPosts(result);
        setLoaded(true);
      });
  }, []);
  const handleFetch = _id => {
    fetch("./data/blog.json")
      .then(res => res.json()) //json->object
      .then(result => {
        console.log(result);
      });
  };
  const handleUpdate = (id, updatePost) => {
    setPosts(posts.map(post => (post.id === Number(id) ? { ...post, ...updatePost } : post)));
  };
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout loaded={loaded} />}>
            <Route path="/" element={<Home posts={posts} onClick={handleFetch} />} />
            <Route path="/posts" element={<Posts posts={posts} onClick={handleFetch} />} />
            <Route path="/posts/:id" element={<PostDetail posts={posts} onClick={handleFetch} />} />
            <Route
              path="/posts/:id/edit"
              element={<PostEdit posts={posts} onUpdate={handleUpdate} />}
            />
            <Route path="/posts/new" element={<PostNew />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
