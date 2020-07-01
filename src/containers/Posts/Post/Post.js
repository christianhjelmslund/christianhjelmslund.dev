import React from "react";
import Card from "../../../components/UI/Card/Card"

const Post = (props) => {
    return (
        <Card>
            <span>title: {props.title}</span>
            <span>author: {props.author}</span>
            <span>{props.content}</span>
        </Card>
    )
}

export default Post