import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import Routerer from '../components/Routerer.js';

it("render the router comp", () => {

    const wrapper = renderer.create(
        <MemoryRouter>

            <Routerer />

        </MemoryRouter>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();

}); 