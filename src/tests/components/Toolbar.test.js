import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import Toolbar from "../../components/UI/Toolbar/Toolbar";
import NavigationItems from "../../components/UI/Toolbar/NavigationItems/NavigationItems";

configure({adapter: new Adapter()})

describe("<Toolbar/>", function () {
    it('should contain a <NavigationItems/>', function () {
        const wrapper = shallow(<Toolbar/>)
        expect(wrapper.contains(<NavigationItems/>)).toEqual(true)
    })
})