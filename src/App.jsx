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
const supportedLanguages = [
  { name: 'Russian Federation (₽)', value: 'ru' },
  { name: 'United Kingdom (£)', value: 'en' },
];


class App extends Component {
  constructor() {
    super();
    this.state = { localeId: 0 };
    this.handleLocalChange = this.handleLocalChange.bind(this);
  }

  handleLocalChange(id) {
    this.setState({ localeId: id });
  }

  render() {
    return (
      <IntlProvider locale={supportedLanguages[this.state.localeId].value}>
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
                localeId={this.state.localeId}
                handleLocalChange={this.handleLocalChange}
                options={supportedLanguages}
              />

              <Route exact path="/" component={List} />
              <Route exact path="/mens-clothing" component={List} />
              <Route path="/mens-clothing/:categoryName/:id" component={Show} />
              <Footer
                local={this.state.local}
                hendelLocal={this.handleLocalChange}
              />
            </div>
          </ScrollToTop>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
