import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Title = props =>
  (<Helmet>
    <title>
      {props.title} | Burberry
    </title>
    <meta name="description" content={props.content} />
  </Helmet>);

Title.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Title.defaultProps = {
  title: '',
  content: '',
};

export default Title;
