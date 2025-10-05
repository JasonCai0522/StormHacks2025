import React, { useState } from 'react';
import Button from './Button';
import fetchWithAuth from './FetchWithAuth';
import { getFakerPrompt, getDavidPrompt, getMichellePrompt, getOogwayPrompt } from './prompts';
import PopupModal from './PopupModal';

const Coaches = () => {
  const [popupData, setPopupData] = useState(null);
  const [entries, setEntries] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geminiReply, setGeminiReply] = useState("");

  const fetchEntries = async (coach) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetchWithAuth("https://stormhacks2025-t9xb.onrender.com/journal", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (!res.ok) throw new Error("Failed to connect to server");

      const data = await res.json();
      const entriesArray = Array.isArray(data) ? data : [data];
      setEntries(entriesArray);

      // Generate prompt based on coach
      let currentPrompt = "";
      if (coach === "faker") currentPrompt = getFakerPrompt(entriesArray).systemInstruction;
      if (coach === "david") currentPrompt = getDavidPrompt(entriesArray).systemInstruction;
      if (coach === "michelle") currentPrompt = getMichellePrompt(entriesArray).systemInstruction;
      if (coach === "oogway") currentPrompt = getOogwayPrompt(entriesArray).systemInstruction;

      setPrompt(currentPrompt);

      if (!currentPrompt) throw new Error("No prompt generated");

      // Send prompt to Gemini API
      const geminiRes = await fetchWithAuth("https://stormhacks2025-t9xb.onrender.com/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ prompt: currentPrompt }),
      });

      if (!geminiRes.ok) throw new Error("Failed to connect to Gemini");

      const geminiData = await geminiRes.json();

      setGeminiReply(geminiData.reply);
      return geminiData.reply;  // Return the reply string

    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  // Handlers now async to wait for fetchEntries result
  const handleCoach1 = async () => {
    const reply = await fetchEntries("david");
    if (reply) {
      setPopupData({
        title: "David Goggins",
        prompt: reply,
        image: "/goggins.png",
      });
    }
  };

  const handleCoach2 = async () => {
    const reply = await fetchEntries("oogway");
    if (reply) {
      setPopupData({
        title: "Master Oogway",
        prompt: reply,
        image: "/oogway.png",
      });
    }
  };

  const handleCoach3 = async () => {
    const reply = await fetchEntries("michelle");
    if (reply) {
      setPopupData({
        title: "Michelle Obama",
        prompt: reply,
        image: "/michelle.png",
      });
    }
  };

  const handleCoach4 = async () => {
    const reply = await fetchEntries("faker");
    if (reply) {
      setPopupData({
        title: "Faker",
        prompt: reply,
        image: "/faker.png",
      });
    }
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <div className="coaches-container">
      <h1>Coaches</h1>

      <div className="coaches">
        <Button className="coachButton" text="David Goggins" onClick={handleCoach1} />
        <Button className="coachButton" text="Master Oogway" onClick={handleCoach2} />
        <Button className="coachButton" text="Michelle Obama" onClick={handleCoach3} />
        <Button className="coachButton" text="Faker" onClick={handleCoach4} />
      </div>

      {popupData && (
        <PopupModal show={true} onClose={closePopup} imageSrc={popupData.image}>
          <h2>{popupData.title}</h2>
          <p>{popupData.prompt}</p>
        </PopupModal>
      )}

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Coaches;
