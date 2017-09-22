import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SizeButton from './SizeButton';

const Current = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const Help = styled.button`
  display: flex;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  text-transform: uppercase;
  color: #171717;
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media only screen and (min-width: 48rem) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const Name = styled.span`font-weight: 700;`;

class Size extends Component {
  constructor(props) {
    super(props);
    this.state = { selectSizeIndex: 0 };
    this.onActiveSize = this.onActiveSize.bind(this);
  }

  onActiveSize(event) {
    this.setState({ selectSizeIndex: Number(event.target.id) });
  }

  render() {
    const sizes = this.props.sizes || [];
    return (
      <div>
        <Wrapper>
          <Current>
            Size: <Name>{sizes.length > 0 && sizes[this.state.selectSizeIndex].title}</Name>
          </Current>
          <Help help type="button">
            Need Size Help?
          </Help>
        </Wrapper>
        <Options>
          {sizes.map((size, index) => (
            <SizeButton
              id={index}
              name={size.title}
              type="button"
              onClick={e => this.onActiveSize(e)}
              isActive={this.state.selectSizeIndex === index}
              key={index.toString()}
            />
          ))}
        </Options>
      </div>
    );
  }
}

Size.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Size;
