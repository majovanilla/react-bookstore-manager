export const createBook = book => ({
  type: 'CREATE_BOOK',
  id: book.id,
  title: book.title,
  category: book.category,
});

export const removeBook = id => ({
  type: 'REMOVE_BOOK',
  id,
});

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});
