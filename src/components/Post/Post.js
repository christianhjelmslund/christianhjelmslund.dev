import React from "react";

import Card from 'react-bootstrap/Card'
import StyledButton from "../UI/StyledComponents/StyledButton";
import zlatan from "./zlatan.jpg"

import { Route } from 'react-router-dom'

const Post = (props) => {
    let pointer = "pointer"
    let buttonDisabled = false
    let onClick = (history) => {
        history.push({
            pathname: "/posts/"+props.id,
            post: {
                id: props.id,
                title: props.title,
                content: props.content,
                key: props.id,
                date: props.date,
                author: props.author,
                popularity: props.popularity,
                category: props.category
            }
        })
    }

    if (props.initiatedFromPostPage) {
        pointer = null
        buttonDisabled = true
        onClick = () => {}
    }

    return (<Route render={({ history }) => (
        <Card text={"white"} style={{marginBottom: "20px", backgroundColor: "black", cursor: pointer}}
            onClick={() => onClick(history)}>
            <Card.Img variant="top" src={zlatan} />
            <Card.Body>
                <Card.Title>{props.title}
                    <br/>
                    <span style={{fontSize:"small", color:"gray"}}>20/02/2020</span>
                </Card.Title>
                <Card.Text style={{
                    whiteSpace: "pre-wrap",
                }}>
                    {props.content}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <flex-gap style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    gap: "12px"
                }}>
                    {props.category ? props.category.map(category => {
                        return (<StyledButton disabled = {buttonDisabled}
                                              key={category}
                                              variant="custom_dark"
                                              buttonTitle={category}
                                              clicked={() => props.filter(category)}/>)
                    }):null}
                </flex-gap>
            </Card.Footer>
        </Card>)}/>
    )
}

export default Post