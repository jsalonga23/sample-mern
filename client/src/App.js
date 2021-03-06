import React, { Component } from 'react';
import AppNavbar from "./components/AppNavbar";
import ShoppingList from "./components/ShoppingList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppNavbar></AppNavbar>
        <ShoppingList></ShoppingList>
      </div>
    );
  }
}

export default App;
