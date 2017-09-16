import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import styled from 'styled-components';
import ruLocaleData from 'react-intl/locale-data/ru';
import enLocaleData from 'react-intl/locale-data/en';
import { XsOnly } from './common/Responsive';
import Title from './common/Title';

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

const supportedLanguages = [
  { name: 'Russian Federation (₽)', value: 'ru', currency: 'RUB' },
  { name: 'United Kingdom (£)', value: 'en', currency: 'GBP' },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      localeId: 0,
      isMenuOpened: false,
      title: '',
    };
    this.handleLocalChange = this.handleLocalChange.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  handleLocalChange(id) {
    this.setState({ localeId: id });
  }

  toggleMobileMenu() {
    this.setState(prevState => ({ isMenuOpened: !prevState.isMenuOpened }));
  }

  render() {
    return (
      <IntlProvider locale={supportedLanguages[this.state.localeId].value}>
        <Router>
          <ScrollToTop>
            <div className="App">
              <Title
                title="Burberry | Iconic British Luxury Brand Est. 1856"
                content="A tradition of craftsmanship, design and innovation.
                Discover trench coats, luxury clothing,
                leather bags, cashmere scarves and more."
              />
              <Page isMenuOpened={this.state.isMenuOpened}>
                <XsOnly>
                  <MobileNavigation
                    isMenuOpened={this.state.isMenuOpened}
                    toggleMobileMenu={this.toggleMobileMenu}
                    localeId={this.state.localeId}
                    handleLocalChange={this.handleLocalChange}
                    options={supportedLanguages}
                  />
                </XsOnly>
                <Wrapper
                  isMenuOpened={this.state.isMenuOpened}
                  onClick={() =>
                    this.state.isMenuOpened && this.toggleMobileMenu()}
                >
                  <Header
                    localeId={this.state.localeId}
                    handleLocalChange={this.handleLocalChange}
                    toggleMobileMenu={this.toggleMobileMenu}
                    options={supportedLanguages}
                  />
                  <Switch>
                    <Route
                      exact
                      path="/:category/:subcategory"
                      render={props =>
                        (<List
                          {...props}
                          currency={
                            supportedLanguages[this.state.localeId].currency
                          }
                        />)}
                    />
                    <Route
                      path="/:category/:subcategory/:id"
                      render={props =>
                        (<Show
                          {...props}
                          currency={
                            supportedLanguages[this.state.localeId].currency
                          }
                        />)}
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
    );
  }
}

export default App;
