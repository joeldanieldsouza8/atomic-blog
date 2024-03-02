import { useState } from "react";
import usePosts from "../hooks/usePosts";

function FormAddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { dispatch } = usePosts();

  const handleAddPostSubmit = function (e: React.FormEvent) {
    e.preventDefault();

    // Guard clause
    if (!body || !title) return;

    const newPost = { title, body };

    // onAddPost({ title, body });
    dispatch({ type: "post/add", addPostPayload: newPost });

    // Clear the inputs
    setTitle("");
    setBody("");
  };

  function handleSetBody(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setBody(e.target.value);
  }

    function handleSetTitle(e: React.ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }

  return (
    <form onSubmit={handleAddPostSubmit}>
      <input
        value={title}
        onChange={handleSetTitle}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={handleSetBody}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}

export default FormAddPost;
