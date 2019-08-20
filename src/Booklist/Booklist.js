import React from 'react';

import './Booklist.css';

export default class Booklist extends React.Component {
    render() {
        const books = this
            .props
            .books
            .map((bookTitle, i) => 
                <div className="book" key={i}>
                    <div className="book-info">
                    <p>Title: {bookTitle.Title}</p>
                    <p>Author: {bookTitle.Author}</p>
                    <p>Price: {bookTitle.Price}</p>
                    <p>{bookTitle.Description}</p>
                    </div>
                    <img className="book-cover" src={bookTitle.Cover} alt={`Cover for ${bookTitle.Title}`} />
                </div>
            )

        return (
            <div className="books-list">
                {books}
            </div>
        )
    }
}

Booklist.defaultProps = {
    books: []
}