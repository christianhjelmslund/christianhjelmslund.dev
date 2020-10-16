import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import Home from "../../components/Home/Home";
import StyledTextOverlay from "../../components/UI/StyledComponents/StyledTextOverlay";
import Post from "../../containers/Posts/Post/Post";

configure({adapter: new Adapter()})

describe("<Home/>", function () {
    it('should contain a <StyledTextOverlay/>', function () {
        const wrapper = shallow(<Home/>)
        expect(wrapper.exists(StyledTextOverlay)).toEqual(true)
        expect(wrapper.exists(Post)).toEqual(true)
    })
})