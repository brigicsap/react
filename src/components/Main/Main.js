import React from 'react';
import MainStyles from './MainStyles';
import * as postsAPI from '../../utils/postsAPI';

import Header from '../../components/Header/Header';
import List from '../../components/List/List';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    postsAPI.getAll().then(posts => {
      //only get the first 100 items to reduce load time
      const filteredPosts = posts.filter(item => item.id <= 100);
      this.setState({ posts: filteredPosts });
    });
  }

  render() {
    const { posts } = this.state;

    return (
        <div className={MainStyles}>
          <Header/>
          <List
            {...posts}
          />
        </div>
    );
  }
}
