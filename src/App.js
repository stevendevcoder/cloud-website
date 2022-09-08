import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Contact from './components/Contact';
import Prices from './components/Prices';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics/>
      <Contact />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
