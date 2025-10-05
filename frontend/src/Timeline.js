import React, { useState, useEffect } from "react";
import Button from './Button';


const Timeline = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEntries = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:3500/journal", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJ1c2VybmFtZSI6InVzZXIzIn0sImlhdCI6MTc1OTY1MjgzMSwiZXhwIjoxNzU5NjUzNDMxfQ.uizoNOh2umIK99O4zP22OJ00ewf96jDYf2xcuxPn7ms`, // ✅ send token
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

    <ul>
    {entries.length > 0 ? (
        entries.map((entryObj, index) => (
        <li key={entryObj._id || index}>
            <strong>{new Date(entryObj.date).toLocaleString()}</strong>
            <p>{entryObj.entry}</p>
        </li>
        ))
        ) : (
          <p>No entries yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Timeline;
