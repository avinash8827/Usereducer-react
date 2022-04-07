import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react';

var reducerFunction = (state, action) => {
  //console.log(action.type);
  if (action.type === 'INCREMENTBYONE') {
    return state + 1;
  } else if (action.type === 'DECRIMENTBYONE') {
    return state - 1;
  } else {
    return state;
  }
}

function App() {
  const [state, setState] = useState(1);
  const [newState, dispatch] = useReducer(reducerFunction, state);
  let inc = () => {
    //  alert('hello');
    dispatch({ type: 'INCREMENTBYONE' });
  }
  let dec = () => {
    //alert('HELLO');
    dispatch({ type: 'DECRIMENTBYONE' });
  }
  return (
    <div className="App">
      <header className="App-header">
        {newState}

        <button onClick={() => { inc() }}>INCRIMENT</button>
        <button onClick={() => { dec() }}>DECRIMENT</button>
      </header>
    </div>
  );
}

export default App;
