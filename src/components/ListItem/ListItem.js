import React from 'react';
import ListItemStyles from './ListItemStyles.js';
import Address from '../../components/Address/Address';

const ListItem = (props) => (
  <div className={ListItemStyles}>
    <em>@{ props.username }</em>
    <h3>{ props.name }</h3>
    <Address
      {...props.address}
    />
  </div>
);

export default ListItem;
