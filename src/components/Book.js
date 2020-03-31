import React from 'react';
import PropType from 'prop-types';

const Book = props => {
  const {
    id, title, category, removeBook,
  } = props;
  return (
    <tr className="book-row">
      <td className="book-id">{id}</td>
      <td className="book-category">{category}</td>
      <td className="book-title">{title}</td>
      <td>
        <button className="book-remove" type="submit" onClick={() => removeBook(id)}>Remove</button>
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
