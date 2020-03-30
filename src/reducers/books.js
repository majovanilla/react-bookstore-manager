const bookReducerFactory = initialState => (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      const book = {
        id: action.id,
        title: action.title,
        category: action.category,
      };

      const nextBooks = { ...state };
      nextBooks[action.id] = book;

      return nextBooks;
    }

    case 'REMOVE_BOOK': {
      const nextBooks = { ...state };
      delete nextBooks[action.id];
      return nextBooks;
    }

    default:
      return state;
  }
};

export default bookReducerFactory;
