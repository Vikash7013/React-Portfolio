/* eslint-disable react/jsx-key */
const List = ({ items }) => {
  return (
    <ul className="list-disc mx-8">
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default List;
