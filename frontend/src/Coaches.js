import React, { useState } from 'react';
import Button from './Button';
import PopupModal from './PopupModal'; // Make sure this exists

const Coaches = () => {
  const [popupData, setPopupData] = useState(null);

  const handleCoach1 = () => {
    setPopupData({
      title: "David Goggins",
      //description: "No excuses. Stay hard. Goggins pushes you through the mental wall.",
      image: "/goggins.png",
    });
  };

  const handleCoach2 = () => {
    setPopupData({
      title: "Master Oogway",
      //description: "Inner peace. Oogway offers timeless wisdom for personal growth.",
      image: "/oogway.png",
    });
  };

  const handleCoach3 = () => {
    setPopupData({
      title: "Michelle Obama",
      //description: "Strong, reflective, and empowering. Michelle brings clarity and purpose.",
      image: "/michelle.png",
    });
  };

  const handleCoach4 = () => {
    setPopupData({
      title: "Faker",
      //description: "Discipline and precision. Faker helps you optimize your mindset like a pro.",
      image: "/faker.png",
    });
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div className="coaches-container">
      <h1>Coaches</h1>

      <div className="coaches">
        <Button className="coachButton" text="David Goggins" onClick={handleCoach1}/>
        <Button className="coachButton" text="Master Oogway" onClick={handleCoach2} />
        <Button className="coachButton" text="Michelle Obama" onClick={handleCoach3} />
        <Button className="coachButton" text="Faker" onClick={handleCoach4}/>
      </div>

      {popupData && (
        <PopupModal show={true} onClose={closePopup} imageSrc={popupData.image}>
          <h2>{popupData.title}</h2>
          <p>{popupData.description}</p>
        </PopupModal>
      )}
    </div>
  );
};

export default Coaches;