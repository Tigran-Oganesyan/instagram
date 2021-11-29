import { createStore, combineReducers } from 'redux';
// import { users } from './Instagram';

// const data = () => ({
//   type: 'allUsers/data',
//   payload: users,
// });

const initialStore = JSON.parse(localStorage.getItem('store') || '{}');
const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USERS': {
      return action.payload;
    }
    case 'ADD_USER': {
      const lastUser = state[state.length - 1] || {};
      const lastId = lastUser.id || 0;
      const newId = lastId + 1;
      return [
        ...state,
        {
          ...action.payload,
          id: newId,
        },
      ];
    }
    case 'DELETE_USERS': {
      return [
        ...action.payload,
      ];
    }
    default:
      return state;
  }
};
const store = createStore(combineReducers({
  users: usersReducer,
}), initialStore);
store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});

export default store;
