import React, {Component} from 'react';
import {Route} from 'react-router-dom';


import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';

import {connect} from 'react-redux'

class Main extends Component {

    constructor() {
        super();
        this.state = {
            posts : []
        }

        //no matter if the function is called from child child class, it will call to
        //to his father and will get response
        //tmp deleted this.removePhoto = this.removePhoto.bind(this);
        console.log("constructor");
    }

/*
    componentDidMount() {
        const posts = SimlateFunctionFromDatabase();
        this.setState({
            posts: posts,
            screen: 'addPhotos' //photos, addphotos.
        });

        console.log("component did mount");
    }
    //componentWillMount

    componentDidUpdate(prevProps, prevState) {
        //alert("re-update");
        console.log(prevProps);
        console.log(prevState);
    }

    removePhoto(postRemove) {
        console.log("removing ."+postRemove.id);
        this.setState({
            posts: this.state.posts.filter((post) => post !== postRemove)
        });
        console.log(this.state.posts);
    }

    addPhoto(postSubmitted){
        this.setState({
            posts: this.state.posts.concat([postSubmitted])
        });
    }
*/
    render() {
        console.log(this.props.posts);
        return  <div>
                <Route exact path = "/" render={()=>(
                    <div> 
                        <Title title = {'Photowall'}/>
                        <Photowall posts={this.props.posts} /> 
                    </div>
                )
                }/>

                {/*<Route path = "/AddPhoto" render={({history})=>(
                    <div> 
                        <AddPhoto onAddPhoto= {(addedPost)=>{
                            this.addPhoto(addedPost)
                            history.push('./')}} />
                    </div>
                        )    */}
                }/>

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

function mapStateToProps(state) {
    return {posts: state};
}
const App = connect (mapStateToProps)(Main);


export default Main;
