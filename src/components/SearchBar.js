import React from 'react';


function SearchBar() {
    return (
        <div>
            <div className="bg-MainYellow font-bold text-white text-3xl">
                ravenous
            </div>
            <div className="SearchBar  h-80 bg-cover bg-search-bar">
                <div className="flex items-center justify-center">
                    <div className="SearchBar-sort-options grid grid-cols-3 gap-x-4 pt-20 w-100">
                        <button className="bg-MainYellow h-10">Best Match</button>
                        <button className="bg-MainYellow">Highest Rated</button>
                        <button className="bg-MainYellow">Most Reviewed</button>
                    </div>
                </div>
              
                <div className="flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-10 mt-10 w-2/5 h-10">
                        <input type="text" placeholder="Search Businesses" />
                        <input type="text" placeholder="Where" />
                    </div>
                </div>

                <div className='flex-col mt-10'>
                            <button className="bg-MainYellow h-8 w-40">Let's Go</button>
                </div>
            </div>
        </div>
    );
}


export default SearchBar;