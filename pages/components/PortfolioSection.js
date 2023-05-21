import React from 'react';

import PortfolioCard from './PortfolioCard';


export default function PortfolioSection ({ projects }) {
  if (!projects || !Array.isArray(projects)) {
    return null; 
  }

  return (
    <>
      {projects.map((project) => (<PortfolioCard key={project.id} {...project} />
      ))}
    </>



  );
} 