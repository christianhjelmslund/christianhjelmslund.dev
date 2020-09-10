import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Row, Col, Container} from "react-bootstrap"
import * as actions from "../../redux/actions/actions"

import useHttpErrorHandler from "../../hooks/httpErrorHandling"
import Post from "./Post/Post"
import withErrorHandler from "../../hoc/withErrorHandler"

export const Posts = props => {

    const {onFetchPosts} = props

    const filterPosts = (category, posts) => {
        return posts.filter(post => post.props.categories.includes(category))
    }

    useEffect(() => {
        onFetchPosts()
    }, [onFetchPosts])

    if (props.posts) {
        const Posts = props.posts.map(post => {
            return <Post
                key={post.id}
                date={post.date}
                title={post.title}
                author={post.author}
                content={post.content}
                popularity={post.popularity}
                categories={post.category}/>
        }).reverse()
        const PostsLeft = Posts.slice(0,Posts.length/2)
        const PostsRight = Posts.slice(Posts.length/2)

        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                    </Col>
                       <Col>
                           {PostsLeft}
                       </Col>
                       <Col>
                           {PostsRight}
                       </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(actions.getAllPosts())
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Posts, useHttpErrorHandler))