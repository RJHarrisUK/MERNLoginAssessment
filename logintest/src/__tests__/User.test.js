import React from "react";
import User from '../components/User.js';
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";

it("render a user comp", () => {

    const wrapper = renderer.create(
        <MemoryRouter>

            <User />

        </MemoryRouter>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();

}); 