import React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';

import Header from './Header';
import Product from './Product';
import Suggest from './Suggest';
import More from './More';
import Footer from './Footer';

export default () => {
  const App = styled.div`
    font-size: 16px;
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `;
  return (
    <App>
      <Helmet>
        <title>Long Cotton Gabardine Car Coat | Men - Burberry</title>
        <meta name="description" content="Long Cotton Gabardine Car Coat"/>
      </Helmet>
      <Header/>
      <Product/>
      <Suggest/>
      <More/>
      <Footer/>
    </App>
  );
}
