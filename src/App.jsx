import { ReviewList } from "./components/ReviewList.jsx"
import items from "./mock.json"

function App() {
  return <div>
    <ReviewList items={items} />
  </div>;
}

export default App
