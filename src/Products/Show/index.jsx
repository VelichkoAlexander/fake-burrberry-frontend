import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { XsOnly, Xl, Lg } from '../../common/Responsive';
import { titleDescriptionCut } from '../../common/helpers';
import { get } from '../../data/Data';

import Header from './Header';
import Image from './InfoImage';
import InfoBlock from './InfoBlock';
import Delivery from './Delivery';
import Suggest from './Suggest';
import More from './More';
import Title from '../../common/Title';

const Line = styled.hr`
  margin: 0;
  border: 0;
  border-top: solid 0.0625rem #c6c6c6;
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const Wraper = styled.div`
  .col-lg-4:nth-child(3) img {
    margin-top: 2rem;
  }

  .col-lg-4:nth-child(4) img {
    margin-top: 6rem;
  }
`;

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: '',
      },
    };
  }

  componentDidMount() {
    get(`v1/products/men/suits/${this.props.match.params.id}`).then((data) => {
      this.setState({ data });
    });
  }

  render() {
    const {
      title,
      id,
      colours,
      sizes,
      images,
      description,
      details,
      multiCurrencyPrices,
    } = this.state.data;
    const titleDescription = description && titleDescriptionCut(description);
    return (
      <div>
        <Title title={title} content={titleDescription} />
        <Header
          title={title}
          id={id}
          colours={colours}
          sizes={sizes}
          currency={this.props.currency}
          price={
            multiCurrencyPrices &&
            multiCurrencyPrices[this.props.currency] / 100
          }
          images={images}
        />
        <Wraper className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <InfoBlock
                title="Description"
                description={description}
                details={details}
              />
            </div>
            {images &&
              images.map((image, index) => {
                if (index === 1) {
                  return (
                    <div className="col-lg-8" key={index.toString()}>
                      <Lg>
                        <Image src={image} big />
                      </Lg>
                    </div>
                  );
                } else if (index >= 2 && index <= 4) {
                  return (
                    <div className="col-lg-4" key={index.toString()}>
                      <Lg>
                        <Image src={image} />
                      </Lg>
                    </div>
                  );
                }
                return false;
              })}
          </div>
        </Wraper>
        <Line />
        <div className="container">
          <XsOnly>
            <InfoBlock title="Delivery" />
          </XsOnly>
        </div>
        <Line />
        <Xl>
          <Delivery />
        </Xl>
        <Suggest currency={this.props.currency} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <More />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Show.propTypes = {
  currency: PropTypes.string.isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
      section: PropTypes.string,
      subsection: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default Show;
