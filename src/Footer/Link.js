import React from 'react';

export default (props) => {
  const links = props.links.map((link, index) => {
      return <a className="footer-menu-link" href={link.href} key={index}>{link.title}</a>;
  });
  return (
    <div>
      <h2 className="footer-menu-title">{props.title}</h2>
      {links}
    </div>
  )
}