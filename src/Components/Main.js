import React, {Component} from 'react';


import Title from './Title';
import Photowall from './Photowall';


class Main extends Component {

    constructor() {
        super();
        this.state = {
            posts : []
        }

        //no matter if the function is called from child child class, it will call to
        //to his father and will get response
        this.removePhoto = this.removePhoto.bind(this);
        console.log("constructor");
    }

    componentDidMount() {
        const posts = SimlateFunctionFromDatabase();
        this.setState({
            posts: posts
        });

        console.log("component did mount");
    }
    //componentWillMount

    componentDidUpdate(prevProps, prevState) {
        alert("re-update");
        console.log(prevProps);
        console.log(prevState);
    }

    removePhoto(postRemove) {
        console.log("removing ."+postRemove.id);
        this.setState({
            posts: this.state.posts.filter((post) => post.id !== postRemove.id)
        });
        console.log(this.state.posts);
    }

    render() {
        console.log('render');
        return <div> <Title title = {'Photowall'}/>
                    <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/> 
                </div>;
    }
}

function SimlateFunctionFromDatabase() {
    return [{
        id:0,
        description: "beautiful landscape",
        imageLink: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"   
    },
    {
        id:1,
        description: "sunset high quality",
        imageLink: "https://images-na.ssl-images-amazon.com/images/I/A1q65pVnJIL._SX466_.jpg"   
    },
    {
        id:2,
        description: "beauty river",
        imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwl9MlAvzSgbp0zCd_J1EvwXwmfU9S3Emr_uxqnEDdd5mfMxF"   
    }];
}

export default Main;