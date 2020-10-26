import React from "react";
import {Button} from "react-bootstrap"
import styled from "styled-components";

const StyledTitle = styled.div`
        color: white;
        font-size: 48px;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.75);
        padding: 20px;
        border-radius: 10px;
`

const StyledContent = styled.div`
        color: white;
        font-size: 16px;
        font-weight: bold;
`

const StyledTextOverlay = (props) => {
    const margin = window.screen.width >= 1280 ? "5% 25%" : "5% 5%"
    const titleFontSize = window.screen.width >= 1280 ? "64px" : "32px"
    const contentFontSize = window.screen.width >= 1280 ? "18px" : "16px"
    return (<div style={{
        margin: margin // if on phone, then change the margin!
    }}>
        <StyledTitle style={{fontSize:titleFontSize}}>
            {props.title}
            <StyledContent style={{fontSize:contentFontSize}}>
                {props.content}
            </StyledContent>
        </StyledTitle>
        <div style={{textAlign: "center", marginTop: "30px"}}>
            <Button variant={"danger"}>
                Let's Go!
            </Button>
        </div>
    </div>)
}

export default StyledTextOverlay