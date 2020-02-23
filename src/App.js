import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginComponent from "./auth/LoginComponent";
import {ViewAllBooksComponent} from "./book/ViewAllBooksComponent";
import {RecordComponent} from "./user/RecordComponent";

window.loginState = false;
window.username = null;
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loginPage: false,
            recordPage: false
        };

        this.showLoginPage = this.showLoginPage.bind(this);
        this.showRecordPage = this.showRecordPage.bind(this);
    }

    showLoginPage() {
        this.setState({
            loginPage: !this.state.loginPage
        })
    }

    showRecordPage() {
        this.setState({
            recordPage: !this.state.recordPage
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Biblioteca system</h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div>
                        <button type="button" className="Login App-button" onClick={this.showLoginPage}>
                            Login
                        </button>
                        {
                            this.state.loginPage ? <LoginComponent returnMainPage={this.showLoginPage}/> : null

                        }
                    </div>
                    <div>
                        {
                            window.loginState ?
                                <button type="button" className="View-records App-button" onClick={this.showRecordPage}>
                                    My information</button> : null
                        }
                        {
                            this.state.recordPage ? <RecordComponent return={this.showRecordPage}/> : null
                        }
                    </div>
                    <ViewAllBooksComponent />
                </header>
            </div>
        );
    }
}

export default App;
