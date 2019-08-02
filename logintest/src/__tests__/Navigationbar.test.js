import React from "react";
import { mount } from "enzyme";
import Navigationbar from '../components/Navigationbar.js';

it("render a navigation bar comp", () => {

    const wrapper = mount(<Navigationbar />);

    expect(wrapper).toMatchSnapshot();

}); 