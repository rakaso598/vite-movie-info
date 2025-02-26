import { useEffect, useState } from "react";
import { ReviewList } from "./components/ReviewList.jsx";
import { getReviews } from "./api.js";

const LIMIT = 6;

function App() {
  const [order, setOrder] = useState("rating");
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // 에러 상태 추가

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  const handleNewOrder = () => {
    setOrder("createdAt");
  };

  const handleBestOrder = () => {
    setOrder("rating");
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadMore = async () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  const handleLoad = async (options) => {
    setLoading(true);
    setError(null); // 에러 초기화
    try {
      const { reviews, paging } = await getReviews(options);

      if (options.offset === 0) {
        setItems(reviews);
      } else {
        setItems((prevItems) => [...prevItems, ...reviews]);
      }

      setOffset(options.offset + reviews.length);
      setHasNext(paging.hasNext);
    } catch (e) {
      console.error(e);
      setError("데이터를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <button onClick={handleNewOrder}>최신순</button>
        <button onClick={handleBestOrder}>베스트순</button>
      </div>
      {error && <div>{error}</div>} {/* 에러 메시지 표시 */}
      <ReviewList items={items} onDelete={handleDelete} />
      {hasNext && (
        <button disabled={loading} onClick={handleLoadMore}>
          더보기
        </button>
      )}
    </>
  );
}

export default App;