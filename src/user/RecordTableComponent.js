import {Table} from "react-bootstrap";
import React from "react";

export class RecordTableComponent extends React.Component {
    render() {
        let recordTable = [];
        this.props.recordsList.forEach((item, index) => recordTable.push(
            <tr key={index}>
                <td>{item.bookId}</td>
                <td>{item.bookName}</td>
                <td>{item.borrowDate}</td>
                <td>{item.returnDate}</td>
            </tr>));

        if (!!recordTable.length) {
            return (
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>book id</th>
                        <th>book name</th>
                        <th>borrow date</th>
                        <th>return date</th>
                    </tr>
                    </thead>
                    <tbody>{recordTable}</tbody>
                </Table>
            );
        } else {
            return(
                <p>Sorry, you don't have borrow record!</p>
            )
        }
    }
}
