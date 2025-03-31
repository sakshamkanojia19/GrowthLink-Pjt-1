

import React from 'react';
import { PROJECTS } from '../constants';
import Card from './Card';

const Projects = () => {
  return (
    <div id="projects">
      <h2 className='mt-20 text-center text-4xl font-semibold'>Projects</h2>
      <div className='flex flex-wrap justify-center py-8'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='w-full sm:w-1/2 md:w-1/3 p-4'>
            <Card 
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
            <div className='text-center mt-2'>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className=' text-white px-4 py-2 rounded-md hover:bg-purple-600 transition'>
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

