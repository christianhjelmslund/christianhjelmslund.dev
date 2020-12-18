import React from "react";

import Card from 'react-bootstrap/Card'
import StyledButton from "../../../components/UI/StyledComponents/StyledButton";
import zlatan from "./zlatan.jpg"

const Post = (props) => {
    return (
        <Card text={"white"} style={{marginBottom: "20px", backgroundColor: "black"}}>
            <Card.Img variant="top" src={zlatan} rounded />
            <Card.Body>
                <Card.Title>{props.title}
                    <br/>
                    <span style={{fontSize:"small", color:"gray"}}>20/02/2020</span>
                </Card.Title>
                <Card.Text>
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
                        return (<StyledButton key={category} variant="custom_dark" buttonTitle={category} clicked={() => props.filter(category)}/>)
                    }):null}
                </flex-gap>
            </Card.Footer>
        </Card>
    )
}

export default Post