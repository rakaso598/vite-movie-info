import { useState } from "react";

export const useAsync = (asyncFunction) => {
  const [loading, setLoading] = useState; // 다른 Hook안에서 Hook을 사용하는 케이스

  const wrappedFunction = async (...args) => {
    try {
      setLoading(true);
      return asyncFunction(...args);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return [loading, wrappedFunction];
};
