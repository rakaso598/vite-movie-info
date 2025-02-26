import { useState } from "react";

export const useAsync = (asyncFunction) => {
  const [loading, setLoading] = useState(false);

  const wrappedFunction = async (...args) => {
    try {
      setLoading(true);
      return await asyncFunction(...args);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return [loading, wrappedFunction];
};
