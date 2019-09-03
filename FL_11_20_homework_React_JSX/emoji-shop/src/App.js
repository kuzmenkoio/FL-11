import React, {Component} from 'react';
import './App.css';
import Promotion from './components/Promotion/Promotion.component'

class App extends React.Component {
  render () {
    return <div className="App">
              <h1>Emoji Shop</h1>
              <Promotion />
          </div>
  };
}

export default App;
