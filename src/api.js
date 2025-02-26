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

export const createReview = async (formData) => {
  const res = await fetch("https://learn.codeit.kr/0000/film-review", {
    method: "POST",
    body: formData,
  });
  const body = await res.json();
  return body;
};
