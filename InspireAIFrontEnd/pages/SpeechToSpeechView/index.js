import React from 'react';
import SpeechToSpeechView from '../../src/views/SpeechToSpeechView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const SpeechToSpeech = () => {
  return (
    <WithLayout
      component={SpeechToSpeechView}
      layout={Main}
    />
  )
};

export default SpeechToSpeech;
