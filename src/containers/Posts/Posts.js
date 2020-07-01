import React, {useEffect} from "react";
import {connect} from "react-redux";
import * as actions from "../../redux/actions/actions"

import Card from "../../components/UI/Card/Card"
import Post from "./Post/Post"

const Posts = props => {

    const {onFetchOrders} = props

    useEffect(() => {
        onFetchOrders()
    }, [onFetchOrders])

    const posts = props.posts.map(post => {
        return <Post
            key={post.id}
            date={post.date}
            title={post.title}
            author={post.author}
            content={post.content}
            popularity={post.popularity}
            categories={post.categories}/>
    })
    return <div style={{
        width: '50%',
        padding: '1rem',
        justifyContent: 'space-between',
        margin: 'auto',
        borderRadius: '5px',
        backgroundColor: 'lightgray',
        boxShadow: '0 2px 1px rgba(0, 0, 0, 0.1)'
    }}>{posts}</div>
}


const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.getAllPosts())
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)