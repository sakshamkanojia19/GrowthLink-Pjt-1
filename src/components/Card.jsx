


import React from 'react';

const Card = ({ image, title, description, technologies, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className='m-4 block max-w-sm overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105'>
      <div className='relative'>
        <img className='w-full h-48 object-cover rounded-t-lg' src={image} alt={title} />
        <div className='p-4'>
          <h2 className='mb-2 text-xl font-bold'>{title}</h2>
          <p className='mb-2 text-sm text-white-700'>{description}</p>
          <div className='flex flex-wrap gap-2 mt-2'>
            {technologies.map((tech, index) => (
              <span key={index} className='px-2 py-1 text-xs font-medium bg-gray-600 rounded-full'>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
