import React from 'react';
import SignLangToSignLangView from '../../src/views/SignLangToSignLangView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const SignLangToSignLang = () => {
  return (
    <WithLayout
      component={SignLangToSignLangView}
      layout={Main}
    />
  )
};

export default SignLangToSignLang;
