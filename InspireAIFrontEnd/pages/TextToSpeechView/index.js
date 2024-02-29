import React from 'react';
import TextToSpeechView from '../../src/views/TextToSpeechView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const TextToSpeech = () => {
  return (
    <WithLayout
      component={TextToSpeechView}
      layout={Main}
    />
  )
};

export default TextToSpeech;
