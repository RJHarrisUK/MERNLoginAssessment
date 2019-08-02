import React from "react";
import { mount } from "enzyme";
import User from '../components/User.js';

it("render a user comp", () => {

    const wrapper = mount(<User />);

    expect(wrapper).toMatchSnapshot();

}); 