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
            {/* <p>Price: {book.saleInfo.listPrice.amount}</p> */}
            <p>Description: {book.volumeInfo.description}</p>
          </div>
        </div>
      );
    });
    // const books = this.props.books.map((book, i) => {

    //     // const title = book.volumeInfo.title;
    //     // const author = book.volumeInfo.authors[0];
    //     const amount = book.saleInfo.listPrice.amount.toString();

    //   return (
    //     <div className="book" key={i}>
    //       {/* <div className="book-info">
    //         <p>Title: {title}</p>
    //         <p>Author: {author}</p> */}
    //           <p>Price: {amount}</p>
    //         <p>{book.volumeInfo.description}</p>
    //       {/* </div> */}
    //       {/* <img className="book-cover" src={bookTitle.Cover} alt={`Cover for ${book.volumeInfo.title}`} /> */}
    //     </div>
    //   );
    // });

    // // .map((i) =>
    // //     <div className="book" key={i}>
    // //         <div className="book-info">
    // //         <p>Title: {i.volumeInfo.title}</p>
    // //         {/* <p>Author: {book.Author}</p>
    // //         <p>Price: {book.Price}</p>
    // //         <p>{book.Description}</p> */}
    // //         </div>
    // // {/* <img className="book-cover" src={bookTitle.Cover} alt={`Cover for ${book.volumeInfo.title}`} /> */}
    // //     </div>
    // // )

    return <div className="books-list">{books}</div>;
  }
}

Booklist.defaultProps = {
  books: []
};
