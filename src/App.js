import React from 'react';
import './App.css';

import Header from './Header/Header';
import Search from './Search/Search';
import Booklist from './Booklist/Booklist'

const books = [
  {
    "Title": "my First Coding Book",
    "Author": "C. Warren Hollister",
    "Price": "$50.00",
    "Description": "the resulting volume is one that will be welcomed by students and general readers alike",
    "Cover": "http://books.google.com/books/content?id=qbygDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  },
  {
    "Title": "Henry VIII",
    "Author": "Alison Weir",
    "Price": "$15.50",
    "Description": "This is a triumph of historical writing whick will appeal equally to the general reader and the serious hisorian",
    "Cover": "http://books.google.com/books/content?id=iWEwDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      searchTerm: "",
      books: [],
    }
  }

  handleSearch(term) {
    
  }



  render() {
  return (
    <>
    <Header />
    <Search handleSearch={this.handleSearch}/>
    <Booklist books={books} />
    </>
  );
}
}

export default App;
