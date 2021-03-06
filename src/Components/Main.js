import React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';



import Title from './Title';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import Single from './Single';

import {connect} from 'react-redux'
import {removePost} from'../redux/actions';

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
        console.log("first log");
        console.log(this.props);//show me the method dispatch
        /////******** history=== params.history 
        //history is a part of that object called params.
        //first this.props as a propertie because the second propertie overrides the atribute.
        
        return  <div>
                <h1>
                    <Link to="/">Photowall</Link>
                </h1>
                <Route exact path = "/" render={()=>(
                    <div> 
                        <Photowall {...this.props} />
                    </div>
                )
                }/>

                <Route path = "/AddPhoto" render={({history})=>(
                    <div> 
                        <AddPhoto {...this.props} onHistory={history}/>
                    </div>
                    )     
                    }/>
                <Route path="/Single/:id" render={(params)=>(
                    <Single  {...this.props} {...params}/> 
                )}/>
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
