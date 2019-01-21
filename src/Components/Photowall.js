import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

function Photowall(props) {
    return <div>
        <button className="addIcon">+</button>
        <div className="photoGrid">
                {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
    </div>;  
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
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