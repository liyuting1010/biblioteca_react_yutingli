import React from "react";
import axios from "axios";
import {RecordTableComponent} from "./RecordTableComponent";

export class RecordComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            records: []
        }
    }

    async componentDidMount() {
        const result = await axios.get(`/record/${window.username}`)
            .then(res => res.data);
        this.setState({records: result});
    }

    render() {
        return (
            <div className="records dialog">
                <p> {window.username} welcome! </p>
                <div>
                    <RecordTableComponent recordsList={this.state.records}/>
                </div>
                <div>
                    <button type="button" className="return-main-panel App-button" onClick={this.props.return}>
                        Return
                    </button>
                </div>
            </div>
        );
    }
}
