import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions';

const Book = ({ book, removeBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button onClick={() => removeBook(book.id)}>Remove</button>
    </td>
  </tr>
);

const mapDispatchToProps = (dispatch) => ({
  removeBook: (id) => {
    dispatch(removeBook(id));
  }
});

export default connect(null, mapDispatchToProps)(Book);
