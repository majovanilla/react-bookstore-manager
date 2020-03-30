
const createBook = ({ id, title,  category }) => ({
  type: 'CREATE_BOOK',
  id,
  title,
  category,
});

const removeBook = ({ id }) => ({
  type: 'REMOVE_BOOK',
  id,
});
