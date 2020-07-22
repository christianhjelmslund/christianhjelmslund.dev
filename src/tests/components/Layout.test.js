import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import Toolbar from "../../components/UI/Toolbar/Toolbar";
import Layout from "../../components/Layout/Layout";

configure({adapter: new Adapter()})

describe("<Toolbar/>", function () {
    it('should contain a <NavigationItems/>', function () {
        const wrapper = shallow(<Layout/>)
        expect(wrapper.contains(<Toolbar/>)).toEqual(true)
    })
})