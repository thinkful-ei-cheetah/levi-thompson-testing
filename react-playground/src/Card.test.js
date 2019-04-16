import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card.js';

describe('<Card />', () => {
    //------- Smoke Test -------//
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    //------- Snapshot Test -------//
    

    it('renders looks as expected', () => {
        const id = '1234';
        const title = 'Test Title';
        const content = 'Test Content'; 
        const tree = renderer.create(<Card key={id} title={title} content={content}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})