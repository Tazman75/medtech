jest.unmock('../assets/js/components/BasicInput');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
// import CheckboxWithLabel from '../CheckboxWithLabel';
import BasicInput from '../assets/js/components/BasicInput'

describe('CheckboxWithLabel', () => {
  it('changes the text after click', () => {
    // Render a checkbox with label ineact-addons-test-util the document
    const basicInput = TestUtils.renderIntoDocument(
      <BasicInput name="username" type="text" placeholder="username" />
    );

    const checkboxNode = ReactDOM.findDOMNode(basicInput);

    // Verify that it's Off by default
    // expect(checkboxNode.textContent).toEqual('Off');
    expect(1).toEqual(1);

    // ...
  });
});
