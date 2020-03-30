import React from 'react';
import PropType from 'prop-types';

const Book = props => {
  const {
    id, title, category, removeBook,
  } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <button type="submit" onClick={() => removeBook(id)}>Remove</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  id: PropType.string.isRequired,
  title: PropType.string.isRequired,
  category: PropType.string.isRequired,
  removeBook: PropType.func.isRequired,
};

export default Book;
