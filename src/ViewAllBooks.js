import React from "react";
import axios from "axios";
import {Table} from 'react-bootstrap';

export class ViewAllBooks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showViewAllBooks: false
        };
        this.toggleButtonShow = this.toggleButtonShow.bind(this);
    }

    toggleButtonShow() {
        this.setState({
            showViewAllBooks: !this.state.showViewAllBooks
        })
    }

    async componentDidMount() {
        const response = await axios.get("/getAll");
        this.setState({books: response.data});
    }

    renderViewAllBookContent() {
        return (
            <div className="view-all-book-form">
                <div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>author</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.books.map(function(item, key){
                            return(
                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.author}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </Table>
                </div>
                <div>
                    <button type="button" className="view-all-book-form" onClick={this.toggleButtonShow}>Return</button>
                </div>
            </div>
        );
    }

    renderViewAllBookButton() {
        return (
            <div className='view-all-book App-button'>
                <button type="button" className="AllBook App-button" onClick={this.toggleButtonShow}>View All Books</button>
            </div>
        );
    }

    render() {
        const block = this.state.showViewAllBooks ? this.renderViewAllBookContent() : this.renderViewAllBookButton();
        return (
            <div className="content-block view-all-book">
                {block}
            </div>
        )
    }
}
