import React from 'react';
export default (props) => {
  const links = props.links.map((link,index)=> {
    return <a className="more-link" href={link.href} key={index}>{link.title}</a>;
  });
  return(
    <section className="more md-hide">
      <h2 className="more-title">{props.title}</h2>
      {links}
    </section>
  )
}