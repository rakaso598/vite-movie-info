import { useState } from "react";
import { FileInput } from "./FileInput.jsx";

export const ReviewForm = ({ onReviewSubmit }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [imgFile, setImgFile] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value.toUpperCase());
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value) || 0);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (files) => {
    setImgFile(files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, rating, content, imgFile });
    onReviewSubmit({ title, rating, content, imgFile, id: Date.now() });
    setTitle("");
    setRating(0);
    setContent("");
    setImgFile(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitleChange} />
      <FileInput onChange={handleFileChange} />
      <input type="number" value={rating} onChange={handleRatingChange} />
      <textarea value={content} onChange={handleContentChange} />
      <button type="submit">확인</button>
    </form>
  );
};