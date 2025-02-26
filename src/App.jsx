import { useEffect, useState } from "react";
import { ReviewList } from "./components/ReviewList";
import { getReviews } from "./api";
import { ReviewForm } from "./components/ReviewForm";
import { useAsync } from "./hooks/useAsync";
import { LocaleProvider } from "./contexts/LocaleContext";
import { LocaleSelect } from "./components/LocaleSelect";

const LIMIT = 6;

function App() {
  const [order, setOrder] = useState("createdAt");
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [loading, getReviewsAsync] = useAsync(getReviews);

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    const result = await getReviewsAsync(options);

    const { reviews, paging } = result;

    if (options.offset === 0) {
      setItems(reviews);
    } else {
      // setItems([...items, ...reviews]);
      setItems((prevItems) => [...prevItems, ...reviews]);
    }

    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = async () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  const handleSubmitSuccess = (review) => {
    setItems((prevItems) => [review, ...prevItems]);
  };

  return (
    <LocaleProvider defaultValue="ko">
      <div>
        <LocaleSelect />
        <div>
          <button onClick={handleNewestClick}>최신순</button>
          <button onClick={handleBestClick}>베스트순</button>
        </div>
        <ReviewForm onSubmitSuccess={handleSubmitSuccess} />
        <ReviewList items={sortedItems} onDelete={handleDelete} />
        {hasNext && (
          <button disabled={loading} onClick={handleLoadMore}>
            더 보기
          </button>
        )}
      </div>
    </LocaleProvider>
  );
}

export default App;
