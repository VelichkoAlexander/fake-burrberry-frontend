import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorButton from './ColorButton';

const Wrapper = styled.div`
  @media (min-width: 48rem) {
    padding: 0;
    margin: 0;
  }
`;

const Current = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

const Options = styled.div`
  display: flex;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: solid 0.0625rem #c6c6c6;
  @media (min-width: 62rem) {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 1.5rem;
  }
`;

const Name = styled.span`font-weight: 700;`;

const colors = [
  { name: 'honey', color: '#cfa880' },
  { name: 'black', color: '#232122' },
];

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedColorIndex: 0 };
    this.onActiveColor = this.onActiveColor.bind(this);
  }
  onActiveColor(e) {
    this.setState({ selectedColorIndex: +e.target.id });
  }
  render() {
    return (
      <Wrapper>
        <Current>
          Colour: <Name>{this.props.currentColor}</Name>
        </Current>
        <Options>
          {colors.map((color, index) =>
            (<ColorButton
              isActive={this.state.selectedColorIndex === index}
              color={color.color}
              key={index.toString()}
              id={index}
              onClick={e => this.onActiveColor(e)}
            >
              {color.name}
            </ColorButton>),
          )}
        </Options>
      </Wrapper>
    );
  }
}

Color.propTypes = {
  currentColor: PropTypes.string,
};
Color.defaultProps = {
  currentColor: 'Honey',
};

export default Color;
