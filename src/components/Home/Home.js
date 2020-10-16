import React, {Fragment} from "react";
import BackgroundImage from "../../assets/images/background.jpg"
import StyledTextOverlay from "../UI/StyledComponents/StyledTextOverlay";
import Post from "../../containers/Posts/Post/Post";
import styled from "styled-components";
import NavigationBar from "../UI/NavigationBar/NavigationBar";

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
            }}>
                <StyledTextOverlay
                    title={"CHRISTIAN HJELMSLUND"}
                    content={"I'm still a bit unsure what the exact purpose of this site is, but in general it is a place where I can convey interesting thoughts\n" +
                    "on a various of topics. The main focus is on technology, software development and the life of a developer, but I will probably also aim a bit wide with some\n" +
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
            <div style={{
                margin: "2.5% 10%"
            }}>
                <Post key={"id"}
                      title={"Remote Full Stack Software Engineer to optimize the world of Container Shipping"}
                      author={"Stack Overflow"}
                      content={"Container Shipping: An industry with huge potential to make a difference\n" +
                      "\n" +
                      "90% of all goods globally are transported through a container. The largest container vessels are 400 meters long and can transport more than 23,000 containers at a time. The container shipping industry is the backbone and enabler of global trade, but it is struggling. The industry suffers from operational inefficiencies as 50%+ of all container vessels globally are delayed coming into port, and key planning processes are done manually on a global scale. This results in high operational costs, lost revenue, and unnecessarily high greenhouse gas emissions. At Portchain, we work closely with our customers to reduce operational complexity and optimize planning through software and innovative analytics.\n" +
                      "\n" +
                      "The role\n" +
                      "\n" +
                      "Portchain is an exciting fast growing tech company where you will work with an incredible team on applications with a truly global impact. We are therefore seeking a talented Full Stack Software Engineer to join our software engineering team that uses data, mathematical modeling, machine learning, and optimization to help our users get full transparency on their operations and make better decisions.\n" +
                      "\n" +
                      "You will work with the development team to build advanced features into our products and ensure these are robust and reliable for use in live operations.\n" +
                      "\n" +
                      "Portchain is an exciting fast-growth company where you will work with an incredible team on applications with a truly global impact.\n" +
                      "\n" +
                      "Tasks and Responsibilities\n" +
                      "\n" +
                      "Lead the implementation of end-to-end features from specifications and designs\n" +
                      "Problem solve architectural decisions with the team\n" +
                      "Maintain quality and ensure responsiveness of applications\n" +
                      "Maintain code integrity and organization\n" +
                      "Understand and follow security and data protection best practices\n" +
                      "Role Requirements\n" +
                      "\n" +
                      "5 years minimum of professional experience in Software Engineering\n" +
                      "Experience with any or all of the following technologies: Node.js, React, TypeScript\n" +
                      "Good knowledge of technology across several domains\n" +
                      "Solid analytical and problem solving skills paired with the ability to develop creative and efficient solutions\n" +
                      "Proficiency in automated unit and integration tests\n" +
                      "Previous professional experience working remotely\n" +
                      "A deep understanding that we always have to navigate between the immediate impact of a feature and the technical debt incurred by its implementation. You are able to carefully weigh the pros and cons and make a choice in favour of the company and the team\n" +
                      "Energized by complex and creative individual and team problem solving"}
                      filter={() => {}}
                      categories={["featured"]}/>
            </div>
        </Fragment>
    )
}

export default Home