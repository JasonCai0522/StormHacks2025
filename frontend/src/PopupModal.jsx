// PopupModal.jsx
import React from 'react';
import './PopupModal.css';

const PopupModal = ({ show, onClose, imageSrc, prompt, children }) => {
  if (!show) return null;
  console.log({prompt});
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={imageSrc} alt="Coach" className="coach-image" />
        <div className="modal-body">
          {children}
        </div>
        <div className="text-container">

        {prompt}
        </div>
        <button className="modal-close" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default PopupModal;

