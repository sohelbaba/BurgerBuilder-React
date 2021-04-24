import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure, shallow } from 'enzyme'
import React from 'react'
import { BurgerBuilder } from './BurgerBuilder'
import BuildControls from '../../components/Buildcontrols/BuildControls'

configure({ adapter: new Adapter() })


describe('<BurgerBuilder', () => {
    let wrapper = ''
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder initIngredents={() => { }} />)
    })

    it('should be return BurgerBuilderControls', () => {
        wrapper.setProps({ ingredents: { salad: 0 } })
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })
})