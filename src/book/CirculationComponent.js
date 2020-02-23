import React from "react";
import {OperateBookComponent} from "./OperateBookComponent";

export class CirculationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDialog: false,
            result: null,
            inputValue: '',
            buttonValue: ''
        };
        this.toggleDialogShow = this.toggleDialogShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    toggleDialogShow() {
        this.setState({
            showDialog: !this.state.showDialog
        })
    }

    handleChange(e) {
        this.setState({inputValue: e.target.value});
    }

    onSubmit(e) {
        this.setState({
            buttonValue: e.target.value,
            showDialog: !this.state.showDialog
        });
    }

    render() {
        return (
            <div>
                <form className="App-form">
                    <label>
                        Enter the book id:
                        <input value={this.state.inputValue} onChange={this.handleChange}/>
                    </label>
                </form>
                <div>
                    <button value="lend" onClick={this.onSubmit}> lend</button>
                    <button value="return" onClick={this.onSubmit}> return</button>
                    {
                        this.state.showDialog && window.loginState ?
                            <OperateBookComponent
                                bookId={this.state.inputValue}
                                operation={this.state.buttonValue}
                                closeDialog={this.toggleDialogShow}
                            /> :
                            <p>
                                Please login first!
                            </p>
                    }
                </div>
            </div>
        );
    }
}
