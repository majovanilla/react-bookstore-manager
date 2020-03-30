/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import Book from './Book';
import { removeBook } from '../actions/index';

// eslint-disable-next-line react/prop-types
const BooksList = props => {
  const { books, removeBook } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Remove Book?</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(books).map(book => (
          <Book
            id={book.id}
            title={book.title}
            category={book.category}
            removeBook={removeBook}
            key={book.id}
          />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
});

BooksList.propTypes = {
  // eslint-disable-next-line no-undef
  books: PropType.object.isRequired,
  removeBook: PropType.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
