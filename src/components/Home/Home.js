import React, {Fragment} from "react";
import StyledTextOverlay from "../UI/StyledComponents/StyledTextOverlay";
import styled from "styled-components";
import BackgroundImage from "../../assets/images/background.svg"

const StyledText = styled.p`
        color: black;
        font-size: xxx-large;
        font-weight: bold;
        padding: 50px;
        text-align: center;
`
const Home = () => {
    return (
        <Fragment>
            <div style={{
                position: "relative",
                marginTop: "0%",
                overflow: "auto",
                backgroundImage: `url(${BackgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
                // WILL BE FIXED WHEN SOME CACHING IS IMPLEMENTED
            }}>
                <StyledTextOverlay
                    title={"About my site"}
                    content={"The main focus is on technology, software development and the life of a developer, but I will probably also aim a bit wide with some\n" +
                    "posts. That could include posts about investments, financial independence and maybe even politics (not sure if I want to go down on that road yet 🤪).\n" +
                    "The posts will always have some sort of core centering around IT, so if I write a post about politics, it could be topics such as why there is a lack of\n" +
                    "IT people in Denmark etc. " +
                    "Lastly, the target audience is people who are interested in tech or at least curious about it. Some of the topics will be aimed for people who already know how to code, build software and in general have a high knowledge within the domain. However, as a future engineer\n" +
                    "it is crucial to be able to explain rocket science (yeah, relax, I'm not that cool to do rocket science, but you get the gist) to non-technical people, which is something I can learn here.\n"}>
                </StyledTextOverlay>
            </div>
            <div style={{
                height: "100%",
                backgroundColor: "white"
            }}>
                <StyledText>
                    FEATURED BLOG POST
                </StyledText>
            </div>
            {/*<div style={{*/}
            {/*    margin: "2.5% 10%"*/}
            {/*}}>*/}
            {/*    /!*{INSERT FEATURED POST}*!/*/}
            {/*</div>*/}
        </Fragment>
    )
}

export default Home