import React from 'react'
import Button from './Button'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const navigate = useNavigate()
  const [showSidebar, setShowSidebar] = useState(true);


  const handleCollapse = () => {
    setShowSidebar(false);
  }

  const handleOpen = () => {
    setShowSidebar(true);
  }

  const handleEntry = () => {
    navigate("/entry");
  };

  const handleTimeline = () => {
    navigate("/timeline");
  };

  const handleCoaches = () => {
    navigate("/coaches");
  };

  const handleChecklist = () => {
    navigate("/checklist");
  };

  return (
    <sidebar>
        <h1></h1>
        {showSidebar &&(
          <Button className = "collapseButton" text="<<" onClick={() => handleCollapse()} />
        )}
        {showSidebar && (
          <div className="side-button-group">
              <Button className = "sideButton" text="Write Entry" onClick={() => handleEntry()} />
              <Button className = "sideButton" text="Timeline" onClick={() => handleTimeline()} />
              <Button className = "sideButton" text="Coaches" onClick={() => handleCoaches()} />
              <Button className = "sideButton" text="Checklist" onClick={() => handleChecklist()} />
          </div>
        )}

        {!showSidebar && (
          <Button className = "openButton" text=">>" onClick={() => handleOpen()} />
        )}
    </sidebar>
  )
}

export default Sidebar