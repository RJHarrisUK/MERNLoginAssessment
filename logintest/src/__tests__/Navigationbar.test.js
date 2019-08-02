import React from "react";
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";
import Navigationbar from '../components/Navigationbar.js';

it("render a navigation bar comp", () => {


    const wrapper = renderer.create(
        <MemoryRouter>

            <Navigationbar />

        </MemoryRouter>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();

}); 