import {Table} from "react-bootstrap";
import React from "react";

export class BookTableComponent extends React.Component {
    render() {
        let bookTable = [];
        this.props.booksList.forEach((item, index) => bookTable.push(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td>{item.publicationYear}</td>
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
