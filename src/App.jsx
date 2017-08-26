import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ruLocaleData from 'react-intl/locale-data/ru';
import enLocaleData from 'react-intl/locale-data/en';
import { IntlProvider, addLocaleData } from 'react-intl';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';

import Show from './Products/Show';
import List from './Products/List';
import Footer from './Footer';
import ScrollToTop from './common/ScrollToTop';

addLocaleData([...ruLocaleData, ...enLocaleData]);

// Detect preferred language
const supportedLanguages = ['en', 'ru'];
let language = 'en';
if (navigator.languages) {
  for (let i = 0; i < navigator.languages.length; i += 1) {
    const lang = navigator.languages[i].toLowerCase();
    if (supportedLanguages.includes(lang)) {
      language = lang;
      break;
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { local: language };
    this.handelLocalChange = this.handelLocalChange.bind(this);
  }

  handelLocalChange(e) {
    this.setState(() => ({ local: e }));
  }

  render() {
    return (
      <IntlProvider locale={this.state.local}>
        <Router>
          <ScrollToTop>
            <div className="App">
              <Helmet>
                <title>Men’s Clothing | Burberry</title>
                <meta
                  name="description"
                  content="Shop from the current men’s clothing collection.
                       Sartorial suits, shirts and trousers feature as well as casual T-shirts,
                        polos and jeans."
                />
              </Helmet>
              <Header
                local={this.state.local}
                hendelLocal={this.handelLocalChange}
              />

              <Route exact path="/" component={List} />
              <Route exact path="/mens-clothing" component={List} />
              <Route path="/mens-clothing/:categoryName/:id" component={Show} />
              <Footer />
            </div>
          </ScrollToTop>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
