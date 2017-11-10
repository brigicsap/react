import React from 'react';
import ListArticleStyles from './ListArticleStyles.js';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

const ListArticle = (props) => (
  <div className={ListArticleStyles}>
    <span>{ props.id }</span>
    <h3>{ props.title }</h3>
    <Thumbnail
      url={props.thumbnailUrl} />
  </div>
);

export default ListArticle;
