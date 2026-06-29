import "./App.css";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";

function App() {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // let alive = true; // 상품조회 시작
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch("/data/blog.json", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("메시지");
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.error(e);
        setPost([]); // 에러시 목록 비움
      } finally {
        setLoaded(true);
      }
    }
    fetchData();

    return () => {
      // alive = false;
      controller.abort();
    }; //정리함수
  }, []);

  console.log(posts);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="post/:id" element={<PostDetail posts={posts} />} />
          {/* <Route path="*" element={<NotFound />}/> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
