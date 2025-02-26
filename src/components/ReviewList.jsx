import { useContext } from "react";
import "./ReviewList.css"
import { LocaleContext } from "../contexts/LocaleContext";

export const ReviewList = ({ items, onDelete }) => {

  return (
    <>
      <ul>
        {items.map((item) => (
          <ReviewListItem key={item.id} item={item} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};

const formatDate = value => {
  const date = new Date(value)
  return `${date.getFullYear()} ${(date.getMonth() + 1)} ${date.getDate}`
}

const ReviewListItem = ({ item, onDelete }) => {

  const locale = useContext(LocaleContext);

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <p>현재 언어: {locale}</p>
        <button onClick={() => onDelete(item.id)}>삭제</button>
      </div>
    </div>
  )
};