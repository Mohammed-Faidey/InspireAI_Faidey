import React from 'react';
import UserHomeView from '../../src/views/UserHomeView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const UserHome = () => {
  return (
    <WithLayout
      component={UserHomeView}
      layout={Main}
    />
  )
};

export default UserHome;
