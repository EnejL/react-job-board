import React from 'react';
import logo from "../logo.svg";

function JobListing() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listItems = numbers.map((number) =>
        <li className="JobListing">This is a job listing</li>
    );

    return (
        <ul className="JobListings">{listItems}</ul>
    );
}

export default JobListing;
