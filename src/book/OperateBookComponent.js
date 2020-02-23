import React from "react";
import axios from "axios";

export class OperateBookComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null
        }
    }

    async componentDidMount() {
        const message = await axios.post(`/${this.props.operation}/${this.props.bookId}?username=${window.username}`)
            .then(res => res.data)
            .catch(error => error.response.data);
        this.setState({result: message});
    }

    render() {
        return (
            !!this.props.bookId ?
                <div className='dialog'>
                    <p>{this.state.result}</p>
                    <button onClick={this.props.closeDialog}>close</button>
                </div> :
                <div className='dialog'>
                    <p>
                        {`Please enter the book id if you want to ${this.props.operation}`}
                    </p>
                </div>
        );
    }
}
