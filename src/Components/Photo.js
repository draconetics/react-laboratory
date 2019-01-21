import React, {Component} from 'react';

class Photo extends Component {
    render() {
        const photo = this.props.post;
        console.log(photo);
        return  <figure className="figure">
                    <img className="photo" src={photo.imageLink} alt={photo.description}/>
                    <figcaption><p>{photo.description}</p></figcaption>
                    <div>
                        <button>Remove</button>
                    </div>
                </figure>;
    }
}

export default Photo;