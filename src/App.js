import logo from './logo.svg';
import './App.css';
import { Provider } from 'mobx-react'
import stores from './stores'
import React, { Component } from 'react'
import Botoom from './component/buttom';

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
            <Botoom></Botoom>
          </header>
        </div>
      </Provider>
    )
  }
}


export default App;
