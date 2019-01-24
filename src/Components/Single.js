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
        console.log(posts);
        const id = match.params.id;
        const post = posts.find((post)=> Number(post.id) === Number(id));
        const comments = this.props.comments[match.params.id] || [];
        const index = posts.findIndex((post) => {console.log(post); return Number(post.id) === Number(id);});
        console.log("entering to single.js");
        console.log("index on single"+index);
        return <div className="Single">
                <Photo post={post} {...this.props} index={index}/>
                <Comments addComment={this.props.addComment} comments={comments} postId={id} />
        </div>;
    }
}
export default Single;