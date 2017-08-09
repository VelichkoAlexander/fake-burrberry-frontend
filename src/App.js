import React, { Component } from 'react';
import Header from './Header/Header';
import Product from './Product/Product';
import Suggest from './Suggest/Suggest';
import More from './More/More';
import Footer from './Footer/Footer';
const linksForMore = [{href:'/',title: 'Men’s Black Trench Coats'},{href:'/',title: 'Men’s Short Trench Coats'},{href:'/',title: 'Men’s Long Trench Coats'}];
const title = 'Long Cotton Gabardine Car Coat | Men - Burberry';
const description =  'Explore the full men’s collection comprising classic coats and jackets, tailoring, Heritage Trench Coats, casual weekend-wear and more';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={title} descr={description}/>
        <Product/>
        <Suggest/>
        <More title="More for you" links={linksForMore}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
