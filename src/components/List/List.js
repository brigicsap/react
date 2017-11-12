import React from 'react';
import ListStyles from './ListStyles.js';
import ListItem from '../ListItem/ListItem';

const List = (props) => (
  <div className={ListStyles}>
      {
        Object
          .keys(props)
          .map(key => <ListItem
            key={key}
            {...props[key]}
          />)
      }
  </div>
);

export default List;
