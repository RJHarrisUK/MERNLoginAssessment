import React from "react";
import { shallow } from "enzyme";
import UserList from '../components/UserList.js';

it("render a user list comp", () => {

    const wrapper = shallow(<UserList />);

    expect(wrapper).toMatchSnapshot();

}); 