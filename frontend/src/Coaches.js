import Button from './Button'
import fetchWithAuth from './FetchWithAuth';
import EntryStorage from "./EntryStorage";
import { getFakerPrompt } from './prompts';
import React, { useState, useEffect } from "react";


const Coaches = () => {

  const [entries, setEntries] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geminiReply, setGeminiReply] = useState("");

  const handleCoach1 = () => {
  }

  const handleCoach2 = () => {
  }

  const handleCoach3 = () => {
  }

  const handleCoach4 = () => {
  }

  const fetchPrompt = async () => {
  console.log("test1")
  console.log(prompt)
  if (!prompt) return;

  setLoading(true);
  setError(null);

  try {
    const res = await fetchWithAuth("https://stormhacks2025-t9xb.onrender.com/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ prompt }), // send prompt in request body
    });
    console.log({prompt});


    console.log(res)

    if (!res.ok) {
      throw new Error("Failed to connect to server");
    }

    const data = await res.json();
    console.log("Gemini response:", data.reply);
    setGeminiReply(data.reply)
    
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    if (prompt) {
      fetchPrompt();
    }
  }, [prompt]);

  return (
    <coaches>
        <h1>Coaches</h1>
        <div className ="coaches">
              <Button className = "coachButton" text="David Goggins" onClick={() => handleCoach1()} />
              <Button className = "coachButton" text="Master Oogway" onClick={() => handleCoach2()} />
              <Button className = "coachButton" text="Michelle Obama" onClick={() => handleCoach3()} />
              <Button className = "coachButton" text="Faker" onClick={() => handleCoach4()} />
        </div>
    </coaches>
  )
}

export default Coaches