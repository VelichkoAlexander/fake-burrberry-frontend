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
  flex-wrap: wrap;
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


class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedColorIndex: 0 };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(e) {
    const id = Number(e.target.id);
    this.setState({ selectedColorIndex: id });
    this.props.handleColorChange(id);
  }

  render() {
    const colors = this.props.colours || [];
    return (
      <Wrapper>
        <Current>
          Colour: <Name>{colors.length > 0 && colors[this.state.selectedColorIndex].value}</Name>
        </Current>
        <Options>
          {colors.map((color, index) => (
            <ColorButton
              isActive={this.state.selectedColorIndex === index}
              color={color.src}
              key={index.toString()}
              id={index}
              onClick={e => this.handleColorChange(e)}
            >
              {color.name}
            </ColorButton>
          ))}
        </Options>
      </Wrapper>
    );
  }
}

Color.propTypes = {
  handleColorChange: PropTypes.func.isRequired,
  colours: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Color;
