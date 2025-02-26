export const getReviews = async (order = "createdAt") => {
  const query = `order=${order}`;
  const res = await fetch(`https://learn.codeit.kr/0000/film-reviews?query`);
  const body = await res.json();
  return body;
};
