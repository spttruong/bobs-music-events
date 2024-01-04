import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import AllEventsPage from './components/AllEventsPage'
import AboutUsPage from './components/AboutUsPage'
import ContactUsPage from './components/ContactUsPage'
import Footer from './components/Footer'

function App() {

  const [events, setEvents] = useState([]);
  useEffect(() => {
     fetch('https://bobs-events-mock-api.free.mockoapp.net/events')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
           setEvents(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  return (
    <Router>
      <div className='bg-indigo-100'>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage events={events} />} />
          <Route path="/events" element={<AllEventsPage events={events}/>} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
