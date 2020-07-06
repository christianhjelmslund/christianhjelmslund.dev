import React, {useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../../redux/actions/actions"

import Post from "./Post/Post"
import withErrorHandler from "../../hoc/withErrorHandler";
import axios from "axios"
const Posts = props => {

    const {onFetchOrders} = props

    useEffect(() => {
        onFetchOrders()
    }, [onFetchOrders])

    return props.posts.map(post => {
        return <Post
            key={post.id}
            date={post.date}
            title={post.title}
            author={post.author}
            content={post.content}
            popularity={post.popularity}
            categories={post.categories}/>
    })
}


const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.getAllPosts())
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        error: state.posts.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Posts, axios))