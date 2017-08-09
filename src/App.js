import React, { Component } from 'react';
import Header from './Header/Header';
import Product from './Product/Product';
import Suggest from './Suggest/Suggest';
import More from './More/More';
import Footer from './Footer/Footer';
const linksForMore = [{href:'/',title: 'Men’s Black Trench Coats'},{href:'/',title: 'Men’s Short Trench Coats'},{href:'/',title: 'Men’s Long Trench Coats'}];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Product/>
        <Suggest/>
        <More title="More for you" links={linksForMore}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
