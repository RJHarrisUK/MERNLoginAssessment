import React from "react";
import { mount } from "enzyme";
import Routerer from '../components/Routerer.js';

it("render the router comp", () => {

    const wrapper = mount(<Routerer />);

    expect(wrapper).toMatchSnapshot();

}); 