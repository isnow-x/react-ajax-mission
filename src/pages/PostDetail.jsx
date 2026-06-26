import { useParams } from "react-router";

export default function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.createdAt}</p>
      <p>{post.content}</p>
    </div>
  );
}
