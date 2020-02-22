import React from "react";
import axios from "axios";
import {BookTableComponent} from "./BookTableComponent";

export class ViewAllBooksComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showViewAllBooks: false,
            showPopup: false
        };
        this.toggleButtonShow = this.toggleButtonShow.bind(this);
        this.togglePopupShow = this.togglePopupShow.bind(this);
    }

    toggleButtonShow() {
        this.setState({
            showViewAllBooks: !this.state.showViewAllBooks
        })
    }


    togglePopupShow() {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    async componentDidMount() {
        const response = await axios.get("/getAll");
        this.setState({books: response.data});
    }

    renderAllBookTable() {
        return (
            <div className="view-all-book-form">
                <div>
                    <BookTableComponent booksList={this.state.books}/>
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
            <div className="content-block view-all-book">
                {block}
            </div>
        )
    }
}
