import { createStore } from 'redux';

const initialState = {
  count: 0
};

// This is the REDUCER, which is responsible for changing the state.
// The underlying state remains, I believe, but a new object is assigned,
// which acts as the changed state.
const reducer = (state = initialState, action) => {
  console.log("This is the REDUCER and it is running.", action);

  switch(action.type) {
    case "INCREMENT":
      return Object.assign({}, state, {count: state.count + 1})
    case "DECREMENT":
      return Object.assign({}, state, {count: state.count - 1})
    case "RESET":
      return Object.assign({}, state, {count: state.count = 0})
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
