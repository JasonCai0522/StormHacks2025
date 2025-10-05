import React from 'react'
import Button from './Button'
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()

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
        <div className="side-button-group">
            <Button className = "sideButton" text="Write Entry" onClick={() => handleEntry()} />
            <Button className = "sideButton" text="Timeline" onClick={() => handleTimeline()} />
            <Button className = "sideButton" text="Coaches" onClick={() => handleCoaches()} />
            <Button className = "sideButton" text="Checklist" onClick={() => handleChecklist()} />
        </div>
    </sidebar>
  )
}

export default Sidebar