import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement('ol', null,
React.createElement('li',null, 'take out the trash'),
React.createElement('li',null, 'marco polo'),
React.createElement('li',null, 'another message')
);

ReactDOM.render(element, document.getElementById('root'));