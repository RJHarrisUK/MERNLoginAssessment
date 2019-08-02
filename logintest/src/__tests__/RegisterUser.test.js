import React from "react";
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";
import RegisterUser from '../components/RegisterUser.js';

it("render a register user comp", () => {

    const wrapper = renderer.create(
        <MemoryRouter>

            <RegisterUser />

        </MemoryRouter>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();

}); 