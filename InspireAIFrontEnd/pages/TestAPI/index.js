import React from 'react';
import TestView from '../TestAPI';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';
import TestAPI from '../../src/views/TestAPI/TestAPI';

const test_api = () => {
  return (
    <WithLayout
      component={TestAPI}
      layout={Main}
    />
  )
};

export default test_api;
