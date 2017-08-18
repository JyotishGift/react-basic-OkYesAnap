import React, { Component } from 'react';

class Search extends Component {

    render() {
        return (
            <div className="search-bar navbar">
                <input type="text" placeholder="Search" value={this.props.searchString}
                 onKeyUp={this.props.searchChange} />
            </div>
        )
    }
}

export default Search;