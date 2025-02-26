import { useState } from "react";

export const ReviewForm = () => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value.toUpperCase());
  }

  const handleRatingChange = e => {
    setRating(Number(e.target.value) || 0);
  }

  const handleContentChange = e => {
    setContent(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ title, rating, content })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitleChange} />
      <input type="number" value={rating} onChange={handleRatingChange} />
      <textarea value={content} onChange={handleContentChange} />
      <button type="submit">확인</button>
    </form>
  )
}