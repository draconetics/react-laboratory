import React,{Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component{

    render() {
        //console.log(this.props.match);
        //console.log(this.props.params);//doesnt perform
        //console.log(this.props.match.params);
        //console.log(this.props.match.params.id);
        const {match, posts} = this.props;
        console.log(this.props);
        const id = match.params.id;
        const post = posts.find((post)=> Number(post.id) === Number(id));
        console.log(post);
        return <div className="Single">
                <Photo post={post} />
                <Comments />
        </div>;
    }
}
export default Single;