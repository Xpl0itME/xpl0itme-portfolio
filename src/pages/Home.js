import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import './Home.css';

const Home = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'A brief description of Project One.',
            link: 'https://github.com/user/project-one'
        },
        {
            title: 'Project Two',
            description: 'A brief description of Project Two.',
            link: 'https://github.com/user/project-two'
        },
        {
            title: 'Project Three',
            description: 'A brief description of Project Three.',
            link: 'https://github.com/user/project-three'
        }
    ];

    return (
        <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm a passionate developer with a love for coding and technology.</p>
            <h2>Featured Projects</h2>
            <div className="portfolio-items">
                {projects.map((project, index) => (
                    <PortfolioItem 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;