import React, { Component } from 'react';

import Header from './Header/Header';
import Product from './Product';
import Suggest from './Suggest';
import More from './More';
import Footer from './Footer';

const title = 'Long Cotton Gabardine Car Coat | Men - Burberry';
const description =  'Blending the lines between style and function, a reversible car coat in English-woven, showerproof cotton gabardine and Donegal wool tweed.';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={title} descr={description}/>
        <Product/>
        <Suggest/>
        <More/>
        <Footer/>
      </div>
    );
  }
}

export default App;
