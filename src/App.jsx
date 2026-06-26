import "./App.css";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostNew from "./pages/PostNew";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";

function App() {
  const loaded = true;
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("./data/blog.json")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setList(result);
      });
  }, []);
  const handleFetch = _id => {
    fetch("./data/blog.json")
      .then(res => res.json()) //json->object
      .then(result => {
        console.log(result);
      });
  };
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout loaded={loaded} />}>
            <Route path="/" element={<Home data={list} onClick={handleFetch} />} />
            <Route path="/Posts" element={<Posts />} />
            <Route path="/Posts/new" element={<PostNew />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
