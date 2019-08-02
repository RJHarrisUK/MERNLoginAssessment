import React from "react";
import { mount } from "enzyme";
import RegisterUser from '../components/RegisterUser.js';

it("render a register user comp", () => {

    const wrapper = mount(<RegisterUser />);

    expect(wrapper).toMatchSnapshot();

}); 