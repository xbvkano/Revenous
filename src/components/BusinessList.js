import React from 'react';
import Business from './Business';

function BusinessList() {
    return (
        <div className="BusinessList">
            <div className="flex items-center justify-center mt-28">
                <div className="grid grid-cols-3 gap-x-20 gap-y-10 mx-auto">
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                    <Business />
                </div>
            </div>
        </div>
    );
}

export default BusinessList;
