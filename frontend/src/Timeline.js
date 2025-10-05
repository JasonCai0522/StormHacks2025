import React, { useState, useEffect } from "react";
import Button from './Button';
import fetchWithAuth from './FetchWithAuth';
import EntryStorage from "./EntryStorage";


const Timeline = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setEntries(Array.isArray(data) ? data : [data]);
      console.log(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

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
    </div>
  );
};

export default Timeline;
