import React from 'react';
import Redux from 'redux';
import 

const BooksList = () => {

  const mapStateToProps = (state) => {
    books: state.books
  }

  return (
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
    </table>
  );
};

export default BooksList;