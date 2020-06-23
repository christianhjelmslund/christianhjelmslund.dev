import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

configure({adapter: new Adapter()})

describe('<testComponent/>', () => {
    it('should pass the test', function () {
        // const wrapper = shallow(<TestComponent/>)
        // need to create a dummy store of redux to run the test
    });
})