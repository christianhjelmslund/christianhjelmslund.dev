import React from 'react'

import {configure, shallow} from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import withErrorHandler from "../../hoc/withErrorHandler";
import Alert from "react-bootstrap/Alert";

configure({adapter: new Adapter()})

describe("<withErrorHandler/>", function () {
    it('needs to be implemented', function () {
        const wrapper = shallow(<withErrorHandler/>)
        expect(wrapper.contains(<Alert/>)).toEqual(false)
    })
})