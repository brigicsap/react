import React from 'react';
import ListItemStyles from './ListItemStyles.js';

const ListItem = (props) => (
  <div className={ListItemStyles}>
    <img src={ props.thumbnailUrl } alt="placeholder"/>
    <h3>{ props.title }</h3>
  </div>
);

export default ListItem;
