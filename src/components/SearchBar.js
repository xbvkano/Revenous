import React from 'react';


function SearchBar() {
    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    <li>Best Match</li>
                    <li>Highest Rated</li>
                    <li>Most Reviewed</li>
                </ul>
            </div>
            <input type="text" placeholder="Search Businesses" />
            <input type="text" placeholder="Where" />
            <input type="submit" value="Let's Go" />
        </div>
    );
}


export default SearchBar;