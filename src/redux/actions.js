//remove by index (0,1,2,Number(new Date()))

export function removePost(index) {
    return {
        type: 'REMOVE_POST',//type of event
        index: index//post_id
    };
}

export function addPost(post) {
    return{
        type: 'ADD_POST',
        post: post
    };
}

export function addComment(comment, postId) {
    return{
        type: 'ADD_COMMENT',
        comment:comment,
        postId
    };
}
//adding post 


