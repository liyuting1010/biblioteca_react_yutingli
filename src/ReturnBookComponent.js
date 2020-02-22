import React from "react";
import axios from "axios";

export class ReturnBookComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null
        }
    }

    async componentDidMount() {
        const message = await axios.post("/return/" + this.props.id)
            .then(res => res.data)
            .catch(error => error.response.data);
        this.setState({result: message});
    }

    render() {
        return (
            <div className='popup'>
                <div className='popup-inner'>
                    <p>{this.state.result}</p>
                    <button onClick={this.props.closePopup}>close</button>
                </div>
            </div>
        );
    }
}
