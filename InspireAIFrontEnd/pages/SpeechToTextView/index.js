import React from 'react';
import SpeechToTextView from '../../src/views/SpeechToTextView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const SpeechToText = () => {
  return (
    <WithLayout
      component={SpeechToTextView}
      layout={Main}
    />
  )
};

export default SpeechToText;
