import React from 'react';
import styled from 'styled-components';
export default (props) => {
  const Link  = styled.a `
   display: block;
   margin-bottom: 0.75rem;
   margin-right: 1.25rem;
   font-size: 0.75rem;
   line-height: 1rem;
   font-weight: 600;
   color: #999999;
   text-decoration: none;
   &:last-child {
    margin-bottom: 0;
   }
  `;
  
  const Title = styled.h2 `
    margin: 0;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    line-height: 1;
    font-weight: bold;
    text-transform: uppercase;
    color: #171717;
  `;
  const links = props.links.map((link, index) => {
      return <Link href={link.href} key={index}>{link.title}</Link>;
  });
  return (
    <div>
      <Title> {props.title} </Title>
      {links}
    </div>
  )
}