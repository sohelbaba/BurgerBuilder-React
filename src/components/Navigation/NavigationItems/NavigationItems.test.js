// import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure, shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import NavigationItems from "./NavigationItems";

configure({ adapter: new Adapter() })

describe('<NavigationItems>', () => {

    let wrapper = ''
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />)
    })

    it('should return two <Navigation Link> items if not authenticate', () => {
        expect(wrapper.find(Link)).toHaveLength(2)
    })

    it('should return three <Navigation Link> items if authenticate', () => {
        wrapper.setProps({ auth: true })
        expect(wrapper.find(Link)).toHaveLength(3)
    })
})
