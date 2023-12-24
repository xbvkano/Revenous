import React from 'react';


const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian, Pizza',
    rating: 4.5,
    reviewCount: 90
};

function Business() {
    return (
        <div className="Business">
            <img src={business.imageSrc}/>
            <h2>{business.name}</h2>
            <div className="Business-information">
                <p className="address">{business.address}</p>
                <p className="city">{business.city}</p>
                <p className="state">{business.state} {business.zipCode}</p>
                <p className="category">{business.category}</p>
                <p className="rating">{business.rating} stars</p>
                <p className="review-count">{business.reviewCount} reviews</p>
            </div>
        </div>
    );
}

export default Business;