export const getReviews = async () => {
  const res = await fetch("https://learn.codeit.kr/0000/film-reviews");
  const body = await res.json();
  return body;
};
