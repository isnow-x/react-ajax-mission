import { Link, useNavigate, useParams } from "react-router";
import { useState } from "react";

export default function PostEdit({ posts, onClick, onUpdate }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  const [content, setContent] = useState({
    title: post.title,
    content: post.content,
  });

  const handleChange = e => {
    const { name, value } = e.target;

    setContent({
      ...content,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  return (
    <>
      <div>
        <h2>글 수정</h2>
        <form
          action=""
          onSubmit={e => {
            e.preventDefault();
            onUpdate(id, content);
            navigate(`/posts/${id}`);
          }}
        >
          <div>
            <label htmlFor="title">title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={content.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="content">desc</label>
            <textarea
              name="content"
              id="content"
              value={content.content}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">수정 완료</button>
        </form>
      </div>
    </>
  );
}
