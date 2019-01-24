import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Photo(props) {


    //console.log("finleeeeeee");
    //console.log(props.posts);
    const photo = props.post;
       // console.log(photo);
        return  <figure className="figure">
                    <Link to={`/single/${photo.id}`}> <img className="photo" src={photo.imageLink} alt={photo.description}/></Link>
                    <figcaption><p>{photo.description}</p></figcaption>
                    <div className="button-container">
                        <button className="remove-button" onClick={() =>{
                            console.log("this gonna delete",props.index)
                            props.removePost(props.index)
                            props.history.push('/')
                        }
                        }>Remove</button>
                    </div>
                </figure>;
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
}

/*
class Photo extends Component {
    render() {
        const photo = this.props.post;
        console.log(photo);
        return  <figure className="figure">
                    <img className="photo" src={photo.imageLink} alt={photo.description}/>
                    <figcaption><p>{photo.description}</p></figcaption>
                    <div className="button-container">
                        <button className="remove-button">Remove</button>
                    </div>
                </figure>;
    }
}
*/


export default Photo;