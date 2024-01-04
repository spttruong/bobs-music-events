import React from 'react'
import EventCard from './EventCard'

const EventList = ({ events }) => {
  
  return (
      <div className='grid grid-cols-3 gap-4 justify-between'>
        {events.map((event) => (
          event.Dates.map((date, index) => (
            <EventCard key={index} event={event} date={date}/>
          ))
        ))}
      </div>
    );
  };

export default EventList
