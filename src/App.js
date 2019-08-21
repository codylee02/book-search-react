import React from "react";
import "./App.css";

import Header from "./Header/Header.js";
import Search from "./Search/Search.js";
import Booklist from "./Booklist/Booklist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  // handleSearch = ({bookType, title, printType}) => {
  //   const filterQuery = bookType !== 'No Filter' ? `&filter=${bookType}` : '';
  //   fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=${title}&printType=${printType}${filterQuery}&key=`
  //   ).then(res => res.json()).then(books => {
  //     this.setState({ books });
  //   })
  // }
  handleSearch = (e, searchTerm, printType, bookType) => {
    e.preventDefault();
    console.log(searchTerm, "from handel", printType, bookType);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyAQG9RGL_tzUq2rlmepUugyarJw-hjK5e0`
    )
      .then(res => res.json())
      .then(books => {
        const booksArr = books.items;
        this.setState({
          books: booksArr
        });
      });
  };

  render() {
    return (
      <>
        <Header />
        <Search
          handleSearch={(e, searchTerm, printType, bookType) =>
            this.handleSearch(e, searchTerm, printType, bookType)
          }
        />
        <Booklist books={this.state.books} />
      </>
    );
  }
}

export default App;
