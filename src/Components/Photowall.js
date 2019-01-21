import React, {Component} from 'react';
import Photo from './Photo';

function Photowall(props) {
    return <div className="photoGrid">
                {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>;  
}

/*
class Photowall extends Component {
    render() {
        return <div className="photoGrid">
                {this.props.posts.map((post, index) => <Photo key={index} post={post}/>)}
        </div>;
    }
}
*/
export default Photowall;