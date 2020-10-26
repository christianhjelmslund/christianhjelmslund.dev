import React from "react";

import Card from 'react-bootstrap/Card'
// import Dropdown from 'react-bootstrap/Dropdown'
import StyledButton from "../../../components/UI/StyledComponents/StyledButton";

import styled from 'styled-components'

const StyledText = styled.span`
    font-style: italic
`
// const StyledToggle = styled(Dropdown.Toggle)`
//     :after {
//         display: none;
//     }
// `;
//
// const StyledDropdown = styled(Dropdown)`
//     position: absolute;
//     right: 10px;
//     top: 5px;
// `

const Post = (props) => {
    return (
        <Card bg={"dark"} text={"white"} style={{marginBottom: "20px"}}>
            <Card.Header as={"h5"}>
               <StyledText>{props.author}</StyledText>
                    {/*NOT NEEDED FOR NOW*/}
                    {/*<StyledDropdown>*/}
                    {/*    <StyledToggle variant="custom_dark" id="dropdown-basic" size="sm">*/}
                    {/*        ...*/}
                    {/*        <Dropdown.Menu>*/}
                    {/*            <Dropdown.Item href="#/action-1">Test</Dropdown.Item>*/}
                    {/*        </Dropdown.Menu>*/}
                    {/*    </StyledToggle>*/}
                    {/*</StyledDropdown>*/}
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.content}
                </Card.Text>
                <StyledButton variant="custom_dark_cyan" buttonTitle={"Read more"}/>
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
                <StyledText>
                    {props.date}
                </StyledText>
            </Card.Footer>
        </Card>
    )
}

export default Post