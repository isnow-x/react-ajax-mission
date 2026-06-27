import { Link } from "react-router";

export default function Home({ posts, onClick }) {
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);
  return (
    <>
      <section>
        <h2>소개</h2>
        <p>React Router로 목록/상세/작성/수정/삭제를 연습하는 미션입니다.</p>
        <h3>최신 글</h3>
        {latestPosts.map(l =>
          posts ? (
            <li key={l.id}>
              <Link
                to={`/posts/${l.id}`}
                onClick={() => {
                  onClick(l.id);
                }}
              >
                {l.title}
              </Link>
              {` (${l.createdAt})`}
            </li>
          ) : (
            <p>글이 없습니다</p>
          ),
        )}
      </section>
    </>
  );
}
