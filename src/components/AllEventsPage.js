import React from 'react'
import EventList from './EventList'

const CalendarPage = ({events}) => {
  return (
    <div className='p-8 md:mx-4 lg:mx-32'>
      <h1 className='text-2xl py-4 text-gray-500'>EVENTS</h1>
      <EventList events={ events }/>
    </div>
  )
}

export default CalendarPage
