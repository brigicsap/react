import React from 'react';
import ListStyles from './ListStyles.js';
import ListArticle from '../ListArticle/ListArticle';

const List = (props) => (
  <div className={ListStyles}>
      {
        Object
          .keys(props)
          .map(key => <ListArticle
            key={key}
            {...props[key]}
          />)
      }
  </div>
);

export default List;
