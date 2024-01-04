import React from 'react';

const AboutUsPage = () => {
  const imageLinks = [
    'https://picsum.photos/id/80/200/300',
    'https://picsum.photos/id/81/200/300',
    'https://picsum.photos/id/82/200/300',
    'https://picsum.photos/id/83/200/300',
    'https://picsum.photos/id/84/500/300',
    'https://picsum.photos/id/85/500/300',
  ];

  const topRowImages = imageLinks.slice(0, 4);
  const bottomRowImages = imageLinks.slice(4, 6);
  
  return (
    <div className='p-8 md:mx-16 lg:mx-32'>
        <h1 className='text-2xl py-4 text-gray-500'>ABOUT US</h1>
        
        <div className='space-y-4 mb-4'>
          <div className='space-y-2'>
            <h2 className='text-3xl text-blue-900'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Sodales ut eu sem integer vitae justo eget magna. Volutpat blandit aliquam etiam erat velit. Sit amet nisl purus in. Mi proin sed libero enim sed faucibus turpis in. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Vitae suscipit tellus mauris a diam maecenas sed enim ut.</p>
          </div>
        
          <div className='space-y-2'>
            <h3 className='text-2xl text-blue-900'>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Sodales ut eu sem integer vitae justo eget magna. Volutpat blandit aliquam etiam erat velit. Sit amet nisl purus in.</p>
            <ul className='p-6'>
              <li>1. World-class musical artists</li>
              <li>2. Music that will tickle the senses</li>
              <li>3. Delightful ambiance</li>
              <li>4. Professional and lively performers</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center mb-8">
          {/* Top Row */}
          <div className="flex space-x-4">
            {topRowImages.map((image, index) => (
              <img key={index} src={image} alt={`Top Row Pic ${index + 1}`} className="w-1/4" />
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex space-x-4 mt-4">
            {bottomRowImages.map((image, index) => (
              <img key={index} src={image} alt={`Bottom Row Pic ${index + 5}`} className="w-1/2" />
            ))}
          </div>
        </div>

    </div>
  )
};

export default AboutUsPage;