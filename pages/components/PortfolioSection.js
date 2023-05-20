import React from 'react';
import portfolioCardData from '../../data/portfolioCardData';
import PortfolioECard from './PortfolioCard';


export default function PortfolioSection ({ projects }) {

  return (
    <>
      {projects.map((project) => (<PortfolioECard key={project.id} {...project} />
      ))}
    </>



  );
} 