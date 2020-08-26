import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import styled from 'styled-components'

const StyledCard = styled(Card)`
        margin-bottom: 20px;
    `

const StyledButton = styled(Button)`
    border: 2px solid white
`

const StyledText = styled.span`
    font-style: italic
`

const Post = (props) => {
    return (
        <StyledCard bg={"dark"} text={"white"}>
            <Card.Header as={"h5"}>
               <StyledText>Christian Hjelmslund</StyledText>
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <p>{props.author}</p>
                <Card.Text>
                    {props.content}
                </Card.Text>
                <StyledButton variant={"dark"}>Read full post</StyledButton>
            </Card.Body>
        </StyledCard>
    )
}

export default Post