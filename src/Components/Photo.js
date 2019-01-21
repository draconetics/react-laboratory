import React, {Component} from 'react';
import PropTypes from 'prop-types';


function Photo(props) {


    console.log("finleeeeeee");
    console.log(props.posts);
    const photo = props.post;
       // console.log(photo);
        return  <figure className="figure">
                    <img className="photo" src={photo.imageLink} alt={photo.description}/>
                    <figcaption><p>{photo.description}</p></figcaption>
                    <div className="button-container">
                        <button className="remove-button" onClick={() =>
                            props.removePost(props.index)

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