import React from 'react'

const ContactUsPage = () => {
  return (
    <div className='p-8 md:mx-16 lg:mx-32'>
        <h1 className='text-2xl py-4 text-gray-500'>CONTACT US</h1>
        <h2 className='text-3xl'>We hope to see you at one of our upcoming shows!</h2>

        <div className='space-y-4'>
          <div className='py-4 border-b-2'>
            <h3 className='text-2xl text-blue-900'>Bob's Orchestra Hall Box Office Hours:</h3>
            <p className='text-lg'>Monday - Saturday, 2:30 PM - 9:00 PM</p>
            <p className='italic'>Please note: shows typically start at 6:30 PM</p>
          </div>

          <div className='py-4 border-b-2'>
            <h3 className='text-2xl text-blue-900'>Bob's Ochestra Hall Box Office Phone:</h3>
            <div>
              <p className='text-yellow-700'>555-555-1234</p>
            </div>
          </div>

          <div className='py-4 border-b-2'>
            <h3 className='text-2xl text-blue-900'>Bob's Orchestra Hall Address:</h3>
            <div className='text-yellow-700'>
              <p>12345 Orchestra Ave</p>
              <p>Seattle, WA</p>
              <p>99999-1234</p>
            </div>
          </div>

        </div>
    </div>
  )
}

export default ContactUsPage
