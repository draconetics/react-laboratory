import React from 'react';
import ReactDOM from 'react-dom';

const tasks = ['take out the trash','marco polo','another message'];

const element = React.createElement('ol', null, 
    tasks.map((task)=> React.createElement('li',{key:task},task))
);

ReactDOM.render(element, document.getElementById('root'));