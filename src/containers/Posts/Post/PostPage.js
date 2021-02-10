import React, {useEffect} from "react";

import Post from "../../../components/Post/Post";
import {Col, Row} from "react-bootstrap";

import BackgroundImage from "../../../assets/images/background.svg";
import * as actions from "../../../redux/actions/actions";
import {connect} from "react-redux";

import withErrorHandler from "../../../hoc/withErrorHandler";
import useHttpErrorHandler from "../../../hooks/httpErrorHandling";
import Spinner from "../../../components/UI/Spinner/Spinner";

const PostPage = (props) => {
    const {onFetchPost} = props

    useEffect(() => {
        if (!props.location.post) {
            const potentialPostId = props.match.params.postId
            onFetchPost(potentialPostId)
        }
    }, [onFetchPost, props.location.post, props.location.state, props.match.params.postId])

    const post = props.location.post ? props.location.post : props.post

    let postView
    if (post) {
        postView = <Post
            id={post.id}
            key={post.id}
            date={post.date}
            title={post.title}
            author={post.author}
            content={post.content}
            popularity={post.popularity}
            category={post.category}
            initiatedFromPostPage />
    } else {
        postView = <Spinner/>
    }

    return (
        <div style={{
            position: "relative",
            marginTop: "0%",
            overflow: "auto",
            backgroundImage: `url(${BackgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Row  style={{marginTop: "25px"}}>
                <Col/>
                <Col xs={6}>
                    {postView}
                </Col>
                <Col/>
            </Row>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPost: (id) => dispatch(actions.getSpecificPost(id))
    }
}

const mapStateToProps = state => {
    return {
        post: state.post.post,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(PostPage, useHttpErrorHandler))