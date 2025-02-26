export const getReviews = async ({
  order = "createdAt",
  offset = 0,
  limit = 6,
}) => {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const res = await fetch(`https://learn.codeit.kr/1111/film-reviews?${query}`);
  const body = await res.json();
  return body;
};

export const createReview = async (formData) => {
  const res = await fetch("https://learn.codeit.kr/1111/film-reviews", {
    method: "POST",
    body: formData,
  });
  const body = await res.json();
  console.log(body);
  return body;
};
