export const ReviewList = ({ items }) => {


  return (
    <>
      <ul>
        {items.map(item => (
          <li>{item.title}</li>
        ))}
      </ul>
    </>
  );
};
