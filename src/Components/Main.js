import React, {Component} from 'react';


import Title from './Title';
import Photowall from './Photowall';


const posts = [{
    id:0,
    description: "beautiful landscape",
    imageLink: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"   
},
{
    id:2,
    description: "sunset high quality",
    imageLink: "https://images-na.ssl-images-amazon.com/images/I/A1q65pVnJIL._SX466_.jpg"   
},
{
    id:3,
    description: "beauty river",
    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwl9MlAvzSgbp0zCd_J1EvwXwmfU9S3Emr_uxqnEDdd5mfMxF"   
}];


class Main extends Component {
    render() {
        return <div> <Title title = {'Photowall'}/>
                    <Photowall posts={posts}/> 
                </div>;
    }
}

export default Main;