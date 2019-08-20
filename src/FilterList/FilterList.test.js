import React from 'react';
import ReactDOM from 'react-dom';

import FilterList from './FilterList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterList />, div);
    ReactDOM.unmountComponentAtNode(div);
})