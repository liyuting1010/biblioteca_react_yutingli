import React from "react";
import axios from "axios";
import {BookTableComponent} from "./BookTableComponent";
import {CirculationComponent} from "./CirculationComponent";

export class ViewAllBooksComponent extends React.Component {
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

    renderAllBookTable() {
        const booksList = this.state.books;
        return (
            <div className="view-all-book-form">
                <div>
                    <BookTableComponent booksList={booksList}/>
                </div>
                <div>
                    <CirculationComponent booksList={booksList}/>
                </div>
                <div>
                    <button type="button" className="return-main-panel App-button" onClick={this.toggleButtonShow}>Return
                    </button>
                </div>
            </div>
        );
    }

    renderViewAllBookButton() {
        return (
            <div className='view-all-book App-button'>
                <button type="button" className="allBook App-button" onClick={this.toggleButtonShow}>View All Books</button>
            </div>
        );
    }

    render() {
        const block = this.state.showViewAllBooks ? this.renderAllBookTable() : this.renderViewAllBookButton();
        return (
            <div className="content-block form">
                {block}
            </div>
        )
    }
}
