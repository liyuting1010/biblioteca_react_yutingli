import React from "react";
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";
import Login from "./Login";

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameInput: '',
            passwordInput: '',
            preformLogin: false
        };

        this.toggleLogin = this.toggleLogin.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }

    toggleLogin() {
        this.setState({
            preformLogin: !this.state.preformLogin
        })
    }

    validateForm() {
        return !!this.state.usernameInput.length && !!this.state.passwordInput.length
    }

    setUsername(username) {
        this.setState({
            usernameInput: username.target.value
        });
    }

    setPassword(password) {
        this.setState({
            passwordInput: password.target.value
        });
    }

    render() {
        const usernameInput = this.state.usernameInput;
        const passwordInput = this.state.passwordInput;

        return (
            <div className="Login dialog">
                <FormGroup onSubmit={this.onSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            value={usernameInput}
                            onChange={this.setUsername}
                            type="username"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <label>Password</label>
                        <FormControl
                            value={passwordInput}
                            onChange={this.setPassword}
                            type="password"
                        />
                    </FormGroup>
                    <button type="submit" onClick={this.toggleLogin}>
                        Login
                    </button>
                </FormGroup>
                <div>
                    <button onClick={this.props.returnMainPage}>close</button>
                </div>
                {
                    this.state.preformLogin && this.validateForm ? <Login usernameInput={usernameInput} passwordInput={passwordInput}/> : null
                }
            </div>
        );
    }
}
