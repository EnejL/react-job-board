import React from 'react';
import linkIcon from '../images/external-link.png';

function JobListing(props) {
    return (
        <ul className="JobListing">
            <a href={props.jobLink} className="JobLink" target="_blank">
                <h4 className="JobTitle">
                    {props.jobTitle}
                </h4>
                <div className="JobInformation">
                    <p className="CompanyName">
                        {props.companyName}
                    </p>
                    <p className="JobLocation">
                        {props.jobLocation}
                    </p>
                    <img src={linkIcon} className="LinkIcon" />
                </div>
                <span className="DatePosted">
                    {props.datePosted}
                </span>
            </a>
        </ul>
    );
}

export default JobListing;
