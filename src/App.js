import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {ViewAllBooksComponent} from './ViewAllBooksComponent';

class App extends React.Component {

    login() {
        return axios.get("/login?username=Yuting1&password=password1").then(res => {
            console.log(res.data)
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Biblioteca system</h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                    {/*<button type="button" className="Login App-button" onClick={this.login}>Login</button>*/}
                    {/*<button type="button" className="Register App-button" onClick={this.register}>Register</button>*/}
                    <ViewAllBooksComponent />
                </header>
            </div>
        );
    }
}

export default App;
