import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Messages from './messages';

describe('<Messages />', () => {
    //------- Smoke Test -------//
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Messages />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    //------- Snapshot Test -------//
    it('renders looks as expected', () => {
        const tree = renderer.create(<Messages />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})