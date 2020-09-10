import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Container, Card} from "react-bootstrap"
import * as actions from "../../redux/actions/actions"

import useHttpErrorHandler from "../../hooks/httpErrorHandling"
import Post from "./Post/Post"
import withErrorHandler from "../../hoc/withErrorHandler"

import styled from 'styled-components'

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

const filterPostsByCategory = (category, posts) => {
    return posts.filter(post => post.props.categories.includes(category))
}



export const Posts = props => {

    const {onFetchPosts} = props
    const [filteredPosts, setFilteredPosts] = useState('')

    const filterPostByTitle = (title, posts) => {
        console.log(title)
        if (title === "") {
            setFilteredPosts(null)
        } else {
            console.log(posts)
            const FilteredPosts = posts.filter(post =>
                post.props.title ?
                    post.props.title.toUpperCase().trim().includes(title.toUpperCase().trim()) :
                    null)
            setFilteredPosts(FilteredPosts)
        }
    }

    useEffect(() => {
        onFetchPosts()
    }, [onFetchPosts])

    let Posts = []
    if (props.posts) {
        Posts = props.posts.map(post => {
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
        const PostsLeft = filteredPosts ? filteredPosts.slice(filteredPosts.length / 2) : Posts.slice(Posts.length / 2)
        const PostsRight = filteredPosts ? filteredPosts.slice(0, filteredPosts.length / 2) : Posts.slice(0, Posts.length / 2)
        return (
            <Container style={{width: "80%"}} fluid={true}>
                <Row>
                    <Col xs={"2"}>
                        <Card bg={"dark"} text={"white"}>
                            <StyledInput
                                placeholder={"Search by title"}
                                onChange={event =>
                                    filterPostByTitle(event.target.value, Posts)
                                }>
                            </StyledInput>
                            <br/>
                            <br/>
                            <p style={{
                                margin: "0px auto",
                                width: "80%"
                            }}>At the moment you can filter the posts based on the title</p>
                            <br/>
                        </Card>
                    </Col>

                    <Col>
                        {PostsLeft}
                    </Col>

                    <Col>
                        {PostsRight}
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