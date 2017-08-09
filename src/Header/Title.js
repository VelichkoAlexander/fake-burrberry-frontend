import React from "react";
import {Helmet} from "react-helmet";

export default (props) => {
  return (
    <div className="application">
      <Helmet>
        <title>{props.settings.title}</title>
        <meta name="description" content={props.settings.descr} />
      </Helmet>
    </div>
  )
}