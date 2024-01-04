// EventCard.js
import React from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ event, date }) => {
  const { Title, Type, Image, Description } = event;

  // function to convert ISO 8601 time to specified time zone
  function convertIsoToTimeZone(isoDateTime, timeZone) {
    if (typeof isoDateTime !== 'string' || typeof timeZone !== 'string') {
      throw new Error('Invalid input. isoDateTime and timeZone must be strings.');
    }

    const date = new Date(isoDateTime);
    const optionsDate = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    const optionsTime = {
      hour: 'numeric',
      minute: 'numeric',
      timeZone,
    };

    const formattedDate = new Intl.DateTimeFormat(undefined, optionsDate).format(date);
    const formattedTime = new Intl.DateTimeFormat(undefined, optionsTime).format(date);

    return { formattedDate, formattedTime };
  }

  const { formattedDate, formattedTime } = convertIsoToTimeZone(date, 'America/Los_Angeles');

  // Calculate font size relative to the image width
  const imageSize = 100; // Set the base image size
  const fontSizePercentage = 15; // Set the percentage of the image size for font size
  const fontSize = (imageSize * fontSizePercentage) / 100;

  return (
    <div className='w-full flex-auto my-2'>
      
      <div className="relative">
        <p className="absolute top-0 left-0 bg-gray-600 bg-opacity-50 p-2 text-white" style={{ fontSize: `${fontSize}px`}}>
          {formattedDate}
        </p>
        <p className="absolute bottom-0 right-0 bg-gray-600 bg-opacity-50 p-2 text-white" style={{ fontSize: `${fontSize}px`}}>
          Event Time: {formattedTime}
        </p>
        <img src={Image} alt={Title} className="w-full" />
      </div>

      <div className='bg-gray-50'> 
        <div className='p-3'>
          <h2 className='font-bold text-xl'>{Title}</h2>
          <p className='bg-black text-gray-200 rounded-full px-2 inline-block'>{Type}</p>
          <p className='text-left'>{Description}</p>
        </div>
      </div>

    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

export default EventCard;
