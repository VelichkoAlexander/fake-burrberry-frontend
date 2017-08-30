import React, { Component } from 'react';
import styled from 'styled-components';

import Icon from '../../common/LikeIcon';

const FavouriteButton = styled.button`
  padding: 0;
  font-size: 0;
  background-color: transparent;
  border: none;
  width: 0.875rem;
  height: 0.875rem;
  cursor: pointer;
`;

const fillColor = '#000';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.setState(() => ({ isLiked: !this.state.isLiked }));
  }

  render() {
    const label = this.state.isLiked
      ? 'Remove from Favourites'
      : 'Add to Favourites';
    return (
      <FavouriteButton onClick={this.handleLike}>
        <Icon
          width="14"
          height="14"
          color={this.state.isLiked ? fillColor : 'none'}
        />
        {label}
      </FavouriteButton>
    );
  }
}

export default LikeButton;
