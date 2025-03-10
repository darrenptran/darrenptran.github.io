import React from 'react';
import portfolioPhoto from '../images/pcserver.webp';
import webScraperImage from '../images/webscraper.webp';
import todoAppImage from '../images/todo.webp';
import dataAnalytics from '../images/data-analytics.jpg';

// Card component to display individual project details
const Card = ({ pictureUrl, title, subtitle, description, link }) => (
  <div className="profile-card">
    <img className="profile-picture" src={pictureUrl} alt={title} />
    <h3 className="profile-title">{title}</h3>
    <h4 className="profile-job-title">{subtitle}</h4>
    <p className="profile-description">{description}</p>
    {link && (
      <a href={link} target="_blank" rel="noopener noreferrer" className="profile-link">
        View Project
      </a>
    )}
  </div>
);

// Data to feed Card component
const PortfolioWithCards = () => {

  const projects = [
    {
      pictureUrl: dataAnalytics,
      title: "Data Analytics",
      subtitle: "Project",
      description: "Performed data analysis using JupyterNotebook.",
      link: "https://darrenptran.github.io/data-analytics/housing_data.pdf",
    },
    {
      pictureUrl: portfolioPhoto,
      title: "Local Web Server",
      subtitle: "Project",
      description: "Successfully deployed a local web server using an old computer.",
      link: "#",
    },
    {
      pictureUrl: webScraperImage,
      title: "Web Scraper",
      subtitle: "Project",
      description: "A Python-based web scraping tool for data extraction.",
      link: "https://github.com/darrenptran/webscraper",
    },
    {
      pictureUrl: todoAppImage,
      title: "Java ToDo App",
      subtitle: "Project",
      description: "A simple and efficient todo application built with Java.",
      link: "https://github.com/darrenptran/todo-java-app",
    },
  ];

  return (
    <div>
      <section className="portfolio-section padding-64 content container" id="portfolio">
        <h2 className="text-light-grey">Portfolio</h2>
        <hr style={{ width: '200px' }} className="opacity" />
        <div className="gallery">
          {projects.map((project, index) => (
            <Card
              key={index}
              pictureUrl={project.pictureUrl}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioWithCards;
