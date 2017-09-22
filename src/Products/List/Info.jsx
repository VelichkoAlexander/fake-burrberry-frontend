import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { descriptionCut } from '../../common/helpers';

const Wraper = styled.div`
  background-color: #f3f3f3;
  padding-top: 2rem;
  color: #171717;
  z-index: 9999;
  @media (min-width: 48rem) {
    padding-top: 4rem;
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 1rem;
  font-family: 'Lora', serif;
  font-size: 1.625rem;
  line-height: 2rem;
  font-weight: 400;
`;

const Content = styled.div`
  padding-bottom: 0.5rem;
  font-size: 0.75em;
  line-height: 1.25rem;
  & a {
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: 48rem) {
    padding-bottom: 1rem;
    max-width: 37.75rem;
    & a {
      border-bottom: 1px solid #171717;
    }
  }
`;

const More = styled.button`
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Lora', serif;
  text-decoration: underline;
  line-height: 1.25rem;
  background:transparent;
  border: none;
  cursor: pointer;
`;

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowMore: false };
    this.onShow = this.onShow.bind(this);
  }
  onShow() {
    this.setState({ isShowMore: true });
  }

  render() {
    const isDescriptionCut = this.props.description.length > 190 && !this.state.isShowMore;
    return (
      <Wraper>
        <div className="container">
          <Title>{this.props.title}</Title>
          <Content>
            { isDescriptionCut ?
              descriptionCut(this.props.description)
              :
              this.props.description
            }
            {isDescriptionCut && <More onClick={this.onShow}>More</More>}
          </Content>
        </div>
      </Wraper>
    );
  }
}

Info.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Info.defaultProps = {
  title: '',
  description: ' ',
};

export default Info;
