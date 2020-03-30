const bookReducerFactory = initialState => (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK': {
      const book = {
        id: action.id,
        title: action.title,
        category: action.category,
      };

      const nextBooks = { ...state.books }
      nextBooks[action.id] = book;

      const nextState = { ...state, books: nextBooks };
      return nextState;
    }

    case 'REMOVE_BOOK': {
      const nextBooks = { ...state.books };
      delete nextBooks[action.id];

      const nextState = { ...state, books: nextBooks };
      return nextState;
    }

    default:
      return state;
  }
};

export default bookReducerFactory;
