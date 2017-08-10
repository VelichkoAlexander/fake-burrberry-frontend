import React from 'react';
import styled from 'styled-components';

export default () => {
  
  const Delivery = styled.div `
    margin-bottom: 1.5rem;
     display: none;
    @media(min-width: 48rem) {
      display: block;
    }
  `;
  
  const Img = styled.img `
    display: block;
    width: 100%;
  `;
  
  const Title = styled.h2 `
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.188rem;
    text-transform: uppercase;
    color: #171717;
  `;
  
  const List = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
  `;
  
  const Item = styled.li`
    margin: 0;
    padding: 0;
    margin-bottom: 1.5rem;
    display: block;
  `;
  const ItemTitle = styled.h3 `
    margin: 0;
    padding: 0;
    margin-bottom: 0.25rem;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: #171717;
  `;
  const ItemDescr = styled.div `
    font-size: 0.75rem;
    line-height: 1rem;
    color: #171717;
  `;
  
  return (
    <Delivery>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <picture>
              <source srcSet={`${process.env.PUBLIC_URL}/images/decor/tablet-delivery.jpg 1x,
                            ${process.env.PUBLIC_URL}/images/decor/tablet-delivery@2x.jpg 2x,
                            ${process.env.PUBLIC_URL}/images/decor/tablet-delivery@3x.jpg 3x`}/>
              <Img src={`${process.env.PUBLIC_URL}/images/decor/tablet-delivery.jpg`} alt="delivery boxes"/>
            </picture>
          </div>
          <div className="col-md-5">
            <Title>Delivery</Title>
            <List>
              <Item>
                <ItemTitle>Free Next Day Delivery</ItemTitle>
                <ItemDescr>Order before 7pm Monday to Thursday for delivery the next day
                </ItemDescr>
              </Item>
              <Item>
                <ItemTitle>Collect-in-Store</ItemTitle>
                <ItemDescr>Order online today and pick up your items in store as early as
                           tomorrow
                </ItemDescr>
              </Item>
              <Item>
                <ItemTitle>Free Returns</ItemTitle>
                <ItemDescr>Enjoy free returns on your order</ItemDescr>
              </Item>
              <Item>
                <ItemTitle>Free Gift Packaging</ItemTitle>
                <ItemDescr>Discover our gift packaging, a gold lined box tied with a coloured
                           ribbon
                </ItemDescr>
              </Item>
            </List>
          </div>
        </div>
      </div>
    </Delivery>
  
  )
}