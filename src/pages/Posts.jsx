export default function Posts({ posts, onClick }) {
  return (
    <>
      <section>
        <h2>글 목록</h2>
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
