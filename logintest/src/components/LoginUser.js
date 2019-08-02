import React, { Component } from 'react';
import axios from 'axios';

export default class LoginUser extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            error: "",
        };
    }

    loginUser = (event) => {

        event.preventDefault();
        console.log(event.target[0].value)

        let loginDetails = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
        }

        axios
            .post("http://localhost:5000/User/loginUser", loginDetails)
            .then(response => {

                this.setState({ "error": (response.data) })

                console.log(response.data)

            }).catch(err => console.log(err))
    }

    render() {

        return (
            <div>
                <h1>Login User</h1>
                <form onSubmit={this.loginUser}>
                    <input id="username" type="text" placeholder="Username"></input>
                    <br></br>
                    <input id="email" type="text" placeholder="E-mail"></input>
                    <br></br>
                    <input id="password" type="text" placeholder="Password"></input>
                    <p style={{ color: 'red' }}>{this.state.error}</p>
                    <br></br>
                    <button type="submit" >Login User</button>
                </form>
            </div>
        )
    }

}