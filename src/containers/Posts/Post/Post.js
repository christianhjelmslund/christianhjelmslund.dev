import React from "react";
// import Card from "../../../components/UI/Card/Card"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Post = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
            {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <p>{props.author}</p>
                <Card.Text>
                    {props.content}
                </Card.Text>
                <Button variant="primary">Read full post</Button>
            </Card.Body>
        </Card>

        // <Card>
        //     <span>title: {props.title}</span>
        //     <span>author: {props.author}</span>
        //     <span>{props.content}</span>
        // </Card>
    )
}

export default Post