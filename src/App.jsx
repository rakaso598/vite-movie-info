import { useEffect, useState } from "react";
import { ReviewList } from "./components/ReviewList.jsx"
import { getReviews } from "./api.js"

function App() {
  const [order, setOrder] = useState('rating');
  const [items, setItems] = useState([]);

  useEffect(() => {
    handleLoad(order);
  }, [order]) // order가 변경될 때 마다 API 재요청 하도록

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewOrder = () => { setOrder('createdAt') };
  const handleBestOrder = () => { setOrder('rating') };
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id)
    setItems(nextItems);
  };

  const handleLoad = async (order) => {
    const { reviews } = await getReviews(order);
    setItems(reviews);
  }

  return (
    <>
      <div>
        <button onClick={handleNewOrder}>최신순</button>
        <button onClick={handleBestOrder}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoad}>불러오기</button>
    </>
  );
}

export default App;
