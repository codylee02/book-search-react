import React from "react";

import FilterList from "../FilterList/FilterList";
import "./Search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  getSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  render() {
    return (
      <form className="Search">
        <div className="SearchBar">
          Search:
          <input
            placeholder="Search..."
            value={this.state.searchTerm}
            onChange={e => this.getSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>
        <FilterList />
      </form>
    );
  }
}
