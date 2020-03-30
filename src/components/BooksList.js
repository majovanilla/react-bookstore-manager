import React from 'react';
import { connect } from 'redux';

const BooksList = () => (
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

const mapStateToProps = state => state.books;

export default connect(mapStateToProps)(BooksList);
