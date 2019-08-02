import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigationbar from './Navigationbar.js';
import RegisterUser from './RegisterUser.js';
import LoginUser from './LoginUser.js';
import UserList from './UserList.js';

export default class Routerer extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getAll();
    }

    getAll = () => {
        axios
            .get('http://localhost:5000/User/all')
            .then(response => {

                this.setState({
                    data: response.data
                })
                console.log(response.data);
            })
    }

    render() {
        return (
            <div>
                <Router>
                    <Navigationbar />
                    <Route exact path="/" render={() => <RegisterUser onload={this.onLoad} />} />
                    <Route path="/Login" render={() => <LoginUser data={this.state.data} />} />
                    <Route path="/List" render={() => <UserList data={this.state.data} />} />
                </Router>
            </div>
        )
    }

}