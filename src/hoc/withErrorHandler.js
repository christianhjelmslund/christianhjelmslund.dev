import React from "react";
import Alert from "react-bootstrap/Alert"
import api from "../api/api"
import useHttpErrorHandler from "../hooks/httpErrorHandling"

const withErrorHandler = (WrappedComponent) => {
    return props => {
        const [error, clearError] = useHttpErrorHandler(api)

        const errorDismissed = () => {
            clearError()
            props.history.push("/")
        }

        return (
            <React.Fragment>
                <WrappedComponent {...props}/>
                {error ? <Alert variant="danger" dismissible onClose={() => errorDismissed()}>
                    <Alert.Heading>Oh snap! You got an error while fetching posts!</Alert.Heading>
                    <p>
                        Please try again another time. Sorry for the inconvenience 😕
                    </p>
                </Alert> : null}
            </React.Fragment>)
    }
}
export default withErrorHandler;