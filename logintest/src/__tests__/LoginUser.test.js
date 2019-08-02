import React from "react";
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";
import LoginUser from '../components/LoginUser.js';

it("render a login user comp", () => {

    const wrapper = renderer.create(
        <MemoryRouter>

            <LoginUser />

        </MemoryRouter>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();

}); 