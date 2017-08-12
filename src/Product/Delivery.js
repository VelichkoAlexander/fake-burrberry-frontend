import React from 'react';
import styled from 'styled-components';

const Delivery = styled.div`
  margin-bottom: 3rem;
  display: none;
  @media (min-width: 48rem) {
    display: block;
  }
  @media (min-width: 62rem) {
    margin-bottom: 4rem;
  }
`;

const Img = styled.img`
  display: block;
  width: 100%;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
  font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.188rem;
  text-transform: uppercase;
  color: #171717;
  @media (min-width: 62rem) {
    margin-top: 4.125rem;
  }
`;

const Feature = styled.div`
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
  display: block;
`;
const Caption = styled.h3`
  margin: 0;
  padding: 0;
  margin-bottom: 0.25rem;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 0.875rem;
  color: #171717;
`;
const Text = styled.div`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #171717;
`;

export default () => {
  return (
    <Delivery>
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-7">
            <picture>
              <source
                media="(min-width: 62rem)"
                srcSet={`${process.env
                  .PUBLIC_URL}/images/decor/desktop-delivery.jpg 1x,
                            ${process.env
                              .PUBLIC_URL}/images/decor/desktop-delivery@2x.jpg 2x,
                            ${process.env
                              .PUBLIC_URL}/images/decor/desktop-delivery@3x.jpg 3x`}
              />
              <source
                media="(min-width: 48rem)"
                srcSet={`${process.env
                  .PUBLIC_URL}/images/decor/tablet-delivery.jpg 1x,
                            ${process.env
                              .PUBLIC_URL}/images/decor/tablet-delivery@2x.jpg 2x,
                            ${process.env
                              .PUBLIC_URL}/images/decor/tablet-delivery@3x.jpg 3x`}
              />
              <Img
                src={`${process.env
                  .PUBLIC_URL}/images/decor/tablet-delivery.jpg`}
                alt="delivery boxes"
              />
            </picture>
          </div>
          <div className="col-md-5 col-lg-offset-1 col-lg-4">
            <Title>Delivery</Title>
            <Feature>
              <Caption>Free Next Day Delivery</Caption>
              <Text>
                Order before 7pm Monday to Thursday for delivery the next day
              </Text>
            </Feature>
            <Feature>
              <Caption>Collect-in-Store</Caption>
              <Text>
                Order online today and pick up your items in store as early as
                tomorrow
              </Text>
            </Feature>
            <Feature>
              <Caption>Free Returns</Caption>
              <Text>Enjoy free returns on your order</Text>
            </Feature>
            <Feature>
              <Caption>Free Gift Packaging</Caption>
              <Text>
                Discover our gift packaging, a gold lined box tied with a
                coloured ribbon
              </Text>
            </Feature>
          </div>
        </div>
      </div>
    </Delivery>
  );
};
