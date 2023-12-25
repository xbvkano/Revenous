import React from 'react';


const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'ITALIAN',
    rating: 4.5,
    reviewCount: 90
};



function Business() {
    return (
        <div className="Business border-2 h-100 w-80">  
            <img src={business.imageSrc} className="h-80 w-80"/>
            <h2 className="text-start font-bold text-xl">{business.name}</h2>
            <div className="Business-information flex mt-1">
                <div className="text-start basis-2/3">
                    <p className="address">{business.address}</p>
                    <p className="city">{business.city}</p>
                    <p className="state">{business.state} {business.zipCode}</p>
                </div>
                <div className="text-end basis-1/3">
                    <p className="category text-2xl text-MainYellow font-bold">{business.category}</p>
                    <p className="rating text-MainYellow font-bold">{business.rating} stars</p>
                    <p className="review-count">{business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;