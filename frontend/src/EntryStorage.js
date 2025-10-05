import React, { useState } from "react";

function JournalEntries({ entries }) {
  // Group by date
  const groupedEntries = entries.reduce((acc, entry) => {
    const dateKey = new Date(entry.date).toLocaleDateString();
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(entry);
    return acc;
  }, {});

  const dateKeys = Object.keys(groupedEntries).sort(
    (a, b) => new Date(b) - new Date(a)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDate = dateKeys[currentIndex];
  const currentEntries = groupedEntries[currentDate] || [];

  return (
    <div>
      <div className="journal-navigation">
        <button
          onClick={() =>
            setCurrentIndex((i) => Math.min(i + 1, dateKeys.length - 1))
          }
          disabled={currentIndex === dateKeys.length - 1}
        >
          ←
        </button>

        <h2>{currentDate}</h2>

        <button
          onClick={() => 
            setCurrentIndex((i) => Math.max(i - 1, 0))
          }
          disabled={currentIndex === 0}
        >
          →
        </button>
      </div>

      <ul>
        {currentEntries.length > 0 ? (
          currentEntries.map((entryObj, index) => (
            <li key={entryObj._id || index}>
              <h3 style = {{
                "font-size": "1.1em"
              }}>
                {new Date(entryObj.date).toLocaleString(undefined, {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </h3>
              <p style = {{
                "padding-bottom":"1rem"
              }}>{entryObj.entry}</p>
            </li>
          ))
        ) : (
          <p>Write your first journal entry!</p>
        )}
      </ul>
    </div>
  );
}

export default JournalEntries;
