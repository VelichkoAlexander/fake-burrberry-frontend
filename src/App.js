import React, { Component } from 'react';
import Header from './Header/Header';
import Product from './Product/Product';
import Suggest from './Suggest/Suggest';
import More from './More/More';
import Footer from './Footer/Footer';

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
