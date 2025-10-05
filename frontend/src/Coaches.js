import Button from './Button'
import fetchWithAuth from './FetchWithAuth';
import EntryStorage from "./EntryStorage";
import { getFakerPrompt } from './prompts';
import { getDavidPrompt } from './prompts';
import { getMichellePrompt } from './prompts';
import { getOogwayPrompt } from './prompts';
import React, { useState, useEffect } from "react";
import Timeline from './Timeline';

import React, { useState } from 'react';
import Button from './Button';
import PopupModal from './PopupModal'; // Make sure this exists

const Coaches = () => {

  const fetchEntries = async (coach) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetchWithAuth("https://stormhacks2025-t9xb.onrender.com/journal", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
        },
      });

      if (!res.ok) {
        throw new Error("Failed to connect to server");
      }

      const data = await res.json();
      const entriesArray = Array.isArray(data) ? data : [data];
      setEntries(entriesArray);

      // Generate prompt including today's entries

      if (coach === "faker") {
        const fakerPrompt = getFakerPrompt(entriesArray);
        console.log(fakerPrompt)
        setPrompt(fakerPrompt.systemInstruction);
      }

      if (coach === "david") {
        const davidPrompt = getDavidPrompt(entriesArray);
        console.log(davidPrompt)
        setPrompt(davidPrompt.systemInstruction);
      }

      if (coach === "michelle") {
        const michellePrompt = getMichellePrompt(entriesArray);
        console.log(michellePrompt)
        setPrompt(michellePrompt.systemInstruction);
      }

      if (coach === "oogway") {
        const oogwayPrompt = getOogwayPrompt(entriesArray);
        console.log(oogwayPrompt)
        setPrompt(oogwayPrompt.systemInstruction);
      }


    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const [entries, setEntries] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geminiReply, setGeminiReply] = useState("");

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
     fetchEntries("faker");
  }

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