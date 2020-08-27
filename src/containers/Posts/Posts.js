import React, {useEffect} from "react";
import {connect} from "react-redux";
import {Row, Col, Container} from "react-bootstrap"
import * as actions from "../../redux/actions/actions"

import useHttpErrorHandler from "../../hooks/httpErrorHandling"
import Post from "./Post/Post"
import withErrorHandler from "../../hoc/withErrorHandler"

export const Posts = props => {

    const {onFetchOrders} = props

    useEffect(() => {
        onFetchOrders()
    }, [onFetchOrders])

    if (props.posts) {
        const Posts = props.posts.map(post => {
            return <Post
                key={post.id}
                date={post.date}
                title={post.title}
                author={post.author}
                content={post.content}
                popularity={post.popularity}
                categories={["finance", "software"]}/>
        })
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        {/*<Card>*/}
                        {/*    <Button>Dummy Button!</Button>*/}
                        {/*    <br/>*/}
                        {/*    <div>*/}
                        {/*        This is some idea of what the sidebar could be used for...*/}
                        {/*    </div>*/}
                        {/*</Card>*/}
                    </Col>
                    <Col xs={6}>{Posts}</Col>
                    <Col>
                        {/*<Card bg={"light"}>*/}
                        {/*    <Button>Dummy Button!</Button>*/}
                        {/*    <br/>*/}
                        {/*    <div>*/}
                        {/*        This is some idea of what the sidebar could be used for...*/}
                        {/*    </div>*/}
                        {/*</Card>*/}
                    </Col>
                </Row>
            </Container>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.getAllPosts())
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Posts, useHttpErrorHandler))