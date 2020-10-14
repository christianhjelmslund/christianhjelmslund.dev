import React from "react";
import {Button} from "react-bootstrap"
import styled from "styled-components";

const StyledTitle = styled.div`
        color: white;
        font-size: xxx-large;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.85);
        padding: 20px;
        border-radius: 10px;
`

const StyledContent = styled.div`
        color: white;
        font-size: large;
        font-weight: bold;
`

const StyledTextOverlay = (props) => (
    <div style={{
        margin: "5% 25%"
    }}>
        <StyledTitle>
            {props.title}
            <StyledContent>
                {props.content}
            </StyledContent>
        </StyledTitle>
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <Button variant={"danger"}>
                READ MORE
            </Button>
        </div>
    </div>
)

export default StyledTextOverlay