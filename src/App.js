import React from 'react';

import './App.css';
import './Counter'
import Counter from './Counter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialstate={
  count:42,
 
}
function reducer(state=initialstate,action){
  switch(action.type){
    case "increment":
      return{
        count:state.count+1
      };
      case "decrement":
        return{
          count:state.count-1
        };
      default:
      return state;
      
  }


}
const store=createStore(reducer)
console.log("amith")
store.dispatch({type:"increment"});
store.dispatch({type:"decrement"});
function App() {
  return (
    <Provider store={store}>
      <Counter  />
    </Provider>
  );
}

export default App;
