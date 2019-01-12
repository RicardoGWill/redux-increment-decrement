// The flow of redux is as follows:
// From Component, 1) Create Action, 2) Dispatch Action,
// 3) Reducer Runs in the Store, 4) Component updates.  And the cyle continues.

import React from 'react';
import { connect } from 'react-redux';

// This is the JSX that builds the User Interface (UI).
const Counter = (props) => {
  console.log('render', props)
  return (
    <div>

      <h1>Click the buttons to Increment, Decrement, and Reset.</h1>
      <h2>Count: {props.count}</h2>
      {/* Increment button*/}
      <button onClick={props.onIncrementClick}>Increment</button>
      {/* Decrement button*/}
      <button onClick={props.onDecrementClick}>Decrement</button>
      {/* Reset Count button*/}
      <button onClick={props.onResetClick}>Reset Count</button>

    </div>
  );
};

// Note: ES5 version of a function to map the state to props.
function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    count: state.count
  }
};

// Note: ES6 version of a function to dispatch to props.
const mapDispatchToProps = (dispatch) => {
  return {

    // This is the method used to increment the number.
    onIncrementClick: () => {
      console.log('click');
      // Note: In Redux, actions are objects that have a property called "type".
      // They can have other properties as well.  Below is an action.
      const action = {
        type: 'INCREMENT'
      };
      // Actions must be "dispatched", as shown below.
      dispatch(action);
    },

    // This is the method used to decrement the number.
    onDecrementClick: () => {
      console.log('click');
      // Note: In Redux, actions are objects that have a property called "type".
      // They can have other properties as well.  Below is an action.
      const action = {
        type: 'DECREMENT'
      };
      // Actions must be "dispatched", as shown below.
      dispatch(action);
    },

    // This is the method used to decrement the number.
    onResetClick: () => {
      console.log('click');
      // Note: In Redux, actions are objects that have a property called "type".
      // They can have other properties as well.  Below is an action.
      const action = {
        type: 'RESET'
      };
      // Actions must be "dispatched", as shown below.
      dispatch(action);
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
