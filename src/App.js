import React, { Component } from 'react';
import Header from './Header';
import Product from './Product';
import Suggest from './Suggest';
import More from './More';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Product/>
        <Suggest/>
        <More/>
        <Footer/>
      </div>
    );
  }
}

export default App;
