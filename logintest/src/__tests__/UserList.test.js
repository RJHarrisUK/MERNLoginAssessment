import React from "react";
import UserList from '../components/UserList.js';
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import axios from 'axios';
import _ from 'lodash';
jest.mock('axios');
jest.mock('lodash');

it("render a user list comp", async () => {

    const wrapper = renderer.create(
        <MemoryRouter>

            <UserList />

        </MemoryRouter>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();

}); 