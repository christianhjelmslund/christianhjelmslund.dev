import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import NavigationItems from "../../components/UI/NavigationBar/NavigationItems/NavigationItems";
import NavigationItem from "../../components/UI/NavigationBar/NavigationItem/NavigationItem";

configure({adapter: new Adapter()})

describe('<NavigationItems/>', () => {

    let wrapper
    beforeEach(function () {
        wrapper = shallow(<NavigationItems/>)
    })

    it('it should find three NavigationItems', function () {
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    });

    it('it should have a home NavigationItem', function () {
        expect(wrapper.contains(<NavigationItem link="/" exact>Home</NavigationItem>)).toEqual(true)
    });

    it('it should have a posts NavigationItem', function () {
        expect(wrapper.contains(<NavigationItem link="/posts">Posts</NavigationItem>)).toEqual(true)
    });

    it('it should have an investing NavigationItem', function () {
        expect(wrapper.contains(<NavigationItem link="/investing">Investing</NavigationItem>)).toEqual(true)
    });

})