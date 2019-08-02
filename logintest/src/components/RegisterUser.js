
import React, { Component } from 'react';
import axios from 'axios';

export default class RegisterUser extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            usernameError: "",
            emailError: "",
            passwordError: "",
            password2Error: ""
        };
    }

    createUser = (event) => {

        event.preventDefault();

        let newUser = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
            password2: event.target[3].value
        }

        axios
            .post("http://localhost:5000/User/createUser", newUser)
            .then(response => {

                this.setState({ "usernameError": JSON.stringify(response.data.username) })
                this.setState({ "emailError": JSON.stringify(response.data.email) })
                this.setState({ "passwordError": JSON.stringify(response.data.password) })
                this.setState({ "password2Error": JSON.stringify(response.data.password2) })

                console.log(response.data.username)
                console.log(response.data.email)
                console.log(response.data.password)
                console.log(response.data.password2)

            }).catch(err => console.log(err))
    }

    render() {

        return (
            <div>
                <h1>Register User</h1>
                <form onSubmit={this.createUser}>
                    <input id="username" type="text" placeholder="Username"></input>
                    <p style={{ color: 'red' }}>{this.state.usernameError}</p>
                    <br></br>
                    <input id="email" type="text" placeholder="E-mail"></input>
                    <p style={{ color: 'red' }}>{this.state.emailError}</p>
                    <br></br>
                    <input id="password" type="text" placeholder="Password"></input>
                    <p style={{ color: 'red' }}>{this.state.passwordError}</p>
                    <br></br>
                    <input id="password2" type="text" placeholder="Re-type Password"></input>
                    <p style={{ color: 'red' }}>{this.state.password2Error}</p>
                    <br></br>
                    <button type="submit" >Register User</button>
                </form>
            </div>
        )
    }

}