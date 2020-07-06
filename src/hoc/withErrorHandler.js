import React from "react";
import Alert from "react-bootstrap/Alert"
const withErrorHandler = (WrappedComponent) => {

    return props => {
        return (
            <React.Fragment>
            <WrappedComponent {...props}/>
            {props.error ? <Alert variant="danger" dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>
                        Change this and that and try again.
                    </p>
            </Alert> : null}
        </React.Fragment>)
    }
}
export default withErrorHandler;