import React, {Component} from 'react';
import ReactDOM from 'react-dom';



class List extends Component{
    render() {
        return <ol>
                {this.props.tasks.map((task,index) => <li key={index}>{task}</li>)}
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
        return <div> <Title/>
                        <List tasks={['Mow the law', 'Walk the dog']}/> 
                        <List tasks={['Another law', 'Walk the cat']}/> 
                </div>;
    }
}

ReactDOM.render(<Main/>, document.getElementById('root'));