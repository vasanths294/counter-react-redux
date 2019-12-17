import React from 'react';
import './App.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
 
const intialState = {
  count: 40
}

function reducer(state = intialState, action) {
  switch (action.type){

    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
        return {
          count: state.count - 1
        };
    default:
      return state;
  }
}

const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

class App extends React.Component {

render() {
    return (
      <Provider store = {store}> 
        <div className="App-header"> 
          hello
          <Counter />
        </div>
      </Provider>
    );
    }
}

export default App;
