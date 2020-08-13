import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Post = (props) => {
    return (
        <Card >
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <p>{props.author}</p>
                <Card.Text>
                    {props.content}
                </Card.Text>
                <Button variant="primary">Read full post</Button>
            </Card.Body>
        </Card>
    )
}

export default Post