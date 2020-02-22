import {Table} from "react-bootstrap";
import React from "react";
import {LendBookComponent} from "./LendBookComponent";
import {ReturnBookComponent} from "./ReturnBookComponent";

export class BookTableComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        };
        this.togglePopupShow = this.togglePopupShow.bind(this);
    }

    togglePopupShow() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }


    renderLendBookButton(id) {
        return (
            <div>
                <button type="button" className="popup Table-button" onClick={this.togglePopupShow}>
                    lend
                </button>
                {this.state.showPopup ?
                    <LendBookComponent id={id} closePopup={this.togglePopupShow}/>
                    : null
                }
            </div>
        );
    }

    renderReturnBookButton(id) {
        return (
            <div>
                <button type="button" className="popup Table-button" onClick={this.togglePopupShow}>
                    return
                </button>
                {this.state.showPopup ?
                    <ReturnBookComponent id={id} closePopup={this.togglePopupShow}/>
                    : null
                }
            </div>
        );
    }

    render() {

        let bookTable = [];
        console.log(this.props.booksList);
        this.props.booksList.forEach(item => bookTable.push(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td>{item.publicationYear}</td>
                <td>{
                    this.renderLendBookButton(item.id)
                }</td>
                <td>{
                    this.renderReturnBookButton(item.id)
                }</td>
            </tr>));

        return (
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>author</th>
                    <th>publication year</th>
                </tr>
                </thead>
                <tbody>{bookTable}</tbody>
            </Table>
        );
    }
}
