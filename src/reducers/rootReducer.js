import bookReducer from './books';
import filterReducer from './filter';

const initialState = {
  books: {
    1: {
      id: '1',
      title: 'Learning Physics',
      category: 'Learning',
    },
    2: {
      id: '2',
      title: 'Believers',
      category: 'Action',
    },
    3: {
      id: '3',
      title: 'Moby Dick',
      category: 'Sci-Fi',
    },
  },
  filter: 'All',
};

const rootReducer = (state = initialState, action) => {
  let nextState = null;
  nextState = bookReducer(state, action);
  nextState = filterReducer(nextState, action);
  return nextState;
};

export default rootReducer;
