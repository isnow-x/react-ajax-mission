import { Link, useParams } from "react-router";

export default function PostDetail({ posts, onClick }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));
  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>{post.createdAt}</p>
        <p>{post.content}</p>
        <div>
          <Link to={`/posts/${post.id}/edit`}>수정하기</Link>
          <button>삭제하기</button>
        </div>
      </div>
    </>
  );
}
