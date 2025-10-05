// PopupModal.jsx
import React from 'react';
import './PopupModal.css';

const PopupModal = ({ show, onClose, imageSrc, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={imageSrc} alt="Coach" className="coach-image" />
        <div className="modal-body">
          {children}
        </div>
        <div className="text-container">
        <p>This is some text inside a scalable rectangular box. It resizes on smaller screens but caps at 500px width.</p>
        <p>This is some text inside a scalable rectangular box. It resizes on smaller screens but caps at 500px width.</p>
        <p>This is some text inside a scalable rectangular box. It resizes on smaller screens but caps at 500px width.</p>
        <p>This is some text inside a scalable rectangular box. It resizes on smaller screens but caps at 500px width.</p>
        <p>This is some text inside a scalable rectangular box. It resizes on smaller screens but caps at 500px width.</p>
        <p>This is some text inside a scalable rectangular box. It resizes on smaller screens but caps at 500px width.</p>
        <p>This is some text inside a scalable rectangular box. It resizes on smaller screens but caps at 500px width.</p>
        </div>
        <button className="modal-close" onClick={onClose}>✖</button>
      </div>
    </div>
  );
};

export default PopupModal;

