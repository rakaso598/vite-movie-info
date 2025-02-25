export const ReviewList = ({ items }) => {


  return (
    <>
      <ul>
        <li>{items.map(item => <li>{item.title}</li>)}</li>
      </ul>
    </>
  );
};
