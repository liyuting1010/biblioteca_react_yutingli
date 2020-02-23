import React from "react";
import './App.css';
import axios from "axios";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: '',
            responseStatus: ''
        };
    }

    async componentDidMount() {
        await axios.get(`/login?username=${this.props.usernameInput}&password=${this.props.passwordInput}`)
            .then(res => {
                global.loginState = true;
                this.setState({
                    responseStatus: res.status,
                    result: res.data
                });
            })
            .catch(error => {
                this.setState({
                    responseStatus: error.response.status,
                    result: error.response.data
                })
            });
    }

    render() {
        if (this.state.responseStatus === 200) {
            window.loginState = true;
            return (
                <div>
                    {this.state.result}
                </div>
            )
        } else {
            return (
                <div>
                    {this.state.result}
                </div>
            )
        }
    }
}
