import { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollToTop extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    return this.props.children;
  }
}

export default ScrollToTop;

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
};

ScrollToTop.defaultProps = {
  children: '',
};
