import React from 'react';
import _ from 'lodash'
import { Table } from "reactstrap";

import User from './User.js'

export default function UserList(props) {

    const {
        data
    } = props;

    console.log(props);
    return (
        <div>
            <h1>User List</h1>
            <Table striped bordered hover variant="dark">
                <tbody>
                    {_.reverse(data).map((user) => (
                        <tr><td><User getAll={props.getAll} username={user.username} /></td></tr>
                    ))}
                </tbody>
            </Table>
        </div >
    );
}