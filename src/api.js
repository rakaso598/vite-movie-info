export const getReviews = async ({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) => {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const res = await fetch(`https://learn.codeit.kr/0000/film-reviews?${query}`);
  const body = await res.json();
  return body;
};
