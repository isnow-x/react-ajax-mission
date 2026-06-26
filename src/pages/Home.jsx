export default function Home({ posts, onClick }) {
  return (
    <>
      <section>
        <h2>소개</h2>
        <p>React Router로 목록/상세/작성/수정/삭제를 연습하는 미션입니다.</p>
        <h3>최신 글</h3>
        {posts.map(l =>
          posts ? (
            <li key={l.id}>
              <a
                href={l.id}
                onClick={e => {
                  e.preventDefault();
                  onClick(l.id);
                }}
              >
                {l.title}
              </a>
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
