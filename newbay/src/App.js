import React from 'react';
import './App.css';
import Item from './components/Item';
import ItemsContainer from './components/ItemsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello </p>
        {/* <Item></Item> */}
        <ItemsContainer></ItemsContainer>
      </header>
    </div>
  );
}

export default App;
