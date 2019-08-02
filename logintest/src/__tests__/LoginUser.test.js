import React from "react";
import { mount } from "enzyme";
import LoginUser from '../components/LoginUser.js';

it("render a login user comp", () => {

    const wrapper = mount(<LoginUser />);

    expect(wrapper).toMatchSnapshot();

}); 