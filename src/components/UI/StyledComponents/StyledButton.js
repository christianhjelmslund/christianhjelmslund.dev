import Button from "react-bootstrap/Button";
import React from "react";

const StyledButton = (props) => (
    <Button variant={props.variant}
            style={{border: "2px solid white"}}
            onClick={props.clicked}>
        {props.buttonTitle}
    </Button>
)

export default StyledButton