import React from 'react';
import PredictView from '../../src/views/PredictView';
import IndexView from '../../src/views/IndexView/IndexView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const Predict = () => {
  return (
    <WithLayout
      component={IndexView}
      layout={Main}
    />
  )
};

export default Predict;
