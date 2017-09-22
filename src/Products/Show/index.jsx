import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import { XsOnly, Xl, Lg } from '../../common/Responsive';
import { titleDescriptionCut } from '../../common/helpers';
import { get } from '../../data/Data';
import Spinner from '../../common/Spinner';

import Header from './Header';
import Image from './InfoImage';
import InfoBlock from './InfoBlock';
import Delivery from './Delivery';
import Suggest from './Suggest';
import More from './More';

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
      isLoading: true,
      data: {
        title: '',
      },
    };
  }

  componentDidMount() {
    if (this.props.items[this.props.currentProductId] || this.state.data) {
      get(
        `v1/products/${this.props.match.params.category}/${this.props.match
          .params.subcategory}/${this.props.match.params.id}`,
      ).then((data) => {
        this.setState({ data });
        this.setState({ isLoading: false });
      });
    }
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
    } =
      this.props.items[this.props.currentProductId] || this.state.data;
    const headTitle = `${title} - ${this.props.match.params.category}`;
    const titleDescription = description && titleDescriptionCut(description);
    return (
      <div>
        {this.state.isLoading
          ? <Spinner />
          : <section>
            <Helmet>
              <title>
                {headTitle} | Burberry
              </title>
              <meta name="description" content={titleDescription} />
            </Helmet>
            <Header
              title={title}
              id={id}
              colours={colours}
              sizes={sizes}
              price={multiCurrencyPrices}
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
            <Suggest />
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <More />
                </div>
              </div>
            </div>
          </section>}
      </div>
    );
  }
}

Show.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      subcategory: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  items: PropTypes.shape.isRequired,
  currentProductId: PropTypes.number.isRequired,
};

export default connect(state => ({
  items: state.listProducts,
  currentProductId: state.currentProductId,
}))(Show);
