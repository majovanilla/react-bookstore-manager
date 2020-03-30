import React from 'react';

const generateID = () => Math.trunc(Math.random() * 1000000000);

const BooksForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <form>
      <h2>Book Form</h2>
      <input type="hidden" name="id" value={generateID()} />
      <label htmlFor="title">
        Title:
        {' '}
        <input type="text" name="title" value="" />
      </label>
      <label htmlFor="category">
        Category:
        <select name="category">
          {
            categories.map((category, index) => {
              const categoryKey = `CATEGORY_${index}`;

              return (
                <option key={categoryKey} name={category}>
                  {category}
                </option>
              );
            })
          }
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
