import React, { useState } from "react";

const Entry = () => {
  const [entry, setEntry] = useState(""); // journal text input
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:3500/journal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJ1c2VybmFtZSI6InVzZXIzIn0sImlhdCI6MTc1OTY1MjgzMSwiZXhwIjoxNzU5NjUzNDMxfQ.uizoNOh2umIK99O4zP22OJ00ewf96jDYf2xcuxPn7ms`, // ✅ send token
        },
        body: JSON.stringify({ entry }), // ✅ send the journal entry in the body
      });

      if (!res.ok) {
        throw new Error("Failed to connect to server");
      }

      const data = await res.text();
      setResponse(data); // backend response, e.g. { success: "New entry saved!" }
      setEntry(""); // clear text box
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="entry">
      <h1>Write a Journal Entry</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts..."
          rows="6"
          cols="40"
          required
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Entry"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {response && (
        <p style={{ color: "green" }}>
          ✅ {response.success || "Entry saved successfully!"}
        </p>
      )}
    </div>
  );
};

export default Entry;