import React from 'react';
import MainStyles from './MainStyles';
import * as postsAPI from '../../utils/postsAPI';

//split layout
// import FixedSide from '../../components/FixedSide/FixedSide';
// import ListSide from '../../components/ListSide/ListSide';

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
      this.setState({ posts: posts });
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
