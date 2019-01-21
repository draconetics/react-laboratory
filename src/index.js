import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['take out the trash','marco polo','another message'];

const element = React.createElement('ol', null, 
    tasks.map((task)=> React.createElement('li',null,task))
);

ReactDOM.render(element, document.getElementById('root'));