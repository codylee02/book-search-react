import React from "react";

import "./FilterList.css";

export default class FilterList extends React.Component {
  render() {
    return (
      <>
        <div className="pages_filter">
          {/*Is it a book? */}
          Print Type:
          <select
            id="print-type"
            name="print-type"
            onChange={e => this.props.updatePrintType(e.target.value)}
          >
            <option value="all">All</option>
            <option value="book">Book</option>
          </select>
          Book Type:
          <select
            id="book-type"
            name="book-type"
            onChange={e => this.props.updateBookType(e.target.value)}
          >
            <option value="none">No Filter</option>
            <option value="ebook">E-Book</option>
          </select>
        </div>
      </>
    );
  }
}
