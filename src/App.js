import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import RandomCatFact from './components/RandomCatFact';
import RandomCatImage from './components/RandomCatImage';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Cat Fact</h1>
        </header>
        <main>
          <RandomCatFact />
          <RandomCatImage />
        </main>
      </div>
    </Provider>
  );
}

export default App;
