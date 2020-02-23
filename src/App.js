import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from "./auth/LoginComponent";
import {ViewAllBooksComponent} from "./book/ViewAllBooksComponent";

window.loginState = false;
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginPage: false
        };
        this.showLoginPage = this.showLoginPage.bind(this);
    }

    showLoginPage() {
        this.setState({
            loginPage: !this.state.loginPage
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Biblioteca system</h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <button type="button" className="Login App-button" onClick={this.showLoginPage}>
                        Login
                    </button>
                    {
                        this.state.loginPage ? <LoginComponent returnMainPage={this.showLoginPage}/> : null
                    }
                    {/*<button type="button" className="Register App-button" onClick={this.register}>Register</button>*/}
                    <ViewAllBooksComponent />
                </header>
            </div>
        );
    }
}

export default App;
