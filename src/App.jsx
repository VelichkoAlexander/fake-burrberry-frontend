import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ruLocaleData from 'react-intl/locale-data/ru';
import enLocaleData from 'react-intl/locale-data/en';
import { XsOnly } from './common/Responsive';

import Header from './Header';
import MobileNavigation from './MobileNavigation';
import Show from './Products/Show';
import List from './Products/List';
import Footer from './Footer';
import ScrollToTop from './common/ScrollToTop';

addLocaleData([...ruLocaleData, ...enLocaleData]);

const Page = styled.div`
  overflow: ${props => (props.isMenuOpened ? 'hidden' : 'visible')};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${props =>
    props.isMenuOpened &&
    `
    height: 100vh;
    overflow: hidden;
    transform: translateX(274px);
    `} &::after {
    content: '';
    position: absolute;
    display: ${props => (props.isMenuOpened ? 'block' : 'none')};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #transparent;
    z-index: 9999;
  }
`;

const initialState = {
  lang: [
    { name: 'Russian Federation (₽)', value: 'ru', currency: 'RUB' },
    { name: 'United Kingdom (£)', value: 'en', currency: 'GBP' },
  ],
  localeId: 0,
};

function dataTransfer(state = initialState, action) {
  if (action.type === 'ADD_LOCALE_ID') {
    const newState = state;
    newState.localeId = action.payload;

    return {
      ...state,
      newState,
    };
  }
  return state;
}
const store = createStore(dataTransfer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpened: false,
      title: '',
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState(prevState => ({ isMenuOpened: !prevState.isMenuOpened }));
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider
          locale={store.getState().lang[store.getState().localeId].value}
        >
          <Router>
            <ScrollToTop>
              <div className="App">
                <Helmet>
                  <title>
                    Burberry | Iconic British Luxury Brand Est. 1856
                  </title>
                  <meta
                    name="description"
                    content="A tradition of craftsmanship, design and innovation.
                Discover trench coats, luxury clothing,
                leather bags, cashmere scarves and more."
                  />
                </Helmet>
                <Page isMenuOpened={this.state.isMenuOpened}>
                  <XsOnly>
                    <MobileNavigation
                      isMenuOpened={this.state.isMenuOpened}
                      toggleMobileMenu={this.toggleMobileMenu}
                    />
                  </XsOnly>
                  <Wrapper
                    isMenuOpened={this.state.isMenuOpened}
                    onClick={() =>
                      this.state.isMenuOpened && this.toggleMobileMenu()}
                  >
                    <Header toggleMobileMenu={this.toggleMobileMenu} />
                    <Switch>
                      <Route
                        exact
                        path="/:category/:subcategory"
                        render={props => <List {...props} />}
                      />
                      <Route
                        path="/:category/:subcategory/:id"
                        render={props => <Show {...props} />}
                      />
                      <Redirect from="/" to="/men/suits" />
                    </Switch>
                    <Footer />
                  </Wrapper>
                </Page>
              </div>
            </ScrollToTop>
          </Router>
        </IntlProvider>
      </Provider>
    );
  }
}

export default App;
