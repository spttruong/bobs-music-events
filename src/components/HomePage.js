import React from 'react';
import HeroBanner from './HeroBanner';
import FeaturedEvents from './FeaturedEvents';

const HomePage = ({ events }) => {
  return (
    <div className='p-8 md:mx-16 lg:mx-32'>
      
      <h1 className='text-2xl py-4 text-gray-500'>JUST ANNOUNCED</h1>
      <div className='mb-16'>
        <HeroBanner events={events}/>
      </div>
      
      <div className="container mx-auto">
        <FeaturedEvents events={events} />
      </div>
    </div>
  );
};

export default HomePage;