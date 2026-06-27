import { useNavigate } from "react-router";
import { useState } from "react";

export default function PostNew({ onCreate }) {
  const [content, setContent] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;

    setContent({
      ...content,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>글 작성</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          const newId = onCreate(content);
          navigate(`/posts/${newId}`);
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

        <button type="submit">등록</button>
      </form>
    </div>
  );
}
