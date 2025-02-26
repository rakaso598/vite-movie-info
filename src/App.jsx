import { useEffect, useState } from "react";
import { ReviewList } from "./components/ReviewList.jsx"
import { getReviews } from "./api.js"

const LIMIT = 6; // 페이지네이션

function App() {
  const [order, setOrder] = useState('rating');
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]) // order가 변경될 때 마다 API 재요청하는 동작

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewOrder = () => { setOrder('createdAt') };
  const handleBestOrder = () => { setOrder('rating') };
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id)
    setItems(nextItems);
  };
  const handleLoadMore = async () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  const handleLoad = async (options) => {
    const { reviews } = await getReviews(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }

    setOffset(options.offset + reviews.length);

  }

  return (
    <>
      <div>
        <button onClick={handleNewOrder}>최신순</button>
        <button onClick={handleBestOrder}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadMore}>더보기</button>
      <button onClick={handleLoad}>불러오기</button>
    </>
  );
}

export default App;
