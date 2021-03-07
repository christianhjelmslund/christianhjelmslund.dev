import React from "react";

const ExternalNavigation = props => (
    <img style={{
        cursor: "pointer",
        width: "64px",
        height: "64px",
        marginLeft: "10px",
        marginRight: "10px"
    }} src={props.src} alt={props.alt} onClick={() =>
        window.open(props.link)}>
    </img>
)

export default ExternalNavigation