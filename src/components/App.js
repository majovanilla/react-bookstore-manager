import React from 'react';
import Header from './Header';
import BooksList from './BooksList';
import BooksForm from './BooksForm';

function App() {
  return (
    <div className="App">
      <Header />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
