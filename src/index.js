import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const tasks = ['take out the trash','marco polo','another message'];

//dont used
const element = React.createElement('ol', null, 
    tasks.map((task, index)=> React.createElement('li',{key:index},task))
);

class List extends Component{
    render() {
        return <ol>
                {tasks.map((task,index) => <li key={index}>{task}</li>)}
            </ol>
    }
}

class Title extends Component {
    render() {
        return <h1> Task List</h1>;
    }
}

class Main extends Component {
    render() {
        return <div> <Title/><List/> </div>;
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));