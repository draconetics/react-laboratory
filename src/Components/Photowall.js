import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Photo from './Photo';

function Photowall(props) {
    return <div>
        <Link className="addIcon" to="/AddPhoto">+</Link>
        <div className="photoGrid">
                {props.posts
                    .sort(function(x,y){
                        return y.id -x.id;
                    })
                    .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
    </div>;  
}

//static if there is a class
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