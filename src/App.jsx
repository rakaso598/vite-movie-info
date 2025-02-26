import { useState } from "react";
import { ReviewList } from "./components/ReviewList.jsx"
import { getReviews } from "./api.js"

function App() {
  const [order, setOrder] = useState('rating');
  const [items, setItems] = useState([]);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewOrder = () => { setOrder('createdAt') };
  const handleBestOrder = () => { setOrder('rating') };
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id)
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    const { reviews } = await getReviews()
    setItems(reviews);
  }

  return (
    <>
      <div>
        <button onClick={handleNewOrder}>최신순</button>
        <button onClick={handleBestOrder}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </>
  );
}

export default App;
