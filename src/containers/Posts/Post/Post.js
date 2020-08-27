import React from "react";

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

import styled from 'styled-components'

const StyledCard = styled(Card)`
    margin-bottom: 20px;
`

const StyledButton = styled(Button)`
    border: 2px solid white;
`

const StyledText = styled.span`
    font-style: italic
`
const StyledToggle = styled(Dropdown.Toggle)`
    :after {
        display: none;
    }
`;

const StyledDropdown = styled(Dropdown)`
    position: absolute;
    right: 10px;
    top: 5px;
`


const Post = (props) => {
    return (
        <StyledCard bg={"dark"} text={"white"}>
            <Card.Header as={"h5"}>
               <StyledText>{props.author}</StyledText>
                    <StyledDropdown>
                        <StyledToggle variant="custom_dark" id="dropdown-basic" size="sm">
                            ...
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Test</Dropdown.Item>
                            </Dropdown.Menu>
                        </StyledToggle>
                    </StyledDropdown>
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.content}
                </Card.Text>
                <StyledButton variant={"custom_dark_cyan"}>Read full post</StyledButton>
            </Card.Body>
            <Card.Footer>
                <flex-gap style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    gap: "12px"
                }}>
                    {props.categories.map(category => {
                        return (<StyledButton variant={"custom_dark"}>{category}</StyledButton>)
                    })}
                </flex-gap>
                <StyledText>
                    {props.date}
                </StyledText>
            </Card.Footer>
        </StyledCard>
    )
}

export default Post