import React, { useState, useEffect } from "react";
import Button from './Button';
import fetchWithAuth from './FetchWithAuth';
import EntryStorage from "./EntryStorage";
import { getFakerPrompt } from './prompts';


const Timeline = () => {
  const [entries, setEntries] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [geminiReply, setGeminiReply] = useState("");


  const fetchEntries = async () => {
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
      const fakerPrompt = getFakerPrompt(entriesArray);
      console.log(fakerPrompt)
      setPrompt(fakerPrompt.systemInstruction);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

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
    <div className="timeline">
      {loading && <p>Loading...</p>}

      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : entries.length > 0 ? (
        <EntryStorage entries={entries} />
      ) : (
        <p>Write your first journal entry!</p>
      )}

      <p>{geminiReply}</p>
    </div>
  );
};

export default Timeline;
