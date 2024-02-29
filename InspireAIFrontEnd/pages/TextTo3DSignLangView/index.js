import React from 'react';
import TextTo3DSignLangView from '../../src/views/TextTo3DSignLangView';
import Main from '../../src/layouts/Main';
import WithLayout from '../../src/WithLayout';

const TextTo3DSignLang = () => {
  return (
    <WithLayout
      component={TextTo3DSignLangView}
      layout={Main}
    />
  )
};

export default TextTo3DSignLang;
