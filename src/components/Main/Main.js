import React from 'react';
import MainStyles from './MainStyles';
import * as usersAPI from '../../utils/usersApi';

//split layout
// import FixedSide from '../../components/FixedSide/FixedSide';
// import ListSide from '../../components/ListSide/ListSide';

import Header from '../../components/Header/Header';
import List from '../../components/List/List';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    usersAPI.getAll().then(users => {
      this.setState({ users: users });
    });
  }

  render() {
    const { users } = this.state;

    return (
        <div className={MainStyles}>
          <Header/>
          <List
            {...users}
          />
        </div>
    );
  }
}
