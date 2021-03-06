import React from "react";
import styles from "../../containers/Posts/Post/PostPage.module.css";
import Emoji from "../Emoji/Emoji";
import { NavLink } from 'react-router-dom'

const AboutMe = () => {
    return (
        <article className={styles.article}>
            <h1 className={styles.title}>About me {<Emoji symbol={"🤙🏼"}/>}</h1>
            <p className={styles.content}>
                My name is Christian Hjelmslund and I'm 25 years old. I'm studying a Master's in Computer Science and Engineering and working as a Student Software Engineer @ {<a href="https://www.veo.co/">Veo Technologies</a>}. I am passionate about tech, innovation and science. This passion is driven by curiosity and eagerness to play with the newest technologies. This can vary from developing a new app, to deploy a smart contract on a blockchain. It can also mean happily cheering on while watching a live stream of a SpaceX rocket being deployed into orbit. However, it is not all about. I am a happy person that tries to bring a positive attitude wherever I go. I enjoy Friday nights out with friends, to travel, networking, investing and lastly, I have a great passion for football (been playing for 17 years and I follow AC Milan blindly)
            </p>
            <h1 className={styles.title}>What is the point of this website? <Emoji symbol={"🤔"}/></h1>
            <p className={styles.content}>
                The main focus is on technology, software development and the life of a developer, but I will probably also aim a bit wide with some
                posts. That could include posts about investments, financial independence and maybe even politics.</p>
            <p className={styles.content}>
                The posts will always have some sort of core centering around IT, so if I write a post about politics, it could be topics such as why there is a lack of Lastly, the target audience is people who are interested in tech or at least curious about it. Some of the topics will be aimed for people who already know how to code, build software and in general have a high knowledge within the domain. However, as a future engineer it is crucial to be able to explain rocket science (yeah, relax, I'm not that cool to do rocket science, but you get the gist) to non-technical people, which is something I can learn here</p>
            <p className={styles.content}>
                Alright, so I think you get the gist. I'd say a good starting point is to read this post on how I build this site and why I choose to do it the way I did. {<NavLink to={'posts/post1'}>Enjoy️</NavLink>}
            </p>
        </article>
    )
}

export default AboutMe