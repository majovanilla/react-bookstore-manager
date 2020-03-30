import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

// eslint-disable-next-line react/prop-types
const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
      </tr>
      <tr>
        <th>Title</th>
      </tr>
      <tr>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {Object.values(books).map(book => <Book book={book} key={book.id} />)}
    </tbody>
  </table>
);

const mapStateToProps = state => ({ books: state });


export default connect(mapStateToProps)(BooksList);
