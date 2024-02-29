import React from 'react';
import BotView from '../../src/views/BotView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const Bot = () => {
  return (
    <WithLayout
      component={BotView}
      layout={Main}
    />
  )
};

export default Bot;
