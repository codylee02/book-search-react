import React from 'react';

import './FilterList.css';

export default class FilterList extends React.Component {
    render() {
        return (
            <>
            <div className="pages_filter">
            {/*Is it a book? */}
            Print Type: 
            <select 
                id="print-type"
                name="print-type">
                <option value="All">All</option>
                <option value="BOOK">Book</option>
            </select>
            Book Type: 
            <select
                id="book-type"
                name="book-type">
                    <option value="none">No Filter</option>
                    <option value="is-ebook">E-Book</option>
                </select>
            </div>
            </>
        )
    }
}