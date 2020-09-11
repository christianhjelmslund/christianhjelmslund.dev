import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Container, Card, Button} from "react-bootstrap"
import * as actions from "../../redux/actions/actions"

import useHttpErrorHandler from "../../hooks/httpErrorHandling"
import Post from "./Post/Post"
import withErrorHandler from "../../hoc/withErrorHandler"

import styled from 'styled-components'
import StyledButton from "../../components/UI/Button";

const StyledInput = styled.input`
      font: inherit;
      margin: 0px auto;
      width: 80%;
      margin-top: 20px;
      border: 1px solid #ccc;
      padding: 0.15rem 0.25rem;
      border-radius: 10px;
      &:focus {
        outline: none;
        border-bottom-color: #45a29e;
      }
`

export const Posts = props => {

    const {onFetchPosts} = props
    const [filteredPosts, setFilteredPosts] = useState('')

    const filterPostByTitle = (title, posts) => {
        if (title === "") {
            setFilteredPosts(null)
        } else {
            setFilteredPosts(
                posts.filter(post => post.props.title ?
                    post.props.title.toUpperCase().trim().includes(title.toUpperCase().trim()) :
                    null)
            )
        }
    }

    const filterPostsByCategory = (category, posts) => {
        setFilteredPosts(posts.filter(post => post.props.categories.includes(category)))
    }

    useEffect(() => {
        onFetchPosts()
    }, [onFetchPosts])

    let posts = []
    let categories = new Set([])
    if (props.posts) {
        posts = props.posts.map(post => {
            for (let i = 0; i < post.category.length; i++){
                categories.add(post.category[i])
            }
            return <Post
                key={post.id}
                date={post.date}
                title={post.title}
                author={post.author}
                content={post.content}
                popularity={post.popularity}
                categories={post.category}/>
            }).reverse()
        }
        const postsLeft = filteredPosts ? filteredPosts.slice(filteredPosts.length / 2) : posts.slice(posts.length / 2)
        const postsRight = filteredPosts ? filteredPosts.slice(0, filteredPosts.length / 2) : posts.slice(0, posts.length / 2)
        return (
            <Container style={{width: "80%"}} fluid={true}>
                <Row>
                    <Col xs={"2"}>
                        <Card bg={"dark"} text={"white"}>
                            <StyledInput
                                placeholder={"Search by title"}
                                onChange={event =>
                                    filterPostByTitle(event.target.value, posts)
                                }>
                            </StyledInput>
                            <br/>
                            <p style={{
                                margin: "0px auto",
                                width: "80%"
                            }}>At the moment you can filter the posts based on the title</p>
                            <br/>
                            <div style={{
                                display: "block",
                                margin: "10px auto",
                                width: "80%",
                            }}>
                            {[...categories].map(category => {
                                return (
                                    <StyledButton variant="custom_dark" buttonTitle={category} clicked={() => filterPostsByCategory(category, posts)}/>)})
                            }
                            </div>
                            <Button style={{
                                margin: "10px auto",
                                width: "80%",}} variant="danger" onClick={() =>
                                    setFilteredPosts(null)
                                }>Reset</Button>
                        </Card>
                    </Col>

                    <Col>
                        {postsLeft}
                    </Col>

                    <Col>
                        {postsRight}
                    </Col>

                    <Col xs={"2"}></Col>
                </Row>
            </Container>
        )
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