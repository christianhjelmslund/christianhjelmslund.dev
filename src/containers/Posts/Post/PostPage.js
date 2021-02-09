import React from "react";

import Post from "../../../components/Post/Post";

const PostPage = (props) => {
    return (<Post title={props.location.state.title} content={props.location.state.content}/>)
}

export default PostPage