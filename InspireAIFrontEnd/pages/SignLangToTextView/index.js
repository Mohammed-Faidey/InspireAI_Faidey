import React from 'react';
import SignLangToTextView from '../../src/views/SignLangToTextView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const SignLangToText = () => {
  return (
    <WithLayout
      component={SignLangToTextView}
      layout={Main}
    />
  )
};

export default SignLangToText;
