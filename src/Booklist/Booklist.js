import React from "react";

import "./Booklist.css";

export default class Booklist extends React.Component {
  render() {
    const books = this.props.books.map((book, i) => {
      return (
        <div className="book" key={i}>
          <img
            className="book-cover"
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt={`Cover for ${book.volumeInfo.title}`}
          />
          <div className="book-info">
            <p>Title: {book.volumeInfo.title}</p>
            <p>Author: {book.volumeInfo.authors[0]}</p>
            <p>Price: {book.saleInfo.listPrice ? `$${book.saleInfo.listPrice.amount}` : 'Not for sale' }</p>
            <p>Description: {book.volumeInfo.description}</p>
          </div>
        </div>
      );
    });

    return <div className="books-list">{books}</div>;
  }
}

Booklist.defaultProps = {
  books: []
};
