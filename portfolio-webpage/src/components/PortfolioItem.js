import React from 'react';

const PortfolioItem = ({ title, description, link }) => {
    return (
        <div className="portfolio-item">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default PortfolioItem;