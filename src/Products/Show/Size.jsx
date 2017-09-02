import React, { Component } from 'react';
import styled from 'styled-components';

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

  @media only screen and (min-width: 48rem) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Options = styled.div`display: flex;`;

const Name = styled.span`font-weight: 700;`;

const sizes = ['S', 'M', 'L', 'XL'];

class Size extends Component {
  constructor(props) {
    super(props);
    this.state = { selectSizeIndex: 2 };
    this.onActiveSize = this.onActiveSize.bind(this);
  }

  onActiveSize(e) {
    this.setState({ selectSizeIndex: +e.target.id });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <Current>
            Size: <Name>{sizes[this.state.selectSizeIndex]}</Name>
          </Current>
          <Help help type="button">
            Need Size Help?
          </Help>
        </Wrapper>
        <Options>
          {sizes.map((size, index) => (
            <SizeButton
              id={index}
              name={size}
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

export default Size;
