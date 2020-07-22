import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import { Posts } from "../../containers/Posts/Posts";
import Post from "../../containers/Posts/Post/Post";

configure({adapter: new Adapter()})

describe('<Posts/>', () => {

    let wrapper

    beforeEach(function () {
        wrapper = shallow(<Posts/>)
    })

    it('it should not have any <Post/> children', function () {
        expect(wrapper.contains(<Post/>)).toEqual(false)
    });

    it('it should have 1 <Post/>', function () {
        wrapper.setProps({posts: [{}]})
        expect(wrapper.find(Post)).toHaveLength(1)
    });

    it('it should have 5 <Post/>', function () {
        wrapper.setProps({posts: [{},{},{},{},{}]})
        expect(wrapper.find(Post)).toHaveLength(5)
    });



    it('it should have a specific <Post/>', function () {
        wrapper.setProps({posts: [{},{
                title: "title",
                author: "author",
                content: "this is content",
                popularity: 23,
                categories: ["tech", "business"]
            },{},{},{}]})
        expect(wrapper.contains(<Post title={"title"}
                                      author={"author"}
                                      content={"this is content"}
                                      popularity={23}
                                      categories={["tech", "business"]}
                                      date={undefined}/>)).toEqual(true)
    });


})