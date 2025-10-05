import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-text">
        <h1>Find the Voice You Need. Not the One You Want.</h1>
        <h2>Multiple AI Perspectives for Your Journal.</h2>
        <p className="tagline">Write journals, get vision</p>
      </div>

      <div className="image-placeholder">
        {/* Simulated app preview */}
        <img src="/mockup.png" alt="Hero" />
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