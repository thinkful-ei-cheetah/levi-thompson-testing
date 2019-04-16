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
    const a = [ 
        { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
    ];
    it('renders looks as expected', () => {
        const tree = renderer.create(<List 
            key= '4'
            header= 'Fourth list'
            cards= {a}
          
          />).toJSON();
        expect(tree).toMatchSnapshot();
    });
})