import React, {Fragment, useEffect, useState} from "react";
import {connect} from "react-redux";
import {Row, Col, Container, Card, Button} from "react-bootstrap"
import * as actions from "../../redux/actions/actions"
import useHttpErrorHandler from "../../hooks/httpErrorHandling"
import Post from "./Post/Post"
import withErrorHandler from "../../hoc/withErrorHandler"

import Spinner from "../../components/UI/Spinner/Spinner";
import styled from 'styled-components'
import StyledButton from "../../components/UI/StyledComponents/StyledButton";
import BackgroundImage from "../../assets/images/background.svg";

const StyledInput = styled.input`
      font: inherit;
      margin: 10px auto;
      width: 100%;
      border: 1px solid #ccc;
      padding: 0.3rem 0.3rem;
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
        setFilteredPosts(posts.filter(post => post.props.category.includes(category)))
    }

    useEffect(() => {
        onFetchPosts()
    }, [onFetchPosts])

    let posts = []
    let categories = new Set([])
    if (props.posts) {
        posts = props.posts.map(post => {
            if (post.category) {
                for (let i = 0; i < post.category.length; i++) {
                    categories.add(post.category[i])
                }
            }
            return <Post
                id={post.id}
                key={post.id}
                date={post.date}
                title={post.title}
                author={post.author}
                content={post.content}
                popularity={post.popularity}
                category={post.category}
                filter={(category) => filterPostsByCategory(category, posts)}/>
        }).reverse()
    }

    let postsLeft = []
    let postsRight = []
    let postView
    const filterView =
        <Card bg={"dark"} text={"white"}>
        <Container style={{width: "90%", padding: "20px"}} fluid={true}>
            <Row>
                <StyledInput
                    id={"styledInput"}
                    placeholder={"Search by title"}
                    onChange={event =>
                        filterPostByTitle(event.target.value, posts)
                    }>
                </StyledInput>
            </Row>
            <Row style={{paddingTop: "10px"}}>
                <p> At the moment you can filter the posts based on the title </p>
            </Row>
            <Row style={{paddingTop: "10px"}}>
                {  categories.size === 0 ? <Spinner/> :
                [...categories].map(category => {
                    return (<StyledButton id={category} key={category} variant="custom_dark" buttonTitle={category}
                                          clicked={() => filterPostsByCategory(category, posts)}/>)
                })
                }
            </Row>
            <Row style={{paddingTop: "10px"}}>
                <Button id={"reset"} style={{
                    width: "100%",
                    cursor: 'pointer'
                }} variant="danger" onClick={() => {
                    setFilteredPosts(null)
                }}>Reset
                </Button>
            </Row>
        </Container>
    </Card>

    if (window.screen.width >= 1280) {
        postsLeft = filteredPosts ? filteredPosts.slice(filteredPosts.length / 2) : posts.slice(posts.length / 2)
        postsRight = filteredPosts ? filteredPosts.slice(0, filteredPosts.length / 2) : posts.slice(0, posts.length / 2)
        if (posts.length === 0) {
            postView =
                <Fragment>
                    <Col xs={"2"}>{filterView}</Col>
                    <Spinner/>
                    <Col xs={"2"}/>
                </Fragment>
        } else {
            postView = <Fragment>
                <Col xs={"2"}>{filterView}</Col>
                <Col>{postsLeft}</Col>
                <Col>{postsRight}</Col>
                <Col xs={"2"}/>
            </Fragment>
        }
    } else {
        if (posts.length === 0) {
            postView = <Spinner/>
        } else {
            postView = <Col>
                {/*{filterView}*/}
                {posts}
            </Col>
        }
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
            // WILL BE FIXED WHEN SOME CACHING IS IMPLEMENTED
        }}>
        <Container style={{width: "100%", marginTop: "25px"}} fluid={true}>
            <Row>
                {postView}
            </Row>
        </Container>
        </div>

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