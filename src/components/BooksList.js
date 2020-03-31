/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';
import Book from './Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from './CategoryFilter';

// eslint-disable-next-line react/prop-types
const BooksList = props => {
  const {
    books, filter, removeBook, changeFilter,
  } = props;

  const handleFilterChange = value => {
    changeFilter(value);
  };

  const filterBooks = () => {
    const booksArray = Object.values(books);

    if (filter === 'All Categories') {
      return booksArray;
    }

    return booksArray.filter(book => book.category === filter);
  };

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
          {filterBooks().map(book => (
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
    </div>
  );
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: id => {
    dispatch(removeBook(id));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

BooksList.propTypes = {
  // eslint-disable-next-line no-undef
  books: PropType.object.isRequired,
  filter: PropType.string.isRequired,
  removeBook: PropType.func.isRequired,
  changeFilter: PropType.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
