import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import About from "../../components/AboutMe/About";
import StyledTextOverlay from "../../components/UI/StyledComponents/StyledTextOverlay";
import Post from "../../containers/Posts/Post/Post";

configure({adapter: new Adapter()})

describe("<AboutMe/>", function () {
    it('should contain a <StyledTextOverlay/>', function () {
        const wrapper = shallow(<About/>)
        expect(wrapper.exists(StyledTextOverlay)).toEqual(true)
        expect(wrapper.exists(Post)).toEqual(true)
    })
})