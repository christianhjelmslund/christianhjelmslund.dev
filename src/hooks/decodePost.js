import React from "react";
import {Image} from "react-bootstrap";
import styles from "../containers/Posts/Post/PostPage.module.css";

export default post => {
    if (!post) { return post }

    const components = []
    if (post.content) {
        for (let paragraph in post.content) {
            paragraph = post.content[paragraph]
            components[paragraph.idx] = <p style={{marginTop: "16px"}} key={paragraph.idx} src={paragraph.url}>{paragraph.content}</p>
        }
    }
    if (post.images) {
        for (let img in post.images) {
            img = post.images[img]
            components[img.idx] = <div key={img.idx} className={styles.divImg}>
                <Image className={"img-fluid"} src={img.url}/>
            </div>
        }
    }
    return components
}