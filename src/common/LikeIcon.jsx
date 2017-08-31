import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Path = styled.path`
  fill: ${props => props.fill};
  stroke: #000;
  stroke-width: 1px;
`;

const Icon = props =>
  (<svg
    width={props.width}
    height={props.height}
    viewBox="0 0 14 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill={props.fill}
      d="M1.724 7.342l5.3 5.71 5.32-5.732c1.403-1.512
               1.403-3.995 0-5.507C10.94.3 8.656.3 7.233 1.813L7
                2.06l-.23-.247C5.37.28 3.086.28 1.66 1.768.236 3.258.236 5.74
                 1.618 7.275l.042.022.063.045z"
    />
  </svg>);

Icon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

Icon.defaultProps = {
  width: '14',
  height: '14',
  fill: 'none',
};

export default Icon;
