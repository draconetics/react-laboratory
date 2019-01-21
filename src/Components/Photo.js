import React, {Component} from 'react';


function Photo(props) {
    const photo = props.post;
        console.log(photo);
        return  <figure className="figure">
                    <img className="photo" src={photo.imageLink} alt={photo.description}/>
                    <figcaption><p>{photo.description}</p></figcaption>
                    <div className="button-container">
                        <button className="remove-button">Remove</button>
                    </div>
                </figure>;
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