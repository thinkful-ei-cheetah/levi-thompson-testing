import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List.js';

describe('<List />', () => {
    //------- Smoke Test -------//
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    //------- Snapshot Test -------//
    it('renders looks as expected', () => {
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})