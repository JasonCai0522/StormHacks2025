import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-text">
        <h1>Find the Voice You Need. Not the One You Want.</h1>
        <h2>Multiple AI Perspectives for Your Journal.</h2>
        <p className="tagline">Start Writing, Find Your Vision</p>
      </div>

      <div className="image-placeholder">
        {/* Simulated app preview */}
        <img src="/mockup.png" alt="Hero" />
      </div>

      <div className="hero-text">
        <h1> See Everything Differently, In 3 Simple steps </h1>
        <h2> 1. Put your thoughts on the page </h2>
        <p> Unload your day, challenges, ideas into your private journal. No filters, no judgement, integrates seamlessly into an existing journaling practise. </p>
        <h2> 2. Choose your Coach</h2>
        <p> Match your mood or challenge. Need a push? Need a plan? Choose the voice that fits.</p>
        <h2> 3. Get Vision & Take Action</h2>
        <p> Receive insightful feedback tailored to your chosen perspective. Uncover blindspots and find your path forward.</p>
        <p className="tagline">Write journals, get vision</p>
      </div>
    </div>
  );
};

export default Home;






/*import React from 'react';
import VideoRibbon from './VideoRibbon';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <VideoRibbon />

      <div className="text-section">
        <h1>Welcome to the Future of Productivity</h1>
        <p>This is placeholder text. You can customize this section with your value proposition, CTA, or anything else you'd like.</p>
      </div>
    </div>
  );
};

export default Home;
*/