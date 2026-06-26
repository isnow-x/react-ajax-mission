import { Routes, Route, Link } from "react-router";
import PostDetail from "./PostDetail";

export default function Posts({ posts, onClick }) {
  return (
    <>
      <section>
        <h2>글 목록</h2>
        {posts.map(l =>
          posts ? (
            <li key={l.id}>
              <Link
                to={`/posts/${l.id}`}
                onClick={e => {
                  onClick(l.id);
                }}
              >
                {l.title}
              </Link>
              {` ${l.createdAt}`}
            </li>
          ) : (
            <p>글이 없습니다</p>
          ),
        )}
      </section>
    </>
  );
}
