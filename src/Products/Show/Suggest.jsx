import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { get } from '../../data/Data';
import { coloursCount } from '../../common/helpers';

import Card from '../Card';

const Section = styled.section`
  padding-top: 3rem;
  padding-bottom: 1rem;
  @media (min-width: 48rem) {
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  display: inline-block;
  margin: 0;
  font-size: 1rem;
  line-height: 1.188rem;
  font-weight: 500;
  color: #171717;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 1rem;
  @media (min-width: 62rem) {
    display: block;
    margin-bottom: 2rem;
    text-align: center;
  }
`;

class Suggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    get('v1/products/men/suits?limit=3').then((data) => {
      this.setState({ data });
    });
  }

  render() {
    const { items } = this.state.data;
    const list =
      items &&
      items.map((item, i) =>
        (<div className="col-xs-6 col-md-3" key={i.toString()}>
          <Card
            image={item.images[0]}
            title={item.title}
            colours={coloursCount(item.colours.length)}
            to={`/men/suits/${item.slug}`}
            price={item.multiCurrencyPrices[this.props.currency] / 100}
            currency={this.props.currency}
          />
        </div>),
      );

    return (
      <Section>
        <div className="container">
          <Title>We recommend</Title>
          <div className="row">
            {list}
          </div>
        </div>
      </Section>
    );
  }
}

Suggest.propTypes = {
  currency: PropTypes.string.isRequired,
};

export default Suggest;
