// HeroBanner.js
import React from 'react';
import EventCard from './EventCard';

const HeroBanner = ({ events }) => {

    // Check if events is defined and has length property
  if (!events || events.length === 0) {
    return (
      <div className="hero-banner flex items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">No events available</h1>
      </div>
    );
  }

  // Get the newest added event - indicated by highest index
  const newestEvent = events[events.length - 1];

  // Check if Dates is an array and has elements
  if (!newestEvent.Dates || newestEvent.Dates.length === 0) {
    return (
      <div className="hero-banner flex items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">New events are on the way!</h1>
      </div>
    );
  }

  // Get the first date
  const firstDate = newestEvent.Dates[0];

  return (
    <div className="flex items-center justify-center">
      {newestEvent && <EventCard event={newestEvent} date={firstDate} />}
    </div>
  );
};

export default HeroBanner;
