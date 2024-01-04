import React from 'react';
import EventCard from './EventCard'

const FeaturedEvents = ({ events }) => {
  const childOfHeroBannerComponent = true;
  
  // Sort events by date in ascending order
  const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Take the two nearest upcoming events
  const upcomingEvents = sortedEvents.slice(0, 2);

  return (
    <div>
      <h2 className='text-2xl'>FEATURED EVENTS</h2>
      <div className='flex space-x-4'>
        {upcomingEvents.map((event, index) => (
          event.Dates.map((date, index) => (
            <EventCard key={index} event={event} date={date} isHeroBanner={childOfHeroBannerComponent}/>
          ))
        ))}
      </div>
    </div>
  );
};

export default FeaturedEvents;