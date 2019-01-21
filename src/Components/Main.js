import React, {Component} from 'react';

import List from './List';
import Title from './Title';

class Main extends Component {
    render() {
        return <div> <Title title = {'todos'}/>
                        <List tasks={['Mow the law', 'Walk the dog']}/> 
                        <List tasks={['Another law', 'Walk the cat']}/> 
                </div>;
    }
}

export default Main;